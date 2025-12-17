import { useState, useEffect } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "They didn't just plan our wedding—they understood our story and brought it to life in ways we never imagined possible. Every moment felt like it was made just for us.",
    couple: "Meera & Vikram",
    location: "Kerala, 2025",
  },
  {
    quote: "Working with Timeless Bond was like having a trusted friend who happens to possess extraordinary talent. They handled everything with such grace and discretion.",
    couple: "Ananya & Rohan",
    location: "Goa, 2025",
  },
  {
    quote: "From our first conversation, we knew we were in exceptional hands. The attention to detail, the calm professionalism, the genuine care—it was beyond anything we expected.",
    couple: "Nisha & Karan",
    location: "Udaipur, 2025",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-16">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            Kind Words
          </p>
          <h2 className="section-title">Words From Our Couples</h2>
          <div className="luxury-divider" />
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="relative min-h-[280px] sm:min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div className="text-center">
                  {/* Quote mark */}
                  <div className="text-primary/20 text-6xl sm:text-7xl md:text-8xl font-serif leading-none mb-4 sm:mb-6">
                    "
                  </div>
                  
                  <blockquote className="font-body text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed italic mb-8 sm:mb-10 px-2">
                    {testimonial.quote}
                  </blockquote>

                  <div className="space-y-1 sm:space-y-2">
                    <p className="font-serif text-base sm:text-lg text-foreground">
                      {testimonial.couple}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground tracking-wide">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-6 sm:w-8"
                  : "bg-primary/30 hover:bg-primary/50 w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
