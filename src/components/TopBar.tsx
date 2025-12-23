import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden lg:flex fixed top-0 left-[180px] right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex-1 flex items-center px-8 py-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search a film here"
              className="w-full bg-secondary/50 rounded-full py-3 pl-12 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 ml-8">
          <button className="px-6 py-2.5 bg-soft-black text-ivory rounded-full text-sm font-medium hover:bg-charcoal transition-colors">
            FAQs
          </button>
          <Link
            to="/book"
            className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-soft-black rounded-full text-sm font-medium transition-colors group"
          >
            <span>Enquire</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
