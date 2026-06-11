"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

interface Segment {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  benefits: string[];
  images?: string[];
}

const segments: Segment[] = [
  {
    id: "ganaderia",
    title: "Ganadería",
    description:
      "Aditivos para piensos que mejoran digestión y peso en ganadería.",
    icon: "●",
    fullDescription:
      "Nuestras enzimas optimizan la digestión en rumiantes, mejorando la conversión alimenticia y el aumento de peso. Ideal para operaciones de cría intensiva, ganadería lechera y engorde de bovinos.",
    benefits: [
      "Mejora digestión y asimilación de nutrientes",
      "Incrementa ganancia de peso en 8-12 semanas",
      "Reduce costos de alimentación",
      "Compatible con dietas mixtas",
      "Aprobado para ganadería orgánica",
    ],
    images: [
      "/images/cows-grazing-around-farm.jpg",
      "/images/side-view-woman-feeding-birds.jpg",
    ],
  },
  {
    id: "alimentacion-animal",
    title: "Alimentación Animal",
    description:
      "Soluciones enzimáticas para piensos avícolas, porcinos y acuícola.",
    icon: "◆",
    fullDescription:
      "Especialmente diseñado para aves y peces. Mejora la biodisponibilidad de proteínas y carbohidratos complejos. Resultados comprobados en pollos de engorde, gallinas ponedoras y piscicultura.",
    benefits: [
      "Aumenta eficiencia alimenticia en aves",
      "Mejora conversión proteínica",
      "Reduce mortalidad en pollos de engorde",
      "Optimiza producción en piscicultura",
      "Disminuye costos operacionales",
    ],
    images: [
      "/images/side-view-woman-feeding-birds.jpg",
      "/images/cows-grazing-around-farm.jpg",
    ],
  },
];

export default function About() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const segment = segments.find((s) => s.id === selectedSegment);

  // Carrusel automático de imágenes
  useEffect(() => {
    if (!segment?.images || !selectedSegment) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % segment.images!.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedSegment, segment?.images]);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="about-content"
          >
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                Patente N° 44777
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Acerca de Nosotros
            </h2>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              En Mucipro SAS transformamos el mucilago de café en aditivos
              innovadores especializados en ganadería y alimentación animal.
              Nuestros productos mejoran la digestión, asimilación de nutrientes
              y el desempeño productivo en explotaciones pecuarias de todos los
              tamaños.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Con tecnología de punta y rigurosos estándares de calidad,
              ofrecemos soluciones precisas que optimizan la conversión
              alimenticia, incrementan ganancias de peso y reducen costos
              operacionales, todo mientras maximizamos el aprovechamiento
              sostenible de residuos de café.
            </p>

            <div className="bg-green-50 border-l-4 border-green-800 p-6 rounded-r-lg mb-8">
              <p className="text-green-900 font-semibold">
                Resultado comprobado en más de 50 operaciones pecuarias en
                Colombia
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-800">100%</p>
                <p className="text-gray-600 mt-2">Sostenible</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-800">50+</p>
                <p className="text-gray-600 mt-2">Clientes</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-800">5+</p>
                <p className="text-gray-600 mt-2">Productos</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="about-image"
          >
            <img
              src="/images/adult-harvesting-coffee.jpg"
              alt="Cosecha de café"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Segmentos de Mercado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Especialización por Sector
            </h3>
            <p className="text-lg text-gray-600">
              Soluciones diseñadas específicamente para ganadería y alimentación
              animal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {segments.map((seg, index) => (
              <motion.div
                key={seg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                {/* Imagen de la tarjeta */}
                {seg.images && seg.images.length > 0 && (
                  <div className="w-full h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={seg.images[0]}
                      alt={seg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Contenido de la tarjeta */}
                <div className="p-8">
                  <div className="text-4xl font-bold text-green-800 mb-3">
                    {seg.icon}
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">
                    {seg.title}
                  </h4>
                  <p className="text-sm text-gray-700 mb-6">
                    {seg.description}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedSegment(seg.id);
                      setCurrentImageIndex(0);
                      setShowMore(false);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Ver Detalles
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedSegment && segment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-800 to-green-900 text-white p-6 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-green-300">
                  {segment.icon}
                </span>
                <h2 className="text-2xl font-bold">{segment.title}</h2>
              </div>
              <button
                onClick={() => setSelectedSegment(null)}
                className="hover:opacity-75 transition-opacity"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Carrusel de Imágenes */}
            {segment.images && segment.images.length > 0 && (
              <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
                {/* Imágenes */}
                {segment.images.map((image, idx) => (
                  <motion.img
                    key={idx}
                    src={image}
                    alt={`${segment.title} ${idx + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}

                {/* Botón Más Información en el Centro */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setShowMore(!showMore)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
                >
                  <div className="bg-white text-green-800 py-3 px-8 rounded-full font-semibold flex items-center gap-2 group-hover:scale-110 transition-transform">
                    {showMore ? "Menos Información" : "Más Información"}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${showMore ? "rotate-180" : ""}`}
                    />
                  </div>
                </motion.button>

                {/* Indicadores de imagen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {segment.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Content - Se muestra con expandirse */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: showMore ? "auto" : 0,
                opacity: showMore ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-8 space-y-8 border-t border-gray-200">
                {/* Descripción */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Descripción
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {segment.fullDescription}
                  </p>
                </div>

                {/* Beneficios */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Beneficios Principales
                  </h3>
                  <div className="space-y-3">
                    {segment.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200"
                      >
                        <span className="text-green-600 font-bold text-lg flex-shrink-0">
                          •
                        </span>
                        <p className="text-gray-700">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                    Solicitar Consulta Especializada
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
