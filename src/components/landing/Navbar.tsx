import { Button } from "@/components/ui/button";
import chanchisface from "@/assets/chanchis-face.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={chanchisface} alt="Chanchis" className="h-10 w-10 object-contain" />
          <span className="text-xl font-extrabold text-foreground">Chanchis</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Cómo funciona
          </a>
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Beneficios
          </a>
          <a href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Testimonios
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://farcaster.xyz/miniapps/cid2j1MItv1P/chanchis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="sm">
              Comenzar gratis
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
