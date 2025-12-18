# Online Productivity Course Landing Page

A landing page for an online productivity course specifically designed for neurodivergent individuals, with a primary focus on ADHD.

## Overview

This project is a landing page that introduces and promotes an online productivity course tailored to the unique needs and strengths of neurodivergent learners, particularly those with ADHD.

## Features

- Responsive design optimized for all devices
- Clear course information and benefits
- Accessible design following WCAG guidelines
- Engaging content highlighting course value for neurodivergent individuals
- Call-to-action sections for course enrollment

## Target Audience

- Neurodivergent individuals (primarily ADHD)
- People seeking productivity strategies that work with their neurotype
- Those looking for understanding and support in their productivity journey

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-themes** - Dark/light mode toggle
- **Lucide React** - Icons
- **Inter Font** - Typography

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

The site will be live with automatic HTTPS and CDN distribution.

## Project Structure

```
curso-online/
├── app/
│   ├── globals.css       # Global styles and theme configuration
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Home page
├── components/
│   ├── Hero.tsx          # Hero section component
│   ├── WhoIsThisFor.tsx  # Target audience section
│   ├── WhatYouLearn.tsx  # Course content section with cards
│   ├── Instructor.tsx    # Instructor bio section
│   ├── FinalCTA.tsx      # Final call-to-action section
│   ├── Footer.tsx        # Footer with copyright and social links
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx   # Dark/light mode toggle button
├── public/               # Static assets
└── package.json          # Dependencies
```

## Features Implemented

### Design System
- **Dark Mode (Default)**: Background `#0F172A`, Text `#E5E7EB`, Accent `#38BDF8`
- **Light Mode**: Background `#FFFFFF`, Text `#1F2937`, Accent `#0284C7`
- **Typography**: Inter font (weights 400, 600, 700)
- **Icons**: Lucide React (outline style)
- **Responsive**: Mobile-first design, optimized for all screen sizes

### Page Sections
1. **Hero Section**: Two-column layout with title, subtitle, CTAs, and image
2. **Who This Course Is For**: Bullet list with icons
3. **What You'll Learn**: 6-card grid showcasing course content
4. **About the Instructor**: Professional bio with circular photo
5. **Final CTA**: Centered call-to-action with distinct background
6. **Footer**: Minimalist design with copyright and Instagram link

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color ratios
- Responsive text sizing

## Contributing

(Contributing guidelines to be added)

## License

(To be specified)

