"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("initial"); // initial, form, confirmation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Enviar email usando FormSubmit (gratuito)
    try {
      const response = await fetch("https://formspree.io/f/xyzqwert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStep("confirmation");
        setTimeout(() => {
          setIsOpen(false);
          setStep("initial");
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error. Intenta de nuevo.");
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all z-40"
        title="Abrir chatbot"
      >
        💬
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-40 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Mucipro SAS</h3>
              <p className="text-xs opacity-80">Agendar Consulta</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl hover:opacity-75"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
            {step === "initial" && (
              <div className="space-y-4">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    👋 ¡Hola! Bienvenido a Mucipro SAS
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Estamos disponibles de{" "}
                    <strong>lunes a viernes, 8am-5pm</strong>
                  </p>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="mb-3">¿Necesitas agendar una consulta? 📅</p>
                </div>

                <button
                  onClick={() => setStep("form")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Agendar Consulta
                </button>

                <div className="border-t pt-3 text-xs text-gray-600 space-y-2">
                  <p>
                    📞 <strong>+57 320 223 9297</strong>
                  </p>
                  <p>
                    📧 <strong>muciprocolombia@gmail.com</strong>
                  </p>
                </div>
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+57 300 000 0000"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Fecha *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Hora *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu consulta..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                    rows={2}
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("initial")}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Atrás
                  </button>
                </div>
              </form>
            )}

            {step === "confirmation" && (
              <div className="space-y-4 flex flex-col items-center justify-center h-full">
                <div className="text-5xl">✅</div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">¡Gracias!</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Tu agendamiento fue enviado. Te contactaremos pronto.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
