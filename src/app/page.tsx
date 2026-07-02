import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Areas from "@/components/Areas";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services
        heading="Plumbing services, done right"
        subheading="From emergency repairs to full remodels, Gridline handles it all — with the same upfront pricing and clean workmanship every time."
        limit={6}
      />
      <Why />
      <Stats />
      <Steps />
      <Testimonials />
      <Areas />
      <Faq />
      <CTA />
    </>
  );
}
