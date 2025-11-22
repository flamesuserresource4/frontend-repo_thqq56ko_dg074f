export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-300/70 text-sm">© 2025 Auraline AI. All rights reserved.</p>
        <div className="flex items-center gap-6 text-slate-300/80 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  );
}
