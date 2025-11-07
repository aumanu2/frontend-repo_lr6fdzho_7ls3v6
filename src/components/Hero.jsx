import { Rocket, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 via-emerald-500 to-emerald-400 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Rocket className="mr-2 h-4 w-4" />
              On-demand logistics for your city
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Move anything, anywhere
              <span className="block text-emerald-900">in minutes</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-emerald-50/90">
              Book reliable 2-wheeler, mini-truck, or tempo for instant pickups and safe deliveries. Real-time tracking, transparent pricing, and top-rated partners.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={scrollToEstimator} className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 shadow hover:shadow-lg transition">
                Get Instant Estimate
              </button>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">
                <Phone className="h-5 w-5" /> Call to Book
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-emerald-50/90">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 50+ cities</div>
              <div>1M+ deliveries</div>
              <div>4.8★ rated partners</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/10 p-2 shadow-2xl ring-1 ring-white/30 backdrop-blur">
              <div className="h-full w-full rounded-xl bg-white/90 p-4 text-emerald-700">
                <div className="mb-4 flex items-center justify-between">
                  <div className="font-semibold">Live Tracking</div>
                  <div className="text-xs text-emerald-600">secure</div>
                </div>
                <div className="grid h-56 grid-cols-6 grid-rows-4 gap-2">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`rounded-md ${i % 5 === 0 ? 'bg-emerald-500' : 'bg-emerald-200'}`} />)
                  )}
                </div>
                <div className="mt-4 h-2 w-3/4 rounded-full bg-emerald-200">
                  <div className="h-2 w-1/2 rounded-full bg-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
