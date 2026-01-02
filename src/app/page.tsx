"use client";

import React, { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import VillagerCounts from "@/components/VillagerCounts";
import Rating from "@/components/Rating";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import CivIcon from "@/components/CivIcon";
import DifficultyBadge from "@/components/DifficultyBadge";
import AttributeBadges from "@/components/AttributeBadges";
import FavoriteButton from "@/components/FavoriteButton";
import BuildImageComponent from "@/components/BuildImage";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import AuthPromptModal from "@/components/AuthPromptModal";
import DatabaseService from "@/lib/database";
import { Build } from "@/types/build";
import { useRouter } from "next/navigation";
import civData from "@/data/civData.json";
import { getAttributeDropdownOptions } from "@/lib/attributes";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import {
  getFeudalVillagerCount,
  getVillagerDifference,
} from "@/lib/villagerCalculator";
import {
  getCivImagePath,
  getDifficultyImagePath,
  getDifficultyLabel,
} from "@/lib/imageUtils";

interface BuildCardProps {
  build: Build;
  onBuildClick: (buildId: string) => void;
  isFavorited: boolean;
  onToggleFavorite: (buildId: string) => void;
}

type SortColumn = "title" | "rating" | "pop" | "difficulty" | "civilization";

const difficultyOrder: Record<string, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

const coerceNumber = (value: unknown): number | null => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }
  return null;
};

const extractPopValue = (build: Build, keys: string[]): number | null => {
  if (!build.pop) {
    return null;
  }

  for (const key of keys) {
    const candidate = coerceNumber((build.pop as Record<string, unknown>)[key]);
    if (candidate !== null) {
      return candidate;
    }
  }

  return null;
};

const formatFeudalDisplay = (build: Build): string => {
  return getFeudalVillagerCount(build);
};

const parseFeudalSortValue = (build: Build): number => {
  const display = formatFeudalDisplay(build);
  const parsed = parseInt(display, 10);
  return Number.isNaN(parsed) ? Number.POSITIVE_INFINITY : parsed;
};

const formatVillagerDiffDisplay = (
  build: Build,
  age: "castle" | "imperial"
): string => {
  const diff = getVillagerDifference(build, age);
  if (diff) {
    return diff;
  }

  const fallback = extractPopValue(
    build,
    age === "castle"
      ? ["castle", "Castle", "castleAge", "castle_age"]
      : ["imperial", "Imperial", "imperialAge", "imperial_age"]
  );

  if (fallback !== null) {
    const sign = fallback > 0 ? "+" : "";
    return `${sign}${fallback}`;
  }

  return "—";
};

const parseVillagerDiffSortValue = (
  build: Build,
  age: "castle" | "imperial"
): number => {
  const display = formatVillagerDiffDisplay(build, age);
  const parsed = parseInt(display.replace("+", ""), 10);
  return Number.isNaN(parsed) ? Number.POSITIVE_INFINITY : parsed;
};

const getPopSortValue = (build: Build): number => {
  const base = parseFeudalSortValue(build);
  if (!Number.isFinite(base)) {
    return Number.POSITIVE_INFINITY;
  }

  const castle = parseVillagerDiffSortValue(build, "castle");
  const imperial = parseVillagerDiffSortValue(build, "imperial");

  const safeCastle = Number.isFinite(castle) ? castle : 0;
  const safeImperial = Number.isFinite(imperial) ? imperial : 0;

  return base + safeCastle + safeImperial;
};

const formatPopSummary = (build: Build): string => {
  const feudal = formatFeudalDisplay(build);
  if (feudal === "—") {
    return "—";
  }

  const parts = [feudal];
  const castle = formatVillagerDiffDisplay(build, "castle");
  if (castle !== "—" && castle !== "+0" && castle !== "0") {
    parts.push(castle);
  }
  const imperial = formatVillagerDiffDisplay(build, "imperial");
  if (imperial !== "—" && imperial !== "+0" && imperial !== "0") {
    parts.push(imperial);
  }

  return parts.join(" ");
};

const getDifficultySortValue = (build: Build): number => {
  const value = build.difficulty;

  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    const numeric = parseInt(value, 10);
    if (!Number.isNaN(numeric)) {
      return numeric;
    }

    const normalized = value.trim().toLowerCase();
    if (normalized in difficultyOrder) {
      return difficultyOrder[normalized];
    }
  }

  return Number.POSITIVE_INFINITY;
};

const getSortMetric = (build: Build, column: SortColumn): number | string => {
  switch (column) {
    case "title":
      return build.title.toLowerCase();
    case "rating":
      return build.avg_rating ?? build.rating ?? Number.NEGATIVE_INFINITY;
    case "pop":
      return getPopSortValue(build);
    case "difficulty":
      return getDifficultySortValue(build);
    case "civilization":
      return build.civilization.toLowerCase();
    default:
      return build.title.toLowerCase();
  }
};

const TooltipIcon = ({
  children,
  tooltip,
  ariaLabel,
}: {
  children: React.ReactNode;
  tooltip: React.ReactNode;
  ariaLabel: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      });
    }
  };

  const handleMouseEnter = () => {
    updatePosition();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    updatePosition();
    setIsHovered(true);
  };

  const handleBlur = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="relative inline-flex items-center justify-center"
        tabIndex={0}
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </div>
      {isHovered && (
        <div
          className="pointer-events-none fixed z-50"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-max rounded-default border border-foreground/10 bg-background px-3 py-2 text-xs text-foreground shadow-hover">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              {tooltip}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Home() {
  const [builds, setBuilds] = useState<Build[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCiv, setSelectedCiv] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDisplay, setSelectedDisplay] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [sortConfig, setSortConfig] = useState<{
    column: SortColumn;
    direction: "asc" | "desc";
  }>({
    column: "title",
    direction: "asc",
  });
  const [isAuthPromptOpen, setIsAuthPromptOpen] = useState(false);
  const router = useRouter();
  const { currentUser } = useAuth();

  const civilizations = civData.civilizations;
  const civOptions = [
    { value: "All", icon: "/images/Civs/generic.png" },
    ...civilizations.map((civ: { name: string }) => ({
      value: civ.name,
      icon: `/images/Civs/${civ.name.toLowerCase()}.png`,
    })),
  ];

  const availableAttributes = getAttributeDropdownOptions();

  const displayOptions = [{ value: "All" }, { value: "Favorites" }];

  const filteredBuilds = React.useMemo(() => {
    const filtered = builds.filter((build) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        build.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (build.author &&
          build.author.toLowerCase().includes(searchQuery.toLowerCase()));

      // Civilization filter
      const matchesCiv =
        selectedCiv === "All" || build.civilization === selectedCiv;

      // Type/Attribute filter
      const matchesType =
        selectedType === "All" ||
        (build.attributes && build.attributes.includes(selectedType));

      // Display filter (All vs Favorites)
      const matchesDisplay =
        selectedDisplay === "All" ||
        (selectedDisplay === "Favorites" && favorites.includes(build.id));

      return matchesSearch && matchesCiv && matchesType && matchesDisplay;
    });

    filtered.sort((a, b) => {
      const valueA = getSortMetric(a, sortConfig.column);
      const valueB = getSortMetric(b, sortConfig.column);

      let comparison: number;

      if (typeof valueA === "string" && typeof valueB === "string") {
        comparison = valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        comparison = valueA - valueB;
      } else {
        comparison = valueA.toString().localeCompare(valueB.toString());
      }

      if (comparison === 0) {
        comparison = a.title.localeCompare(b.title);
      }

      return sortConfig.direction === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [
    builds,
    searchQuery,
    selectedCiv,
    selectedType,
    selectedDisplay,
    favorites,
    sortConfig,
  ]);

  const loadAllBuilds = async () => {
    try {
      setLoading(true);
      setError(null);
      const allBuilds = await DatabaseService.loadAllPublishedBuilds();
      setBuilds(allBuilds);
    } catch {
      setError("Failed to load builds");
    } finally {
      setLoading(false);
    }
  };

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
      console.error("Failed to load user favorites:", error);
      // User profile doesn't exist yet - this is normal for new users
      setFavorites([]);
    }
  }, [currentUser]);

  useEffect(() => {
    loadAllBuilds();
  }, []);

  useEffect(() => {
    if (currentUser) {
      loadUserFavorites();
    } else {
      setFavorites([]);
    }
  }, [currentUser, loadUserFavorites]);



  const handleBuildClick = (buildId: string) => {
    router.push(`/builds/${buildId}`);
  };

  const toggleFavorite = async (buildId: string) => {
    if (!currentUser) {
      setIsAuthPromptOpen(true);
      return;
    }

    try {
      const isFavorited = favorites.includes(buildId);

      if (isFavorited) {
        // Remove from favorites
        setFavorites(favorites.filter((id) => id !== buildId));
        await DatabaseService.removeFavBuildWithIdForUser(buildId, {
          uid: currentUser.uid,
        });
      } else {
        // Add to favorites
        setFavorites([...favorites, buildId]);
        await DatabaseService.favBuildWithIdForUser(buildId, {
          uid: currentUser.uid,
        });
      }
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
      // Show user-friendly error message
      alert("Failed to update favorites. Please try again.");
      // Revert the local state change on error
      await loadUserFavorites();
    }
  };

  const handleSort = (column: SortColumn) => {
    setSortConfig((prev) => {
      if (prev.column === column) {
        return {
          column,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return {
        column,
        direction: "asc",
      };
    });
  };

  const renderSortIndicator = (column: SortColumn) => {
    if (sortConfig.column !== column) {
      return (
        <span className="text-xs text-foreground/60" aria-hidden="true">
          ↕
        </span>
      );
    }
    return (
      <span className="text-xs text-foreground" aria-hidden="true">
        {sortConfig.direction === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {error && (
            <div className="bg-cancel border border-cancel rounded-default p-4 mb-6">
              <p className="text-cancel">{error}</p>
            </div>
          )}

          {/* Page Header */}
          <Header
            text="Build Order Guide"
            subtitle="Discover and explore build orders for Age of Empires II"
          />

          {loading ? (
            <div className="text-center py-12">
              <LoadingSpinner label="Loading builds..." />
            </div>
          ) : (
            <>
              {/* Search and Filter Controls */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4">
                  <Dropdown
                    value={selectedCiv}
                    onChange={setSelectedCiv}
                    options={civOptions}
                    label="Civ"
                  />

                  <Dropdown
                    value={selectedType}
                    onChange={setSelectedType}
                    options={availableAttributes}
                    label="Type"
                  />

                  <Dropdown
                    value={selectedDisplay}
                    onChange={setSelectedDisplay}
                    options={displayOptions}
                    label="Display"
                  />
                </div>

                {/* Search Input - Second Row */}
                <div>
                  <Input
                    value={searchQuery}
                    onChange={(value) => setSearchQuery(value as string)}
                    placeholder="Search builds"
                  />
                </div>
              </div>

              <div className="flex justify-end mb-6">
                <div className="inline-flex rounded-default border border-foreground/20 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setViewMode("cards")}
                    className={`px-3 py-1 text-sm font-medium transition-colors ${viewMode === "cards"
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-muted"
                      }`}
                  >
                    Cards
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("table")}
                    className={`px-3 py-1 text-sm font-medium transition-colors border-l border-foreground/20 ${viewMode === "table"
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground hover:bg-muted"
                      }`}
                  >
                    Table
                  </button>
                </div>
              </div>

              {filteredBuilds.length === 0 ? (
                <EmptyState text="No builds found matching your criteria" />
              ) : (
                <>
                  {viewMode === "cards" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredBuilds.map((build) => (
                        <BuildCard
                          key={build.id}
                          build={build}
                          onBuildClick={handleBuildClick}
                          isFavorited={favorites.includes(build.id)}
                          onToggleFavorite={toggleFavorite}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-default shadow-default">
                      <table className="min-w-full divide-y divide-foreground/10">
                        <thead className="bg-muted">
                          <tr>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-foreground cursor-pointer" onClick={() => handleSort("civilization")}>
                              <div className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                                Civ
                                {renderSortIndicator("civilization")}
                              </div>
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground cursor-pointer" onClick={() => handleSort("title")}>
                              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                                Title
                                {renderSortIndicator("title")}
                              </div>
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-foreground cursor-pointer" onClick={() => handleSort("pop")}>
                              <div className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                                Population
                                {renderSortIndicator("pop")}
                              </div>
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-foreground cursor-pointer" onClick={() => handleSort("difficulty")}>
                              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                                Difficulty
                                {renderSortIndicator("difficulty")}
                              </div>
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-foreground cursor-pointer" onClick={() => handleSort("rating")}>
                              <div className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                                Rating
                                {renderSortIndicator("rating")}
                              </div>
                            </th>
                            <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">
                              Favorite
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-foreground/10 bg-background">
                          {filteredBuilds.map((build) => {
                            const isFavorited = favorites.includes(build.id);
                            const ratingValue =
                              build.avg_rating ?? build.rating ?? 0;
                            const ratingCount =
                              build.number_of_ratings ?? build.ratingCount ?? 0;
                            const popSummary = formatPopSummary(build);
                            const civName = build.civilization;
                            const civImagePath = getCivImagePath(
                              civName === "Generic" ? "generic" : civName
                            );
                            const difficultyValue = build.difficulty;
                            const difficultyLabel =
                              difficultyValue || difficultyValue === 0
                                ? getDifficultyLabel(difficultyValue)
                                : null;
                            const difficultyImage = difficultyLabel
                              ? getDifficultyImagePath(
                                difficultyValue as string | number
                              )
                              : null;

                            return (
                              <tr
                                key={build.id}
                                onClick={() => handleBuildClick(build.id)}
                                className="hover:bg-muted/40 cursor-pointer transition-all duration-300"
                              >
                                <td className="px-4 py-3 text-center">
                                  <TooltipIcon
                                    ariaLabel={`${civName} civilization`}
                                    tooltip={
                                      <>
                                        <Image
                                          src={civImagePath}
                                          alt={civName}
                                          width={24}
                                          height={24}
                                        />
                                        <span className="font-medium">
                                          {civName}
                                        </span>
                                      </>
                                    }
                                  >
                                    <Image
                                      src={civImagePath}
                                      alt={civName}
                                      width={24}
                                      height={24}
                                    />
                                  </TooltipIcon>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex flex-col">
                                    <span className="font-semibold text-foreground">
                                      {build.title}
                                    </span>
                                    <span className="text-xs text-foreground/70">
                                      {build.author || "??"}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-center text-sm text-foreground">
                                  {popSummary}
                                </td>
                                <td className="px-4 py-3 text-center">
                                  {difficultyLabel && difficultyImage ? (
                                    <TooltipIcon
                                      ariaLabel={`${difficultyLabel} difficulty`}
                                      tooltip={
                                        <>
                                          <Image
                                            src={difficultyImage}
                                            alt={`${difficultyLabel} difficulty`}
                                            width={24}
                                            height={24}
                                          />
                                          <span className="font-medium">
                                            {difficultyLabel}
                                          </span>
                                        </>
                                      }
                                    >
                                      <Image
                                        src={difficultyImage}
                                        alt={`${difficultyLabel} difficulty`}
                                        width={24}
                                        height={24}
                                      />
                                    </TooltipIcon>
                                  ) : (
                                    <span className="text-sm text-foreground/60">
                                      —
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 py-3 text-center">
                                  <TooltipIcon
                                    ariaLabel={`Rating: ${ratingValue} stars, ${ratingCount} review${ratingCount === 1 ? "" : "s"}`}
                                    tooltip={
                                      <div className="flex flex-col items-center gap-1">
                                        <Rating
                                          rating={ratingValue}
                                          size="small"
                                        />
                                        <span className="text-foreground/80">
                                          {ratingCount > 0
                                            ? `${ratingCount} review${ratingCount === 1 ? "" : "s"
                                            }`
                                            : "No reviews"}
                                        </span>
                                      </div>
                                    }
                                  >
                                    <Rating
                                      rating={ratingValue}
                                      size="small"
                                    />
                                  </TooltipIcon>
                                </td>
                                <td className="px-4 py-3 text-right">
                                  <FavoriteButton
                                    isFavorited={isFavorited}
                                    onToggle={(e) => {
                                      e?.stopPropagation();
                                      toggleFavorite(build.id);
                                    }}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </main>

      <AuthPromptModal
        isOpen={isAuthPromptOpen}
        onClose={() => setIsAuthPromptOpen(false)}
        onLogin={() => router.push("/login")}
        onRegister={() => router.push("/register")}
      />
    </div>
  );
}

function BuildCard({
  build,
  onBuildClick,
  isFavorited,
  onToggleFavorite,
}: BuildCardProps) {
  return (
    <div
      onClick={() => onBuildClick(build.id)}
      className="bg-background rounded-default shadow-default hover:shadow-hover hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer h-80 flex flex-col"
    >
      {/* Top Section - Full Width with Civ, Title, Author, Heart */}
      <div className="p-5 pb-0">
        <div className="flex items-center justify-between mb-2">
          <CivIcon civilization={build.civilization} showName={true} />
          <FavoriteButton
            isFavorited={isFavorited}
            onToggle={() => onToggleFavorite(build.id)}
          />
        </div>

        {/* Build Title */}
        <h3 className="text-xl font-bold text-foreground uppercase tracking-wide text-pretty mb-2">
          {build.title}
        </h3>

        {/* Author */}
        <p className="text-sm text-foreground mb-4">{build.author || "??"}</p>
      </div>

      {/* Bottom Section - Two Columns */}
      <div className="flex flex-1">
        {/* Left Column - Build Image */}
        <div className="flex-shrink-0 flex flex-col justify-end">
          <BuildImageComponent
            imageURL={build.imageURL}
            buildTitle={build.title}
          />
        </div>

        {/* Right Column - Stats and Info */}
        <div className="flex-1 flex flex-col p-4 justify-between">
          {/* Top Content - All badge rows */}
          <div className="flex-1">
            {/* Villager Counts Row */}
            <VillagerCounts build={build} />

            {/* Attributes Row */}
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <AttributeBadges
                attributes={build.attributes || []}
                maxVisible={2}
              />
            </div>

            {/* Difficulty Row */}
            {build.difficulty && (
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <DifficultyBadge difficulty={build.difficulty} />
              </div>
            )}
          </div>

          {/* Bottom Row - Rating aligned to the right */}
          <div className="flex justify-end">
            <Rating
              rating={build.avg_rating}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
