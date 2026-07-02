import Link from "next/link";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { site, nav, services, areas } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-mist mt-auto">
      <div className="grid-lines-dark">
        <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12 w-12" variant="light" />
              <span className="font-display font-bold text-white text-lg">
                Gridline Plumbing
              </span>
            </div>
            <p className="text-sm text-steel leading-relaxed">
              {site.tagline} Licensed, insured, and trusted across Aurora and the
              south Denver metro — open 24 hours, 7 days a week.
            </p>
            <p className="mt-4 text-xs text-steel">{site.license}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-steel hover:text-brand2 transition">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link href="/services" className="text-steel hover:text-brand2 transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 text-mist hover:text-brand2 transition">
                  <Phone size={16} className="text-brand2" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`sms:${site.phoneHref.replace("tel:", "")}`} className="flex items-center gap-2 text-mist hover:text-brand2 transition">
                  <MessageSquare size={16} className="text-brand2" /> Text us anytime
                </a>
              </li>
              <li className="flex items-center gap-2 text-steel">
                <MapPin size={16} className="text-brand2" /> {site.address}
              </li>
              <li className="flex items-center gap-2 text-steel">
                <Clock size={16} className="text-brand2" /> {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-steel">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Serving {areas.slice(0, 5).join(" · ")} & more.</p>
        </div>
      </div>
    </footer>
  );
}
