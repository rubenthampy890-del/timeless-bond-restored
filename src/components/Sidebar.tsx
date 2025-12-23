import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Film, Users, Award, BookOpen, Newspaper, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Films", href: "#films", icon: Film },
  { label: "About", href: "#about", icon: Users },
  { label: "Crew", href: "#crew", icon: Award },
  { label: "Workshop", href: "#workshop", icon: BookOpen },
  { label: "Blog & Press", href: "#blog", icon: Newspaper },
  { label: "Contact", href: "#contact", icon: Phone },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  const handleNavClick = (label: string, href: string) => {
    setActiveItem(label);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[180px] bg-soft-black flex flex-col z-50 hidden lg:flex">
      {/* Logo */}
      <div className="p-6 flex justify-center">
        <Link to="/" className="block">
          <img 
            src={logo} 
            alt="Timeless Bond" 
            className="w-24 h-auto filter brightness-0 invert"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.label, item.href)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-body transition-all duration-300 ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-ivory/70 hover:text-ivory hover:bg-ivory/5"
                  }`}
                >
                  <span className={`p-1.5 rounded-full ${isActive ? "bg-primary text-soft-black" : ""}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom CTA */}
      <div className="p-6 border-t border-ivory/10">
        <p className="text-ivory/90 text-center font-serif text-lg leading-tight mb-4">
          We'd love to<br />hear your story!
        </p>
        <Link
          to="/book"
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-soft-black font-medium py-3 px-4 rounded-full transition-all duration-300 group"
        >
          <span>Enquire</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
