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
              className="p-6 rounded-lg border border-[#38BDF8] dark:border-[#38BDF8] border-opacity-20 hover:border-opacity-50 hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[#38BDF8] dark:bg-[#38BDF8] bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-opacity-20 group-hover:scale-110 transition-all duration-300">
                <Rocket className="w-6 h-6 text-[#38BDF8] dark:text-[#38BDF8] group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#E5E7EB] dark:text-[#E5E7EB] mb-2 group-hover:text-[#38BDF8] dark:group-hover:text-[#38BDF8] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-[#E5E7EB] dark:text-[#E5E7EB] opacity-80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

