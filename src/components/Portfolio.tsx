import { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              onClick={() => setSelectedImage(item.image)}
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-soft-black/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Portfolio image"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
