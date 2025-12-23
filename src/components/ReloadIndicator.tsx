import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";

const ReloadIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    // Show reload indicator when user navigates away (beforeunload)
    const handleBeforeUnload = () => {
      setIsReloading(true);
    };

    // Handle keyboard shortcut for refresh
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "F5") || (e.ctrlKey && e.key === "r") || (e.metaKey && e.key === "r")) {
        setIsVisible(true);
        setIsReloading(true);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Manual reload trigger function
  const triggerReload = () => {
    setIsVisible(true);
    setIsReloading(true);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  // Expose reload function globally for the button
  useEffect(() => {
    (window as any).triggerPageReload = triggerReload;
    return () => {
      delete (window as any).triggerPageReload;
    };
  }, []);

  if (!isVisible && !isReloading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[99] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm transition-opacity duration-300",
        isReloading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <RefreshCw className="w-8 h-8 text-primary animate-spin" />
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/60">
          Refreshing
        </p>
      </div>
    </div>
  );
};

// Reload button component for the UI
export const ReloadButton = () => {
  const handleClick = () => {
    if ((window as any).triggerPageReload) {
      (window as any).triggerPageReload();
    } else {
      window.location.reload();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 bg-charcoal/80 hover:bg-charcoal border border-primary/20 hover:border-primary/40 rounded-full backdrop-blur-sm transition-all duration-300 group"
      aria-label="Reload page"
    >
      <RefreshCw className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
    </button>
  );
};

export default ReloadIndicator;
