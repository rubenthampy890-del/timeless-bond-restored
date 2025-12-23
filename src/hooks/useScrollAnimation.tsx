import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.15, rootMargin = "-50px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for scroll animations
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "cinema-up" | "cinema-fade";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 1200,
  threshold = 0.15,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const getAnimationStyles = (): CSSProperties => {
    const baseStyles: CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
      case "cinema-up":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
        };
      case "fade-in":
      case "cinema-fade":
        return baseStyles;
      case "fade-left":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-80px)",
        };
      case "fade-right":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(80px)",
        };
      case "scale":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
        };
      default:
        return baseStyles;
    }
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
};

// Line reveal component for dividers
interface LineRevealProps {
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "center";
}

export const LineReveal = ({
  className = "",
  delay = 0,
  direction = "center",
}: LineRevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });

  const getTransformOrigin = () => {
    switch (direction) {
      case "left":
        return "left";
      case "right":
        return "right";
      default:
        return "center";
    }
  };

  return (
    <div
      ref={ref}
      className={`h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent ${className}`}
      style={{
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: getTransformOrigin(),
        transition: `transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    />
  );
};

// Text reveal component for cinematic text animations
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const TextReveal = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 50,
}: TextRevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const words = children.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mr-[0.3em]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * staggerDelay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default useScrollAnimation;
