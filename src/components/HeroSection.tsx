import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calculator, ShoppingCart, Users, Award } from "lucide-react";
import heroImage from "@/assets/casio-cash-register.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary/5 geometric-bg">
      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full floating-element z-10"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-tr from-primary/20 to-secondary/20 transform rotate-45 floating-delayed z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-full floating-element z-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"> 
                  Caisses Enregistreuses{" "}
                </span>
                <br />Commerce de Proximité
              </h1>
              <p className="text-lg text-muted-foreground">
                29 ans d'expertise • Solutions Casio • Service régional
              </p>
            </div>

            {/* Key Icons */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Casio Expert</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Commerce Local</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Service Proximité</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">29 ans</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Nos Caisses
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth">
                <Users className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong shape-diagonal">
              <img
                src={heroImage}
                alt="Caisse enregistreuse Casio - Solutions professionnelles Sys-Info"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-primary/10 to-transparent" />
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/40 rounded-full animate-pulse"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-medium p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">29+</div>
                <div className="text-sm text-muted-foreground">années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;