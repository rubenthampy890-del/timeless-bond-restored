import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Minimum display time for the preloader
    const minDisplayTime = 2500;
    
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        onComplete?.();
      }, 800);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-charcoal transition-opacity duration-700",
        isExiting && "opacity-0"
      )}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo container with animations */}
        <div className={cn(
          "relative",
          isExiting ? "animate-logo-exit" : "animate-logo-enter"
        )}>
          {/* Decorative frame */}
          <div className="absolute -inset-8 sm:-inset-12">
            <div className={cn(
              "absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t border-l border-primary/30 transition-all duration-1000 delay-700",
              isExiting ? "opacity-0 -translate-x-2 -translate-y-2" : "opacity-100"
            )} />
            <div className={cn(
              "absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t border-r border-primary/30 transition-all duration-1000 delay-700",
              isExiting ? "opacity-0 translate-x-2 -translate-y-2" : "opacity-100"
            )} />
            <div className={cn(
              "absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b border-l border-primary/30 transition-all duration-1000 delay-700",
              isExiting ? "opacity-0 -translate-x-2 translate-y-2" : "opacity-100"
            )} />
            <div className={cn(
              "absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b border-r border-primary/30 transition-all duration-1000 delay-700",
              isExiting ? "opacity-0 translate-x-2 translate-y-2" : "opacity-100"
            )} />
          </div>

          {/* Logo with shimmer effect */}
          <div className="relative overflow-hidden">
            <img 
              src={logo} 
              alt="Timeless Bond" 
              className="h-20 sm:h-28 md:h-32 w-auto relative z-10"
            />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        </div>

        {/* Tagline */}
        <p className={cn(
          "font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mt-8 sm:mt-10 transition-all duration-700 delay-500",
          isExiting ? "opacity-0 translate-y-4" : "opacity-100 animate-fade-in-up"
        )}>
          Curating Timeless Celebrations
        </p>

        {/* Elegant loading indicator */}
        <div className={cn(
          "mt-10 sm:mt-12 flex items-center gap-3 transition-opacity duration-500",
          isExiting && "opacity-0"
        )}>
          <div className="w-8 h-px bg-primary/30 animate-loading-line-left" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <div className="w-8 h-px bg-primary/30 animate-loading-line-right" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;