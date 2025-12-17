"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Productivity Course for Neurodivergent Minds
            </h1>
            
            <p className="text-lg sm:text-xl text-text opacity-90">
              Practical strategies designed specifically for ADHD and neurodivergent individuals. No fluff, just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enroll"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                I want to enroll
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <a
                href="#content"
                className="inline-flex items-center justify-center px-6 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-opacity-10 hover:bg-accent transition-colors"
              >
                <Play className="mr-2 w-5 h-5" />
                View content
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
              alt="Productivity and focus workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

