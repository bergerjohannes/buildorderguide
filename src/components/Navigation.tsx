"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";

// MenuItem component for reusable menu items
interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "mobile";
  onClick?: () => void;
  className?: string;
}

function MenuItem({
  href,
  children,
  variant = "default",
  onClick,
  className = "",
}: MenuItemProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-foreground hover:bg-foreground text-foreground hover:text-foreground px-4 py-2 rounded-default text-sm font-medium transition-colors duration-200";
      case "mobile":
        return "text-foreground hover:text-foreground text-lg font-medium py-3 border-b border-muted";
      case "default":
      default:
        return "bg-muted hover:bg-muted text-foreground px-4 py-2 rounded-default text-sm font-medium transition-colors duration-200";
    }
  };

  const combinedClassName = `${getVariantClasses()} ${className}`.trim();

  return (
    <Link href={href} className={combinedClassName} onClick={onClick}>
      {children}
    </Link>
  );
}

// Special variant for mobile profile/auth buttons
function MobileAuthMenuItem({
  href,
  children,
  variant = "default",
  onClick,
  className = "",
}: MenuItemProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "block w-full text-center bg-muted hover:bg-foreground text-foreground hover:text-background px-4 py-3 rounded-default text-lg font-medium transition-colors duration-200";
      case "default":
      default:
        return "block w-full text-center bg-muted hover:bg-foreground text-foreground hover:text-background px-4 py-3 rounded-default text-lg font-medium transition-colors duration-200";
    }
  };

  const combinedClassName = `${getVariantClasses()} ${className}`.trim();

  return (
    <Link href={href} className={combinedClassName} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-background shadow-default sticky top-0 z-50">
        <div className="px-4">
          <div className="flex justify-between h-16">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl font-bold text-foreground"
              >
                <Image
                  src="/images/Other/Logo.png"
                  alt="Build Order Guide Logo"
                  width={32}
                  height={32}
                  className="flex-shrink-0"
                />
                <span>BUILD ORDER GUIDE</span>
              </Link>
            </div>

            {/* Desktop Menu - Right side */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/">
                <Button>Builds</Button>
              </Link>
              <Link href="/uptime">
                <Button>Uptime</Button>
              </Link>
              <Link href="/builder">
                <Button>Builder</Button>
              </Link>
              <Link href="/about">
                <Button>About</Button>
              </Link>

              {/* Auth section */}
              {currentUser ? (
                <Link href="/profile">
                  <Button>Profile</Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden flex items-center">
              <Button onClick={toggleMobileMenu} aria-label="Toggle menu">
                {isMobileMenuOpen ? (
                  // X icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside of nav to prevent height changes */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-background">
          {/* Mobile menu items */}
          <div className="flex flex-col items-center space-y-4 p-6">
            <Link href="/" onClick={closeMobileMenu}>
              <Button>Builds</Button>
            </Link>
            <Link href="/builder" onClick={closeMobileMenu}>
              <Button>Builder</Button>
            </Link>
            <Link href="/uptime" onClick={closeMobileMenu}>
              <Button>Uptime</Button>
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              <Button>About</Button>
            </Link>

            {/* Auth section */}
            {currentUser ? (
              <Link href="/profile" onClick={closeMobileMenu}>
                <Button>Profile</Button>
              </Link>
            ) : (
              <Link href="/login" onClick={closeMobileMenu}>
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
