import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TestimonialsAndCTA from './components/TestimonialsAndCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800">
      <Hero />
      <HowItWorks />
      <Features />
      <TestimonialsAndCTA />
    </div>
  );
}

export default App;
