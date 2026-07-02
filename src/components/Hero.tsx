import Link from "next/link";
import { Phone, ShieldCheck, Star, Clock, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grad-deep text-white">
      <div className="absolute inset-0 grid-lines-dark opacity-70" />
      <div className="container-x relative py-24 lg:py-36 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="kicker text-brand2">
            <span className="h-2 w-2 rounded-full bg-green-400 pulsedot" />
            {site.city}, {site.region} · Licensed & Insured
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-white">
            Aurora&apos;s <span className="text-grad">on-time</span> plumbing team.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-mist/90 max-w-xl leading-relaxed">
            From burst pipes to full repipes, Gridline Plumbing does it right the
            first time — with upfront pricing, clean work, and a guarantee that
            holds. Serving Aurora & the south Denver metro, open 24/7.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn btn-primary text-base">
              <Phone size={20} /> {site.phone}
            </a>
            <Link
              href="/contact"
              className="btn text-base border border-white/25 text-white hover:bg-white/10"
            >
              Book a Visit <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand2" /> Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-2">
              <Star size={18} className="text-brand2" /> 5.0★ on Google
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={18} className="text-brand2" /> 24/7 Emergency
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-van.png"
              alt="Gridline Plumbing service van and team in Aurora, Colorado"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 sm:left-5 bg-white text-ink rounded-xl shadow-xl px-5 py-4 flex items-center gap-4 border border-mist">
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-brand leading-none">5.0★</p>
              <p className="text-xs text-steel mt-1">Google rating</p>
            </div>
            <div className="h-10 w-px bg-mist" />
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-brand leading-none">24/7</p>
              <p className="text-xs text-steel mt-1">Open daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
