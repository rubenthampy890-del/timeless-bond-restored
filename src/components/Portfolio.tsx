import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";

const portfolioItems = [
  {
    image: wedding1,
    location: "Riverside Estate",
    year: "2025",
    atmosphere: "Garden Romance",
  },
  {
    image: wedding2,
    location: "Countryside Manor",
    year: "2025",
    atmosphere: "Intimate & Natural",
  },
  {
    image: wedding4,
    location: "Evening Celebration",
    year: "2025",
    atmosphere: "Golden Hour Magic",
  },
  {
    image: wedding5,
    location: "Heritage Hall",
    year: "2025",
    atmosphere: "Timeless Elegance",
  },
  {
    image: wedding6,
    location: "Autumn Gardens",
    year: "2025",
    atmosphere: "Romantic & Serene",
  },
  {
    image: wedding7,
    location: "Sunset Bridge",
    year: "2025",
    atmosphere: "Warm Connection",
  },
];

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? portfolioItems.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === portfolioItems.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedIndex(null);
  }, [selectedIndex, handlePrevious, handleNext]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  const selectedItem = selectedIndex !== null ? portfolioItems[selectedIndex] : null;

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            Our Work
          </p>
          <h2 className="section-title">Moments We've Crafted</h2>
          <div className="luxury-divider" />
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <ScrollReveal
              key={index}
              animation="scale"
              delay={index * 100}
              className={`group relative cursor-pointer overflow-hidden ${
                index === 0 || index === 3 ? "lg:row-span-2" : ""
              }`}
            >
              <div
                onClick={() => setSelectedIndex(index)}
                className={`relative overflow-hidden ${
                  index === 0 || index === 3
                    ? "h-[280px] sm:h-[350px] md:h-[450px] lg:h-full"
                    : "h-[250px] sm:h-[280px] md:h-[350px]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-lg sm:text-xl text-primary-foreground mb-1">
                    {item.location}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-primary-foreground/70 tracking-wide">
                    {item.atmosphere} · {item.year}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Elegant Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-soft-black/98 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-all duration-300 hover:rotate-90"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={24} strokeWidth={1} className="sm:w-7 sm:h-7" />
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/50 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
          >
            <ChevronLeft size={20} strokeWidth={1} className="sm:w-6 sm:h-6" />
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/50 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight size={20} strokeWidth={1} className="sm:w-6 sm:h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-[90vw] max-h-[75vh] sm:max-h-[80vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.location}
              className="max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain shadow-2xl"
            />
            
            {/* Caption */}
            <div className="absolute -bottom-12 sm:-bottom-16 left-0 right-0 text-center">
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-1">
                {selectedItem.location}
              </p>
              <p className="font-body text-xs sm:text-sm text-primary-foreground/50 tracking-wider uppercase">
                {selectedItem.atmosphere} · {selectedItem.year}
              </p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 font-body text-xs sm:text-sm text-primary-foreground/40 tracking-widest">
            {(selectedIndex ?? 0) + 1} / {portfolioItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
