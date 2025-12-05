import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Truck, Wrench, Users } from "lucide-react";

const AboutSection = () => {
  const advantages = [
    { icon: Users, text: "Un conseil fiable et personnalisé" },
    { icon: Truck, text: "Des livraisons de consommables (1 jour ouvrable)" },
    { icon: Wrench, text: "Un service après-vente rapide et flexible" },
    { icon: CheckCircle, text: "Des appareils de remplacement" }
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute top-1/4 right-10 w-6 h-6 bg-primary/20 rounded-sm transform rotate-45 floating-element"></div>
      <div className="absolute bottom-1/3 left-20 w-8 h-8 border border-secondary/30 rounded-full floating-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gradient-to-r from-primary/30 to-secondary/30 floating-element"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Depuis 1995</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Qui sommes-nous?
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Sys-Info</strong> est une petite entreprise de la Chaux-de-Fonds 
                spécialisée dans la <strong className="text-primary">bureautique</strong>, 
                l'<strong className="text-primary">informatique</strong>, 
                les <strong className="text-primary">caisses enregistreuses</strong> et 
                l'<strong className="text-primary">audio-visuel</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Active dans ces domaines depuis plus de <strong className="text-primary">29 ans</strong>, 
                son équipe a su évoluer au gré des nouvelles technologies pour acquérir une solide 
                expérience dans toutes ses activités.
              </p>
            </div>

            {/* Advantages */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nous vous proposons :</h3>
              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                    <div className="p-2 rounded-full bg-primary/10">
                      <advantage.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{advantage.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Coverage */}
          <div className="space-y-6">
            {/* Experience Card */}
            <Card className="shadow-medium border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-primary mb-2">29+</div>
                <div className="text-xl text-foreground font-semibold">Années d'expérience</div>
                <p className="text-muted-foreground mt-2">Au service des entreprises et particuliers</p>
              </CardContent>
            </Card>

            {/* Coverage Card */}
            <Card className="shadow-soft border-0 bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Zone de couverture</h4>
                    <p className="text-sm text-muted-foreground">Mobilité et proximité</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Très mobile, et grâce à nos <strong className="text-foreground">deux succursales</strong>, 
                  nous vous proposons nos services dans tout le <strong className="text-primary">canton de Neuchâtel</strong> et même au-delà.
                </p>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-soft border-0 bg-card">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Chaux-de-Fonds</div>
                  <div className="text-sm text-muted-foreground">Siège principal</div>
                </CardContent>
              </Card>
              <Card className="shadow-soft border-0 bg-card">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Marin-Epagnier</div>
                  <div className="text-sm text-muted-foreground">Succursale</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
