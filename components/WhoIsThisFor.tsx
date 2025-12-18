"use client";

import { Brain } from "lucide-react";

const targetAudience = [
  {
    text: "Neurodivergent individuals, especially those with ADHD",
  },
  {
    text: "People struggling with traditional productivity methods",
  },
  {
    text: "Those who need systems that work with their brain, not against it",
  },
  {
    text: "Anyone tired of feeling overwhelmed by time management advice",
  },
  {
    text: "Professionals seeking practical, no-nonsense strategies",
  },
  {
    text: "Individuals ready to build sustainable productivity habits",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background" id="content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-16">
          Who This Course Is For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetAudience.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-1"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#38BDF8] dark:bg-[#38BDF8] bg-opacity-10 dark:bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 dark:group-hover:bg-opacity-20 transition-all duration-300">
                <Brain className="w-5 h-5 text-[#38BDF8] dark:text-[#38BDF8] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
              </div>
              <p className="text-lg text-[#E5E7EB] dark:text-[#E5E7EB] opacity-90 pt-1.5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

