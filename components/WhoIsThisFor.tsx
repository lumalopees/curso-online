"use client";

import { Target, Brain, Zap, Clock, Users, BookOpen } from "lucide-react";

const targetAudience = [
  {
    icon: Brain,
    text: "Neurodivergent individuals, especially those with ADHD",
  },
  {
    icon: Target,
    text: "People struggling with traditional productivity methods",
  },
  {
    icon: Zap,
    text: "Those who need systems that work with their brain, not against it",
  },
  {
    icon: Clock,
    text: "Anyone tired of feeling overwhelmed by time management advice",
  },
  {
    icon: Users,
    text: "Professionals seeking practical, no-nonsense strategies",
  },
  {
    icon: BookOpen,
    text: "Individuals ready to build sustainable productivity habits",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-12">
          Who This Course Is For
        </h2>
        
        <ul className="space-y-6">
          {targetAudience.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
                <p className="text-lg text-text opacity-90 pt-1.5">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

