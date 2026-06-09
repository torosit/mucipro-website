import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Sostenible", value: "100%" },
    { label: "Clientes", value: "50+" },
    { label: "Productos", value: "5+" },
  ];

  return (
    <section id="about" className="py-24 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Acerca de Nosotros</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En Mucipro SAS estamos comprometidos con la sostenibilidad y la innovación. Nuestro objetivo es aprovechar el mucílago de café, un subproducto tradicionalmente descartado, y transformarlo en aditivos de alto valor para la industria alimentaria.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Con tecnología de punta y rigurosos estándares de calidad, ofrecemos soluciones precisas que mejoran la nutrición, textura y sabor de los alimentos, todo mientras reducimos el impacto ambiental de la producción cafetera.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center border border-border"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="relative z-10 text-white font-semibold text-lg px-6 text-center">
              Tecnología e innovación en cada grano
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
