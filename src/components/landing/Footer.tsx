import { MaterialIcon } from "@/components/MaterialIcon";
import chanchisface from "@/assets/chanchis-face.png";

export const Footer = () => {
  return (
    <footer className="bg-chanchis-burgundy text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <img src={chanchisface} alt="Chanchis" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-extrabold">Chanchis</span>
            </a>
            <p className="text-accent-foreground/80 max-w-sm">
              La forma justa, divertida y comunitaria de ahorrar en tus compras diarias.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-accent-foreground/20 transition-colors">
                <MaterialIcon name="tag" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-accent-foreground/10 rounded-full flex items-center justify-center hover:bg-accent-foreground/20 transition-colors">
                <MaterialIcon name="alternate_email" size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Producto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Cómo funciona</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Beneficios</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Testimonios</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Soporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contacto</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Términos de uso</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © 2025 Chanchis. Todos los derechos reservados.
          </p>
          <p className="text-accent-foreground/60 text-sm flex items-center gap-1">
            Hecho con <MaterialIcon name="favorite" size={16} className="text-primary" /> para ti
          </p>
        </div>
      </div>
    </footer>
  );
};
