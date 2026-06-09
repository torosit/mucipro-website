import { Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-16 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Mucipro SAS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovación circular para la industria alimentaria. Transformamos residuos en valor.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Aditivo Proteínico</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Aditivo Fibra</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Aditivo Antioxidante</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Aditivo Sabor</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Aditivo Espesante</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sostenibilidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@mucipro.com</li>
              <li>+57 (1) 1234-5678</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mucipro SAS. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Políticas de Privacidad</a>
            <a href="#" className="hover:text-primary">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
