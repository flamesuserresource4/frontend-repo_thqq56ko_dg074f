import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center" id="hero">
      {/* Background gradient aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_45%),radial-gradient(circle_at_60%_60%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_40%_70%,rgba(251,191,36,0.12),transparent_40%)] blur-2xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-28 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AI Voice Agent • Real-time • Multimodal
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
            Meet your always-on voice AI with a radiant digital aura
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200/85">
            A minimal, futuristic landing page template featuring an interactive Spline animation and clean, modern typography.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" id="cta">
            <a href="#signup" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-medium px-6 py-3 shadow-[0_10px_30px_rgba(255,255,255,0.12)] hover:shadow-[0_12px_36px_rgba(255,255,255,0.18)] transition-shadow">
              Try it free
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/10 transition-colors">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
