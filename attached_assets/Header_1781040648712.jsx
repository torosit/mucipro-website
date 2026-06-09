import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-100 bg-white transition-shadow ${
        isSticky ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-[#2d5016]">
          MUCIPRO
        </a>

        <nav className="hidden md:flex gap-8">
          {[
            { name: 'Inicio', id: 'home' },
            { name: 'Acerca de', id: 'about' },
            { name: 'Productos', id: 'products' },
            { name: 'Asesorías', id: 'services' },
            { name: 'Contacto', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-gray-700 hover:text-[#7cb342] transition-colors text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button - placeholder for mobile menu */}
        <button className="md:hidden text-2xl text-[#2d5016]">
          ☰
        </button>
      </div>
    </header>
  );
}
