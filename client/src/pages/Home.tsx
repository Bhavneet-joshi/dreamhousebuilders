import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import StatsSection from "@/components/StatsSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Nova Construct - Expert Construction Services";
  }, []);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ProjectShowcase />
      <AboutSection />
      <ContactSection />
    </>
  );
}
