import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calculator, Zap } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["032 969 18 35", "032 753 50 50"],
      primary: "032 753 50 50"
    },
    {
      icon: MapPin,
      title: "Adresses",
      details: [
        "Chaux-de-Fonds",
        "Marin-Epagnier"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lun-Ven: 8h00-17h30",
        "Interventions sur RDV"
      ]
    },
    {
      icon: Mail,
      title: "Services",
      details: [
        "Conseil personnalisé",
        "Intervention rapide"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-subtle relative overflow-hidden">
      {/* Modern geometric overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent shape-diagonal"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-gradient-to-t from-secondary/20 to-transparent shape-secondary"></div>
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-primary/20 rounded-full floating-element"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-primary/10 transform rotate-45 floating-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Phone className="h-6 w-6 text-primary" />
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground">
            Service rapide • Devis gratuit • Intervention 24h
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mx-auto mb-3">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p 
                    key={idx} 
                    className={`text-sm ${
                      detail === info.primary 
                        ? 'text-primary font-semibold' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-2xl shadow-medium p-8 border text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Intervention Casio
          </h3>
          <p className="text-muted-foreground mb-6">
            Devis gratuit • Service 24h • Expert Casio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
            >
              <Phone className="mr-2 h-5 w-5" />
              032 753 50 50
            </Button>
            <Button variant="outline" size="lg">
              <Calculator className="mr-2 h-5 w-5" />
              Devis Casio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;