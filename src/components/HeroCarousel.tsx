import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

// Using existing wedding images as slides
import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";

const slides = [
  {
    image: wedding1,
    location: "LAKE COMO, ITALY",
    date: "JUNE 2025",
    couple: "ARYA & FEDERICO",
    description: "When a supermodel married her Italian Stallion on a horse Ranch outside Milan, it was so dreamy that we had to have two weddings! Oh and that Aalap on \"Fools Rush In\"? Absolute goosebumps!",
    thumbnail: wedding2,
  },
  {
    image: wedding2,
    location: "JAIPUR, INDIA",
    date: "MARCH 2025",
    couple: "PRIYA & AKSHAY",
    description: "A royal celebration at the majestic City Palace, where tradition met modern love. The mehendi ceremony under the stars was simply magical.",
    thumbnail: wedding3,
  },
  {
    image: wedding3,
    location: "SANTORINI, GREECE",
    date: "APRIL 2025",
    couple: "ELENA & MARCUS",
    description: "Sunset vows on the caldera with the Aegean Sea as witness. A celebration of love that painted the sky in shades of gold and rose.",
    thumbnail: wedding4,
  },
  {
    image: wedding4,
    location: "UDAIPUR, INDIA",
    date: "FEBRUARY 2025",
    couple: "NIKKI & VISHAL",
    description: "The City of Lakes became the canvas for this magnificent union. Three days of celebrations that redefined grandeur.",
    thumbnail: wedding1,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <section className="relative h-screen lg:ml-[180px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.couple}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/80 via-soft-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-ivory/70 hover:text-ivory transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-ivory/70 hover:text-ivory transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
        <div className="max-w-4xl">
          {/* Location & Date */}
          <div className="flex items-center gap-4 text-ivory/80 text-sm tracking-[0.2em] mb-4">
            <span>{current.location}</span>
            <span className="flex items-center gap-2">
              <Play className="w-3 h-3 fill-current" />
              {current.date}
            </span>
          </div>

          {/* Couple Name */}
          <h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory tracking-wide mb-4"
            key={currentSlide}
          >
            {current.couple}
          </h1>

          {/* Description */}
          <p className="text-ivory/70 text-sm md:text-base max-w-2xl leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Thumbnail & Dots */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex items-end gap-4">
          {/* Thumbnail Preview */}
          <div className="hidden md:block w-32 h-24 rounded-lg overflow-hidden border border-ivory/20">
            <img
              src={current.thumbnail}
              alt="Next preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-ivory/40 hover:bg-ivory/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
