import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work — Plumbing Project Gallery",
  description:
    "See real plumbing work from Gridline Plumbing across Aurora and the Denver metro — repipes, rough-ins, drain & sewer, and water-line projects.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Our Work"
        title="Real jobs. Real crews. Real results."
        subtitle="A look at the kind of clean, code-compliant plumbing work we bring to every home and jobsite across the metro."
      />

      <section className="py-20 bg-paper">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <figure className="card overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.img}
                      alt={g.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand text-white text-xs font-display font-semibold px-3 py-1 rounded-full">
                      {g.tag}
                    </span>
                  </div>
                  <figcaption className="p-4 font-display font-medium text-ink">
                    {g.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
