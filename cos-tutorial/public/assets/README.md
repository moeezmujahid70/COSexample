# Brand Assets

This folder is the staging area for brand files used by the COS tutorial.

## Structure

- `brand/`
  Store master logo exports here, such as:
  - `logo.svg`
  - `logo-transparent.svg`
  - `logo-mark.svg`
  - `wordmark.svg`
- `favicon/`
  Store browser and device icon files here, such as:
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
  - `site.webmanifest`
- `icons/`
  Store reusable product and UI icon files here.
- `social/`
  Store social-preview imagery here, such as Open Graph or Twitter/X card images.

## Recommended Workflow

1. Keep editable source exports in this folder.
2. When final assets are approved, copy the runtime files to the paths Next.js uses directly:
   - `app/favicon.ico`
   - `app/icon.png`
   - `app/apple-icon.png`
   - `public/site.webmanifest`
3. Update metadata in `app/layout.tsx` if you want explicit icon declarations.

## Project Naming Context

This project is the `Interactive COS (Culture Operating System) Tutorial` for `COSexample.com`, with the product title `Our R&D Team Culture`.
