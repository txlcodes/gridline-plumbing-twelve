import { Droplet } from "lucide-react";

const items = [
  "Repipes & Water Lines",
  "Drain & Sewer",
  "Water Heaters",
  "Leak Detection",
  "Fixtures & Remodels",
  "New Construction",
  "24/7 Emergency Service",
  "Upfront Pricing",
];

export default function Marquee() {
  return (
    <div className="bg-ink text-white py-4 overflow-hidden border-y border-white/10">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3 px-8 font-display font-medium text-mist whitespace-nowrap">
            <Droplet size={16} className="text-brand2" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
