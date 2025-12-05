import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Monitor, Calculator, Volume2, Lightbulb, ShoppingCart, Settings, Wrench, CheckCircle, FileText } from "lucide-react";
import bureautiqueImage from "@/assets/bureautique-kyocera.jpg";
import informatiqueImage from "@/assets/informatique-service.jpg";
import caisseImage from "@/assets/caisse-sunmi.jpg";
import audiovisuelImage from "@/assets/audiovisuel-service.jpg";

const services = [
  {
    id: "bureautique",
    icon: Printer,
    title: "Bureautique",
    description: "Imprimantes, copieurs et multifonctions pour particuliers et PME. Solutions d'impression professionnelles adaptées à vos besoins.",
    image: bureautiqueImage
  },
  {
    id: "informatique",
    icon: Monitor,
    title: "Informatique",
    description: "Ordinateurs, périphériques, réseaux et solutions complètes. Configuration et maintenance de votre parc informatique.",
    image: informatiqueImage
  },
  {
    id: "caisses",
    icon: Calculator,
    title: "Caisses enregistreuses",
    description: "Solutions de point de vente pour commerces et restauration. Expert Casio certifié avec plus de 500 installations.",
    image: caisseImage
  },
  {
    id: "audiovisuel",
    icon: Volume2,
    title: "Audio-visuel",
    description: "Vidéoprojecteurs, écrans, solutions de présentation et équipements multimédias pour entreprises et salles de conférence.",
    image: audiovisuelImage
  }
];

const keyPoints = [
  {
    icon: Lightbulb,
    title: "Conseil",
    description: "Accompagnement personnalisé pour choisir les solutions adaptées à vos besoins et votre budget."
  },
  {
    icon: ShoppingCart,
    title: "Vente",
    description: "Large gamme de produits de marques reconnues avec les meilleurs rapports qualité-prix."
  },
  {
    icon: Settings,
    title: "Installation",
    description: "Mise en service professionnelle, configuration et formation à l'utilisation de vos équipements."
  },
  {
    icon: Wrench,
    title: "Dépannage",
    description: "Intervention rapide sur site ou en atelier, maintenance préventive et réparations."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background geometric-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full floating-element"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/20 transform rotate-12 floating-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions complètes pour particuliers et professionnels dans toute la région neuchâteloise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="group hover:shadow-medium transition-smooth border-0 shadow-soft bg-card/80 backdrop-blur-sm relative overflow-hidden"
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
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/30 to-transparent shape-primary"></div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth flex items-center gap-2">
                  <service.icon className="h-5 w-5" />
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  onClick={() => window.location.href = `/offre?service=${service.id}`}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Demande d'offre
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Points Section */}
        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Notre engagement pour tous nos services
            </h3>
            <p className="text-muted-foreground">
              4 piliers qui font notre différence depuis 29 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, index) => (
              <Card key={index} className="text-center shadow-soft border-0 bg-card hover:shadow-medium transition-smooth group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 group-hover:scale-110 transition-smooth">
                    <point.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="mt-4 text-primary"
                    onClick={() => window.location.href = `/offre`}
                  >
                    Demande d'offre →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
