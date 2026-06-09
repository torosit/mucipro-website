import React from 'react';

export default function About() {
  const stats = [
    { number: '100%', label: 'Sostenible' },
    { number: '50+', label: 'Clientes' },
    { number: '5+', label: 'Productos' },
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#2d5016] mb-16">
          Acerca de Nosotros
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              En Mucipro SAS, creemos que la sostenibilidad y la innovación van de la mano.
              Transformamos el mucilado de café, un residuo valorado, en aditivos de alta
              calidad para la industria alimentaria.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nuestro compromiso es reducir desperdicios mientras proporcionamos soluciones
              técnicas superiores a nuestros clientes en todo el continente.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-[#7cb342] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm uppercase text-gray-600 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen */}
          <div className="bg-[#c8e6c9] rounded-lg h-80 flex items-center justify-center">
            <span className="text-[#2d5016] font-semibold text-lg">
              [Imagen corporativa aquí]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
