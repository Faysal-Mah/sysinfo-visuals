import { Button } from "@/components/ui/button";
import { Printer, Monitor, Calculator, Volume2, Award, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary/5 geometric-bg">
      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full floating-element z-10"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-tr from-primary/20 to-secondary/20 transform rotate-45 floating-delayed z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-full floating-element z-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Votre partenaire{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                informatique
              </span>
              <br />depuis 29 ans
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Bureautique • Informatique • Caisses enregistreuses • Audio-visuel
            </p>
          </div>

          {/* Services Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <button 
              onClick={() => scrollToSection("bureautique")}
              className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-card/50 hover:bg-card hover:shadow-medium transition-smooth group"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Printer className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium text-foreground">Bureautique</span>
            </button>
            <button 
              onClick={() => scrollToSection("informatique")}
              className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-card/50 hover:bg-card hover:shadow-medium transition-smooth group"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium text-foreground">Informatique</span>
            </button>
            <button 
              onClick={() => scrollToSection("caisses")}
              className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-card/50 hover:bg-card hover:shadow-medium transition-smooth group"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium text-foreground">Caisses</span>
            </button>
            <button 
              onClick={() => scrollToSection("audiovisuel")}
              className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-card/50 hover:bg-card hover:shadow-medium transition-smooth group"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Volume2 className="h-8 w-8 text-primary" />
              </div>
              <span className="font-medium text-foreground">Audio-visuel</span>
            </button>
          </div>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">29+</strong> années d'expérience</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">2</strong> succursales</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">500+</strong> caisses installées</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
              onClick={() => window.location.href = "/offre"}
            >
              Demande d'offre
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="transition-smooth"
              onClick={() => scrollToSection("contact")}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
