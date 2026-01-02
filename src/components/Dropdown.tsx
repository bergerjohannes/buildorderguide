"use client";

import React, { useState } from "react";
import Image from "next/image";

interface DropdownOption {
  value: string;
  label?: string;
  icon?: string;
}

interface DropdownProps {
  value: string | undefined;
  onChange: (value: string) => void;
  options: DropdownOption[];
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function Dropdown({
  value,
  onChange,
  options,
  label,
  placeholder = "Select option",
  className = '',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1 px-3">
          {label}
        </label>
      )}
      
      {/* Dropdown Button */}
      <div
        className="flex items-center w-full px-3 py-2 md:py-3 bg-background rounded-default shadow-default hover:shadow-hover cursor-pointer transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.icon && (
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
            <Image
              src={selectedOption.icon}
              alt={selectedOption.label || selectedOption.value}
              width={16}
              height={16}
              className="w-4 h-4"
              onError={(e) => {
                e.currentTarget.src = "/images/Civs/generic.png";
              }}
            />
          </div>
        )}
        
        <span className="flex-1 text-foreground font-medium">
          {selectedOption ? (selectedOption.label || selectedOption.value) : placeholder}
        </span>
        
        <svg
          className={`w-5 h-5 text-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-default shadow-hover z-50 max-h-64 overflow-y-auto border border-muted">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="flex items-center p-3 hover:bg-muted cursor-pointer"
            >
              {option.icon && (
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-3">
                  <Image
                    src={option.icon}
                    alt={option.label || option.value}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    onError={(e) => {
                      e.currentTarget.src = "/images/Civs/generic.png";
                    }}
                  />
                </div>
              )}
              <span className="text-foreground">{option.label || option.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Click Outside to Close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}