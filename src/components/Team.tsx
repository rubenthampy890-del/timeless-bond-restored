import founderImg from "@/assets/founder.jpg";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            The Visionary
          </p>
          <h2 className="section-title">The Mind Behind Timeless Bond</h2>
          <div className="luxury-divider" />
        </ScrollReveal>

        {/* Founder - Refined Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Portrait with Monochrome to Color Effect - Smaller on larger screens */}
          <ScrollReveal 
            animation="fade-right" 
            delay={200}
            className="md:col-span-1 lg:col-span-2 relative group mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none"
          >
            <div className="relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 md:w-20 h-16 md:h-20 border-t border-l border-primary/30 z-10 transition-all duration-700 group-hover:-top-5 group-hover:-left-5" />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 md:w-20 h-16 md:h-20 border-b border-r border-primary/30 z-10 transition-all duration-700 group-hover:-bottom-5 group-hover:-right-5" />
              
              {/* Image container - constrained aspect ratio */}
              <div className="relative aspect-[3/4] max-h-[400px] md:max-h-[450px] lg:max-h-[500px] overflow-hidden">
                {/* Color image (bottom layer) */}
                <img
                  src={founderImg}
                  alt="Basil Thampy - Founder"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Grayscale overlay (top layer - fades on hover) */}
                <div 
                  className="absolute inset-0 bg-blend-saturation transition-opacity duration-700 group-hover:opacity-0"
                  style={{
                    backgroundImage: `url(${founderImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    filter: 'grayscale(100%) contrast(1.1)',
                  }}
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-soft-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
              </div>
            </div>
            
            {/* Floating label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-background px-5 py-2.5 shadow-lg">
              <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary whitespace-nowrap">
                Est. 2017
              </p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal 
            animation="fade-left" 
            delay={400}
            className="md:col-span-1 lg:col-span-3 text-center md:text-left lg:pl-8 mt-8 md:mt-0"
          >
            <div className="inline-block mb-4 md:mb-6">
              <span className="font-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">
                Founder & Creative Director
              </span>
            </div>
            
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-6 md:mb-8 leading-tight">
              Basil Thampy
            </h3>
            
            <div className="w-12 md:w-16 h-px bg-primary/50 mb-6 md:mb-8 mx-auto md:mx-0" />
            
            <div className="space-y-4 md:space-y-6 max-w-xl mx-auto md:mx-0">
              <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                For nearly a decade, Basil has been capturing the most intimate moments of love stories 
                through his lens. What began as a passion for wedding videography evolved into something 
                far deeper—a calling to craft entire experiences that honour the sacred bond between two souls.
              </p>
              
              <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                His journey through countless ceremonies taught him that every detail matters, 
                every moment deserves intention, and every couple deserves a celebration that 
                feels authentically theirs.
              </p>
              
              <blockquote className="relative pl-5 md:pl-6 border-l-2 border-primary/40 mt-8 md:mt-10">
                <p className="font-serif text-base md:text-lg lg:text-xl text-foreground/80 italic leading-relaxed">
                  "A wedding is not just an event—it's the first chapter of a lifetime. 
                  My role is to ensure that chapter begins exactly as it was meant to."
                </p>
              </blockquote>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 md:gap-10 lg:gap-12 mt-10 md:mt-12">
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary">8+</p>
                <p className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Years</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary">200+</p>
                <p className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Weddings</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary">∞</p>
                <p className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Memories</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Team;
