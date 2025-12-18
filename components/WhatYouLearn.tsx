"use client";

import { Calendar, ListChecks, Focus, Repeat, Lightbulb, TrendingUp } from "lucide-react";

const learningCards = [
  {
    icon: Calendar,
    title: "Time Management",
    description: "Build schedules that account for ADHD time blindness and energy levels.",
  },
  {
    icon: ListChecks,
    title: "Task Prioritization",
    description: "Learn to identify what matters and let go of what doesn't without guilt.",
  },
  {
    icon: Focus,
    title: "Focus Techniques",
    description: "Discover methods to maintain concentration despite distractions.",
  },
  {
    icon: Repeat,
    title: "Sustainable Habits",
    description: "Create routines that stick without relying on willpower alone.",
  },
  {
    icon: Lightbulb,
    title: "Self-Understanding",
    description: "Recognize your unique patterns and work with them effectively.",
  },
  {
    icon: TrendingUp,
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
          {learningCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-accent border-opacity-20 hover:border-opacity-40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  {card.title}
                </h3>
                <p className="text-text opacity-80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

