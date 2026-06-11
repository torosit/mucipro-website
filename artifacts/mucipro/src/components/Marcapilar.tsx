import { motion } from "framer-motion";

export default function PillarsSection() {
  const pillars = [
    {
      icon: "🌱",
      title: "Sustentabilidad",
      description:
        "Transformamos residuos de café en valor. Reducimos impacto ambiental y maximizamos aprovechamiento de recursos.",
    },
    {
      icon: "🔬",
      title: "Innovación Científica",
      description:
        "Patente N° 44777 respaldada por tecnología de punta. Enzimas concentradas de máxima calidad y eficacia.",
    },
    {
      icon: "✓",
      title: "Calidad Garantizada",
      description:
        "Estándares rigurosos en cada lote. Composición verificada. Resultado predecible en producción.",
    },
    {
      icon: "💰",
      title: "Rentabilidad",
      description:
        "Reduce costos de producción. Mejora margen de ganancia. ROI comprobado en empresas de alimentación.",
    },
  ];

  return (
    <section id="pillars" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Nuestros Pilares
          </h2>
          <p className="text-lg text-gray-600">
            Lo que nos define como empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-800 to-green-900 rounded-xl p-8 text-center text-white hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-300">
                {pillar.title}
              </h3>
              <p className="text-sm text-green-100 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
