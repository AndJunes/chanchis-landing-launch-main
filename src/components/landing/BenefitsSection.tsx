import { MaterialIcon } from "@/components/MaterialIcon";
import chanchisExcited from "@/assets/chanchis-excited.png";

const benefits = [
  {
    icon: "visibility",
    title: "Ahorro transparente",
    description: "Ves exactamente cuánto ganás y dónde podés usarlo.",
  },
  {
    icon: "notifications_active",
    title: "Recompensas inteligentes",
    description: "Recibí alertas cuando un local cerca tuyo acepta Chanchis.",
  },
  {
    icon: "security",
    title: "Protegido y confiable",
    description: "Sin bancos, sin comisiones, sin datos sensibles. Lo tuyo queda tuyo.",
  },
  {
    icon: "diversity_3",
    title: "Apoyás a comercios locales",
    description: "Cada compra fortalece negocios pequeños que compiten con grandes cadenas.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-chanchis-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mascot */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-chanchis-gold/20 rounded-full blur-3xl scale-90" />
              <img 
                src={chanchisExcited} 
                alt="Chanchis emocionado" 
                className="relative w-64 sm:w-72 lg:w-80 animate-float drop-shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                Todo lo que necesitas para{" "}
                <span className="text-chanchis-gold">ahorrar sin cambiar tu vida</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Las compras que ya hacés, pero ahora te devuelven dinero. Así de simple.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MaterialIcon 
                      name={benefit.icon} 
                      size={24} 
                      className="text-chanchis-burgundy group-hover:text-primary-foreground transition-colors" 
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
