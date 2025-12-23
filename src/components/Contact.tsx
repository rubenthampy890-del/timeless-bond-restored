import { Link } from "react-router-dom";
import { ScrollReveal, LineReveal } from "@/hooks/useScrollAnimation";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cinema-black text-foreground relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
              Begin Your Journey
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-foreground mb-8">
              Let's Tell Your Story
            </h2>
          </ScrollReveal>
          
          <LineReveal className="w-20 mx-auto my-10" delay={300} />
          
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="font-body text-lg md:text-xl text-foreground/60 max-w-xl mx-auto mb-12 leading-relaxed">
              Every extraordinary celebration begins with a conversation. Schedule your private consultation and let us understand your vision, preferences, and dreams.
            </p>
          </ScrollReveal>
          
          {/* CTA Button - Cinematic style */}
          <ScrollReveal animation="fade-up" delay={500}>
            <Link
              to="/book"
              className="group inline-flex items-center gap-4 px-12 py-5 border border-foreground/20 text-foreground font-body text-sm tracking-[0.3em] uppercase transition-all duration-700 hover:border-primary hover:bg-primary/10"
            >
              Schedule Consultation
              <svg 
                className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Contact Details */}
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="mt-24 pt-12 border-t border-foreground/10">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@timelessbond.com"
                  className="font-body text-lg text-foreground/80 hover:text-primary transition-colors duration-500"
                >
                  hello@timelessbond.com
                </a>
              </div>
              
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
                  By Appointment
                </p>
                <p className="font-body text-lg text-foreground/80">
                  Mumbai · Delhi · Bangalore
                </p>
              </div>
              
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 mb-3">
                  Follow
                </p>
                <a
                  href="https://www.instagram.com/timelessbond.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-lg text-foreground/80 hover:text-primary transition-colors duration-500"
                >
                  @timelessbond.in
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
