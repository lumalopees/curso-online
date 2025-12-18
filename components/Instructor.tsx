"use client";

import Image from "next/image";

export function Instructor() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-16">
          About the Instructor
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column - Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Course instructor"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-text">
              Sarah Mitchell
            </h3>
            
            <div className="space-y-3 text-text opacity-90">
              <p>
                Productivity consultant specializing in neurodivergent-friendly systems 
                with over 8 years of experience working with ADHD clients.
              </p>
              
              <p>
                Licensed professional with a background in cognitive behavioral therapy 
                and organizational psychology. Diagnosed with ADHD at 25, bringing both 
                professional expertise and lived experience to the course.
              </p>
              
              <p>
                Featured in Forbes, Psychology Today, and ADDitude Magazine for 
                innovative approaches to productivity that respect neurodivergent minds.
              </p>
              
              <p className="font-semibold">
                Certifications: CBT Practitioner, ADHD Coach Certification (ACO), 
                Master's in Organizational Psychology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

