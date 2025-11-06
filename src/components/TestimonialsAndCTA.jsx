import React from 'react';
import { Quote, ArrowRight, Twitter, Github, Mail } from 'lucide-react';

const testimonials = [
  {
    quote: 'Loved how easy it was to rent! Booked in minutes and the car was spotless.',
    name: 'Aisha – Urban Traveler',
  },
  {
    quote: 'Listing my car took 5 minutes. Earnings dashboard is super clear.',
    name: 'Rahul – Car Owner',
  },
];

const TestimonialsAndCTA = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid items-start gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Quote className="h-4 w-4" /> What people say
            </div>
            <div className="grid gap-6">
              {testimonials.map((t, idx) => (
                <figure key={idx} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                  <blockquote className="text-slate-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm font-medium text-indigo-900">{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-8 ring-1 ring-indigo-100">
            <h3 className="text-2xl font-bold text-indigo-900">Ready to get started?</h3>
            <p className="mt-2 text-slate-700">Join FlexiCar and experience smart, secure car sharing today.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Sign up as User
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-6 py-3 text-indigo-700 shadow-sm transition hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                List your car
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">No credit card required. Explore the live demo.</p>
          </div>
        </div>

        <footer className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-indigo-100 pt-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} FlexiCar by RideEase. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Twitter" className="hover:text-indigo-600"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-indigo-600"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-indigo-600"><Mail className="h-5 w-5" /></a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default TestimonialsAndCTA;
