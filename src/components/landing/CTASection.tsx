import { Button } from "@/components/ui/button";
import { MaterialIcon } from "@/components/MaterialIcon";
import chanchisCoins from "@/assets/chanchis-coins.png";

export const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-chanchis-pink/30 via-background to-chanchis-gold/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-card rounded-3xl p-6 sm:p-10 lg:p-16 shadow-glow max-w-5xl mx-auto overflow-hidden">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 bg-chanchis-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-chanchis-gold/10 rounded-full blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 items-center">

            {/* Content */}
            <div className="text-center lg:text-left space-y-6">
              <h2 className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                font-extrabold text-foreground leading-tight
              ">
                ¿Listo para empezar a{" "}
                <span className="text-chanchis-gold">pagar menos por lo que ya comprás</span>?
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground">
                Unite a miles que ya están obteniendo descuentos reales simplemente viviendo su vida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="text-base sm:text-lg">
                  <MaterialIcon name="rocket_launch" />
                  Crear mi cuenta gratis
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                <MaterialIcon name="lock" size={16} />
                Tus datos siempre seguros y privados
              </p>
            </div>

            {/* Mascot - Hidden on mobile */}
            <div className="hidden lg:flex justify-center">
              <img
                src={chanchisCoins}
                alt="Chanchis con monedas"
                className="w-64 lg:w-72 xl:w-80 animate-pulse-soft drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
