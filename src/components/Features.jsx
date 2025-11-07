import { Shield, Clock, Wallet, MapPin } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: Shield, title: 'Verified Partners', desc: 'All trucks and drivers are verified for safety and reliability.' },
    { icon: Clock, title: 'Fast Dispatch', desc: 'Get matched within minutes for urgent deliveries.' },
    { icon: Wallet, title: 'Clear Pricing', desc: 'No surprises—see your estimate upfront before booking.' },
    { icon: MapPin, title: 'Live Tracking', desc: 'Track your shipment end-to-end with precise ETAs.' },
  ];

  return (
    <section id="features" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Built for Trucking</h2>
        <p className="text-gray-600 mt-1">Everything you need to move goods efficiently, only with trucks.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-emerald-100 p-5 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
