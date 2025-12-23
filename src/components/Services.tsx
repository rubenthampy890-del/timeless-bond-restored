import { useState } from "react";
import { ScrollReveal, LineReveal } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Bespoke Wedding Planning",
    description: "A fully tailored journey from concept to celebration. We craft every detail around your vision, ensuring an experience as unique as your love story.",
    number: "01",
  },
  {
    title: "Destination Weddings",
    description: "From sun-kissed coastlines to historic European estates, we curate extraordinary destination celebrations in the world's most breathtaking settings.",
    number: "02",
  },
  {
    title: "Wedding Films",
    description: "Cinematic storytelling that captures the essence of your day. Our films are not just documentation—they are emotional journeys you'll relive forever.",
    number: "03",
  },
  {
    title: "Event Design & Styling",
    description: "Our design philosophy merges artistry with emotion. We create visual narratives that captivate the senses and reflect the essence of your bond.",
    number: "04",
  },
  {
    title: "Intimate Ceremonies",
    description: "For those who seek meaningful simplicity. Intimate gatherings crafted with the same devotion and elegance as grand celebrations.",
    number: "05",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-secondary/50 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="fade-up">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
              What We Offer
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="section-title">Our Experiences</h2>
          </ScrollReveal>
          
          <LineReveal className="w-20 mx-auto my-10" delay={300} />
        </div>

        {/* Services List - Cinematic reveal */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div
                className="group border-t border-border/30 last:border-b py-10 md:py-14 cursor-pointer transition-all duration-700"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-8 md:gap-12">
                  {/* Number */}
                  <span
                    className={`font-body text-sm tracking-[0.2em] transition-all duration-700 w-12 ${
                      hoveredIndex === index ? "text-primary" : "text-muted-foreground/50"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Title & Description Container */}
                  <div className="flex-1">
                    <h3
                      className={`font-serif text-2xl md:text-3xl lg:text-4xl font-normal transition-all duration-700 ${
                        hoveredIndex === index
                          ? "text-primary translate-x-4"
                          : "text-foreground"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description - Revealed on hover */}
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-cinema ${
                        hoveredIndex === index ? "max-h-32 mt-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`transition-all duration-700 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-6"
                    }`}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
