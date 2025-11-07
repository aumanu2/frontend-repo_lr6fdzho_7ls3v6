import { ArrowDownRight, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            On-demand Trucking for Your Business
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Book reliable trucks in minutes. Transparent pricing, live tracking, and professional drivers—built for fast-moving businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#estimate" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
              Get a Truck
              <ArrowDownRight size={18} />
            </a>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex items-center gap-1"><Shield size={18} className="text-emerald-600" /><span>Insured Loads</span></div>
              <div className="flex items-center gap-1"><Clock size={18} className="text-emerald-600" /><span>ETA in mins</span></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-emerald-100 bg-white shadow-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Live Truck Nearby</p>
                <p className="text-xl font-semibold text-gray-900">3 mins away</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-emerald-100" />
            </div>
            <div className="mt-4 h-48 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100" />
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Tracking enabled</span>
              <span>Safe & verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
