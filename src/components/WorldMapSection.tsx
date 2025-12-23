import { useState } from "react";
import { Heart, X } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";

const locations = [
  { id: 1, x: 25, y: 45, name: "Mexico" },
  { id: 2, x: 45, y: 35, name: "Europe" },
  { id: 3, x: 48, y: 42, name: "Mediterranean" },
  { id: 4, x: 52, y: 48, name: "Middle East" },
  { id: 5, x: 58, y: 55, name: "India" },
  { id: 6, x: 65, y: 60, name: "Southeast Asia" },
  { id: 7, x: 55, y: 65, name: "Africa" },
  { id: 8, x: 62, y: 40, name: "Central Asia" },
];

const worldFilms = [
  { image: wedding1, couple: "ARYA & FEDERICO", date: "June 2025" },
  { image: wedding2, couple: "NIKKI & VISHAL", date: "March 2025" },
  { image: wedding3, couple: "PV SINDHU & DATTA", date: "December 2024" },
  { image: wedding4, couple: "PRIYA & AKSHAY", date: "December 2024" },
  { image: wedding5, couple: "AAYUSH & SUMAN", date: "November 2024" },
];

const WorldMapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <section id="about" className="lg:ml-[180px] py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <p className="text-center text-sm tracking-[0.3em] text-muted-foreground mb-4">
            CLICK ON THE HEARTS TO KNOW WHERE WE'VE TRAVELLED
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-foreground tracking-wide mb-16">
            TIMELESS BOND AROUND THE WORLD
          </h2>
        </ScrollReveal>

        <div className="relative flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <ScrollReveal animation="fade-in" className="flex-1">
            <div className="relative aspect-[16/10] bg-secondary/30 rounded-2xl overflow-hidden">
              {/* World Map SVG - Simplified representation */}
              <svg
                viewBox="0 0 100 70"
                className="w-full h-full text-border"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
              >
                {/* Simplified world map outline */}
                <ellipse cx="50" cy="35" rx="45" ry="30" className="fill-secondary/50" />
                {/* Latitude lines */}
                <path d="M5,35 Q50,20 95,35" strokeDasharray="2,2" />
                <path d="M5,35 Q50,50 95,35" strokeDasharray="2,2" />
                <path d="M10,25 Q50,15 90,25" strokeDasharray="2,2" />
                <path d="M10,45 Q50,55 90,45" strokeDasharray="2,2" />
                {/* Longitude lines */}
                <line x1="50" y1="5" x2="50" y2="65" strokeDasharray="2,2" />
                <line x1="30" y1="8" x2="30" y2="62" strokeDasharray="2,2" />
                <line x1="70" y1="8" x2="70" y2="62" strokeDasharray="2,2" />
              </svg>

              {/* Heart Markers */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  aria-label={`View films from ${location.name}`}
                >
                  <Heart className="w-5 h-5 text-primary fill-primary drop-shadow-lg" />
                </button>
              ))}

              {/* Close button when location selected */}
              {selectedLocation && (
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 bg-soft-black text-ivory rounded-full hover:bg-charcoal transition-colors"
                  aria-label="Close location info"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Films Sidebar */}
          <ScrollReveal animation="fade-left" className="lg:w-80">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <h3 className="font-serif text-xl text-foreground mb-6">TB Films</h3>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {worldFilms.map((film, index) => (
                  <div
                    key={index}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={film.image}
                        alt={film.couple}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm text-foreground group-hover:text-primary transition-colors">
                        {film.couple}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {film.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
