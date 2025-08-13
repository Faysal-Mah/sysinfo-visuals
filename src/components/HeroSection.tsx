import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/bureautique-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Votre partenaire
                <span className="gradient-hero bg-clip-text text-transparent"> 
                  {" "}technologique{" "}
                </span>
                de confiance
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Depuis plus de 29 ans, Sys-Info accompagne les entreprises de la région 
                avec des solutions informatiques complètes et personnalisées.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                "Conseil personnalisé et expertise technique",
                "Intervention rapide sur site ou en atelier", 
                "Support technique toutes marques"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="transition-smooth">
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Services informatiques professionnels Sys-Info"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
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