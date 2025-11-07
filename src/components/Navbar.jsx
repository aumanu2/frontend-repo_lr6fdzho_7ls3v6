import { Menu, Smartphone, Truck } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-emerald-700">
            <Truck className="h-6 w-6" /> SwiftPort
          </a>
          <nav className="hidden items-center gap-8 text-sm text-gray-700 md:flex">
            <a href="#estimator" className="hover:text-emerald-700">Estimate</a>
            <a href="#features" className="hover:text-emerald-700">Features</a>
            <a href="#download" className="hover:text-emerald-700">Download</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#download" className="hidden rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 md:inline-flex">
              <Smartphone className="mr-2 h-4 w-4" /> Get the app
            </a>
            <button onClick={()=>setOpen(!open)} className="inline-flex rounded-md border p-2 md:hidden"><Menu /></button>
          </div>
        </div>
        {open && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <a href="#estimator" className="rounded-md px-3 py-2 hover:bg-gray-50">Estimate</a>
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-gray-50">Features</a>
              <a href="#download" className="rounded-md px-3 py-2 hover:bg-gray-50">Download</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
