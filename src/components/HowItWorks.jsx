import React from 'react';
import { Car, Wallet, Rocket, Gauge, CheckCircle } from 'lucide-react';

const Step = ({ title, items }) => (
  <div className="rounded-xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:shadow-md">
    <h4 className="mb-3 text-lg font-semibold text-indigo-900">{title}</h4>
    <ul className="space-y-2 text-slate-600">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-indigo-500" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Rocket className="h-4 w-4" /> How It Works
          </span>
          <h2 className="text-3xl font-bold text-indigo-900 sm:text-4xl">Simple, transparent steps</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Whether you're booking a ride or listing your car, FlexiCar makes it effortless.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Car className="h-5 w-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-900">For Users</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Step title="Browse" items={["Find cars nearby", "Filter by type", "View ratings"]} />
              <Step title="Book" items={["Real-time availability", "Instant payments", "Secure checkout"]} />
              <Step title="Drive" items={["Seamless pickup", "GPS guidance", "24/7 support"]} />
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Gauge className="h-5 w-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-900">For Owners</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Step title="List" items={["Add details & photos", "Set pricing", "Availability calendar"]} />
              <Step title="Earn" items={["Get bookings", "Secure payouts", "Dynamic pricing"]} />
              <Step title="Grow" items={["Insights & tips", "Boosted visibility", "Loyal customers"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
