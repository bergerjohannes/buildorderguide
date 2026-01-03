"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import CivIcon from "@/components/CivIcon";
import VillagerCounts from "@/components/VillagerCounts";
import { useAuth } from "@/contexts/AuthContext";
import DatabaseService from "@/lib/database";
import { Build } from "@/types/build";
import { getBuildStatusLabel, normalizeBuildStatus } from "@/lib/buildStatus";
import { OFFICIAL_PUBLISHER_ID } from "@/lib/constants";

export default function BuilderPage() {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [builds, setBuilds] = useState<Build[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [adminViewMode, setAdminViewMode] = useState<"mine" | "all">("all");

  const loadBuilds = useCallback(async () => {
    if (!currentUser?.uid) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      let userIdToLoad: string | undefined = currentUser.uid;

      // If admin, check view mode
      if (currentUser.uid === OFFICIAL_PUBLISHER_ID) {
        if (adminViewMode === "all") {
          userIdToLoad = undefined; // Load all builds
        } else {
          userIdToLoad = currentUser.uid; // Load only my builds
        }
      }

      const userBuilds = await DatabaseService.loadBuilds(userIdToLoad);
      setBuilds(userBuilds);
    } catch (err) {
      console.error("Failed to load builds", err);
      setError("Failed to load builds. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [currentUser?.uid, adminViewMode]);

  useEffect(() => {
    if (currentUser?.uid) {
      loadBuilds();
    }
  }, [currentUser?.uid, loadBuilds]);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Header
              text="Builder Access Required"
              subtitle="Please log in to access your builds."
            />
          </div>
        </main>
      </div>
    );
  }

  const handleCreateBuild = async () => {
    if (!currentUser) return;

    try {
      setIsCreating(true);
      const buildId = await DatabaseService.addNewBuildForPublisher(
        currentUser.uid
      );
      const newBuild: Build = {
        id: buildId,
        title: "New Build",
        civilization: "Generic",
        publisher: currentUser.uid,
        status: "draft",
        build: [],
      };
      setBuilds((prev) => [newBuild, ...prev]);
      router.push(`/builder/${buildId}`);
    } catch (err) {
      console.error("Failed to create build", err);
      setError("Failed to create build. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleSelectBuild = (buildId: string) => {
    router.push(`/builder/${buildId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Mobile restriction message */}
      <div className="sm:hidden min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-xl font-bold text-foreground">Desktop Only</h2>
          <p className="text-foreground/70">
            The build editor requires a larger screen for the best experience.
            Please access this page from a tablet or desktop computer.
          </p>
        </div>
      </div>
      {/* Desktop view */}
      <main className="hidden sm:block max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-6">
          <Header
            text="Builder"
            subtitle="Choose a build to edit or create a new one."
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Your Builds
              </h2>

            </div>
            <div className="flex items-center gap-4">
              {currentUser?.uid === OFFICIAL_PUBLISHER_ID && (
                <div className="inline-flex rounded-default border border-foreground/20 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setAdminViewMode("mine")}
                    className={`px-3 py-1 text-sm font-medium transition-colors ${adminViewMode === "mine"
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-muted"
                      }`}
                  >
                    My Builds
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminViewMode("all")}
                    className={`px-3 py-1 text-sm font-medium transition-colors border-l border-foreground/20 ${adminViewMode === "all"
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-muted"
                      }`}
                  >
                    All Builds
                  </button>
                </div>
              )}
              <Button
                type="button"
                onClick={handleCreateBuild}
                disabled={isCreating}
              >
                {isCreating ? "Creating..." : "New build"}
              </Button>
            </div>
          </div>

          {error && (
            <div className="rounded-default border border-cancel/40 bg-cancel/10 px-4 py-3 text-sm text-foreground">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : builds.length === 0 ? (
            <EmptyState text="No builds yet. Create your first build!" />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {builds.map((build) => {
                const normalizedStatus = normalizeBuildStatus(build.status);
                const statusClasses = "bg-foreground text-background";
                const statusText = getBuildStatusLabel(build.status);
                const description = build.description
                  ? build.description.length > 120
                    ? `${build.description.slice(0, 117)}…`
                    : build.description
                  : null;

                return (
                  <button
                    key={build.id}
                    type="button"
                    onClick={() => handleSelectBuild(build.id)}
                    className="group cursor-pointer rounded-default border border-foreground/10 bg-background/80 p-4 text-left shadow-default transition-transform duration-200 hover:-translate-y-1 hover:shadow-hover focus:outline-none focus:ring-2 focus:ring-foreground/60"
                  >
                    <div className="flex items-start justify-between">
                      <CivIcon civilization={build.civilization} showName={true} size="sm" />
                      <span
                        className={`rounded-default px-2 py-1 text-xs font-semibold ${statusClasses} max-w-[60%] text-right truncate`}
                        title={statusText}
                      >
                        {statusText}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {build.title}
                    </h3>
                    <div className="mt-2 space-y-2">
                      {build.author && (
                        <p className="text-sm text-foreground/70">by {build.author}</p>
                      )}
                      <VillagerCounts build={build} />
                      {description && (
                        <p className="text-sm text-foreground/70">{description}</p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
