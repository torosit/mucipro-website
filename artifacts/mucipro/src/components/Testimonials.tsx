"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    farm: "Finca Las Tres Colinas",
    type: "Pequeño Productor",
    livestock: "20 cabezas de ganado",
    image: "/images/pepito.jpg",
    testimonio:
      "Implementé Mucipro hace 3 meses en mi pequeña finca. Los resultados han sido increíbles.",
    fullStory:
      "Después de años trabajando con métodos tradicionales, decidí probar Mucipro en mis 20 cabezas de ganado. En los primeros 30 días notamos cambios significativos en la digestión y el comportamiento de los animales. A los 3 meses, los resultados fueron tan evidentes que decidimos mantener el producto de forma permanente.",
    results: [
      {
        metric: "Ganancia de peso",
        before: "0.8 kg/día",
        after: "1.2 kg/día",
        improvement: "+50%",
      },
      {
        metric: "Reducción de concentrado",
        before: "12 kg/día",
        after: "9 kg/día",
        improvement: "-25%",
      },
      {
        metric: "Salud del animal",
        before: "Regular",
        after: "Excelente",
        improvement: "Visiblemente mejor",
      },
      {
        metric: "Ahorro mensual",
        before: "$0",
        after: "$2.4M COP",
        improvement: "Por menos concentrado",
      },
    ],
    quote:
      '"Mis animales están más saludables, ganancia más rápida y gasto menos en comida. Mucipro cambió mi negocio."',
    recommendation:
      "Recomiendo Mucipro a todos los productores pequeños que quieren mejorar rentabilidad sin inversión grande.",
  },
  {
    id: 2,
    name: "Roberto Cifuentes",
    farm: "Ganadería Cifuentes S.A.S",
    type: "Gran Productor",
    livestock: "200 cabezas de ganado",
    image: "/images/lolito.jpg",
    testimonio:
      "Somos un productor de gran escala. Mucipro nos permitió optimizar costos sin sacrificar calidad.",
    fullStory:
      "En una operación de 200 cabezas, cada pequeña mejora se multiplica. Mucipro nos permitió reducir gastos en concentrado mientras mejorábamos la ganancia de peso. El ROI fue visible en el primer mes. Ahora es parte integral de nuestro programa nutricional.",
    results: [
      {
        metric: "Ganancia de peso",
        before: "0.75 kg/día",
        after: "1.15 kg/día",
        improvement: "+53%",
      },
      {
        metric: "Reducción de concentrado",
        before: "11.5 kg/día",
        after: "8.5 kg/día",
        improvement: "-26%",
      },
      {
        metric: "Palatabilidad",
        before: "8/10",
        after: "9.5/10",
        improvement: "Mayor consumo",
      },
      {
        metric: "Ahorro anual",
        before: "$0",
        after: "$85.5M COP",
        improvement: "En toda la operación",
      },
    ],
    quote:
      '"A escala, cada pequeña mejora cuenta. Mucipro nos dio rentabilidad sin comprometer salud animal."',
    recommendation:
      "Para productores grandes, Mucipro es imprescindible. Los números hablan por sí solos.",
  },
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null,
  );

  const testimonial = testimonials.find((t) => t.id === selectedTestimonial);

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-b from-white to-green-50"
      data-testid="section-testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonios de Productores
          </h2>
          <p className="text-lg text-gray-600">
            Resultados reales de ganaderos que usan Mucipro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testim, index) => (
            <motion.div
              key={testim.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Imagen con botón */}
              <div className="relative w-full h-72 bg-gray-200 overflow-hidden group cursor-pointer">
                <img
                  src={testim.image}
                  alt={testim.name}
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                />
                <button
                  onClick={() => setSelectedTestimonial(testim.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="bg-white text-green-800 py-3 px-8 rounded-full font-semibold hover:scale-110 transition-transform">
                    Más Información
                  </div>
                </button>
              </div>

              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{testim.name}</h3>
                <p className="text-green-100 mb-3">{testim.farm}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {testim.type}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {testim.livestock}
                  </span>
                </div>
              </div>

              {/* Content - Solo testimonio */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed italic mb-3">
                  {testim.testimonio}
                </p>
                <p style={{ color: "#52B788" }} className="font-semibold">
                  {testim.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && testimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-green-800 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{testimonial.name}</h2>
                <p className="text-green-100">{testimonial.farm}</p>
              </div>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="hover:opacity-75 transition-opacity"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Imagen */}
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Historia completa */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Su Historia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.fullStory}
                </p>
              </div>

              {/* Tipo de productor */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-gray-600 mb-1">Perfil</p>
                <p className="font-bold text-gray-900">{testimonial.type}</p>
                <p className="text-gray-700">{testimonial.livestock}</p>
              </div>

              {/* Todos los resultados */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  📊 Resultados Detallados
                </h3>
                <div className="space-y-3">
                  {testimonial.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-green-50 p-4 rounded-lg border border-green-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-gray-900">
                          {result.metric}
                        </p>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                          {result.improvement}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Antes: <strong>{result.before}</strong>
                        </span>
                        <span className="text-green-700">
                          Ahora: <strong>{result.after}</strong>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recomendación */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-gray-600 mb-1">Recomendación</p>
                <p className="text-gray-900 italic">
                  {testimonial.recommendation}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Quiero Resultados Similares
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
