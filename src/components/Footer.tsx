import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/3535eb6f-0316-4938-9ac4-14a0c903074a.png" 
              alt="Sys-Info Logo" 
              className="h-8 w-auto filter brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Votre partenaire informatique de confiance depuis plus de 29 ans. 
              Solutions professionnelles pour entreprises et particuliers.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nos Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>• Bureautique / Informatique</li>
              <li>• Audio-visuel</li>
              <li>• Caisses enregistreuses</li>
              <li>• Maintenance & Dépannage</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <p>📍 Chaux-de-Fonds | Marin-Epagnier</p>
              <p>📞 032 753 50 50</p>
              <p>🕒 Lun-Ven: 8h00-17h30</p>
              <p>⚡ Interventions sur RDV</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
          <p>© 2024 Sys-Info. Tous droits réservés.</p>
          <p>Solutions informatiques professionnelles en Suisse</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;