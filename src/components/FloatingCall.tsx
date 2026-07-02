import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      className="fixed bottom-5 right-5 z-40 btn btn-primary shadow-lg floaty"
      aria-label={`Call ${site.name}`}
    >
      <Phone size={18} />
      <span className="hidden sm:inline">Call {site.phone}</span>
      <span className="sm:hidden">Call</span>
    </a>
  );
}
