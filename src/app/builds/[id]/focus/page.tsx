"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import FocusMode from "@/components/FocusMode";
import DatabaseService from "@/lib/database";
import { Build } from "@/types/build";
import CivIcon from "@/components/CivIcon";
import Header from "@/components/Header";

export default function FocusPage() {
  const params = useParams();
  const router = useRouter();
  const [build, setBuild] = useState<Build | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const id = params?.id as string | undefined;
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const buildData = await DatabaseService.loadPublishedBuildWithId(id);
        setBuild(buildData);
      } catch {
        setError("Failed to load build");
        setBuild(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [params?.id]);

  useEffect(() => {
    const updateHeaderVisibility = () => {
      if (typeof window === "undefined") return;
      // Hide header on very limited vertical space to maximize focus view area
      setShowHeader(window.innerHeight >= 650);
    };

    updateHeaderVisibility();
    window.addEventListener("resize", updateHeaderVisibility);
    return () => window.removeEventListener("resize", updateHeaderVisibility);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center py-16">
            <LoadingSpinner label="Loading build..." />
          </div>
        </main>
      </div>
    );
  }

  if (error || !build) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <EmptyState text={error || "The requested build could not be found."} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Navigation />
      <main className="flex-1 flex flex-col overflow-hidden max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {showHeader && (
          <button
            type="button"
            onClick={() =>
              router.push(build?.id ? `/builds/${build.id}` : "/builds")
            }
            className="text-center mb-8 flex flex-col items-center gap-2 flex-shrink-0 focus:outline-none"
          >
            <CivIcon civilization={build.civilization} showName={true} />
            <Header text={build.title} />
          </button>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <FocusMode build={build} />
        </div>
      </main>
    </div>
  );
}
