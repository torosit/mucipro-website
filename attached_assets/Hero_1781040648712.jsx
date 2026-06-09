import React from 'react';

export default function Hero() {
  const handleCTA = (action) => {
    console.log(`CTA clicked: ${action}`);
    // Aquí irá la lógica del chatbot
    alert(`🤖 ${action}`);
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#2d5016] to-[#1a3a0a] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm tracking-widest uppercase opacity-90 mb-4">
          Innovación Sostenible
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
          Mucipro SAS
        </h1>

        <p className="text-2xl md:text-3xl font-light mb-8 opacity-95">
          Transformando residuos de café en innovación alimentaria
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <button
            onClick={() => handleCTA('Explorar Productos')}
            className="bg-[#7cb342] hover:bg-[#9ccc65] text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Explorar Productos
          </button>
          <button
            onClick={() => handleCTA('Agendar Consulta')}
            className="border-2 border-white hover:bg-white hover:text-[#2d5016] text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
