import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Volume2, Calculator, Wrench, Settings, Zap, CheckCircle, Star } from "lucide-react";
import audiovisuelImage from "@/assets/audiovisuel-service.jpg";
import caissesImage from "@/assets/caisses-service.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";

const services = [
  {
    icon: Calculator,
    title: "Caisses Casio",
    description: "Expert Casio • Solutions sur mesure",
    image: caissesImage,
    features: ["Casio officiel", "Installation", "Formation", "Support"],
    highlight: true,
    stats: "500+ installations"
  },
  {
    icon: Settings,
    title: "Installation",
    description: "Service complet • Mise en service",
    image: audiovisuelImage,
    features: ["Livraison", "Configuration", "Tests"]
  },
  {
    icon: Zap,
    title: "Maintenance",
    description: "Intervention rapide • Dépannage",
    image: maintenanceImage,
    features: ["Diagnostic", "Réparation", "Pièces"]
  },
  {
    icon: Star,
    title: "Formation",
    description: "Accompagnement • Support utilisateur",
    image: audiovisuelImage,
    features: ["Formation", "Manuel", "Assistance"]
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
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Calculator className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Services Casio
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert • Installation • Support
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
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth flex items-center gap-2">
                  <service.icon className="h-5 w-5" />
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
                {service.stats && (
                  <div className="text-xs text-primary font-medium">
                    {service.stats}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Devis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Caisses installées</div>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Intervention</div>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">29</div>
              <div className="text-sm text-muted-foreground">Années</div>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;