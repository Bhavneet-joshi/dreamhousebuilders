import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import StatsSection from "@/components/StatsSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import MostRequestedServices from "@/components/MostRequestedServices";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "DREAM HOUSE BUILDERS LTD - Expert Construction Services";
  }, []);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <MostRequestedServices />
      <ProjectShowcase />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <section className="py-12 border-t border-[rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Building Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/attached_assets/a1.png" alt="Partner 1" className="h-24 w-auto object-contain" />
            <img src="/attached_assets/a2.png" alt="Partner 2" className="h-24 w-auto object-contain" />
            <img src="/attached_assets/a3.jpg" alt="Partner 3" className="h-24 w-auto object-contain" />
            <img src="/attached_assets/a3.png" alt="Partner 4" className="h-24 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
