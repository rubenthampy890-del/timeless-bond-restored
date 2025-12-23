import founderImg from "@/assets/founder.jpg";
import { ScrollReveal, LineReveal } from "@/hooks/useScrollAnimation";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="fade-up">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
              The Visionary
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="section-title">Meet the Creator</h2>
          </ScrollReveal>
          
          <LineReveal className="w-20 mx-auto my-10" delay={300} />
        </div>

        {/* Founder - Cinematic Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Portrait */}
          <ScrollReveal 
            animation="fade-right" 
            duration={1400}
            className="relative group mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 z-10 transition-all duration-700 group-hover:-top-6 group-hover:-left-6" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary/30 z-10 transition-all duration-700 group-hover:-bottom-6 group-hover:-right-6" />
              
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Color image */}
                <img
                  src={founderImg}
                  alt="Basil Thampy - Founder"
                  className="w-full h-full object-cover object-top transition-all duration-[2s] ease-cinema group-hover:scale-105"
                />
                
                {/* Grayscale overlay that fades on hover */}
                <div 
                  className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-0"
                  style={{
                    backgroundImage: `url(${founderImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    filter: 'grayscale(100%) contrast(1.05)',
                  }}
                />
                
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/50 via-transparent to-cinema-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
              </div>
            </div>
            
            {/* Floating label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background px-6 py-3 border border-border/30">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary whitespace-nowrap">
                Est. 2017
              </p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <ScrollReveal animation="fade-up" delay={200}>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Founder & Creative Director
              </span>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300}>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
                Basil Thampy
              </h3>
            </ScrollReveal>
            
            <LineReveal className="w-16 mx-auto lg:mx-0 my-8" delay={400} direction="left" />
            
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                  For nearly a decade, Basil has been capturing the most intimate moments of love stories 
                  through his lens. What began as a passion for wedding videography evolved into something 
                  far deeper—a calling to craft entire experiences that honour the sacred bond between two souls.
                </p>
                
                <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                  His journey through countless ceremonies taught him that every detail matters, 
                  every moment deserves intention, and every couple deserves a celebration that 
                  feels authentically theirs.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={600}>
              <blockquote className="relative pl-6 border-l-2 border-primary/40 mt-10 max-w-xl mx-auto lg:mx-0">
                <p className="font-serif text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
                  "A wedding is not just an event—it's the first chapter of a lifetime."
                </p>
              </blockquote>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="fade-up" delay={700}>
              <div className="flex justify-center lg:justify-start gap-12 mt-12">
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-primary">8+</p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Years</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-primary">200+</p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Films</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-primary">∞</p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Stories</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
