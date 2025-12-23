import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ReloadIndicator, { ReloadButton } from "@/components/ReloadIndicator";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    // Check if this is a reload or first visit
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isPageReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";
    
    if (isPageReload) {
      // It's a reload - show faster reload animation
      setIsReload(true);
      setShowPreloader(true);
    } else if (hasSeenPreloader) {
      // Returning to page in same session, skip preloader
      setShowPreloader(false);
      setContentVisible(true);
    }
    // First visit - show full preloader (default state)
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true");
    setContentVisible(true);
  };

  return (
    <>
      {showPreloader && (
        <Preloader 
          onComplete={handlePreloaderComplete} 
          isReload={isReload}
        />
      )}
      <ReloadIndicator />
      <main className={`overflow-x-hidden transition-opacity duration-700 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Hero />
        <Philosophy />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
        <ReloadButton />
      </main>
    </>
  );
};

export default Index;
