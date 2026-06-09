import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Contacto', href: '#contact' },
    { name: 'LinkedIn', href: '#' },
  ];

  return (
    <footer
      id="contact"
      className="bg-gray-50 border-t border-gray-200 py-8 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Empresa */}
          <div>
            <h3 className="text-lg font-bold text-[#2d5016] mb-4">Mucipro SAS</h3>
            <p className="text-gray-600 text-sm">
              Transformando residuos de café en innovación alimentaria.
            </p>
          </div>

          {/* Columna 2: Productos */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#products" className="hover:text-[#7cb342]">
                  Aditivos
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#7cb342]">
                  Muestras
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#7cb342]">
                  Asesorías
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-[#7cb342]">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7cb342]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7cb342]">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📧 info@mucipro.com</li>
              <li>📞 +57 (1) 1234-5678</li>
              <li>📍 Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-[#7cb342] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Mucipro SAS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
