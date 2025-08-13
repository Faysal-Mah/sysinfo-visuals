import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour tous vos besoins informatiques
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
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Besoin d'une intervention ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit ou une intervention d'urgence. 
            Notre équipe se déplace rapidement dans toute la région.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
            >
              <Phone className="mr-2 h-5 w-5" />
              Appeler maintenant
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;