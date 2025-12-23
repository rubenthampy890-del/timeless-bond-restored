import wedding3 from "@/assets/wedding-3.jpg";
import { ScrollReveal, LineReveal } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  return (
    <section id="philosophy" className="section-padding bg-background relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black via-background to-background" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image - Cinematic treatment */}
          <ScrollReveal animation="fade-right" duration={1400} className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={wedding3}
                  alt="Beautiful wedding moment"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-cinema group-hover:scale-105"
                />
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/60 via-transparent to-cinema-black/20" />
                <div className="absolute inset-0 bg-cinema-black/10 transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-primary/30 transition-all duration-700 group-hover:-top-6 group-hover:-left-6" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-primary/30 transition-all duration-700 group-hover:-bottom-6 group-hover:-right-6" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
                Est. 2025
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <h2 className="section-title mb-8">Our Philosophy</h2>
            </ScrollReveal>
            
            <LineReveal className="w-24 mx-0 my-8" delay={400} direction="left" />
            
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="space-y-6 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
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
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={600}>
              <div className="mt-12 pt-8 border-t border-border/30">
                <blockquote className="relative pl-6 border-l-2 border-primary/40">
                  <p className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
                    "True refinement lies not in excess, but in meaning."
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
