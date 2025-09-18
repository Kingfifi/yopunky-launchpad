import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/yopunky-logo.png";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="YoPunky Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-logo-blue via-logo-pink to-logo-yellow bg-clip-text text-transparent">
              YoPunky
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Button variant="punk" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;