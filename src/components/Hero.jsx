import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0B0F1A]" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center text-white md:pt-32">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-indigo-200 shadow-sm ring-1 ring-white/15 backdrop-blur">
          FlexiCar – Smart Car Rental Platform
        </span>
        <h1 className="bg-gradient-to-br from-indigo-300 to-indigo-100 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Find. Book. Drive.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-indigo-100/80 sm:text-lg">
          Smart, secure car rentals for everyone. Connect with local car owners, book in minutes, and hit the road with confidence.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] px-6 py-3 text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Book a Car
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white shadow-sm backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
