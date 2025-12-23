import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import TopBar from "@/components/TopBar";
import HeroCarousel from "@/components/HeroCarousel";
import FilmsSection from "@/components/FilmsSection";
import WorldMapSection from "@/components/WorldMapSection";
import MusicSection from "@/components/MusicSection";
import FeaturedSection from "@/components/FeaturedSection";
import NewFooter from "@/components/NewFooter";
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
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Top Bar (Desktop Only) */}
        <TopBar />
        
        {/* Main Content */}
        <HeroCarousel />
        <FilmsSection />
        <WorldMapSection />
        <MusicSection />
        <FeaturedSection />
        <NewFooter />
        
        {/* Reload Button */}
        <ReloadButton />
      </main>
    </>
  );
};

export default Index;
