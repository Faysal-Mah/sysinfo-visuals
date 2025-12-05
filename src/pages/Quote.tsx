import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Printer, Monitor, Calculator, Volume2, ArrowLeft, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Quote = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");
  const [service, setService] = useState(serviceParam || "bureautique");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons sous 24h",
    });
  };

  const getServiceIcon = () => {
    switch(service) {
      case "bureautique": return <Printer className="h-8 w-8 text-primary" />;
      case "informatique": return <Monitor className="h-8 w-8 text-primary" />;
      case "caisses": return <Calculator className="h-8 w-8 text-primary" />;
      case "audiovisuel": return <Volume2 className="h-8 w-8 text-primary" />;
      default: return <Printer className="h-8 w-8 text-primary" />;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center shadow-medium border-0">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full gradient-primary">
                    <CheckCircle className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-foreground">Demande reçue</CardTitle>
                <CardDescription>
                  Nous vous contacterons sous 24h pour établir votre offre personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => window.location.href = "/"} variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 gradient-subtle relative geometric-bg">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              {getServiceIcon()}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Demande d'offre
            </h1>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire • Réponse sous 24h
            </p>
          </div>

          {/* Form */}
          <Card className="max-w-3xl mx-auto shadow-medium border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Informations</CardTitle>
              <CardDescription>
                Tous les champs marqués * sont requis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Type de service *</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bureautique">
                        <div className="flex items-center gap-2">
                          <Printer className="h-4 w-4" />
                          Bureautique
                        </div>
                      </SelectItem>
                      <SelectItem value="informatique">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4" />
                          Informatique
                        </div>
                      </SelectItem>
                      <SelectItem value="caisses">
                        <div className="flex items-center gap-2">
                          <Calculator className="h-4 w-4" />
                          Caisses enregistreuses
                        </div>
                      </SelectItem>
                      <SelectItem value="audiovisuel">
                        <div className="flex items-center gap-2">
                          <Volume2 className="h-4 w-4" />
                          Audio-visuel
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nom *</Label>
                    <Input id="name" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Entreprise</Label>
                    <Input id="company" className="bg-background" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input id="email" type="email" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Téléphone *</Label>
                    <Input id="phone" type="tel" required className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-foreground">Adresse</Label>
                  <Input id="address" className="bg-background" />
                </div>

                {/* Service-specific fields */}
                {service === "caisses" && (
                  <>
                    <div className="border-t border-border pt-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Détails caisse enregistreuse</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cashRegisterType" className="text-foreground">Type de commerce *</Label>
                        <Select required>
                          <SelectTrigger id="cashRegisterType" className="bg-background">
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retail">Commerce de détail</SelectItem>
                            <SelectItem value="restaurant">Restauration</SelectItem>
                            <SelectItem value="bakery">Boulangerie/Pâtisserie</SelectItem>
                            <SelectItem value="grocery">Épicerie</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-foreground">Nombre de caisses *</Label>
                        <Input id="quantity" type="number" min="1" required className="bg-background" />
                      </div>
                    </div>
                  </>
                )}

                {service === "bureautique" && (
                  <>
                    <div className="border-t border-border pt-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Détails bureautique</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipmentType" className="text-foreground">Type d'équipement</Label>
                      <Select>
                        <SelectTrigger id="equipmentType" className="bg-background">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="imprimante">Imprimante</SelectItem>
                          <SelectItem value="copieur">Copieur</SelectItem>
                          <SelectItem value="multifonction">Multifonction</SelectItem>
                          <SelectItem value="scanner">Scanner</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {service === "informatique" && (
                  <>
                    <div className="border-t border-border pt-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Détails informatique</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="itEquipment" className="text-foreground">Type d'équipement</Label>
                      <Select>
                        <SelectTrigger id="itEquipment" className="bg-background">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ordinateur">Ordinateur</SelectItem>
                          <SelectItem value="laptop">Portable</SelectItem>
                          <SelectItem value="reseau">Réseau</SelectItem>
                          <SelectItem value="peripherique">Périphérique</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {service === "audiovisuel" && (
                  <>
                    <div className="border-t border-border pt-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Détails audio-visuel</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="avEquipment" className="text-foreground">Type d'équipement</Label>
                      <Select>
                        <SelectTrigger id="avEquipment" className="bg-background">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="projecteur">Vidéoprojecteur</SelectItem>
                          <SelectItem value="ecran">Écran</SelectItem>
                          <SelectItem value="sonorisation">Sonorisation</SelectItem>
                          <SelectItem value="visioconference">Visioconférence</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {/* Common fields */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-foreground">Type de prestation souhaitée</Label>
                  <Select>
                    <SelectTrigger id="serviceType" className="bg-background">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conseil">Conseil</SelectItem>
                      <SelectItem value="vente">Vente</SelectItem>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="depannage">Dépannage</SelectItem>
                      <SelectItem value="complet">Service complet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Description de vos besoins</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez vos besoins en détail..." 
                    className="bg-background min-h-[120px]"
                  />
                </div>

                {/* Submit */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => window.location.href = "/"}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 gradient-primary shadow-medium"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
