import founderImg from "@/assets/founder.jpg";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            The Visionary
          </p>
          <h2 className="section-title">The Mind Behind Timeless Bond</h2>
          <div className="luxury-divider" />
        </div>

        {/* Founder - Unique Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Portrait with Monochrome to Color Effect */}
          <div className="lg:col-span-2 relative group">
            <div className="relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 z-10 transition-all duration-700 group-hover:-top-6 group-hover:-left-6" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary/30 z-10 transition-all duration-700 group-hover:-bottom-6 group-hover:-right-6" />
              
              {/* Image container with overlay effect */}
              <div className="relative aspect-[3/4] overflow-hidden">
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
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background px-6 py-3 shadow-lg">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary whitespace-nowrap">
                Est. 2017
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 text-center lg:text-left lg:pl-8">
            <div className="inline-block mb-6">
              <span className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground">
                Founder & Creative Director
              </span>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Basil Thampy
            </h3>
            
            <div className="w-16 h-px bg-primary/50 mb-8 mx-auto lg:mx-0" />
            
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                For nearly a decade, Basil has been capturing the most intimate moments of love stories 
                through his lens. What began as a passion for wedding videography evolved into something 
                far deeper—a calling to craft entire experiences that honour the sacred bond between two souls.
              </p>
              
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                His journey through countless ceremonies taught him that every detail matters, 
                every moment deserves intention, and every couple deserves a celebration that 
                feels authentically theirs.
              </p>
              
              <blockquote className="relative pl-6 border-l-2 border-primary/40 mt-10">
                <p className="font-serif text-lg md:text-xl text-foreground/80 italic leading-relaxed">
                  "A wedding is not just an event—it's the first chapter of a lifetime. 
                  My role is to ensure that chapter begins exactly as it was meant to."
                </p>
              </blockquote>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-12 mt-12">
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-primary">8+</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Years</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-primary">200+</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Weddings</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-primary">∞</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Memories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
