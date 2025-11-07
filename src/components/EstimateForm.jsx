import { useState, useMemo } from 'react';
import { MapPin, Package, Bike, Truck } from 'lucide-react';

const VEHICLES = [
  { id: 'bike', label: 'Bike', icon: Bike, base: 30, perKm: 8, max: '20 kg' },
  { id: 'mini', label: 'Mini Truck', icon: Package, base: 80, perKm: 14, max: '400 kg' },
  { id: 'tempo', label: 'Tempo', icon: Truck, base: 120, perKm: 18, max: '800 kg' },
];

export default function EstimateForm() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [distance, setDistance] = useState(5);
  const [vehicle, setVehicle] = useState('bike');

  const vehicleMeta = useMemo(() => VEHICLES.find(v => v.id === vehicle) || VEHICLES[0], [vehicle]);
  const estimate = useMemo(() => {
    const d = Math.max(0, Number(distance) - 2);
    return vehicleMeta.base + vehicleMeta.perKm * d;
  }, [vehicleMeta, distance]);

  return (
    <section id="estimator" className="relative -mt-12 z-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900">Get an instant fare</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Pickup location" className="w-full border-none outline-none" />
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
                <MapPin className="h-5 w-5 rotate-180 text-emerald-600" />
                <input value={drop} onChange={e=>setDrop(e.target.value)} placeholder="Drop location" className="w-full border-none outline-none" />
              </label>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Approx. distance: {distance} km</label>
                <input type="range" min={1} max={50} value={distance} onChange={e=>setDistance(parseInt(e.target.value))} className="mt-2 w-full" />
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-3">
              {VEHICLES.map(v => (
                <button key={v.id} onClick={()=>setVehicle(v.id)} className={`flex w-full items-center justify-between rounded-xl border p-3 transition ${vehicle===v.id?'border-emerald-500 bg-emerald-50':'border-gray-200 hover:border-emerald-300'}`}>
                  <div className="flex items-center gap-3">
                    <v.icon className="h-6 w-6 text-emerald-600" />
                    <div>
                      <div className="font-medium">{v.label}</div>
                      <div className="text-xs text-gray-500">Up to {v.max}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Base ₹{v.base}</div>
                    <div className="text-xs text-gray-400">₹{v.perKm}/km</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <div className="text-sm text-gray-600">Estimated fare</div>
          <div className="text-3xl font-bold text-emerald-700">₹{estimate.toFixed(0)}</div>
          <button className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-700">Request Pickup</button>
        </div>
      </div>
    </section>
  );
}
