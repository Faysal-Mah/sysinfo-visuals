import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Volume2, Calculator, Wrench } from "lucide-react";
import audiovisuelImage from "@/assets/audiovisuel-service.jpg";
import caissesImage from "@/assets/caisses-service.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";

const services = [
  {
    icon: Calculator,
    title: "Caisses enregistreuses",
    description: "Spécialistes des solutions de caisse pour commerces. Caisses alpha-numériques et tactiles, programmation sur mesure selon votre activité.",
    image: caissesImage,
    features: ["Solutions personnalisées", "Formation complète", "Programmation sur mesure", "Support technique dédié"],
    highlight: true
  },
  {
    icon: Monitor,
    title: "Bureautique / Informatique",
    description: "Solutions informatiques complètes pour professionnels : vente, installation, maintenance et support technique toutes marques.",
    image: audiovisuelImage,
    features: ["Vente toutes marques", "Dépannage sur site", "Configuration complète"]
  },
  {
    icon: Volume2,
    title: "Audio-visuel",
    description: "Étude, conseil et installation d'équipements audio-visuels professionnels avec câblage et mise en service complète.",
    image: audiovisuelImage,
    features: ["Étude personnalisée", "Installation complète", "Réparation toutes marques"]
  },
  {
    icon: Wrench,
    title: "Maintenance / Dépannage",
    description: "Intervention rapide sur site ou en atelier. Diagnostic professionnel et réparation avec pièces d'origine certifiées.",
    image: maintenanceImage,
    features: ["Intervention rapide", "Diagnostic professionnel", "Pièces d'origine"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle geometric-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full floating-element"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/20 transform rotate-12 floating-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experts en caisses enregistreuses et partenaires privilégiés du commerce de proximité
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-medium transition-smooth border-0 shadow-soft bg-card/80 backdrop-blur-sm relative overflow-hidden ${
                service.highlight ? 'ring-2 ring-primary/50 shadow-strong' : ''
              }`}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={`Service ${service.title} - Sys-Info`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4 floating-element">
                  <service.icon className="h-8 w-8 text-primary-foreground drop-shadow-lg" />
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/30 to-transparent shape-primary"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl shadow-medium p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Services supplémentaires
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Livraison / Installation</h4>
                <p className="text-muted-foreground text-sm">
                  Service complet de livraison et installation sur site avec mise en service et formation utilisateur.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Support Technique</h4>
                <p className="text-muted-foreground text-sm">
                  Assistance technique rapide et professionnelle pour maintenir votre productivité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;