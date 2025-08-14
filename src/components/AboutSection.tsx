import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, MapPin } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Clock, label: "Années d'expérience", value: "29+" },
    { icon: Users, label: "Clients satisfaits", value: "500+" },
    { icon: Award, label: "Certifications", value: "Toutes marques" },
    { icon: MapPin, label: "Zones d'intervention", value: "Région NE" }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute top-1/4 right-10 w-6 h-6 bg-primary/20 rounded-sm transform rotate-45 floating-element"></div>
      <div className="absolute bottom-1/3 left-20 w-8 h-8 border border-secondary/30 rounded-full floating-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gradient-to-r from-primary/30 to-secondary/30 floating-element"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                Qui sommes-nous ?
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Partenaire privilégié du commerce neuchâtelois
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Sys-Info</strong> est LE spécialiste des caisses enregistreuses 
                dans la région de La Chaux-de-Fonds et Marin-Epagnier. Partenaire privilégié du commerce 
                de proximité depuis 29 ans.
              </p>
              
              <p>
                Nous équipons et accompagnons les <strong className="text-primary">commerces locaux</strong> : 
                boulangeries, pharmacies, magasins de vêtements, restaurants, épiceries et bien d'autres. 
                Notre expertise régionale nous permet de proposer des solutions parfaitement adaptées.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                <h3 className="font-semibold text-foreground mb-2">Notre engagement local :</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Connaissance parfaite du tissu commercial régional</li>
                  <li>✓ Intervention rapide dans tout le canton de Neuchâtel</li>
                  <li>✓ Solutions adaptées aux spécificités locales</li>
                  <li>✓ Partenariat durable avec les commerces de proximité</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-soft border-0 bg-muted/30">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Partenaires de confiance
          </h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Brother</div>
            <div className="text-2xl font-bold text-muted-foreground">Kyocera</div>
            <div className="text-2xl font-bold text-muted-foreground">HP</div>
            <div className="text-2xl font-bold text-muted-foreground">Casio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;