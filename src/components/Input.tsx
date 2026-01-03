"use client";

import React from "react";

interface InputProps {
  type?: 'text' | 'textarea' | 'number';
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: () => void;
  placeholder?: string;
  label?: string;
  rows?: number;
  className?: string;
  min?: number;
}

export default function Input({
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  label,
  rows = 3,
  className = '',
  min,
}: InputProps) {
  const baseClasses = "bg-background rounded-default shadow-default focus:outline-none focus:ring-2 focus:ring-foreground text-foreground";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (type === 'number') {
      onChange(parseInt(e.target.value) || 0);
    } else {
      onChange(e.target.value);
    }
  };

  const getInputClasses = () => {
    if (type === 'number') {
      return `w-16 px-2 py-1 text-sm ${baseClasses} ${className}`;
    }
    return `w-full px-3 py-2 md:py-3 ${baseClasses} ${className}`;
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          value={value as string}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          className={`${getInputClasses()} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          min={min}
          className={getInputClasses()}
        />
      )}
    </div>
  );
}