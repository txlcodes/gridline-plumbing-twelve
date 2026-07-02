import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-grad-deep text-white px-8 py-14 sm:px-14 text-center">
            <div className="absolute inset-0 grid-lines-dark opacity-60" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                Got a plumbing problem? Let&apos;s fix it right.
              </h2>
              <p className="mt-4 text-mist/90 max-w-xl mx-auto text-lg">
                Call now for fast, honest service in Aurora & the south Denver metro —
                or book a visit online. 24/7 emergency response available.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a href={site.phoneHref} className="btn btn-primary text-base">
                  <Phone size={20} /> {site.phone}
                </a>
                <Link href="/contact" className="btn text-base border border-white/25 text-white hover:bg-white/10">
                  Book Online <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
