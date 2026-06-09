import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Los aditivos de Mucipro han transformado nuestra línea de bebidas energéticas. La textura mejoró notablemente sin alterar el sabor, y el impacto en nuestros costos fue mínimo.",
      company: "Empresa XYZ",
      location: "Colombia",
    },
    {
      quote: "Implementar el Aditivo Fibra nos permitió obtener sellos de salud en nuestros productos horneados. Su equipo técnico fue invaluable durante la fase de pruebas.",
      company: "Empresa ABC",
      location: "Latam",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary/5" data-testid="section-testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-background shadow-sm relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-primary/10">
                  <Quote size={80} />
                </div>
                <CardContent className="pt-8 pb-6 px-8 relative z-10">
                  <p className="text-lg text-foreground/90 italic mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-primary">{t.company}</div>
                    <div className="text-sm text-muted-foreground">{t.location}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
