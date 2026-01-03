"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push("/");
    } catch {
      // Logout error handled by auth context
      setIsLoggingOut(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Unknown";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Header
              text="User Profile"
              subtitle="Manage your account settings and information"
            />

            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 text-pretty">
              Account information
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
                <span className="font-medium text-foreground text-sm sm:text-base">
                  Email
                </span>
                <span className="text-foreground text-sm sm:text-base text-pretty mt-1 sm:mt-0">
                  {currentUser?.email || "Not available"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
                <span className="font-medium text-foreground text-sm sm:text-base">
                  Account created
                </span>
                <span className="text-foreground text-sm sm:text-base text-pretty mt-1 sm:mt-0">
                  {formatDate(currentUser?.metadata?.creationTime)}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
                <span className="font-medium text-foreground text-sm sm:text-base">
                  Last sign In
                </span>
                <span className="text-foreground text-sm sm:text-base text-pretty mt-1 sm:mt-0">
                  {formatDate(currentUser?.metadata?.lastSignInTime)}
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleLogout} disabled={isLoggingOut}>
                {isLoggingOut ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
