import {
  Droplets,
  Wrench,
  ShowerHead,
  Flame,
  Waves,
  HardHat,
  Search,
  Gauge,
  ShieldCheck,
  Clock,
  BadgeCheck,
  ThumbsUp,
  PhoneCall,
  CalendarCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 *  Gridline Plumbing — Aurora, CO
 *  Real brand: slate/charcoal + electric-blue water drop.
 *  TODO markers = swap in real values the client provides.
 * ------------------------------------------------------------------ */

export const site = {
  name: "Gridline Plumbing",
  legalName: "Gridline Plumbing of Aurora",
  city: "Aurora",
  region: "CO",
  phone: "(720) 459-9016",
  phoneHref: "tel:+17204599016",
  address: "1933 Lima St, Aurora, CO 80010",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Gridline+Plumbing+of+Aurora+1933+Lima+St+Aurora+CO+80010",
  hours: "Open 24 Hours · 7 Days a Week",
  license: "Licensed & Insured in Colorado",
  tagline: "Plumbing done right the first time — on the line, on time.",
} as const;

export type NavItem = { label: string; href: string };
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  img: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Repipes & Water Lines",
    desc: "Full-home repipes, main water-line replacement, and crawlspace repairs built to code and built to last.",
    icon: Wrench,
    img: "/images/crawlspace.png",
    points: ["Whole-home repipe", "Main line replacement", "Crawlspace & slab work"],
  },
  {
    title: "Drain & Sewer",
    desc: "Cleared drains, camera-inspected sewer lines, and lasting fixes for recurring backups.",
    icon: Waves,
    img: "/images/roughin.png",
    points: ["Drain cleaning", "Sewer camera inspection", "Line locating & repair"],
  },
  {
    title: "Water Heaters",
    desc: "Tank and tankless installs, repairs, and same-day replacements to get hot water back fast.",
    icon: Flame,
    img: "/images/waterheater.png",
    points: ["Tank & tankless installs", "Fast replacement", "Flush & maintenance"],
  },
  {
    title: "Fixtures & Remodels",
    desc: "Faucets, toilets, showers, and full bath/kitchen rough-ins done clean and inspection-ready.",
    icon: ShowerHead,
    img: "/images/washerbox.png",
    points: ["Faucet & toilet swaps", "Bath & kitchen rough-in", "Fixture upgrades"],
  },
  {
    title: "Leak Detection",
    desc: "Non-invasive leak location that finds the problem before it finds your drywall.",
    icon: Search,
    img: "/images/crawlspace.png",
    points: ["Slab & wall leaks", "Pressure diagnostics", "Water-damage prevention"],
  },
  {
    title: "New Construction",
    desc: "Ground-up and remodel rough-ins for builders and homeowners across the Denver metro.",
    icon: HardHat,
    img: "/images/roughin.png",
    points: ["Rough-in & top-out", "Builder partnerships", "Permits & inspections"],
  },
];

export type Reason = { title: string; desc: string; icon: LucideIcon };
export const reasons: Reason[] = [
  {
    title: "Licensed & Insured",
    desc: "Colorado master-plumber licensed, fully insured, and bonded on every job.",
    icon: ShieldCheck,
  },
  {
    title: "Upfront Pricing",
    desc: "Flat, honest quotes before we start. No surprises, no hourly meter running.",
    icon: BadgeCheck,
  },
  {
    title: "On-Time, Every Time",
    desc: "We respect your schedule — tight arrival windows and a call before we roll up.",
    icon: Clock,
  },
  {
    title: "Workmanship Guarantee",
    desc: "Every repair and install is backed by our satisfaction guarantee.",
    icon: ThumbsUp,
  },
];

export type Stat = { value: string; label: string };
export const stats: Stat[] = [
  { value: "5.0★", label: "Google rating" },
  { value: "24/7", label: "Open every day" },
  { value: "Same-Day", label: "Service available" },
  { value: "100%", label: "Licensed & insured" },
];

export type Step = { title: string; desc: string; icon: LucideIcon };
export const steps: Step[] = [
  {
    title: "Call or Book Online",
    desc: "Tell us what's going on. We'll set a tight arrival window that works for you.",
    icon: PhoneCall,
  },
  {
    title: "Upfront Diagnosis",
    desc: "A licensed tech inspects the issue and gives you a flat, written price before any work.",
    icon: Gauge,
  },
  {
    title: "Clean, Guaranteed Fix",
    desc: "We do it right the first time, clean up after ourselves, and stand behind the work.",
    icon: CalendarCheck,
  },
];

export type Testimonial = { name: string; area: string; text: string; rating: number };
// Real, verbatim 5-star Google reviews for Gridline Plumbing of Aurora.
export const testimonials: Testimonial[] = [
  {
    name: "Adam Goldenberg",
    area: "Google Review · Aurora, CO",
    text: "Called for a non-emergency issue and was surprised they were able to come out the same day. Tech was professional and fixed exactly what the issue was without hunting for other things to fix.",
    rating: 5,
  },
  {
    name: "Jeremy Zimmerman",
    area: "Google Review · Aurora, CO",
    text: "Had a toilet issue where it was constantly draining and wasting water, running up my water bill unnecessarily. Gridline made it super easy to get someone out and get the issue fixed.",
    rating: 5,
  },
];

export const areas: string[] = [
  "Aurora",
  "Centennial",
  "Parker",
  "Denver",
  "Littleton",
  "Highlands Ranch",
  "Englewood",
  "Greenwood Village",
  "Lone Tree",
  "Castle Rock",
];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  {
    q: "Do you offer emergency plumbing service?",
    a: "Yes. We run 24/7 emergency service across Aurora and the south Denver metro for burst pipes, major leaks, sewer backups, and no-hot-water calls. Call us and a licensed tech will be dispatched right away.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Gridline Plumbing is Colorado master-plumber licensed, fully insured, and bonded. We pull proper permits and our work passes inspection — every time.",
  },
  {
    q: "How does your pricing work?",
    a: "We diagnose the issue first, then give you a flat, written price before any work begins. You approve it up front — no hourly meter and no surprise charges at the end.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Aurora and serve the surrounding south Denver metro, including Centennial, Parker, Littleton, Highlands Ranch, Denver, and Castle Rock.",
  },
  {
    q: "Do you handle new construction and remodels?",
    a: "Yes — we do rough-ins, top-outs, and full fixture sets for both homeowners' remodels and builder partnerships. Clean, code-compliant work that's ready for inspection.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Every repair and installation is backed by our workmanship and satisfaction guarantee. If something isn't right, we make it right.",
  },
];

export type GalleryItem = { img: string; title: string; tag: string };
export const gallery: GalleryItem[] = [
  { img: "/images/hero-van.png", title: "Our Aurora Service Team", tag: "The Crew" },
  { img: "/images/crawlspace.png", title: "Crawlspace Main-Line Repipe", tag: "Repipe" },
  { img: "/images/waterheater.png", title: "Water Heater & Expansion Tank Install", tag: "Water Heaters" },
  { img: "/images/washerbox.png", title: "Washer Box & Copper Valve Set", tag: "Fixtures" },
  { img: "/images/roughin.png", title: "Bath Drain & Vent Rough-In", tag: "New Construction" },
];
