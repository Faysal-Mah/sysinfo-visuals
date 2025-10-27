import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  Printer, 
  ShieldCheck, 
  Wrench, 
  Lightbulb, 
  Headphones,
  CheckCircle
} from "lucide-react";

const bureautiqueServices = [
  {
    icon: Laptop,
    title: "Vente & Installation",
    description: "Matériel livré et configuré",
    features: ["Ordinateurs", "Imprimantes", "Copieurs", "Périphériques"]
  },
  {
    icon: Lightbulb,
    title: "Conseil",
    description: "Accompagnement personnalisé",
    features: ["Choix adapté", "Budget optimisé", "Espace analysé", "Solutions pro"]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Intervention rapide",
    features: ["À domicile", "En entreprise", "Préventif", "Réparation"]
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description: "Protection des données",
    features: ["Anti-virus", "Sauvegarde", "Chiffrement", "Surveillance"]
  },
  {
    icon: Printer,
    title: "Reprographie",
    description: "Impression professionnelle",
    features: ["Haute qualité", "Copies", "Numérisation", "Documents"]
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Assistance technique",
    features: ["À distance", "Sur site", "Configuration", "Suivi"]
  }
];

const BureautiqueSection = () => {
  return (
    <section id="bureautique" className="py-20 bg-background geometric-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full floating-element"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-primary/20 transform -rotate-12 floating-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Laptop className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bureautique Particuliers & PME
          </h2>
          <p className="text-lg text-muted-foreground">
            Matériel • Conseil • Support
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bureautiqueServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-0 shadow-soft bg-card/80 backdrop-blur-sm relative overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground shadow-strong">
            <h3 className="text-2xl font-bold mb-4">Équipement sur mesure</h3>
            <p className="mb-6 opacity-90">
              Particuliers • Professionnels • Accompagnement complet
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = '/devis?service=bureautique'}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Laptop className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Équipements installés</div>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">48h</div>
              <div className="text-sm text-muted-foreground">Intervention max</div>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Sécurisé</div>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">7j/7</div>
              <div className="text-sm text-muted-foreground">Support disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BureautiqueSection;
