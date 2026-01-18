
import { useState, useEffect } from "react";
import HeroMasterpiece from "@/components/HeroMasterpiece";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Scrollytelling Section Component
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OriginStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center py-20 bg-background relative z-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          style={{ opacity: textOpacity, y: textY }}
          className="font-serif text-3xl md:text-5xl leading-relaxed text-silk/90"
        >
          "We believe that a wedding is not just an event. It is a <span className="text-bronze italic">symphony</span> of moments, crafted with silence, sound, and soul. We don't just plan; we curate time itself."
        </motion.p>
      </div>
    </section>
  );
};

const Index = () => {
  // Preloader handled by sessionStorage/GlobalLayout if needed, but keeping it simple for now
  return (
    <main className="relative bg-background">
      <HeroMasterpiece />
      <OriginStory />

      {/* Keeping existing functional components but wrapped in cinematic spacing */}
      <div className="space-y-32 pb-32">
        <Philosophy />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </main>
  );
};

export default Index;
