import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary" data-testid="section-cta">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#1a3a0a] z-0" />
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para innovar con nosotros?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Descubra cómo nuestros aditivos derivados del mucílago pueden elevar la calidad de sus productos y potenciar su compromiso ambiental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg">
              Agendar Consulta
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
              Llamar al Equipo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
