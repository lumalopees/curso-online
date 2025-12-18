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
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0284C7] dark:bg-[#1e293b] bg-opacity-10 dark:bg-opacity-100 flex items-center justify-center group-hover:bg-opacity-20 dark:group-hover:bg-opacity-80 transition-all duration-300 relative">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#38BDF8" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  className="group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    position: 'relative', 
                    zIndex: 10, 
                    opacity: 1,
                    visibility: 'visible',
                    display: 'block',
                    pointerEvents: 'auto'
                  }}
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" stroke="#38BDF8" fill="none"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" stroke="#38BDF8" fill="none"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" stroke="#38BDF8" fill="none"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" stroke="#38BDF8" fill="none"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" stroke="#38BDF8" fill="none"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" stroke="#38BDF8" fill="none"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396" stroke="#38BDF8" fill="none"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516" stroke="#38BDF8" fill="none"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18" stroke="#38BDF8" fill="none"></path>
                </svg>
              </div>
              <p className="text-lg text-[#1F2937] dark:text-[#E5E7EB] opacity-90 pt-1.5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

