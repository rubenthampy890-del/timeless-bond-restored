import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Our Story", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "The Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 150;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "py-2 md:py-3 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-md bg-background/95"
            : "py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="relative z-[60] group flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Timeless Bond"
              className={`transition-all duration-500 group-hover:opacity-80 ${
                isScrolled ? "h-8 sm:h-10 md:h-12" : "h-10 sm:h-12 md:h-14"
              } ${!isScrolled && !isMobileMenuOpen ? "brightness-0 invert" : ""}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[10px] xl:text-[11px] tracking-[0.18em] xl:tracking-[0.2em] uppercase font-body transition-all duration-300 pb-1 group whitespace-nowrap ${
                    isScrolled
                      ? isActive 
                        ? "text-primary" 
                        : "text-foreground/70 hover:text-foreground"
                      : isActive
                        ? "text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-px bg-current transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-[60] w-10 h-10 sm:w-11 sm:h-11 flex flex-col justify-center items-center gap-[5px] sm:gap-[6px] rounded-full border transition-all duration-300 ${
              isMobileMenuOpen
                ? "border-foreground/20 bg-transparent"
                : isScrolled
                  ? "border-foreground/10 hover:border-foreground/30 bg-transparent"
                  : "border-primary-foreground/20 hover:border-primary-foreground/40 bg-primary-foreground/5"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block h-[1px] transition-all duration-500 ease-out origin-center ${
                isMobileMenuOpen 
                  ? "w-4 rotate-45 translate-y-[3px] bg-foreground" 
                  : isScrolled
                    ? "w-5 bg-foreground"
                    : "w-5 bg-primary-foreground"
              }`}
            />
            <span
              className={`block h-[1px] transition-all duration-500 ease-out ${
                isMobileMenuOpen 
                  ? "w-4 -rotate-45 -translate-y-[3px] bg-foreground" 
                  : isScrolled
                    ? "w-3.5 bg-foreground"
                    : "w-3.5 bg-primary-foreground"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-[55] transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <nav className="flex flex-col items-center gap-6 sm:gap-7">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xl sm:text-2xl md:text-3xl font-serif tracking-wide transition-all duration-500 relative group ${
                    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  } ${
                    isMobileMenuOpen 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : "0ms" 
                  }}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-300 ${
                      isActive ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
          
          {/* Mobile menu footer */}
          <div 
            className={`absolute bottom-10 sm:bottom-12 text-center transition-all duration-500 ${
              isMobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "450ms" : "0ms" }}
          >
            <p className="font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Est. 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
