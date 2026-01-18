
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
            <div className="max-w-3xl text-center space-y-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-body text-sm tracking-[0.4em] uppercase text-bronze"
                >
                    The Creator
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl text-silk"
                >
                    Ruben Thampy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-body text-muted-foreground leading-loose text-lg"
                >
                    A visual artist dedicated to the preservation of fleeting moments.
                    Merging cinema verité with editorial grace to craft heirlooms for the modern romantic.
                </motion.p>
            </div>
        </div>
    );
};

export default About;
