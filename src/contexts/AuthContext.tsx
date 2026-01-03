"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  isLoggingOut: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function register(email: string, password: string) {
    console.log('Attempting to register user...');
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully');
    } catch (error: unknown) {
      console.error('Registration failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      setError(errorMessage);
      throw error;
    }
  }

  async function login(email: string, password: string) {
    console.log('Attempting to log in user...');
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
    } catch (error: unknown) {
      console.error('Login failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setError(errorMessage);
      throw error;
    }
  }

  async function logout() {
    console.log('Attempting to log out user...');
    setIsLoggingOut(true);
    setError(null);
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      // Keep isLoggingOut true briefly to prevent ProtectedRoute redirect
      setTimeout(() => setIsLoggingOut(false), 100);
    } catch (error: unknown) {
      console.error('Logout failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Logout failed';
      setError(errorMessage);
      setIsLoggingOut(false);
      throw error;
    }
  }

  useEffect(() => {
    console.log('Setting up auth state listener...');
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      console.warn('Auth initialization timeout - stopping loading state');
      setLoading(false);
      if (!currentUser && !error) {
        setError('Authentication service is taking too long to respond');
      }
    }, 10000);

    const unsubscribe = onAuthStateChanged(
      auth, 
      (user) => {
        console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
        setCurrentUser(user);
        setLoading(false);
        setError(null);
        // Clear the timeout since auth state changed
        clearTimeout(timeoutId);
      },
      (error) => {
        console.error('Auth state change error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Authentication error';
        setError(errorMessage);
        setLoading(false);
        // Clear the timeout since we got an error
        clearTimeout(timeoutId);
      }
    );

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [currentUser, error]);

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
    isLoggingOut,
    error,
  };

  // Always render children to prevent blank screen
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
