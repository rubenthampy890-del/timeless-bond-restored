import { Link } from "react-router-dom";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-soft-black text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-primary-foreground mb-6">
            How to Book Your Special Day
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto my-6 sm:my-8" />
          <p className="font-body text-base sm:text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Every extraordinary celebration begins with a conversation. Schedule your private consultation and let us understand your vision, preferences, and dreams.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/book"
            className="group inline-flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 bg-primary text-primary-foreground font-body text-sm tracking-luxury uppercase transition-all duration-500 hover:bg-primary/90 hover:gap-5"
          >
            Schedule Your Consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Contact Details */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-body text-[10px] sm:text-xs tracking-luxury uppercase text-primary-foreground/40 mb-2">
                Email
              </p>
              <a
                href="mailto:hello@timelessbond.com"
                className="font-body text-base sm:text-lg text-primary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                hello@timelessbond.com
              </a>
            </div>
            <div className="hidden sm:block w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-body text-[10px] sm:text-xs tracking-luxury uppercase text-primary-foreground/40 mb-2">
                By Appointment
              </p>
              <p className="font-body text-base sm:text-lg text-primary-foreground/80">
                Mumbai · Bangalore · Delhi
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;