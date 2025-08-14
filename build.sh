#!/bin/bash
echo "Starting build process..."
echo "Current directory: $(pwd)"
echo "Listing public directory:"
ls -la public/
echo "Building React app..."
npm run build
echo "Build complete. Listing build directory:"
ls -la build/
echo "Build process finished."
