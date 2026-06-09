import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Mucipro transformó completamente nuestros procesos. Mayor calidad en productos finales con menor costo operativo. Altamente recomendado.',
      author: 'Empresa XYZ',
      company: 'Industria Alimentaria - Colombia',
    },
    {
      id: 2,
      quote:
        'Excelente servicio técnico y productos de alta calidad. El equipo de Mucipro fue fundamental para nuestro crecimiento en mercados internacionales.',
      author: 'Empresa ABC',
      company: 'Manufactura de Alimentos - Latam',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#2d5016] mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-gray-50 rounded-lg border-t-4 border-[#7cb342] hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600 italic text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="font-bold text-[#2d5016] mb-1">
                {testimonial.author}
              </div>
              <div className="text-sm text-gray-500">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
