import { steps } from "@/lib/site";
import Reveal from "./Reveal";

export default function Steps() {
  return (
    <section className="py-20 bg-fog">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="kicker">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Simple, honest, done.
          </h2>
          <p className="mt-4 text-steel text-lg">
            No runaround, no surprise invoices — just three straightforward steps.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="card p-7 h-full relative">
                <span className="absolute top-5 right-6 font-display font-bold text-5xl text-brand/10">
                  0{i + 1}
                </span>
                <div className="h-14 w-14 rounded-2xl bg-grad grid place-items-center text-white shadow">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-steel leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
