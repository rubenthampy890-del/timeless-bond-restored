
import { ReactNode, useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, useMotionValue, useSpring } from "framer-motion";
import NavigationDock from "./NavigationDock";

interface GlobalLayoutProps {
    children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
    const [cursorVariant, setCursorVariant] = useState("default");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 100 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);

        // Add event listeners for hover effects
        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
                setCursorVariant("hover");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mouseover", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseEnter);
        };
    }, [mouseX, mouseY]);

    return (
        <ReactLenis root>
            {/* Cinematic Grain Overlay - Background Z-Index Fix */}
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.04] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
                style={{ x: cursorX, y: cursorY }}
                variants={{
                    default: { scale: 1 },
                    hover: { scale: 2.5, backgroundColor: "white", mixBlendMode: "difference" }
                }}
                animate={cursorVariant}
            />

            <div className="relative z-0 min-h-screen bg-background text-foreground selection:bg-white/20">
                {children}
            </div>

            <NavigationDock />
        </ReactLenis>
    );
};

export default GlobalLayout;
