"use client";

import { Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-accent border-opacity-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text opacity-70 text-sm">
          © {currentYear} Productivity Course. All rights reserved.
        </p>
        
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-sm font-medium">Follow us</span>
        </a>
      </div>
    </footer>
  );
}

