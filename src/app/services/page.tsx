import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Plumbing Services in Aurora, CO",
  description:
    "Repipes & water lines, drain & sewer, water heaters, leak detection, fixtures & remodels, and new construction plumbing across Aurora and the south Denver metro.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Full-service plumbing for the south Denver metro."
        subtitle="Whatever the job — a leaky faucet or a whole-home repipe — Gridline brings licensed crews, upfront pricing, and work that passes inspection."
      />
      <Services
        heading="Everything we do"
        subheading="Residential, remodel, and new-construction plumbing handled by one trusted local team."
      />
      <Steps />
      <Faq />
      <CTA />
    </>
  );
}
