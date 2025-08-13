import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card shadow-soft border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SYS-INFO</h1>
              <p className="text-sm text-muted-foreground">Solutions informatiques professionnelles</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-smooth font-medium">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Chaux-de-Fonds | Marin-Epagnier</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">032 753 50 50</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;