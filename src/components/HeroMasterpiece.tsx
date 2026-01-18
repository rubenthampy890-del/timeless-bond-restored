
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroMasterpiece = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={containerRef} className="relative h-screen overflow-hidden bg-background">
            {/* Immersive Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-void/30 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Wedding"
                    className="w-full h-full object-cover opacity-90"
                />

                {/* Cinematic Grain Overlay specific to Hero */}
                <div className="absolute inset-0 z-20 mix-blend-overlay opacity-20 pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </motion.div>

            {/* Hero Content - Editorial Layout */}
            <motion.div
                style={{ opacity }}
                className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-body text-sm md:text-base tracking-[0.4em] uppercase text-silk/80 mb-6"
                >
                    Est. 2025
                </motion.p>

                <h1 className="font-serif text-[12vw] leading-[0.85] text-silk mix-blend-overlay opacity-90 tracking-tighter">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        Timeless
                    </motion.span>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block italic font-light text-primary"
                    >
                        Bond
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 flex flex-col items-center gap-4"
                >
                    <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-silk to-transparent" />
                    <p className="text-[10px] tracking-[0.3em] uppercase text-silk/60">Scroll</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HeroMasterpiece;
