import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Store, Heart, Calculator, CheckCircle } from "lucide-react";

const RegionalSection = () => {
  const regionalData = [
    {
      icon: Store,
      title: "Commerce de proximité",
      description: "Partenaire privilégié des commerçants neuchâtelois",
      stats: "150+ commerces équipés"
    },
    {
      icon: MapPin,
      title: "Ancrage régional",
      description: "Présents à La Chaux-de-Fonds et Marin-Epagnier",
      stats: "29 ans dans la région"
    },
    {
      icon: Users,
      title: "Expertise locale",
      description: "Connaissance approfondie du tissu économique local",
      stats: "Solutions sur mesure"
    },
    {
      icon: Heart,
      title: "Engagement local",
      description: "Soutien actif de l'économie régionale",
      stats: "Partenaire de confiance"
    }
  ];

  const commerceTypes = [
    "Boulangeries & Pâtisseries",
    "Pharmacies",
    "Magasins de vêtements", 
    "Restaurants & Cafés",
    "Épiceries & Supérettes",
    "Librairies & Papeteries",
    "Magasins de sport",
    "Bijouteries & Horlogeries"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/10 relative overflow-hidden">
      {/* Regional elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full floating-element"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-secondary/30 transform rotate-45 floating-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <Badge variant="secondary">Région</Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Commerce Neuchâtelois
          </h2>
          <p className="text-lg text-muted-foreground">
            29 ans • Proximité • Expertise locale
          </p>
        </div>

        {/* Regional Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regionalData.map((item, index) => (
            <Card key={index} className="text-center shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="text-primary font-semibold text-sm">
                  {item.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commerce Types */}
        <div className="bg-card rounded-2xl shadow-medium p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Types de commerces que nous équipons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commerceTypes.map((type, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{type}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Et bien d'autres types de commerces dans toute la région neuchâteloise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalSection;