import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
        <div className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            Our Work
          </p>
          <h2 className="section-title">Moments We've Crafted</h2>
          <div className="luxury-divider" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden ${
                index === 0 || index === 3 ? "lg:row-span-2" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 || index === 3
                    ? "h-[400px] md:h-[500px] lg:h-full"
                    : "h-[300px] md:h-[350px]"
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
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-serif text-xl text-primary-foreground mb-1">
                    {item.location}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70 tracking-wide">
                    {item.atmosphere} · {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-soft-black/98 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 z-10 w-12 h-12 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-all duration-300 hover:rotate-90"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} strokeWidth={1} />
          </button>

          {/* Navigation - Previous */}
          <button
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/50 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>

          {/* Navigation - Next */}
          <button
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/50 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-[90vw] max-h-[80vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.location}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
            
            {/* Caption */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <p className="font-serif text-xl md:text-2xl text-primary-foreground/90 mb-1">
                {selectedItem.location}
              </p>
              <p className="font-body text-sm text-primary-foreground/50 tracking-wider uppercase">
                {selectedItem.atmosphere} · {selectedItem.year}
              </p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-primary-foreground/40 tracking-widest">
            {(selectedIndex ?? 0) + 1} / {portfolioItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
