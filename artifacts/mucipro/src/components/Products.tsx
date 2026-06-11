"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Enzimas Mucipro - Bolsa 5kg",
    description:
      "Enzimas concentradas del mucilago de café. Presentación de 5kg ideal para pequeñas y medianas producciones alimentarias.",
    image: "/images/caja-de-enzimas.jpg",
    fullDescription:
      "Nuestras enzimas de 5kg son perfectas para empresas que están comenzando o tienen volúmenes moderados de producción. Esta presentación permite experimentar con la formulación sin grandes inversiones iniciales.",
    usage:
      "Dosificación: 5-10 gramos por tonelada de producto.\n\nModo de aplicación:\n• Mezclar uniformemente en la materia prima\n• Dejar reposar 24-48 horas a temperatura ambiente\n• Aumentar tiempo de reposo en temperaturas bajas.",
    technical: {
      composición: "Enzimas proteolíticas y amilolíticas del mucilago de café",
      ph: "5.0-7.0",
      temperatura: "5°C - 30°C (almacenamiento)",
      vida_util: "12 meses en empaque cerrado",
    },
  },
  {
    id: 2,
    name: "Enzimas Mucipro - Bolsa 20kg",
    description:
      "Enzimas concentradas del mucilago de café. Presentación de 20kg para grandes volúmenes de producción industrial.",
    image: "/images/bulto-de-enzimas.jpg",
    fullDescription:
      "Nuestra presentación de 20kg está diseñada para empresas con alta demanda de producción. Ofrece un mejor costo por kilogramo y mayor disponibilidad para operaciones continuas.",
    usage:
      "Dosificación: 5-10 gramos por tonelada de producto.\n\nModo de aplicación:\n• Mezclar uniformemente en sistemas de producción a granel\n• Dejar reposar 24-48 horas según el proceso\n• Compatible con sistemas automáticos de dosificación\n\nIdeal para:\n• Producción industrial a escala\n• Alimentos procesados de gran volumen\n• Aditivos para ingredientes base\n• Plantas de procesamiento de alimentos\n• Fábricas de piensos animales",
    technical: {
      composición: "Enzimas proteolíticas y amilolíticas del mucilago de café",
      ph: "5.0-7.0",
      temperatura: "5°C - 30°C (almacenamiento)",
      vida_util: "12 meses en empaque cerrado",
    },
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const product = products.find((p) => p.id === selectedProduct);

  return (
    <section
      id="products"
      className="py-20 px-6 bg-gray-50"
      data-testid="section-products"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-16"
        >
          Nuestros Productos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-testid={`product-card-${prod.id}`}
            >
              <div className="w-full h-64 bg-gray-200 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {prod.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {prod.description}
                </p>
                <button
                  onClick={() => setSelectedProduct(prod.id)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Más Información
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-green-800 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
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
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Descripción completa */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Descripción
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Modo de uso */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Modo de Uso
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.usage}
                </p>
              </div>

              {/* Información técnica */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Especificaciones Técnicas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Composición</p>
                    <p className="font-semibold text-gray-900">
                      {product.technical.composición}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">pH Óptimo</p>
                    <p className="font-semibold text-gray-900">
                      {product.technical.ph}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Temperatura</p>
                    <p className="font-semibold text-gray-900">
                      {product.technical.temperatura}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vida Útil</p>
                    <p className="font-semibold text-gray-900">
                      {product.technical.vida_util}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón de contacto */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Solicitar Más Información
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
