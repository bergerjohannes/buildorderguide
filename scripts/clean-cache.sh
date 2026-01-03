#!/bin/bash

# Script to clean Next.js cache and resolve development build manifest errors

echo "🧹 Cleaning Next.js cache and build artifacts..."

# Stop any running dev server (optional - user should do this manually)
echo "⚠️  Please stop your dev server first with Ctrl+C"

# Remove Next.js build directory
echo "Removing .next directory..."
rm -rf .next

# Remove node modules cache
echo "Removing node_modules/.cache..."
rm -rf node_modules/.cache

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Remove any temporary Next.js files
echo "Cleaning temporary files..."
rm -rf /tmp/.next* 2>/dev/null || true

echo "✅ Cache cleaning complete!"
echo "You can now run 'npm run dev' to start a fresh development server."