import { stats } from "@/lib/site";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="py-16 bg-grad-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines-dark opacity-60" />
      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center">
            <p className="font-display font-bold text-4xl sm:text-5xl text-grad">{s.value}</p>
            <p className="mt-2 text-sm text-mist/80 tracking-wide">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
