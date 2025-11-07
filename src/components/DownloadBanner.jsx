import { Apple, Play } from 'lucide-react';

export default function DownloadBanner() {
  return (
    <section id="download" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-10 text-white shadow-xl">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Get the SwiftPort app</h2>
            <p className="mt-2 max-w-xl text-emerald-50/90">Book, track, and manage deliveries on the go. Available on iOS and Android.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-900">
                <Apple className="h-5 w-5"/> App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow hover:shadow-lg">
                <Play className="h-5 w-5"/> Google Play
              </a>
            </div>
          </div>
          <div className="pointer-events-none select-none">
            <div className="mx-auto h-72 w-full max-w-sm rounded-3xl bg-white/10 p-2 ring-1 ring-white/30 backdrop-blur">
              <div className="h-full w-full rounded-2xl bg-white p-4 text-emerald-700">
                <div className="mb-3 text-sm font-semibold">Trip summary</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Pickup</span><span className="text-gray-500">HSR Layout</span></div>
                  <div className="flex justify-between"><span>Drop</span><span className="text-gray-500">Indiranagar</span></div>
                  <div className="flex justify-between"><span>Distance</span><span className="text-gray-500">8.4 km</span></div>
                  <div className="flex justify-between"><span>Vehicle</span><span className="text-gray-500">Mini Truck</span></div>
                  <div className="flex justify-between font-semibold text-emerald-700"><span>Fare</span><span>₹ 198</span></div>
                </div>
                <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-700">Live updates, driver contact, and invoice in app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
