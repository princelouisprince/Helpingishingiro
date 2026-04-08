import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ImpactSection />
    <TeamSection />
    <TestimonialsSection />
    <DonateSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
