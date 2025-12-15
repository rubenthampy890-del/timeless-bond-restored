import { useState, useEffect } from "react";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-10">
          <img
            src={logo}
            alt="Timeless Bond"
            className={`transition-all duration-500 ${
              isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs tracking-luxury uppercase font-body transition-colors duration-300 elegant-underline pb-1 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground/90 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-wide text-foreground hover:text-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
