import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-bold text-primary">
              MaPrimeAdapt' Monte-Escalier
            </h1>
          </div>

          <Button
            asChild
            size="sm"
            className="gap-2 bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            <a href="tel:0617526836">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">06 17 52 68 36</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
