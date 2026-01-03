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
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}

interface AuthFormProps {
  mode: "login" | "register";
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
  const { login, register, currentUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/profile';

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
    if (currentUser && (state.type === "success" || state.type === "loading")) {
      console.log('Authentication successful, redirecting to:', redirectUrl);
      // Small delay to show success message
      const redirectTimeout = setTimeout(() => {
        router.push(redirectUrl);
      }, 1500);

      return () => clearTimeout(redirectTimeout);
    }
  }, [currentUser, state.type, redirectUrl, router]);

  const isLogin = mode === "login";
  const title = isLogin ? "Sign in to your account" : "Create your account";
  const buttonText = isLogin ? "Sign in" : "Sign up";
  const loadingText = isLogin ? "Signing in..." : "Creating account...";
  const switchText = isLogin
    ? "Don't have an account? Sign up"
    : "Already have an account? Sign in";
  const switchLink = isLogin ? "/register" : "/login";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isLogin) {
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

      console.log(`Attempting ${isLogin ? 'login' : 'registration'} for email: ${state.email}`);

      if (isLogin) {
        await login(state.email, state.password);
      } else {
        await register(state.email, state.password);
      }

      console.log(`${isLogin ? 'Login' : 'Registration'} successful`);
      
      // Set success state with message
      const successMessage = isLogin 
        ? "Login successful! Redirecting..." 
        : "Account created successfully! Redirecting...";
      
      setState((prevState) => ({
        ...prevState,
        type: "success",
        message: successMessage,
      }));
    } catch (error: unknown) {
      console.error(`${isLogin ? 'Login' : 'Registration'} error:`, error);
      
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
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-foreground placeholder-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-foreground ${
                isLogin ? "rounded-t-default" : "rounded-t-default"
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
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-foreground placeholder-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-foreground ${
                isLogin ? "rounded-b-default" : ""
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
          {!isLogin && (
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-foreground placeholder-foreground text-foreground rounded-b-default focus:outline-none focus:ring-2 focus:ring-foreground"
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
            <div className="text-sm text-cancel">{state.error}</div>
          </div>
        )}

        {state.type === "success" && (
          <div className="rounded-default bg-primary/10 border border-primary p-4">
            <div className="text-sm text-primary flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {state.message}
            </div>
          </div>
        )}

        <div>
          <Button type="submit" disabled={state.type === "loading" || state.type === "success"}>
            {state.type === "loading" ? loadingText : 
             state.type === "success" ? "Redirecting..." : buttonText}
          </Button>
        </div>

        <div className="text-center">
          <Link
            href={switchLink}
            className="font-medium text-foreground hover:text-foreground"
          >
            {switchText}
          </Link>
        </div>
      </form>
    </div>
  );
}
