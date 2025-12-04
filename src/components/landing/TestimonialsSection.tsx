import { MaterialIcon } from "@/components/MaterialIcon";

const testimonials = [
  {
    name: "María González",
    role: "Estudiante universitaria",
    content: "Puedo comprar la merienda en una panadería y usar los Chanchis después en la verdulería. Es ahorro real.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Emprendedor",
    content: "Mis clientes vuelven más seguido desde que estoy en Chanchis. No tuve que pagar nada.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Madre de familia",
    content: "Es como una red de comercios amigos. Ahorramos un montón en casa usando los Chanchis donde más nos conviene",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Miles ya están{" "}
            <span className="text-chanchis-gold">comprando mejor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que dicen quienes usan Chanchis todos los días:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <MaterialIcon key={i} name="star" size={20} className="text-chanchis-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
