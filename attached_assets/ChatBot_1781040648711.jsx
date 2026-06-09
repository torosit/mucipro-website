import React, { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy el asistente de Mucipro. ¿En qué puedo ayudarte?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: '🤖 Pronto se integrará con el agendamiento real. Por ahora, contáctanos directamente.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#7cb342] hover:bg-[#9ccc65] text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:shadow-xl transition-all z-40"
        title="Abrir chatbot"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-40 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2d5016] to-[#1a3a0a] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Mucipro SAS</h3>
              <p className="text-xs opacity-80">Estamos en línea</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl hover:opacity-75"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#7cb342] text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7cb342]"
              />
              <button
                type="submit"
                className="bg-[#7cb342] hover:bg-[#9ccc65] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                →
              </button>
            </form>
          </div>

          {/* Quick actions */}
          <div className="border-t border-gray-200 p-3 space-y-2">
            <button className="w-full text-sm text-[#2d5016] hover:bg-gray-50 p-2 rounded transition-colors">
              📅 Agendar Consulta
            </button>
            <button className="w-full text-sm text-[#2d5016] hover:bg-gray-50 p-2 rounded transition-colors">
              ❓ Preguntas Frecuentes
            </button>
          </div>
        </div>
      )}
    </>
  );
}
