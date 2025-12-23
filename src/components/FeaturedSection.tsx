import { ScrollReveal } from "@/hooks/useScrollAnimation";

import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";

const featuredIn = ["Netflix", "Made In Heaven", "The Big Day", "SONY Alpha"];

const behindScenes = [
  { image: wedding1, alt: "Behind the scenes 1" },
  { image: wedding2, alt: "Behind the scenes 2" },
  { image: wedding3, alt: "Behind the scenes 3" },
];

const FeaturedSection = () => {
  return (
    <section id="crew" className="lg:ml-[180px] py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Ambassador Badge */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={wedding1}
                  alt="Featured film"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide mb-2">
                SONY ALPHA INDIA
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl text-primary tracking-wide mb-8">
                AMBASSADORS
              </h3>
              
              {/* Featured In Logos */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
                {featuredIn.map((brand, index) => (
                  <span
                    key={brand}
                    className={`text-sm tracking-wide ${
                      index === featuredIn.length - 1 
                        ? "text-foreground font-medium" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {brand}
                    {index < featuredIn.length - 1 && (
                      <span className="mx-3 text-border">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* We Invented Wedding Films */}
        <div className="border-t border-border pt-20">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">
                REAL WEDDING FILMS MADE BY REAL FILMMAKERS
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
                WE INVENTED WEDDING FILMS
              </h2>
            </div>
          </ScrollReveal>

          {/* Behind the Scenes Grid */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {behindScenes.map((scene, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img
                    src={scene.image}
                    alt={scene.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
