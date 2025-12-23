import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Films", href: "#films" },
  { label: "About", href: "#about" },
  { label: "Crew", href: "#crew" },
  { label: "Workshop", href: "#workshop" },
  { label: "Blog & Press", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-soft-black/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/">
            <img 
              src={logo} 
              alt="Timeless Bond" 
              className="w-16 h-auto filter brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ivory"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-soft-black transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-ivory text-2xl font-serif tracking-wide hover:text-primary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="mt-8 flex items-center gap-2 bg-primary text-soft-black px-8 py-3 rounded-full font-medium"
          >
            <span>Enquire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
