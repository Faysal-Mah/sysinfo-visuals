import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bureautiqueImage from "@/assets/bureautique-kyocera.jpg";
import informatiqueImage from "@/assets/informatique-service.jpg";
import caisseImage from "@/assets/caisse-sunmi.jpg";
import audiovisuelImage from "@/assets/audiovisuel-service.jpg";

const carouselItems = [
  {
    id: "bureautique",
    title: "Bureautique",
    image: bureautiqueImage,
    sectionId: "bureautique"
  },
  {
    id: "informatique",
    title: "Informatique",
    image: informatiqueImage,
    sectionId: "informatique"
  },
  {
    id: "caisses",
    title: "Caisses enregistreuses",
    image: caisseImage,
    sectionId: "caisses"
  },
  {
    id: "audiovisuel",
    title: "Audio-visuel",
    image: audiovisuelImage,
    sectionId: "audiovisuel"
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + carouselItems.length) % carouselItems.length;
      items.push({ ...carouselItems[index], position: i });
    }
    return items;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Cliquez sur une image pour découvrir nos services
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 z-20 h-12 w-12 rounded-full bg-card/90 backdrop-blur-sm shadow-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 md:gap-8 py-8 px-16">
            {getVisibleItems().map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => scrollToSection(item.sectionId)}
                className={`
                  relative cursor-pointer transition-all duration-500 ease-out rounded-2xl overflow-hidden shadow-medium
                  ${item.position === 0 
                    ? "w-64 h-80 md:w-80 md:h-96 z-10 scale-105 ring-4 ring-primary/50" 
                    : "w-48 h-64 md:w-56 md:h-72 opacity-70 scale-95 hidden md:block"
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className={`font-bold text-primary-foreground ${item.position === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>
                    {item.title}
                  </h3>
                  {item.position === 0 && (
                    <p className="text-primary-foreground/80 text-sm mt-2">
                      Cliquez pour en savoir plus
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 z-20 h-12 w-12 rounded-full bg-card/90 backdrop-blur-sm shadow-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
