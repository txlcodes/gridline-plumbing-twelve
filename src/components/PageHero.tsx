import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle: string;
  crumb: string;
}) {
  return (
    <section className="relative bg-grad-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-lines-dark opacity-70" />
      <div className="container-x relative py-16 sm:py-20">
        <nav className="flex items-center gap-1.5 text-sm text-mist/70">
          <Link href="/" className="hover:text-brand2">Home</Link>
          <ChevronRight size={14} />
          <span className="text-brand2">{crumb}</span>
        </nav>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white max-w-3xl">{title}</h1>
        <p className="mt-4 text-lg text-mist/90 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
