"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import VillagerCounts from "@/components/VillagerCounts";
import Rating from "@/components/Rating";
import Button from "@/components/Button";
import CivIcon from "@/components/CivIcon";
import AttributeBadges from "@/components/AttributeBadges";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import DifficultyBadge from "@/components/DifficultyBadge";
import DatabaseService from "@/lib/database";
import { Build } from "@/types/build";
import Image from "next/image";
import BuildView from "@/components/BuildView";
import AuthPromptModal from "@/components/AuthPromptModal";
import ErrorModal from "@/components/ErrorModal";
import ExportButton from "@/components/ExportButton";
import RatingModal from "@/components/RatingModal";
import FavoriteButton from "@/components/FavoriteButton";

// Loading Component
const LoadingView = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="text-center py-12">
          <LoadingSpinner label="Loading build..." />
        </div>
      </div>
    </main>
  </div>
);

// Error Component
const ErrorView = ({ error }: { error: string | null }) => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <EmptyState text={error || "The requested build could not be found."} />
      </div>
    </main>
  </div>
);

// Header Component
const BuildHeader = ({
  build,
  userRating,
  onOpenRating,
  onStartFocus,
  isFavorited,
  onToggleFavorite,
}: {
  build: Build;
  userRating: number;
  onOpenRating: () => void;
  onStartFocus?: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}) => {
  const placeholderImage = "/images/Other/BuildImagePlaceholder.png";
  const canUseFocusMode = Array.isArray(build.build) && build.build.length > 0;
  const ratingButtonLabel =
    userRating > 0 ? `Update rating (${userRating}/5)` : "Rate this build";

  return (
    <div className="text-center mb-6">
      {/* Civ */}
      <div className="flex items-center justify-center mb-2">
        <CivIcon civilization={build.civilization} showName={true} />
      </div>

      {/* Title */}
      <Header text={build.title} />

      {/* Author and source */}
      <p className="text-sm text-foreground -mt-4 mb-4">
        {build.source ? (
          <a
            href={build.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            {build.author || "??"}
          </a>
        ) : (
          build.author || "??"
        )}
      </p>

      {/* Build image */}
      <Image
        src={build.imageURL || placeholderImage}
        alt={build.title}
        width={150}
        height={112}
        className="mb-4 mx-auto object-cover"
        onError={(e) => {
          e.currentTarget.src = placeholderImage;
        }}
      />

      {/* Description */}
      {build.description && (
        <div className="max-w-2xl mx-auto mb-4 px-4">
          <p className="text-sm leading-relaxed text-pretty">
            {build.description}
          </p>
        </div>
      )}

      {/* Difficulty, Attributes, and Villager counts */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
        {build.difficulty && <DifficultyBadge difficulty={build.difficulty} />}
        {build.attributes && build.attributes.length > 0 && (
          <AttributeBadges attributes={build.attributes} />
        )}
        <div className="[&>div]:mb-0">
          <VillagerCounts build={build} />
        </div>
      </div>

      {/* Rating summary with Favorite Button */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <Rating rating={build.avg_rating} size="medium" />
        <FavoriteButton isFavorited={isFavorited} onToggle={onToggleFavorite} />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <div className="flex-1 min-w-[180px] sm:flex-none">
          <Button onClick={onOpenRating} fullWidth>
            {ratingButtonLabel}
          </Button>
        </div>

        <div className="flex-1 min-w-[180px] sm:flex-none">
          <ExportButton build={build} fullWidth />
        </div>

        <div className="flex-1 min-w-[180px] sm:flex-none">
          <Button
            onClick={onStartFocus}
            disabled={!onStartFocus || !canUseFocusMode}
            variant="secondary"
            fullWidth
          >
            Start Focus Mode
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function BuildDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { currentUser } = useAuth();
  const [build, setBuild] = useState<Build | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userRating, setUserRating] = useState<number>(0);
  const [submittingRating, setSubmittingRating] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [isAuthPromptOpen, setIsAuthPromptOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [errorModal, setErrorModal] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: "",
  });

  const handleOpenRatingModal = () => {
    if (!currentUser) {
      setIsAuthPromptOpen(true);
      return;
    }

    setIsRatingModalOpen(true);
  };

  useEffect(() => {
    if (params.id) {
      loadBuild(params.id as string);
    }
  }, [params.id]);

  // Load user's existing rating when user or build changes
  useEffect(() => {
    if (currentUser && build?.id) {
      loadUserRating(build.id, currentUser.uid);
    } else {
      setUserRating(0);
    }
  }, [currentUser, build?.id]);

  // Load user's favorites when user changes
  const loadUserFavorites = useCallback(async () => {
    if (!currentUser) return;
    try {
      const userProfile = await DatabaseService.loadProfileInfo({
        uid: currentUser.uid,
      });
      if (userProfile.favorites) {
        setFavorites(userProfile.favorites);
      } else {
        setFavorites([]);
      }
    } catch (error) {
      // User profile doesn't exist yet - this is normal for new users
      setFavorites([]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      loadUserFavorites();
    } else {
      setFavorites([]);
    }
  }, [currentUser, loadUserFavorites]);

  const loadBuild = async (buildId: string) => {
    try {
      setLoading(true);
      setError(null);
      const buildData = await DatabaseService.loadPublishedBuildWithId(buildId);
      setBuild(buildData);
    } catch {
      setError("Failed to load build");
    } finally {
      setLoading(false);
    }
  };

  const loadUserRating = async (buildId: string, userId: string) => {
    try {
      const rating = await DatabaseService.loadUserRatingForBuild(
        buildId,
        userId
      );
      setUserRating(rating.rating);
    } catch {
      // User hasn't rated this build yet, which is fine
      setUserRating(0);
    }
  };

  const handleRating = async (rating: number) => {
    if (!currentUser) {
      setIsRatingModalOpen(false);
      setIsAuthPromptOpen(true);
      return;
    }

    if (!build) return;

    try {
      setSubmittingRating(true);
      await DatabaseService.rateBuildWithIdForUser(
        build.id,
        { uid: currentUser.uid },
        rating
      );
      setUserRating(rating);

      // Reload build to get updated average rating
      await loadBuild(build.id);
    } catch (error) {
      setErrorModal({ isOpen: true, message: "Failed to submit rating. Please try again." });
    } finally {
      setSubmittingRating(false);
    }
  };

  const handleStartFocus = useCallback(() => {
    if (!build?.id) return;
    router.push(`/builds/${build.id}/focus`);
  }, [build?.id, router]);

  const handleToggleFavorite = async () => {
    if (!currentUser) {
      setIsAuthPromptOpen(true);
      return;
    }

    if (!build) return;

    try {
      const isFavorited = favorites.includes(build.id);

      if (isFavorited) {
        // Remove from favorites
        setFavorites(favorites.filter((id) => id !== build.id));
        await DatabaseService.removeFavBuildWithIdForUser(build.id, {
          uid: currentUser.uid,
        });
      } else {
        // Add to favorites
        setFavorites([...favorites, build.id]);
        await DatabaseService.favBuildWithIdForUser(build.id, {
          uid: currentUser.uid,
        });
      }
    } catch (error) {
      // Show user-friendly error message
      setErrorModal({ isOpen: true, message: "Failed to update favorites. Please try again." });
      // Revert the local state change on error
      await loadUserFavorites();
    }
  };

  if (loading) {
    return <LoadingView />;
  }

  if (error || !build) {
    return <ErrorView error={error} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <BuildHeader
            build={build}
            userRating={userRating}
            onOpenRating={handleOpenRatingModal}
            onStartFocus={handleStartFocus}
            isFavorited={favorites.includes(build.id)}
            onToggleFavorite={handleToggleFavorite}
          />

          <BuildView build={build} />
        </div>
      </main>

      {isRatingModalOpen && (
        <RatingModal
          isOpen={isRatingModalOpen}
          onClose={() => setIsRatingModalOpen(false)}
          userRating={userRating}
          onRate={handleRating}
          submitting={submittingRating}
        />
      )}

      {isAuthPromptOpen && (
        <AuthPromptModal
          isOpen={isAuthPromptOpen}
          onClose={() => setIsAuthPromptOpen(false)}
          onLogin={() => router.push("/login")}
          onRegister={() => router.push("/register")}
        />
      )}

      <ErrorModal
        isOpen={errorModal.isOpen}
        message={errorModal.message}
        onClose={() => setErrorModal({ isOpen: false, message: "" })}
      />
    </div>
  );
}
