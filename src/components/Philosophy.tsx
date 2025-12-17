import wedding3 from "@/assets/wedding-3.jpg";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  return (
    <section id="philosophy" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <ScrollReveal animation="fade-right" className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src={wedding3}
                alt="Beautiful wedding moment"
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover hover-lift"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 md:w-32 h-24 md:h-32 border border-primary/30 -z-10" />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="fade-left" delay={200} className="order-1 lg:order-2">
            <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
              Est. 2025
            </p>
            
            <h2 className="section-title mb-6 md:mb-8">Our Philosophy</h2>
            
            <div className="luxury-divider mx-0" />
            
            <div className="space-y-4 md:space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe that a wedding is not merely an event to be planned—it is a profound story waiting to be told. Every love story carries its own rhythm, its own poetry, its own quiet magic.
              </p>
              <p>
                At Timeless Bond, we do not simply organize weddings. We listen deeply. We observe the subtle nuances that make your love unique. Then, with meticulous care and artistic vision, we translate those precious details into an experience that feels both grand and intimately personal.
              </p>
              <p className="hidden sm:block">
                Our approach is rooted in intention. Every flower chosen, every light placed, every moment choreographed serves a singular purpose: to honor the depth of your bond and create memories that transcend time.
              </p>
            </div>

            <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-border">
              <p className="font-serif text-lg md:text-xl italic text-foreground">
                "True refinement lies not in excess, but in meaning."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
