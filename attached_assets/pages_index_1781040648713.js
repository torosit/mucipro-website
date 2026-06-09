import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

// Para Next.js, esto sería en pages/index.js
// Para React puro, sería App.js

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Meta tags - agregar en _document.js si es Next.js */}
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ChatBot />
    </div>
  );
}

/*
INSTRUCCIONES DE USO:

1. INSTALACIÓN DE DEPENDENCIAS:
   npm install -D tailwindcss postcss autoprefixer
   npm install react react-dom

2. CONFIGURACIÓN TAILWIND (tailwind.config.js):
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };

3. ESTRUCTURA DE CARPETAS:
   src/
   ├── components/
   │   ├── Header.jsx
   │   ├── Hero.jsx
   │   ├── About.jsx
   │   ├── Products.jsx
   │   ├── Services.jsx
   │   ├── Testimonials.jsx
   │   ├── FinalCTA.jsx
   │   ├── Footer.jsx
   │   └── ChatBot.jsx
   ├── pages/
   │   └── index.js (este archivo)
   └── styles/
       └── globals.css

4. GLOBALS.CSS:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. PARA NEXT.JS (next.config.js):
   module.exports = {
     reactStrictMode: true,
     swcMinify: true,
   };

6. PARA REACT PURO (App.js):
   import HomePage from './pages/HomePage';
   function App() {
     return <HomePage />;
   }
   export default App;

COMPONENTES LISTOS PARA:
✅ Copiar/pegar directamente
✅ Personalizar colores (cambiar #2d5016 y #7cb342)
✅ Agregar imágenes reales
✅ Integrar con APIs
✅ Conectar con Botpress/Chatbot
✅ Agregar Google Analytics
✅ Modo oscuro (agregar dark: prefixes)

PRÓXIMO PASO:
- Crear archivo de API (pages/api/schedule.js)
- Integrar SendGrid para emails
- Conectar Google Calendar
*/
