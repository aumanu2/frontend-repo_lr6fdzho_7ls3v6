import { Shield, Clock, Wallet, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast pickups',
    desc: 'Partners arrive within minutes for urgent deliveries and relocations.'
  },
  {
    icon: Shield,
    title: 'Trusted & safe',
    desc: 'Verified partners, live tracking, and support at every step.'
  },
  {
    icon: Wallet,
    title: 'Upfront pricing',
    desc: 'Transparent fares with no surprises. Pay online or in cash.'
  },
  {
    icon: Smartphone,
    title: 'Seamless app experience',
    desc: 'Simple booking with real-time updates and trip history.'
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why choose us</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
        Everything you need to move goods quickly and reliably, inspired by the best of on-demand logistics apps.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <f.icon className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
