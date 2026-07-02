import { Star, Quote } from "lucide-react";
import { testimonials, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="kicker justify-center">Reviews</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Rated 5.0 on Google.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-fog px-4 py-2">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-display font-semibold text-ink text-sm">
              5.0 · Verified Google Reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="card h-full p-7 flex flex-col">
                <Quote size={32} className="text-brand/25" />
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={17} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-slate2 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-mist flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-grad grid place-items-center text-white font-display font-bold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-steel">{t.area}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Star size={18} className="fill-amber-400 text-amber-400" /> Read our Google reviews
          </a>
        </Reveal>
      </div>
    </section>
  );
}
