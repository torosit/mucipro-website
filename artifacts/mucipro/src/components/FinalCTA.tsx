"use client";

import { useState } from "react";
import CallForm from "./CallForm";

export default function FinalCTA() {
  const [isCallFormOpen, setIsCallFormOpen] = useState(false);

  const handleAgendar = () => {
    const chatButton = document.querySelector(
      '[title="Abrir chatbot"]',
    ) as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  const handleLlamar = () => {
    setIsCallFormOpen(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-green-800 to-green-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            ¿Listo para innovar con nosotros?
          </h2>

          <p className="text-xl md:text-2xl opacity-95 mb-8">
            Contacta a nuestro equipo para una consulta personalizada y descubre
            cómo Mucipro puede transformar tus productos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <button
              onClick={handleAgendar}
              className="bg-lime-400 hover:bg-lime-300 text-green-900 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Agendar Consulta
            </button>
            <button
              onClick={handleLlamar}
              className="border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Llamar al Equipo
            </button>
          </div>
        </div>
      </section>

      <CallForm
        isOpen={isCallFormOpen}
        onClose={() => setIsCallFormOpen(false)}
      />
    </>
  );
}
