"use client";

import { Rocket } from "lucide-react";

const learningCards = [
  {
    title: "Time Management",
    description: "Build schedules that account for ADHD time blindness and energy levels.",
  },
  {
    title: "Task Prioritization",
    description: "Learn to identify what matters and let go of what doesn't without guilt.",
  },
  {
    title: "Focus Techniques",
    description: "Discover methods to maintain concentration despite distractions.",
  },
  {
    title: "Sustainable Habits",
    description: "Create routines that stick without relying on willpower alone.",
  },
  {
    title: "Self-Understanding",
    description: "Recognize your unique patterns and work with them effectively.",
  },
  {
    title: "Progress Tracking",
    description: "Measure growth in ways that make sense for neurodivergent minds.",
  },
];

export function WhatYouLearn() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-16">
          What You&apos;ll Learn
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-[#0284C7] dark:border-[#38BDF8] border-opacity-20 hover:border-opacity-50 hover:shadow-lg hover:shadow-[#0284C7]/10 dark:hover:shadow-[#38BDF8]/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0284C7] dark:bg-[#38BDF8] bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-opacity-20 group-hover:scale-110 transition-all duration-300 relative">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#38BDF8" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  className="group-hover:rotate-12 transition-transform duration-300"
                  style={{ 
                    position: 'relative', 
                    zIndex: 10, 
                    opacity: 1,
                    visibility: 'visible',
                    display: 'block',
                    pointerEvents: 'auto'
                  }}
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="#38BDF8" fill="none"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="#38BDF8" fill="none"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="#38BDF8" fill="none"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="#38BDF8" fill="none"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] dark:text-[#E5E7EB] mb-2 group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#1F2937] dark:text-[#E5E7EB] opacity-80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

