import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, MapPin, Calculator, Star, CheckCircle, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calculator, label: "Caisses", value: "500+" },
    { icon: Clock, label: "Années", value: "29" },
    { icon: Star, label: "Expert", value: "Casio" },
    { icon: Zap, label: "Service", value: "24h" }
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
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <Badge variant="secondary">Expert Casio</Badge>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Commerce Neuchâtelois
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                <strong className="text-primary">29 ans</strong> d'expertise • <strong className="text-primary">500+ installations</strong> • Spécialiste <strong className="text-primary">Casio</strong>
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Expert Casio</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Service 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Formation</span>
                </div>
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

        {/* Casio Focus */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Calculator className="h-8 w-8 text-primary" />
            <div className="text-3xl font-bold text-primary">CASIO</div>
            <Star className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground">
            Partenaire officiel • Expert certifié • Service autorisé
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;