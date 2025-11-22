import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_rgba(168,85,247,0.35)]" />
          <span className="text-white font-semibold tracking-tight text-lg">Auraline AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
            Get started
          </a>
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden text-white/90">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl text-white overflow-hidden">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-slate-200/90 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="block py-2 text-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
