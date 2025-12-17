import { useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

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
    title: "Event Design & Styling",
    description: "Our design philosophy merges artistry with emotion. We create visual narratives that captivate the senses and reflect the essence of your bond.",
    number: "03",
  },
  {
    title: "Intimate & Private Ceremonies",
    description: "For those who seek meaningful simplicity. Intimate gatherings crafted with the same devotion and elegance as grand celebrations.",
    number: "04",
  },
  {
    title: "Full Wedding Production",
    description: "Seamless orchestration of every element—from vendor coordination to day-of execution—allowing you to be fully present in your moments.",
    number: "05",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            What We Offer
          </p>
          <h2 className="section-title">Our Signature Experiences</h2>
          <div className="luxury-divider" />
        </ScrollReveal>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div
                className="group border-t border-border last:border-b py-8 md:py-12 lg:py-14 cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-12">
                  {/* Number */}
                  <span
                    className={`font-body text-xs md:text-sm tracking-luxury transition-colors duration-500 ${
                      hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light transition-all duration-500 flex-1 ${
                      hoveredIndex === index
                        ? "text-primary md:translate-x-2"
                        : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Arrow */}
                  <div
                    className={`hidden md:block transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Description - Revealed on hover (desktop) or always visible (mobile) */}
                <div
                  className={`overflow-hidden transition-all duration-500 md:transition-all ${
                    hoveredIndex === index ? "md:max-h-32 md:mt-6 md:opacity-100" : "md:max-h-0 md:opacity-0"
                  } max-h-32 mt-4 opacity-100 md:mt-0`}
                >
                  <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl pl-0 md:pl-16">
                    {service.description}
                  </p>
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
