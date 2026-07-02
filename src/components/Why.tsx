import { reasons, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Why() {
  return (
    <section className="py-20 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-mist">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/crawlspace.png"
              alt="Gridline Plumbing crawlspace repipe work in Aurora"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow font-display font-semibold text-sm text-ink">
              Real work. Real crews.
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="kicker">Why Gridline</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              The plumber your neighbors actually recommend.
            </h2>
            <p className="mt-4 text-steel text-lg leading-relaxed">
              We built Gridline on the stuff other plumbers skip: showing up when we
              said we would, quoting an honest price, and leaving the job cleaner than
              we found it. That&apos;s why Aurora keeps calling us back.
            </p>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-brand/10 grid place-items-center">
                    <r.icon size={22} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-steel leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 text-sm text-steel">
              <span className="font-display font-semibold text-ink">{site.license}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
