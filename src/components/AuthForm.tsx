"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { runAuthDiagnostics } from "@/lib/authUtils";

// Helper function to convert Firebase error codes to user-friendly messages
function getAuthErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email address.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials.';
    case 'auth/email-already-in-use':
      return 'An account with this email address already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in was cancelled.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized for authentication.';
    case 'auth/invalid-api-key':
      return 'Authentication service configuration error.';
    case 'auth/missing-email':
      return 'Please enter your email address.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}

interface AuthFormProps {
  mode: "login" | "register" | "reset";
}

type AuthState =
  | {
      type: "idle";
      email: string;
      password: string;
      confirmPassword: string;
    }
  | {
      type: "loading";
      email: string;
      password: string;
      confirmPassword: string;
    }
  | {
      type: "success";
      email: string;
      password: string;
      confirmPassword: string;
      message: string;
    }
  | {
      type: "error";
      email: string;
      password: string;
      confirmPassword: string;
      error: string;
    };

export default function AuthForm({ mode }: AuthFormProps) {
  const [state, setState] = useState<AuthState>({
    type: "idle",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { login, register, resetPassword, currentUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/profile';
  const isLogin = mode === "login";
  const isReset = mode === "reset";

  // Run diagnostics on component mount
  useEffect(() => {
    runAuthDiagnostics().then((results) => {
      console.log('Auth diagnostics results:', results);
      if (!results.prerequisites) {
        console.warn('Authentication prerequisites not met:', results.issues);
      }
    }).catch((error) => {
      console.error('Failed to run auth diagnostics:', error);
    });
  }, []);

  // Handle automatic redirect after successful authentication
  useEffect(() => {
    if (!isReset && currentUser && (state.type === "success" || state.type === "loading")) {
      console.log('Authentication successful, redirecting to:', redirectUrl);
      // Small delay to show success message
      const redirectTimeout = setTimeout(() => {
        router.push(redirectUrl);
      }, 1500);

      return () => clearTimeout(redirectTimeout);
    }
  }, [currentUser, state.type, isReset, redirectUrl, router]);

  const title = isReset
    ? "Reset your password"
    : isLogin
      ? "Sign in to your account"
      : "Create your account";
  const buttonText = isReset ? "Send reset link" : isLogin ? "Sign in" : "Sign up";
  const loadingText = isReset
    ? "Sending reset link..."
    : isLogin
      ? "Signing in..."
      : "Creating account...";
  const switchText = isReset
    ? "Back to sign in"
    : isLogin
      ? "Don't have an account? Sign up"
      : "Already have an account? Sign in";
  const switchLink = isReset ? "/login" : isLogin ? "/register" : "/login";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isLogin && !isReset) {
      if (state.password !== state.confirmPassword) {
        setState((prevState) => ({
          ...prevState,
          type: "error",
          error: "Passwords do not match",
        }));
        return;
      }
      if (state.password.length < 6) {
        setState((prevState) => ({
          ...prevState,
          type: "error",
          error: "Password must be at least 6 characters",
        }));
        return;
      }
    }

    try {
      setState((prevState) => ({
        ...prevState,
        type: "loading",
      }));

      const action = isLogin ? 'login' : isReset ? 'password reset' : 'registration';
      console.log(`Attempting ${action} for email: ${state.email}`);

      if (isLogin) {
        await login(state.email, state.password);
      } else if (isReset) {
        await resetPassword(state.email);
      } else {
        await register(state.email, state.password);
      }

      console.log(`${action} successful`);
      
      // Set success state with message
      const successMessage = isLogin
        ? "Login successful! Redirecting..."
        : isReset
          ? "Password reset email sent. Please check your inbox."
          : "Account created successfully! Redirecting...";
      
      setState((prevState) => ({
        ...prevState,
        type: "success",
        message: successMessage,
      }));
    } catch (error: unknown) {
      const action = isLogin ? 'Login' : isReset ? 'Password reset' : 'Registration';
      console.error(`${action} error:`, error);
      
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      // Extract Firebase error code if available
      if (error && typeof error === 'object' && 'code' in error && typeof error.code === 'string') {
        console.log('Firebase error code:', error.code);
        errorMessage = getAuthErrorMessage(error.code);
      } else if (error instanceof Error) {
        // Fallback to error message
        errorMessage = error.message;
      }

      setState((prevState) => ({
        ...prevState,
        type: "error",
        error: errorMessage,
      }));
    }
  }

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="mt-6">
        <Header text={title} />
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-default shadow-default -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`appearance-none relative block w-full px-3 py-2 border border-foreground placeholder-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-foreground ${
                isReset ? "rounded-default" : "rounded-t-default"
              }`}
              placeholder="Email address"
              value={state.email}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>
          {!isReset && (
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                className={`appearance-none relative block w-full px-3 py-2 border border-foreground placeholder-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-foreground ${
                  isLogin ? "rounded-b-default" : "rounded-none"
                }`}
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
          )}
          {!isLogin && !isReset && (
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-foreground placeholder-foreground text-foreground rounded-b-default focus:outline-none focus:ring-2 focus:ring-foreground"
                placeholder="Confirm password"
                value={state.confirmPassword}
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    confirmPassword: e.target.value,
                  }))
                }
              />
            </div>
          )}
        </div>

        {state.type === "error" && (
          <div className="rounded-default bg-cancel p-4">
            <div className="text-sm text-cancel text-pretty">{state.error}</div>
          </div>
        )}

        {state.type === "success" && (
          <div className="rounded-default bg-primary/10 border border-primary p-4">
            <div className="text-sm text-primary flex items-center text-pretty">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {state.message}
            </div>
            {isReset && (
              <p className="mt-3 text-sm text-primary text-pretty">
                Didn&apos;t get it? Check your spam folder. Need additional support? Open our{" "}
                <a
                  href="https://discord.gg/JmfGYQcM3Z"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline"
                >
                  Discord server
                </a>
                .
              </p>
            )}
          </div>
        )}

        {!(isReset && state.type === "success") && (
          <div>
            <Button type="submit" disabled={state.type === "loading" || state.type === "success"}>
              {state.type === "loading" ? loadingText : 
               state.type === "success" ? "Redirecting..." : buttonText}
            </Button>
          </div>
        )}

        <div className="text-center">
          <Link
            href={switchLink}
            className="font-medium text-foreground hover:text-foreground text-pretty"
            prefetch={false}
          >
            {switchText}
          </Link>
        </div>
        {isLogin && (
          <div className="text-center">
            <Link
              href="/forgot-password"
              className="font-medium text-foreground hover:text-foreground text-pretty"
              prefetch={false}
            >
              Forgot your password?
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}
