import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Volume2, Calculator, Wrench } from "lucide-react";
import audiovisuelImage from "@/assets/audiovisuel-service.jpg";
import caissesImage from "@/assets/caisses-service.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";

const services = [
  {
    icon: Monitor,
    title: "Bureautique / Informatique",
    description: "Vente toutes marques, dépannage en atelier ou sur site, livraison et configuration, consommables et périphériques",
    image: audiovisuelImage, // Will use hero image as reference
    features: ["Vente toutes marques", "Dépannage sur site", "Configuration complète"]
  },
  {
    icon: Volume2,
    title: "Audio-visuel",
    description: "Étude des salles, conseil, montage et installation complète, incluant tirage du câblage et électricité",
    image: audiovisuelImage,
    features: ["Étude personnalisée", "Installation complète", "Réparation toutes marques"]
  },
  {
    icon: Calculator,
    title: "Caisses enregistreuses",
    description: "Conseil et vente, programmation complète et personnalisée, caisses alpha-numériques ou tactiles",
    image: caissesImage,
    features: ["Solutions sur mesure", "Formation incluse", "Support technique"]
  },
  {
    icon: Wrench,
    title: "Maintenance / Dépannage",
    description: "Intervention rapide, diagnostic professionnel et réparation sur site ou en atelier avec pièces d'origine",
    image: maintenanceImage,
    features: ["Intervention rapide", "Diagnostic professionnel", "Pièces d'origine"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins technologiques professionnels
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-0 shadow-soft bg-card/80 backdrop-blur-sm"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={`Service ${service.title} - Sys-Info`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
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