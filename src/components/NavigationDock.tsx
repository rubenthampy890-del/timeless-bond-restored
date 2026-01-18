
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NavigationDock = () => {
    const location = useLocation();

    const links = [
        { label: "Origin", path: "/" },
        { label: "Films", path: "/gallery" },
        { label: "Stories", path: "/stories" },
        { label: "Creator", path: "/about" },
        { label: "Reserve", path: "/book" },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50]">
            <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link key={link.path} to={link.path}>
                            <motion.div
                                className={cn(
                                    "relative px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] transition-colors duration-500",
                                    isActive ? "text-background" : "text-foreground hover:text-white"
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="pill"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative">{link.label}</span>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigationDock;
