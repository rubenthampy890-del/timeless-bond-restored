import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface PreloaderProps {
  onComplete?: () => void;
  isReload?: boolean;
}

const Preloader = ({ onComplete, isReload = false }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"enter" | "hold" | "split" | "exit">("enter");

  useEffect(() => {
    // Animation timeline
    const enterDuration = isReload ? 800 : 1200;
    const holdDuration = isReload ? 600 : 1000;
    const splitDuration = 800;

    // Enter phase
    const enterTimer = setTimeout(() => {
      setPhase("hold");
    }, enterDuration);

    // Hold phase - logo is fully visible
    const holdTimer = setTimeout(() => {
      setPhase("split");
    }, enterDuration + holdDuration);

    // Split phase - logo cracks and splits
    const splitTimer = setTimeout(() => {
      setPhase("exit");
    }, enterDuration + holdDuration + splitDuration);

    // Exit - fade out and complete
    const exitTimer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, enterDuration + holdDuration + splitDuration + 600);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(splitTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete, isReload]);

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-charcoal transition-opacity duration-500",
        phase === "exit" && "opacity-0 pointer-events-none"
      )}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] transition-all duration-1000",
          phase === "split" || phase === "exit" ? "scale-150 opacity-0" : "animate-pulse"
        )} />
      </div>

      {/* Crack line effect - appears during split */}
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0 bg-gradient-to-b from-transparent via-primary/60 to-transparent transition-all duration-300",
        phase === "split" && "h-40 opacity-100",
        phase === "exit" && "h-screen opacity-0"
      )} />

      {/* Split panels - reveal the content */}
      <div className={cn(
        "absolute inset-0 bg-charcoal transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] origin-right",
        (phase === "split" || phase === "exit") && "-translate-x-full"
      )} style={{ width: "50%" }} />
      <div className={cn(
        "absolute inset-0 left-1/2 bg-charcoal transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] origin-left",
        (phase === "split" || phase === "exit") && "translate-x-full"
      )} style={{ width: "50%" }} />

      {/* Content */}
      <div className="relative flex flex-col items-center z-10">
        {/* Logo container - splits into two halves */}
        <div className="relative">
          {/* Decorative frame */}
          <div className={cn(
            "absolute -inset-8 sm:-inset-12 transition-opacity duration-500",
            (phase === "split" || phase === "exit") && "opacity-0"
          )}>
            <div className={cn(
              "absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t border-l border-primary/30 transition-all duration-700",
              phase === "enter" ? "opacity-0 -translate-x-2 -translate-y-2" : "opacity-100"
            )} />
            <div className={cn(
              "absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t border-r border-primary/30 transition-all duration-700",
              phase === "enter" ? "opacity-0 translate-x-2 -translate-y-2" : "opacity-100"
            )} />
            <div className={cn(
              "absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b border-l border-primary/30 transition-all duration-700",
              phase === "enter" ? "opacity-0 -translate-x-2 translate-y-2" : "opacity-100"
            )} />
            <div className={cn(
              "absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b border-r border-primary/30 transition-all duration-700",
              phase === "enter" ? "opacity-0 translate-x-2 translate-y-2" : "opacity-100"
            )} />
          </div>

          {/* Logo split container */}
          <div className="relative flex">
            {/* Left half of logo */}
            <div className={cn(
              "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]",
              phase === "split" && "-translate-x-8 sm:-translate-x-16 -rotate-3 opacity-80",
              phase === "exit" && "-translate-x-20 sm:-translate-x-32 -rotate-6 opacity-0"
            )}>
              <div className="relative" style={{ clipPath: "polygon(0 0, 52% 0, 48% 100%, 0 100%)" }}>
                <img 
                  src={logo} 
                  alt="Timeless Bond" 
                  className={cn(
                    "h-20 sm:h-28 md:h-32 w-auto transition-all duration-1000",
                    phase === "enter" && "opacity-0 scale-90",
                    (phase === "hold" || phase === "split" || phase === "exit") && "opacity-100 scale-100"
                  )}
                />
              </div>
            </div>

            {/* Right half of logo */}
            <div className={cn(
              "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] -ml-[100%]",
              phase === "split" && "translate-x-8 sm:translate-x-16 rotate-3 opacity-80",
              phase === "exit" && "translate-x-20 sm:translate-x-32 rotate-6 opacity-0"
            )}>
              <div className="relative" style={{ clipPath: "polygon(48% 0, 100% 0, 100% 100%, 52% 100%)" }}>
                <img 
                  src={logo} 
                  alt="Timeless Bond" 
                  className={cn(
                    "h-20 sm:h-28 md:h-32 w-auto transition-all duration-1000",
                    phase === "enter" && "opacity-0 scale-90",
                    (phase === "hold" || phase === "split" || phase === "exit") && "opacity-100 scale-100"
                  )}
                />
              </div>
            </div>

            {/* Shimmer effect - only during enter/hold */}
            <div className={cn(
              "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-opacity duration-300",
              (phase === "enter" || phase === "hold") ? "animate-shimmer" : "opacity-0"
            )} />
          </div>
        </div>

        {/* Tagline */}
        <p className={cn(
          "font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mt-8 sm:mt-10 transition-all duration-500",
          phase === "enter" && "opacity-0 translate-y-4",
          phase === "hold" && "opacity-100 translate-y-0",
          (phase === "split" || phase === "exit") && "opacity-0 translate-y-4"
        )}>
          {isReload ? "Loading..." : "Curating Timeless Celebrations"}
        </p>

        {/* Elegant loading indicator */}
        <div className={cn(
          "mt-10 sm:mt-12 flex items-center gap-3 transition-opacity duration-500",
          (phase === "split" || phase === "exit") && "opacity-0"
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
