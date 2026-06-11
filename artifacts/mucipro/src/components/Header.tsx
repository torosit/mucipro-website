"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#about" },
    { name: "Productos", href: "#products" },
    { name: "Servicios", href: "#services" },
    { name: "Testimonios", href: "#testimonials" },
  ];

  const handleAgendar = () => {
    const chatButton = document.querySelector(
      '[title="Abrir chatbot"]',
    ) as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#hero">
          <img
            src="/images/Muciprolog.jpeg"
            alt="Mucipro Logo"
            className="h-14"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleAgendar}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Agendar Consulta
          </button>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleAgendar();
                setMobileMenuOpen(false);
              }}
              className="block w-full bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 text-center"
            >
              Agendar Consulta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
