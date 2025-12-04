import { MaterialIcon } from "@/components/MaterialIcon";

const steps = [
  {
    icon: "person_add",
    title: "Crea tu cuenta",
    description: "Registrate en segundos y empezá a ganar Chanchis cada vez que comprás.",
    color: "bg-chanchis-pink",
  },
  {
    icon: "savings",
    title: "Gana Chanchis",
    description: "Cada comercio de la red te da una cantidad fija de Chanchis por tu compra.",
    color: "bg-chanchis-gold",
  },
  {
    icon: "celebration",
    title: "Úsalos donde quieras",
    description: "Canjeá tus Chanchis por descuentos reales en cualquier tienda de la red.",
    color: "bg-primary",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Ahorrar nunca fue tan{" "}
            <span className="text-chanchis-gold">fácil</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En solo 3 pasos, estarás en camino hacia tus sueños financieros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-chanchis-burgundy text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <MaterialIcon name={step.icon} size={40} className="text-chanchis-burgundy" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
