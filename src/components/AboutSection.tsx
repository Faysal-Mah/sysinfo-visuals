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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                Qui sommes-nous ?
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Votre expert informatique de proximité
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Sys-Info</strong> est une petite entreprise 
                de la Chaux-de-Fonds spécialisée dans la bureautique, l'informatique, 
                les caisses enregistreuses et l'audio-visuel.
              </p>
              
              <p>
                Active dans ces domaines depuis plus de <strong className="text-primary">29 ans</strong>, 
                notre équipe a su évoluer au gré des nouvelles technologies pour acquérir 
                une solide expérience dans toutes ses activités.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                <h3 className="font-semibold text-foreground mb-2">Nous vous proposons :</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Un conseil fiable et personnalisé</li>
                  <li>✓ Des livraisons de consommables (1 jour ouvrable)</li>
                  <li>✓ Un service technique professionnel</li>
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