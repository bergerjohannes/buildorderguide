"use client";

import React from "react";
import Button from "./Button";

interface AuthPromptModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
    onRegister: () => void;
}

export default function AuthPromptModal({
    isOpen,
    onClose,
    onLogin,
    onRegister,
}: AuthPromptModalProps) {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-muted/80 z-50 backdrop-blur-sm cursor-pointer" onClick={onClose} />

            {/* Dialog */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div className="bg-background rounded-default shadow-hover max-w-md w-full p-6 pointer-events-auto border border-foreground/10">
                    <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                        Account Required
                    </h3>

                    <p className="text-foreground/80 mb-8 text-center text-pretty">
                        Please log in or create an account to rate builds, save favorites, and keep them on your profile.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Button onClick={onLogin} fullWidth>
                            Log In
                        </Button>
                        <Button onClick={onRegister} variant="secondary" fullWidth>
                            Create Account
                        </Button>
                        <button
                            onClick={onClose}
                            className="mt-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
