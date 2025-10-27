import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  Printer, 
  ShieldCheck, 
  Wrench, 
  Lightbulb, 
  Headphones,
  CheckCircle,
  Star
} from "lucide-react";
import ordinateurImage from "@/assets/ordinateur-service.jpg";
import imprimanteImage from "@/assets/imprimante-service.jpg";
import supportImage from "@/assets/support-service.jpg";
import securiteImage from "@/assets/securite-service.jpg";

const bureautiqueServices = [
  {
    icon: Laptop,
    title: "Vente & Installation",
    description: "Matériel livré et configuré",
    image: ordinateurImage,
    features: ["Ordinateurs", "Imprimantes", "Copieurs", "Périphériques"],
    highlight: true,
    stats: "1000+ équipements"
  },
  {
    icon: Lightbulb,
    title: "Conseil",
    description: "Accompagnement personnalisé",
    image: ordinateurImage,
    features: ["Choix adapté", "Budget optimisé", "Espace analysé", "Solutions pro"]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Intervention rapide",
    image: supportImage,
    features: ["À domicile", "En entreprise", "Préventif", "Réparation"]
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description: "Protection des données",
    image: securiteImage,
    features: ["Anti-virus", "Sauvegarde", "Chiffrement", "Surveillance"]
  },
  {
    icon: Printer,
    title: "Reprographie",
    description: "Impression professionnelle",
    image: imprimanteImage,
    features: ["Haute qualité", "Copies", "Numérisation", "Documents"]
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Assistance technique",
    image: supportImage,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bureautiqueServices.map((service, index) => (
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
                  onClick={() => window.location.href = '/devis?service=bureautique'}
                >
                  <Laptop className="mr-2 h-4 w-4" />
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
