import React from 'react';
import { ShieldCheck, CreditCard, BarChart3, Languages, Users2, Lock, Star } from 'lucide-react';

const features = [
  { icon: Users2, title: 'Easy Registration & Login', desc: 'Quick signup for users and owners with secure auth.' },
  { icon: ShieldCheck, title: 'Real-time Car Availability', desc: 'Up-to-the-minute inventory synced across devices.' },
  { icon: CreditCard, title: 'Secure Payments via Razorpay', desc: 'Fast, reliable payments with industry-leading security.' },
  { icon: BarChart3, title: 'Owner Earnings Dashboard', desc: 'Track bookings, revenue, and utilization at a glance.' },
  { icon: Languages, title: 'Multi-language Support', desc: 'Localized experiences for global audiences.' },
  { icon: Lock, title: 'Admin Management & Reports', desc: 'Granular control with auditing and analytics.' },
];

const Features = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 sm:text-4xl">Key Features</h2>
          <p className="mt-3 text-slate-600">Everything you need to rent or share cars with confidence.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-indigo-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
