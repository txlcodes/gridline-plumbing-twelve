import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services({
  heading = "What we do",
  subheading = "Full-service plumbing for homes and builders across the south Denver metro — done to code, done clean.",
  limit,
}: {
  heading?: string;
  subheading?: string;
  limit?: number;
}) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-20 bg-paper">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="kicker">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 text-steel text-lg leading-relaxed">{subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="card h-full overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 h-11 w-11 rounded-xl bg-white grid place-items-center shadow">
                    <s.icon size={22} className="text-brand" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-slate2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link href="/services" className="btn btn-ghost">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
