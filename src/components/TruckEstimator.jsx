import { useMemo, useState } from 'react';
import { MapPin, Truck, Gauge } from 'lucide-react';

const VEHICLES = [
  { key: 'mini', name: 'Mini Truck', base: 120, perKm: 18, capacity: '600 kg' },
  { key: 'pickup', name: 'Pickup', base: 180, perKm: 22, capacity: '1000 kg' },
  { key: 'tempo', name: 'Tempo', base: 240, perKm: 28, capacity: '1500 kg' },
  { key: 'medium', name: 'Medium Truck', base: 350, perKm: 32, capacity: '2500 kg' },
];

export default function TruckEstimator() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [distance, setDistance] = useState(8);
  const [vehicle, setVehicle] = useState('pickup');

  const fare = useMemo(() => {
    const v = VEHICLES.find((x) => x.key === vehicle) || VEHICLES[0];
    return Math.round(v.base + distance * v.perKm);
  }, [vehicle, distance]);

  return (
    <section id="estimate" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Truck Fare Estimator</h2>
          <p className="text-gray-600 mt-1">Get an instant estimate for your goods movement. Truck-only options for reliability and capacity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-xl border border-emerald-100 p-5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Pickup</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border bg-white px-3 py-2">
                  <MapPin className="text-emerald-600" size={18} />
                  <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Warehouse or address" className="w-full outline-none placeholder:text-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Drop</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border bg-white px-3 py-2">
                  <MapPin className="text-rose-600" size={18} />
                  <input value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="Destination address" className="w-full outline-none placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-600 flex items-center gap-2"><Gauge size={16} className="text-emerald-600" /> Distance (km)</label>
              <div className="mt-2 flex items-center gap-4">
                <input type="range" min={1} max={50} value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full accent-emerald-600" />
                <span className="w-12 text-right font-medium text-gray-800">{distance}</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Select truck</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {VEHICLES.map((v) => (
                  <button key={v.key} onClick={() => setVehicle(v.key)} className={`rounded-lg border p-3 text-left hover:border-emerald-400 transition ${vehicle === v.key ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-2">
                      <Truck size={18} className="text-emerald-600" />
                      <span className="font-medium text-gray-800">{v.name}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Capacity: {v.capacity}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-emerald-100 p-5 bg-emerald-50/50">
            <p className="text-sm text-gray-600">Estimated Fare</p>
            <p className="mt-1 text-4xl font-bold text-gray-900">₹{fare}</p>
            <p className="text-xs text-gray-500">Includes base fare and per-km charges</p>
            <div className="mt-4 rounded-lg bg-white border p-3 text-sm">
              <p className="text-gray-700"><span className="font-medium">Pickup:</span> {pickup || '—'}</p>
              <p className="text-gray-700"><span className="font-medium">Drop:</span> {drop || '—'}</p>
              <p className="text-gray-700"><span className="font-medium">Distance:</span> {distance} km</p>
            </div>
            <button className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
              Book This Truck
            </button>
            <p className="mt-3 text-xs text-gray-500">Final fare may vary with traffic, route, and waiting time.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
