import { Play } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";

const tracks = [
  { image: wedding1, title: "Ik Onkar", artist: "by Harshdeep Kaur & Devender Pal Singh" },
  { image: wedding2, title: "Vekheya Reprise", artist: "By Vibha" },
  { image: wedding3, title: "Tu Mila", artist: "By Riya Goley" },
  { image: wedding4, title: "Panaah", artist: "Mayank Choudhary" },
  { image: wedding5, title: "Sahib Sahiba - Chaap Tilak", artist: "Digvijay Singh Pariyar & Shaoni Mojumdar" },
];

const MusicSection = () => {
  return (
    <section id="workshop" className="lg:ml-[180px] py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text Content */}
          <ScrollReveal animation="fade-right">
            <div>
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4">
                ORIGINAL COMPOSITIONS
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight mb-6">
                CREATING MUSIC THAT MAKES YOU{" "}
                <span className="text-primary">FEEL.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Timeless Bond label creates music with a keen focus on lyrics and 
                background scores that set the sounds for weddings across cultures.
              </p>
            </div>
          </ScrollReveal>

          {/* Vinyl Record Illustration */}
          <ScrollReveal animation="fade-left">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                {/* Vinyl Record */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-charcoal via-soft-black to-charcoal shadow-2xl animate-spin-slow" 
                  style={{ animationDuration: "10s" }}>
                  {/* Grooves */}
                  <div className="absolute inset-4 rounded-full border border-ivory/10" />
                  <div className="absolute inset-8 rounded-full border border-ivory/10" />
                  <div className="absolute inset-12 rounded-full border border-ivory/10" />
                  <div className="absolute inset-16 rounded-full border border-ivory/10" />
                  <div className="absolute inset-20 rounded-full border border-ivory/10" />
                  {/* Center Label */}
                  <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-xs text-soft-black text-center px-2">
                        Timeless Bond
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative roses overlay effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Track Cards */}
        <ScrollReveal animation="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tracks.map((track, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-soft-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-10 h-10 text-ivory fill-ivory" />
                  </div>
                </div>
                <h3 className="font-serif text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {track.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {track.artist}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MusicSection;
