import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Refined wedding experience"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-soft-black/30 to-soft-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20 pb-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-body text-xs sm:text-sm md:text-base tracking-luxury uppercase mb-4 sm:mb-6 animate-fade-up">
            Wedding Experience Curators
          </p>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground leading-tight mb-6 sm:mb-8 animate-fade-up animation-delay-200">
            Where Love Becomes
            <span className="block italic mt-1 sm:mt-2">a Timeless Bond</span>
          </h1>
          
          <p className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-up animation-delay-400 px-2">
            Wedding experiences crafted with emotion, precision, and grace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 animate-fade-up animation-delay-600">
            <a
              href="#contact"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-body text-xs sm:text-sm tracking-luxury uppercase transition-all duration-500 hover:bg-primary/90"
            >
              <span className="relative z-10">Begin Your Journey</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border border-primary-foreground/40 text-primary-foreground font-body text-xs sm:text-sm tracking-luxury uppercase transition-all duration-500 hover:bg-primary-foreground/10 hover:border-primary-foreground"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <div className="flex flex-col items-center text-primary-foreground/60">
          <span className="font-body text-[10px] sm:text-xs tracking-luxury uppercase mb-2 sm:mb-3">Scroll</span>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
