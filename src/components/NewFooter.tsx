import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.png";

const NewFooter = () => {
  return (
    <footer id="contact" className="lg:ml-[180px] bg-soft-black text-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img 
                src={logo} 
                alt="Timeless Bond" 
                className="w-24 h-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-ivory/70 leading-relaxed max-w-md mb-6">
                Where love becomes a timeless bond. We craft luxury wedding experiences 
                with emotion, precision, and grace.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-soft-black px-6 py-3 rounded-full font-medium transition-all group"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Films", "About", "Crew", "Workshop", "Blog & Press"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/ & /g, "-")}`}
                      className="text-ivory/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
              <ul className="space-y-3 text-ivory/70 text-sm">
                <li>hello@timelessbond.com</li>
                <li>+91 98765 43210</li>
                <li>Mumbai, India</li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a 
                  href="#" 
                  className="p-2 bg-ivory/10 rounded-full hover:bg-primary hover:text-soft-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-ivory/10 rounded-full hover:bg-primary hover:text-soft-black transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-ivory/10 rounded-full hover:bg-primary hover:text-soft-black transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/50 text-sm">
            © 2025 Timeless Bond. All rights reserved.
          </p>
          <div className="flex gap-6 text-ivory/50 text-sm">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
