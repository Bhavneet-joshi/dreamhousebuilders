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
    </>
  );
}
