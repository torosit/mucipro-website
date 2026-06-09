import React from 'react';

export default function FinalCTA() {
  const handleCTA = (action) => {
    console.log(`CTA Final clicked: ${action}`);
    alert(`🤖 ${action}`);
  };

  return (
    <section className="bg-gradient-to-br from-[#2d5016] to-[#1a3a0a] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          ¿Listo para innovar con nosotros?
        </h2>

        <p className="text-xl md:text-2xl opacity-95 mb-8">
          Contacta a nuestro equipo para una consulta personalizada y descubre cómo
          Mucipro puede transformar tus productos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <button
            onClick={() => handleCTA('Agendar Consulta')}
            className="bg-[#7cb342] hover:bg-[#9ccc65] text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Agendar Consulta
          </button>
          <button
            onClick={() => handleCTA('Llamar al Equipo')}
            className="border-2 border-white hover:bg-white hover:text-[#2d5016] text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Llamar al Equipo
          </button>
        </div>
      </div>
    </section>
  );
}
