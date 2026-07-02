import type { Metadata } from "next";
import { ShieldCheck, Heart, Wrench, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Gridline Plumbing — Aurora's Local Plumber",
  description:
    "Gridline Plumbing of Aurora is a licensed, locally owned plumbing company serving Aurora and the south Denver metro 24/7 with upfront pricing and guaranteed work.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity first", desc: "Honest quotes, honest work, honest advice — even when it means a smaller job." },
  { icon: Wrench, title: "Craftsmanship", desc: "Clean, code-compliant installs we'd be proud to show any inspector." },
  { icon: Heart, title: "Neighborly service", desc: "We treat your home like our own and your time like it matters — because it does." },
  { icon: MapPin, title: "Local roots", desc: "Aurora-based and metro-proud. When you call, you get people who know the area." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Built on showing up and doing it right."
        subtitle="Gridline Plumbing of Aurora is a locally owned team serving Aurora and the south Denver metro around the clock. We're the crew your neighbors trust for honest, on-time plumbing."
      />

      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-mist">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-van.png"
                alt="The Gridline Plumbing team and service van in Aurora, Colorado"
                className="w-full h-[440px] object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="kicker">Our Story</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                A local plumber you can actually count on.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-5 space-y-4 text-steel text-lg leading-relaxed">
                <p>
                  Gridline started with a simple frustration: too many plumbers show up
                  late, quote high, and leave a mess. We set out to be the opposite —
                  the company that answers the phone, arrives on time, and treats your
                  home with respect.
                </p>
                <p>
                  We&apos;re a licensed, insured team serving Aurora and the
                  surrounding metro with everything from emergency repairs to full-home
                  repipes and new-construction rough-ins — open 24 hours, 7 days a week.
                  Every job, big or small, gets the same upfront pricing and the same
                  guarantee.
                </p>
                <p className="font-display font-semibold text-ink">
                  {site.license}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-20 bg-fog">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="kicker">What We Stand For</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Our values</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <div className="h-12 w-12 rounded-xl bg-brand/10 grid place-items-center">
                    <v.icon size={22} className="text-brand" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
