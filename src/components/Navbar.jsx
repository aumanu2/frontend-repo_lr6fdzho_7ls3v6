import { useState } from 'react';
import { Truck, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Estimate', href: '#estimate' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
            <Truck size={20} />
          </div>
          <span className="font-semibold text-gray-900">SwiftTruck</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="tel:+1800123456" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
            <Phone size={18} /> Call Now
          </a>
        </nav>

        <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-md hover:bg-emerald-50 text-gray-700">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-white">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <a href="#" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                <Truck size={20} />
              </div>
              <span className="font-semibold text-gray-900">SwiftTruck</span>
            </a>
            <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-emerald-50">
              <X />
            </button>
          </div>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg text-gray-800">
                {item.label}
              </a>
            ))}
            <a href="tel:+1800123456" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-emerald-600 text-white">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
