import { MapPin, Navigation } from "lucide-react";
import { areas, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Areas() {
  return (
    <section className="py-20 bg-fog">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <span className="kicker">Service Area</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Proudly serving Aurora & the south Denver metro.
            </h2>
            <p className="mt-4 text-steel text-lg leading-relaxed">
              Based in {site.city}, we cover the surrounding communities with fast
              response times and local crews who know the area&apos;s homes and codes.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 bg-white border border-mist rounded-full px-4 py-2 text-sm font-medium text-slate2"
                >
                  <MapPin size={14} className="text-brand" /> {a}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-mist bg-white">
            <iframe
              title="Gridline Plumbing of Aurora — 1933 Lima St, Aurora, CO 80010"
              src="https://www.google.com/maps?q=1933+Lima+St,+Aurora,+CO+80010&output=embed"
              className="w-full h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
