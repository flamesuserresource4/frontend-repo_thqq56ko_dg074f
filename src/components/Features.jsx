import { Mic, MessageSquare, Zap, Waves } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Natural voice",
    desc: "Lifelike speech synthesis with low-latency streaming.",
  },
  {
    icon: MessageSquare,
    title: "Context aware",
    desc: "Understands conversation history and intent.",
  },
  {
    icon: Zap,
    title: "Fast & reliable",
    desc: "Built on robust infra with global edge routing.",
  },
  {
    icon: Waves,
    title: "Ambient presence",
    desc: "A living aura that reacts to your voice in real time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 text-white/90 hover:bg-slate-900/80 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 mb-4 shadow-[0_0_30px_rgba(168,85,247,0.25)]" />
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-slate-300/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
