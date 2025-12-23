import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-cinema-black py-16 px-6 border-t border-foreground/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Timeless Bond" 
            className="h-16 mb-8 brightness-0 invert opacity-70" 
          />

          {/* Tagline */}
          <p className="font-body text-lg text-foreground/40 max-w-md mb-12 leading-relaxed">
            Where love becomes a timeless bond.
          </p>

          {/* Social Links */}
          <div className="flex gap-10 mb-12">
            <a
              href="https://www.instagram.com/timelessbond.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-primary transition-colors duration-500"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/infoanamorphicpicture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-primary transition-colors duration-500"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-primary transition-colors duration-500"
              aria-label="Vimeo"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 8.5c-.1 2.1-1.6 5-4.4 8.6-2.9 3.8-5.4 5.7-7.4 5.7-1.3 0-2.3-1.2-3.1-3.5-.6-2.1-1.1-4.1-1.7-6.2-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.6.9L1 9.5c1-.9 2-1.8 3-2.6 1.4-1.2 2.4-1.8 3.1-1.9 1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.9 4.9.5 2.3 1 3.4 1.7 3.4.5 0 1.2-.8 2.1-2.3.9-1.5 1.4-2.7 1.5-3.5.1-1.4-.4-2.1-1.5-2.1-.5 0-1.1.1-1.7.4 1.1-3.6 3.2-5.4 6.3-5.2 2.3.1 3.4 1.5 3.3 4.1z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-foreground/10 mb-8" />

          {/* Copyright */}
          <p className="font-body text-sm text-foreground/30 tracking-[0.2em] uppercase">
            © 2025 Timeless Bond. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
