import React from 'react';
import { Code2, Cog, Globe2, User, Car, Shield, Star } from 'lucide-react';

const techs = [
  { name: 'React.js', color: 'text-sky-600' },
  { name: 'Node.js', color: 'text-emerald-600' },
  { name: 'Supabase', color: 'text-emerald-700' },
  { name: 'Razorpay', color: 'text-indigo-600' },
  { name: 'JWT', color: 'text-amber-600' },
  { name: 'Tailwind CSS', color: 'text-cyan-600' },
];

const roles = [
  {
    icon: User,
    title: 'User',
    points: ['Browse cars', 'Instant booking', 'Secure payments'],
  },
  {
    icon: Car,
    title: 'Owner',
    points: ['List cars', 'Manage pricing', 'See earnings'],
  },
  {
    icon: Shield,
    title: 'Admin',
    points: ['Manage users', 'Reports & audits', 'Platform settings'],
  },
];

const TechAndRoles = () => {
  return (
    <section id="roles" className="relative bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-900">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techs.map((t) => (
                <span
                  key={t.name}
                  className={`inline-flex items-center rounded-full border border-indigo-100 bg-white px-3 py-1 text-sm font-medium shadow-sm ${t.color}`}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-indigo-900">User Roles</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {roles.map(({ icon: Icon, title, points }) => (
                <div key={title} className="rounded-xl border border-indigo-100 bg-white p-4 shadow-sm">
                  <div className="mb-3 inline-flex rounded-lg bg-indigo-50 p-2 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold text-indigo-900">{title}</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-indigo-500" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAndRoles;
