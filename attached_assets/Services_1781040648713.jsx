import React from 'react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Consultoría Técnica',
      description:
        'Análisis de formulaciones, optimización de procesos, validación de especificaciones técnicas y soluciones a medida para tus productos.',
    },
    {
      id: 2,
      title: 'Pruebas de Muestreo',
      description:
        'Acceso a muestras representativas de nuestros productos para validación en tus procesos productivos sin compromiso.',
    },
    {
      id: 3,
      title: 'Capacitación y Soporte',
      description:
        'Entrenamientos sobre aplicación de aditivos, best practices de la industria y soporte técnico continuo durante implementación.',
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#2d5016] mb-16">
          Asesorías Personalizadas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-white rounded-lg border-l-4 border-[#7cb342] hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2d5016] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
