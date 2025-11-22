import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Soft grid/pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,#a78bfa_0%,transparent_40%),radial-gradient(600px_circle_at_80%_0%,#22d3ee_0%,transparent_40%),radial-gradient(700px_circle_at_50%_100%,#f59e0b_0%,transparent_45%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* How it works */}
        <section id="how" className="relative py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-4 text-slate-300/85 max-w-2xl mx-auto">
              Speak naturally and the agent responds instantly. It listens, understands context, and replies with lifelike voice while the ambient aura reacts in real time.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { n: '1', t: 'Start a conversation', d: 'Open the mic and say hello. The session begins in under a second.' },
                { n: '2', t: 'Exchange ideas', d: 'Ask questions or give tasks. It tracks context across turns.' },
                { n: '3', t: 'Take action', d: 'Connect tools and let it execute steps with your guidance.' },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 text-left">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-sm text-white/90">{s.n}</div>
                  <h3 className="mt-4 font-semibold text-white">{s.t}</h3>
                  <p className="mt-1 text-sm text-slate-300/80">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing (simple placeholder) */}
        <section id="pricing" className="relative py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple pricing</h2>
            <p className="mt-3 text-slate-300/85">Start free, scale as you grow.</p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { name: 'Starter', price: 'Free', features: ['200 minutes', 'Community support'] },
                { name: 'Pro', price: '$29/mo', features: ['3,000 minutes', 'Priority support'] },
                { name: 'Scale', price: 'Custom', features: ['Unlimited minutes', 'SLA & SSO'] },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <div className="mt-2 text-3xl font-semibold">{p.price}</div>
                  <ul className="mt-4 space-y-1 text-sm text-slate-300/85">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10 transition-colors">
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
