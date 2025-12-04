import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/MaterialIcon";
import chanchistSitting from "@/assets/chanchis-sitting.png";
import coin from "@/assets/coin.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-hero">
      {/* Decorative coins */}
      <img 
        src={coin} 
        alt="" 
        className="absolute top-32 left-[10%] w-16 h-16 opacity-60 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <img 
        src={coin} 
        alt="" 
        className="absolute top-48 right-[15%] w-12 h-12 opacity-40 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <img 
        src={coin} 
        alt="" 
        className="absolute bottom-32 left-[20%] w-10 h-10 opacity-50 animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-chanchis-pink/20 rounded-full px-4 py-2 text-sm font-semibold text-chanchis-burgundy">
              <MaterialIcon name="verified" size={18} />
              +50,000 personas ya ahorran con Chanchis
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
              El {" "}
              <span className="text-chanchis-gold">ahorro</span>{" "}
              que nace de tus compras
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
              Chanchis te devuelve parte de lo que gastás todos los días y te deja usar esas recompensas en cualquier comercio de la red. Ganás en uno, ahorrás en otro. Más simple, más justo, más tuyo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl">
                <MaterialIcon name="rocket_launch" />
                Empezar ahora
              </Button>
              <Button variant="hero-outline" size="xl">
                <MaterialIcon name="play_circle" />
                Ver cómo funciona
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MaterialIcon name="check_circle" size={20} className="text-chanchis-gold" />
                100% gratis
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="check_circle" size={20} className="text-chanchis-gold" />
                Sin tarjeta
              </div>
              <div className="flex items-center gap-2">
                <MaterialIcon name="check_circle" size={20} className="text-chanchis-gold" />
                Seguro
              </div>
            </div>
          </div>

          {/* Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-chanchis-pink/30 rounded-full blur-3xl scale-75" />
              <img 
                src={chanchistSitting} 
                alt="Chanchis mascota" 
                className="relative w-72 sm:w-80 lg:w-96 animate-bounce-slow drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
