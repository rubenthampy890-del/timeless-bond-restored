import wedding3 from "@/assets/wedding-3.jpg";

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            The Visionary
          </p>
          <h2 className="section-title">The Mind Behind Timeless Bond</h2>
          <div className="luxury-divider" />
        </div>

        {/* Founder */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div className="relative group">
            <div className="relative overflow-hidden">
              <img
                src={wedding3}
                alt="Basil Thampy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-primary/20 pointer-events-none transition-all duration-500 group-hover:inset-6 group-hover:border-primary/40" />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Basil Thampy
            </h3>
            <p className="font-body text-sm tracking-luxury uppercase text-primary mb-8">
              Founder & Creative Director
            </p>
            
            <div className="space-y-6">
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                For nearly a decade, Basil has been capturing the most intimate moments of love stories 
                through his lens. What began as a passion for wedding videography evolved into something 
                far deeper—a calling to craft entire experiences that honour the sacred bond between two souls.
              </p>
              
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                His journey through countless ceremonies taught him that every detail matters, 
                every moment deserves intention, and every couple deserves a celebration that 
                feels authentically theirs. This understanding became the foundation of Timeless Bond.
              </p>
              
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
                "A wedding is not just an event—it's the first chapter of a lifetime. 
                My role is to ensure that chapter begins exactly as it was meant to."
              </p>
            </div>

            {/* Experience Badge */}
            <div className="mt-10 inline-flex items-center gap-4">
              <div className="w-12 h-px bg-primary/40" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                8+ Years of Crafting Memories
              </span>
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
