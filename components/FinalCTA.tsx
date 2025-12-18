"use client";

import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent bg-opacity-5" id="enroll">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
          Ready to Work With Your Brain, Not Against It?
        </h2>
        
        <p className="text-lg sm:text-xl text-text opacity-90 max-w-2xl mx-auto">
          Join hundreds of neurodivergent individuals who&apos;ve transformed their productivity.
        </p>
        
        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
        >
          Enroll Now
          <ArrowRight className="ml-2 w-6 h-6" />
        </a>
      </div>
    </section>
  );
}

