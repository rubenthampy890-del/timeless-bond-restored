import { useState, useEffect } from "react";
import { ScrollReveal, LineReveal } from "@/hooks/useScrollAnimation";

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
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fade-up">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
              Kind Words
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="section-title">From Our Couples</h2>
          </ScrollReveal>
          
          <LineReveal className="w-20 mx-auto my-10" delay={300} />
        </div>

        {/* Testimonial Carousel */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="relative min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-cinema ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12 pointer-events-none"
                }`}
              >
                <div className="text-center">
                  {/* Large quote mark */}
                  <div className="text-primary/15 text-[120px] md:text-[150px] font-serif leading-none mb-0 -mt-8">
                    "
                  </div>
                  
                  <blockquote className="font-body text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-relaxed italic -mt-16 mb-12 px-4">
                    {testimonial.quote}
                  </blockquote>

                  <div className="space-y-2">
                    <p className="font-serif text-xl text-foreground">
                      {testimonial.couple}
                    </p>
                    <p className="font-body text-sm text-muted-foreground tracking-[0.2em] uppercase">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-2 transition-all duration-700 ${
                index === currentIndex
                  ? "w-10 bg-primary"
                  : "w-2 bg-foreground/20 hover:bg-foreground/40"
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
