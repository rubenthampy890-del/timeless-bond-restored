import { useState } from "react";
import { toast } from "sonner";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you for reaching out. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", eventDate: "", location: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-soft-black text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-12 md:mb-16">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-primary-foreground mb-4">
            Let's Begin Your Story
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto my-6 sm:my-8" />
          <p className="font-body text-base sm:text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Every great celebration begins with a conversation. We'd love to hear about your vision.
          </p>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal animation="fade-up" delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block font-body text-xs sm:text-sm tracking-luxury uppercase text-primary-foreground/60 mb-2 sm:mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-2 sm:py-3 text-primary-foreground font-body text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-primary-foreground/30"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block font-body text-xs sm:text-sm tracking-luxury uppercase text-primary-foreground/60 mb-2 sm:mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-2 sm:py-3 text-primary-foreground font-body text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-primary-foreground/30"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block font-body text-xs sm:text-sm tracking-luxury uppercase text-primary-foreground/60 mb-2 sm:mb-3">
                  Event Date
                </label>
                <input
                  type="text"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-2 sm:py-3 text-primary-foreground font-body text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-primary-foreground/30"
                  placeholder="Month / Year (if known)"
                />
              </div>
              <div>
                <label className="block font-body text-xs sm:text-sm tracking-luxury uppercase text-primary-foreground/60 mb-2 sm:mb-3">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-2 sm:py-3 text-primary-foreground font-body text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-primary-foreground/30"
                  placeholder="City or Destination"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs sm:text-sm tracking-luxury uppercase text-primary-foreground/60 mb-2 sm:mb-3">
                Tell Us About Your Vision
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-primary-foreground/30 py-2 sm:py-3 text-primary-foreground font-body text-base sm:text-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none placeholder:text-primary-foreground/30"
                placeholder="Share your dreams, ideas, or any details you'd like us to know..."
              />
            </div>

            <div className="text-center pt-6 sm:pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-primary text-primary-foreground font-body text-xs sm:text-sm tracking-luxury uppercase transition-all duration-500 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request a Private Consultation"}
              </button>
            </div>
          </form>
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
