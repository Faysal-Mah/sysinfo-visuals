import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import RegionalSection from "@/components/RegionalSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesCarousel />
        <AboutSection />
        <ServicesSection />
        <RegionalSection />
        <ContactSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
