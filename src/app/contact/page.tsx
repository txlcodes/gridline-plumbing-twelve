import type { Metadata } from "next";
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Areas from "@/components/Areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Gridline Plumbing — Aurora, CO",
  description:
    "Call or book online with Gridline Plumbing in Aurora, CO. 24/7 emergency plumbing, upfront pricing, and guaranteed work across the south Denver metro.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's get your plumbing sorted."
        subtitle="Call for fast service or request a visit below. For emergencies, calling is always fastest — we answer 24/7."
      />

      <section className="py-20 bg-paper">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <span className="kicker">Get In Touch</span>
            <h2 className="mt-3 text-3xl font-bold">Reach the Gridline team</h2>
            <p className="mt-4 text-steel text-lg leading-relaxed">
              We&apos;re here for Aurora and the south Denver metro — for the 2am burst
              pipe and the planned kitchen remodel alike.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard icon={Phone} label="Call Us" value={site.phone} href={site.phoneHref} accent />
              <ContactCard icon={MessageSquare} label="Text Us" value={site.phone} href={`sms:${site.phoneHref.replace("tel:", "")}`} />
              <ContactCard icon={MapPin} label="Visit / Service Area" value={site.address} href={site.mapsHref} />
              <ContactCard icon={Clock} label="Hours" value={site.hours} />
            </div>

            <div className="mt-8 card p-5 flex items-start gap-3 bg-white">
              <ShieldCheck size={22} className="text-brand shrink-0 mt-0.5" />
              <p className="text-sm text-steel">
                <span className="font-display font-semibold text-ink">Licensed & insured.</span>{" "}
                {site.license}. Fully bonded on every job, with a workmanship guarantee.
              </p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Areas />
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className={`card p-5 flex items-center gap-4 ${accent ? "bg-grad text-white border-transparent" : "bg-white"}`}>
      <div className={`h-12 w-12 rounded-xl grid place-items-center shrink-0 ${accent ? "bg-white/20" : "bg-brand/10"}`}>
        <Icon size={22} className={accent ? "text-white" : "text-brand"} />
      </div>
      <div>
        <p className={`text-xs font-medium tracking-wide ${accent ? "text-white/80" : "text-steel"}`}>{label}</p>
        <p className={`font-display font-semibold ${accent ? "text-white" : "text-ink"}`}>{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
