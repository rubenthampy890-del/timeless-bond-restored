import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#philosophy" },
  { label: "Films", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-cinema ${
          isScrolled
            ? "py-3 bg-cinema-black/95 backdrop-blur-md border-b border-foreground/5"
            : "py-5 md:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="relative z-[60] group flex-shrink-0"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <img
              src={logo}
              alt="Timeless Bond"
              className={`transition-all duration-700 ease-cinema group-hover:opacity-70 ${
                isScrolled ? "h-9 md:h-10" : "h-10 md:h-12"
              } brightness-0 invert`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-14">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-500 pb-1 group ${
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </a>
              );
            })}
          </div>

          {/* Enquire Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 border border-foreground/20 text-foreground/80 font-body text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:border-primary hover:text-primary"
          >
            Enquire
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[60] w-12 h-12 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block h-px bg-foreground transition-all duration-500 ease-cinema origin-center ${
                isMobileMenuOpen 
                  ? "w-6 rotate-45 translate-y-1" 
                  : "w-7"
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-500 ease-cinema ${
                isMobileMenuOpen 
                  ? "w-6 -rotate-45 -translate-y-1" 
                  : "w-5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay with cinematic feel */}
      <div
        className={`lg:hidden fixed inset-0 bg-cinema-black z-[55] transition-all duration-700 ease-cinema ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-2xl sm:text-3xl font-serif tracking-wide transition-all duration-700 ease-cinema ${
                    isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  } ${
                    isMobileMenuOpen 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${200 + index * 80}ms` : "0ms" 
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          
          {/* Mobile Enquire Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`mt-12 px-10 py-4 border border-foreground/20 text-foreground/80 font-body text-sm tracking-[0.2em] uppercase transition-all duration-700 ease-cinema hover:border-primary hover:text-primary ${
              isMobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "600ms" : "0ms" }}
          >
            Enquire
          </a>
          
          {/* Mobile menu footer */}
          <div 
            className={`absolute bottom-12 text-center transition-all duration-700 ease-cinema ${
              isMobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "700ms" : "0ms" }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Est. 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
