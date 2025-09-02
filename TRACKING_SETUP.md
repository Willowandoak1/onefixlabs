# Tracking Pixel Setup Guide

## Overview
I've added a comprehensive tracking pixel system to your landing page that supports:
- Facebook Pixel
- Google Analytics
- TikTok Pixel

## Setup Instructions

### 1. Create Environment File
Create a `.env.local` file in your project root:

```bash
cp env.example .env.local
```

### 2. Add Your Pixel IDs
Edit `.env.local` and replace the placeholder values with your actual pixel IDs:

```env
# Facebook Pixel ID (configured: 746886027994806)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=746886027994806

# Google Analytics ID (starts with G-, e.g., G-XXXXXXXXXX)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# TikTok Pixel ID (starts with C, e.g., C1234567890ABCDEF)
NEXT_PUBLIC_TIKTOK_PIXEL_ID=C1234567890ABCDEF
```

### 3. How to Get Pixel IDs

#### Facebook Pixel
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Navigate to Events Manager
3. Create a new pixel or use an existing one
4. Copy the Pixel ID (numeric value)

#### Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing
3. Go to Admin > Data Streams
4. Copy the Measurement ID (starts with G-)

#### TikTok Pixel
1. Go to [TikTok Ads Manager](https://ads.tiktok.com/)
2. Navigate to Assets > Events
3. Create a new pixel or use existing
4. Copy the Pixel ID (starts with C)

### 4. Deploy
After adding your pixel IDs, deploy your changes:

```bash
git add .
git commit -m "Add tracking pixels"
git push origin main
```

## Features
- ✅ Automatic page view tracking (Facebook Pixel configured)
- ✅ Environment-based configuration
- ✅ Multiple platform support
- ✅ No tracking if pixel ID not provided
- ✅ Optimized loading with Next.js Script component
- ✅ **Page view tracking only** - no add to cart or purchase events

## Testing
After deployment, you can verify tracking is working by:
1. Using browser developer tools to check network requests
2. Using platform-specific testing tools (Facebook Pixel Helper, Google Tag Assistant)
3. Checking your analytics dashboards for incoming data

## Notes
- Only pixels with valid IDs will be loaded
- All tracking is client-side and respects user privacy
- The system is designed to be lightweight and fast-loading
