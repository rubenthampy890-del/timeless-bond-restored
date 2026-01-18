
import { motion } from "framer-motion";

const stories = [
    {
        id: 1,
        title: "The Venetian Promise",
        category: "Destination",
        location: "Venice, Italy",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        quote: "Love is the water that carries us."
    },
    {
        id: 2,
        title: "Desert Solstice",
        category: "Elopement",
        location: "Jaisalmer, India",
        img: "https://images.unsplash.com/photo-1511285560982-1351c4f809b9?q=80&w=2080&auto=format&fit=crop",
        quote: "In the silence of the sands, we found our voice."
    },
    {
        id: 3,
        title: "Monsoon Symphony",
        category: "Traditional",
        location: "Kerala, India",
        img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop",
        quote: "Every drop of rain blessed their union."
    },
    {
        id: 4,
        title: "Urban Ethereal",
        category: "Modern",
        location: "Mumbai, India",
        img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
        quote: "Amidst the chaos, a quiet forever."
    }
];

const Stories = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-body text-sm tracking-[0.4em] uppercase text-bronze mb-6"
                    >
                        Editorial Journal
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-5xl md:text-8xl text-silk mix-blend-overlay"
                    >
                        Love Stories
                    </motion.h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <div className="relative overflow-hidden aspect-[3/4] mb-6">
                                <div className="absolute inset-0 bg-void/20 group-hover:bg-void/0 transition-colors duration-700 z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    src={story.img}
                                    alt={story.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-[10px] tracking-[0.3em] uppercase text-bronze mb-2">{story.location}</p>
                                <h2 className="font-serif text-3xl text-silk mb-2 group-hover:text-white transition-colors">{story.title}</h2>
                                <p className="font-serif italic text-muted-foreground text-lg group-hover:text-silk/80 transition-colors">"{story.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stories;
