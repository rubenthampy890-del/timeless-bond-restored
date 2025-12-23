import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-cinema-black">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
          opacity: Math.max(0.3, 1 - scrollY / 1000)
        }}
      >
        <img
          src={heroBg}
          alt="Cinematic wedding moment"
          className="w-full h-[120%] object-cover object-center"
        />
        {/* Multiple gradient overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black/60 via-cinema-black/20 to-cinema-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-black/40 via-transparent to-cinema-black/40" />
        {/* Vignette effect */}
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 60px hsl(0 0% 3% / 0.6)' }} />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Subtitle - Slow reveal */}
          <div className="overflow-hidden mb-6">
            <p 
              className={`font-body text-sm md:text-base tracking-[0.4em] uppercase text-primary transition-all duration-1000 ease-cinema ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Wedding Films & Experiences
            </p>
          </div>
          
          {/* Main Headline - Cinematic text reveal */}
          <div className="overflow-hidden mb-4">
            <h1 
              className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground tracking-wide leading-[1.1] transition-all duration-1200 ease-cinema ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              Where Love Becomes
            </h1>
          </div>
          
          <div className="overflow-hidden mb-10">
            <h1 
              className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground tracking-wide leading-[1.1] italic transition-all duration-1200 ease-cinema ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              a Timeless Bond
            </h1>
          </div>

          {/* Divider line */}
          <div 
            className={`w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10 transition-all duration-1000 ease-cinema ${
              isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transitionDelay: "1200ms" }}
          />
          
          {/* Subtext */}
          <div className="overflow-hidden mb-14">
            <p 
              className={`font-body text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-cinema ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: "1400ms" }}
            >
              Luxury wedding stories crafted with emotion, elegance, and precision.
            </p>
          </div>

          {/* CTA - Very subtle, refined */}
          <div 
            className={`transition-all duration-1000 ease-cinema ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1700ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 font-body text-sm tracking-[0.3em] uppercase text-foreground/80 hover:text-primary transition-colors duration-700"
            >
              <span className="relative">
                Begin Your Story
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700 ease-out" />
              </span>
              <svg 
                className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More cinematic */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2000ms", opacity: opacity * 0.6 }}
      >
        <div className="flex flex-col items-center text-foreground/40">
          <span className="font-body text-xs tracking-[0.3em] uppercase mb-4">Scroll</span>
          <div className="relative h-16 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1/3 bg-foreground/60 scroll-indicator-cinema" />
          </div>
        </div>
      </div>

      {/* Letterbox bars for cinematic feel */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-cinema-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-cinema-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
