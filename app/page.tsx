import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { Instructor } from "@/components/Instructor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
          <ThemeToggle />
        </div>
      </header>
      <Hero />
      <WhoIsThisFor />
      <WhatYouLearn />
      <Instructor />
    </main>
  );
}

