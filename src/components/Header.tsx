"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";
import Logo from "./Logo";
import { site, nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* utility bar */}
      <div className="bg-ink text-mist text-sm">
        <div className="container-x flex items-center justify-between py-2">
          <div className="hidden sm:flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-brand2" /> {site.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-brand2" /> {site.city}, {site.region}
            </span>
          </div>
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="hidden xs:inline text-steel">Licensed & Insured ·</span>
            <a href={site.phoneHref} className="font-display font-semibold text-white hover:text-brand2 transition">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* main nav */}
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
        }`}
      >
        <div className="container-x flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="leading-tight">
              <span className="block font-display font-bold text-ink text-lg tracking-tight">
                Gridline Plumbing
              </span>
              <span className="block text-xs text-steel tracking-wide">
                {site.city}, {site.region} · Licensed & Insured
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-display font-medium text-sm transition ${
                    active
                      ? "text-brand bg-brand/8"
                      : "text-slate2 hover:text-brand hover:bg-fog"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="btn btn-primary hidden sm:inline-flex">
              <Phone size={18} /> Call Now
            </a>
            <button
              className="lg:hidden p-2 text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-mist bg-white">
            <nav className="container-x py-3 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 px-2 font-display font-medium border-b border-fog ${
                    pathname === item.href ? "text-brand" : "text-slate2"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a href={site.phoneHref} className="btn btn-primary mt-4 justify-center">
                <Phone size={18} /> {site.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
