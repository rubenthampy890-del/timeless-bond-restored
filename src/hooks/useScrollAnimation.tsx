import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
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
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 800,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const getAnimationStyles = (): CSSProperties => {
    const baseStyles: CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        };
      case "fade-in":
        return baseStyles;
      case "fade-left":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(40px)",
        };
      case "fade-right":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-40px)",
        };
      case "scale":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
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

export default useScrollAnimation;
