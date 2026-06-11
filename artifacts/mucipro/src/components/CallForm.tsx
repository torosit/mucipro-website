"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

interface CallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallForm({ isOpen, onClose }: CallFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.preferredTime) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xyzqwert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Solicitud de Llamada",
          name: formData.name,
          phone: formData.phone,
          preferredTime: formData.preferredTime,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setFormData({ name: "", phone: "", preferredTime: "" });
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error. Intenta de nuevo.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl">
        <div className="bg-green-600 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="font-bold">Solicitar Llamada</h3>
          <button onClick={onClose} className="hover:opacity-75">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 300 000 0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hora Preferida *
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
                  required
                >
                  <option value="">Selecciona una hora</option>
                  <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 12:00 PM">
                    10:00 AM - 12:00 PM
                  </option>
                  <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                  <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                  <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="font-bold text-gray-800">¡Gracias!</p>
              <p className="text-sm text-gray-600 mt-2">
                Te llamaremos en breve
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
