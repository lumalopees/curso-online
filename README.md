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

## Project Structure

```
curso-online/
├── app/
│   ├── globals.css       # Global styles and theme configuration
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Home page
├── components/
│   ├── Hero.tsx          # Hero section component
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx   # Dark/light mode toggle button
├── public/               # Static assets
└── package.json          # Dependencies
```

## Contributing

(Contributing guidelines to be added)

## License

(To be specified)

