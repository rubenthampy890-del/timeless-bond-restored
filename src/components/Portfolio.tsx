import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ScrollReveal, LineReveal } from "@/hooks/useScrollAnimation";
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";
import wedding7 from "@/assets/wedding-7.jpg";

const portfolioItems = [
  {
    image: wedding1,
    couple: "Meera & Vikram",
    location: "Kerala",
    year: "2025",
  },
  {
    image: wedding2,
    couple: "Ananya & Rohan",
    location: "Goa",
    year: "2025",
  },
  {
    image: wedding4,
    couple: "Priya & Arjun",
    location: "Udaipur",
    year: "2025",
  },
  {
    image: wedding5,
    couple: "Nisha & Karan",
    location: "Jaipur",
    year: "2025",
  },
  {
    image: wedding6,
    couple: "Aisha & Ravi",
    location: "Mumbai",
    year: "2025",
  },
  {
    image: wedding7,
    couple: "Kavya & Dev",
    location: "Bangalore",
    year: "2025",
  },
];

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section id="portfolio" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="fade-up">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
              Our Films
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="section-title">Stories We've Told</h2>
          </ScrollReveal>
          
          <LineReveal className="w-20 mx-auto my-10" delay={300} />
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="group"
            >
              <div
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer overflow-hidden aspect-[4/5]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.couple}
                  className="w-full h-full object-cover transition-all duration-[1.5s] ease-cinema group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/20 to-transparent transition-opacity duration-700 ${
                    hoveredIndex === index ? "opacity-90" : "opacity-60"
                  }`}
                />
                
                {/* Play icon on hover */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full border border-foreground/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-foreground ml-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Caption - Always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p 
                    className={`font-serif text-xl md:text-2xl text-foreground mb-2 transition-all duration-700 ${
                      hoveredIndex === index ? "translate-y-0" : "translate-y-2"
                    }`}
                  >
                    {item.couple}
                  </p>
                  <div className="flex items-center gap-2 text-foreground/60 font-body text-sm tracking-wide">
                    <span>{item.location}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/40" />
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Cinematic Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-cinema-black flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center text-foreground/50 hover:text-foreground transition-all duration-500 hover:rotate-90"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} strokeWidth={1} />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center text-foreground/40 hover:text-foreground border border-foreground/20 hover:border-foreground/50 transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>

          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center text-foreground/40 hover:text-foreground border border-foreground/20 hover:border-foreground/50 transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-[85vw] max-h-[80vh] animate-scale-in-cinema"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.couple}
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {/* Caption */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <p className="font-serif text-2xl text-foreground mb-2">
                {selectedItem.couple}
              </p>
              <p className="font-body text-sm text-foreground/50 tracking-[0.2em] uppercase">
                {selectedItem.location} · {selectedItem.year}
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-sm text-foreground/30 tracking-[0.3em]">
            {String(selectedIndex + 1).padStart(2, '0')} / {String(portfolioItems.length).padStart(2, '0')}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
