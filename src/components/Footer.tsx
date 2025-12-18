import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logo} alt="Timeless Bond" className="h-20 mb-8 opacity-90" />

          {/* Tagline */}
          <p className="font-body text-lg text-primary-foreground/60 max-w-md mb-10">
            Crafting extraordinary celebrations where every detail whispers elegance and every moment becomes eternal.
          </p>

          {/* Social Links */}
          <div className="flex gap-8 mb-12">
            <a
              href="https://www.instagram.com/timelessbond.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/infoanamorphicpicture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-primary-foreground/10 mb-8" />

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/40 tracking-wide">
            © 2025 Timeless Bond. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
