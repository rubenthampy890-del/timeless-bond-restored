import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

import wedding1 from "@/assets/wedding-1.jpg";
import wedding2 from "@/assets/wedding-2.jpg";
import wedding3 from "@/assets/wedding-3.jpg";
import wedding4 from "@/assets/wedding-4.jpg";
import wedding5 from "@/assets/wedding-5.jpg";
import wedding6 from "@/assets/wedding-6.jpg";

const categories = ["Recents", "Favourites", "Classics", "Celebrities", "International"];

const films = [
  {
    image: wedding1,
    date: "NOV 2024",
    location: "MEXICO",
    couple: "AAYUSH & SUMAN",
    category: "Recents",
    featured: true,
    overlay: "A DESTINATION WEDDING",
  },
  {
    image: wedding2,
    date: "JUN 2024",
    location: "BODRUM",
    couple: "DHRISHA & ARUN",
    category: "Recents",
  },
  {
    image: wedding3,
    date: "JUN 2024",
    location: "MARRAKECH",
    couple: "MEHAK & JAY",
    category: "Recents",
  },
  {
    image: wedding4,
    date: "MAR 2024",
    location: "UDAIPUR",
    couple: "PRIYA & VIKRAM",
    category: "Favourites",
  },
  {
    image: wedding5,
    date: "DEC 2023",
    location: "DUBAI",
    couple: "NISHA & RAHUL",
    category: "Classics",
  },
  {
    image: wedding6,
    date: "SEP 2023",
    location: "BALI",
    couple: "TARA & ARJUN",
    category: "International",
  },
];

const FilmsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Recents");

  const filteredFilms = films.filter(
    (film) => film.category === activeCategory || activeCategory === "Recents"
  );

  return (
    <section id="films" className="lg:ml-[180px] py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal animation="fade-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-foreground tracking-wide mb-12">
            WATCH A TRAILER
          </h2>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent border border-border text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilms.slice(0, 3).map((film, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer">
                {/* Image */}
                <img
                  src={film.image}
                  alt={film.couple}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-soft-black/90 via-soft-black/30 to-transparent" />

                {/* Featured Overlay Text */}
                {film.featured && film.overlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-ivory">
                      <p className="font-serif text-3xl md:text-4xl tracking-wide opacity-80">
                        {film.overlay}
                      </p>
                    </div>
                  </div>
                )}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-6 h-6 text-ivory fill-ivory" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 text-ivory/70 text-xs tracking-[0.15em] mb-2">
                    <span>{film.date}</span>
                    <span className="flex items-center gap-1">
                      <Play className="w-2 h-2 fill-current" />
                      {film.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-ivory tracking-wide">
                    {film.couple}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View More Button */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-soft-black text-ivory px-8 py-3 rounded-full font-medium hover:bg-charcoal transition-colors group">
              <span>view more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FilmsSection;
