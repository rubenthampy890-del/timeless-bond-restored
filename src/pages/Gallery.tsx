
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

const films = [
    { title: "The Royal Union", location: "Udaipur", year: "2024", img: "https://images.unsplash.com/photo-1520854222959-13781de67087?q=80&w=2075&auto=format&fit=crop" },
    { title: "Coastal Vows", location: "Amalfi", year: "2024", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop" },
    { title: "Midnight Jazz", location: "New York", year: "2025", img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2070&auto=format&fit=crop" },
    { title: "Velvet Silence", location: "Kyoto", year: "2025", img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop" }
];

const Gallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div className="bg-background text-foreground overflow-x-hidden">
            <section className="h-[50vh] flex items-center justify-center bg-void relative z-10">
                <h1 className="font-serif text-6xl md:text-9xl text-silk opacity-90">Cinema</h1>
            </section>

            <section ref={containerRef} className="h-[300vh] relative z-20">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
                        {films.map((film, i) => (
                            <div key={i} className="relative w-[70vw] md:w-[40vw] aspect-video shrink-0 bg-secondary group overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.5 }}
                                    src={film.img}
                                    alt={film.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-2">{film.location} — {film.year}</p>
                                            <h3 className="font-serif text-3xl text-silk">{film.title}</h3>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MagneticButton>
                                                <span className="text-xs uppercase tracking-widest px-4 py-2 border border-white/20 rounded-full text-white">Watch</span>
                                            </MagneticButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
