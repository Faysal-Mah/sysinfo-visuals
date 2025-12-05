const partners = [
  { name: "Brother", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Brother_logo.svg/320px-Brother_logo.svg.png" },
  { name: "Epson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Epson_logo.svg/320px-Epson_logo.svg.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png" },
  { name: "Kyocera", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kyocera_logo.svg/320px-Kyocera_logo.svg.png" },
  { name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Logitech_logo.svg/320px-Logitech_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" },
  { name: "NEC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/NEC_logo.svg/200px-NEC_logo.svg.png" },
  { name: "Netgear", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Netgear_logo.svg/320px-Netgear_logo.svg.png" },
  { name: "OKI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oki_Electric_logo.svg/200px-Oki_Electric_logo.svg.png" },
  { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Philips_logo_%282013%29.svg/320px-Philips_logo_%282013%29.svg.png" },
  { name: "Rexel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rexel_logo.svg/320px-Rexel_logo.svg.png" }
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-muted-foreground">
            Nous travaillons avec les meilleures marques du marché
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="h-8 md:h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-xl font-bold text-muted-foreground group-hover:text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
