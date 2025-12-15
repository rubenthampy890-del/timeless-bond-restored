import { useState } from "react";

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
        <div className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            What We Offer
          </p>
          <h2 className="section-title">Our Signature Experiences</h2>
          <div className="luxury-divider" />
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-border last:border-b py-10 md:py-14 cursor-pointer transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Number */}
                <span
                  className={`font-body text-sm tracking-luxury transition-colors duration-500 ${
                    hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light transition-all duration-500 flex-1 ${
                    hoveredIndex === index
                      ? "text-primary translate-x-2"
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

              {/* Description - Revealed on hover */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? "max-h-32 mt-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-body text-lg text-muted-foreground max-w-3xl pl-0 md:pl-16">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
