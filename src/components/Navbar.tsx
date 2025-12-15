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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-lg py-3 shadow-[0_1px_0_0_hsl(var(--border)/0.3)]"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="relative z-[60]"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
        >
          <img
            src={logo}
            alt="Timeless Bond"
            className={`transition-all duration-500 ${
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 pb-1 group ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1px] transition-all duration-500 ease-out origin-center ${
              isMobileMenuOpen 
                ? "rotate-45 translate-y-[3px] bg-foreground" 
                : "bg-foreground"
            }`}
          />
          <span
            className={`block w-5 h-[1px] transition-all duration-500 ease-out ${
              isMobileMenuOpen 
                ? "-rotate-45 -translate-y-[3px] bg-foreground" 
                : "bg-foreground"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-50 transition-all duration-700 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl md:text-2xl font-serif tracking-wide text-foreground/80 hover:text-primary transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-4 opacity-0"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms" 
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu footer */}
          <div 
            className={`absolute bottom-12 text-center transition-all duration-500 ${
              isMobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "500ms" : "0ms" }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Est. 2025
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
