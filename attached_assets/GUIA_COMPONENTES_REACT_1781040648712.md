# 🚀 Componentes React - Mucipro SAS

## 📦 Guía de Instalación Rápida

### Paso 1: Crear proyecto Next.js (Recomendado)

```bash
npx create-next-app@latest mucipro-website
cd mucipro-website
```

Selecciona:
- ✅ TypeScript: No
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ App router: No (usa pages router)

### Paso 2: Copiar componentes

```bash
# Copiar todos los archivos .jsx a src/components/
cp Header.jsx About.jsx Hero.jsx Products.jsx Services.jsx Testimonials.jsx FinalCTA.jsx Footer.jsx ChatBot.jsx src/components/

# Copiar página principal a pages/
cp pages_index.js pages/index.js
```

### Paso 3: Estructura de carpetas final

```
mucipro-website/
├── pages/
│   ├── index.js              ← Página principal
│   ├── api/                  ← APIs (próxima creación)
│   │   └── schedule.js
│   ├── _app.js
│   ├── _document.js
│   └── _document.js
├── src/
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Products.jsx
│       ├── Services.jsx
│       ├── Testimonials.jsx
│       ├── FinalCTA.jsx
│       ├── Footer.jsx
│       └── ChatBot.jsx
├── public/
│   ├── images/
│   ├── logo.png
│   └── favicon.ico
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── package.json
└── .env.local
```

### Paso 4: Configurar Tailwind CSS

**tailwind.config.js:**
```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2d5016',
        'primary-light': '#7cb342',
        'primary-dark': '#1a3a0a',
      },
    },
  },
  plugins: [],
};
```

**postcss.config.js:**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Paso 5: Global styles

**styles/globals.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Paso 6: Configuración Next.js

**next.config.js:**
```javascript
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Agregar dominios de imágenes aquí
  },
};
```

### Paso 7: Ejecutar desarrollo

```bash
npm run dev
# Abre http://localhost:3000
```

---

## 🎨 Personalización

### Cambiar colores corporativos

En **tailwind.config.js**:
```javascript
colors: {
  'primary': '#TU_COLOR_PRINCIPAL',
  'primary-light': '#TU_COLOR_SECUNDARIO',
  'primary-dark': '#TU_COLOR_OSCURO',
}
```

Luego reemplazar en componentes:
- `#2d5016` → Tu color principal
- `#7cb342` → Tu color secundario
- `#1a3a0a` → Tu color oscuro

### Agregar imágenes reales

**Header.jsx:**
```jsx
import Image from 'next/image';

<Image 
  src="/images/logo.png" 
  alt="Mucipro Logo" 
  width={200} 
  height={60} 
/>
```

**About.jsx:**
```jsx
<Image 
  src="/images/about-hero.jpg" 
  alt="Acerca de Mucipro" 
  width={500} 
  height={400} 
/>
```

---

## 🔧 Estructura de componentes

### Cada componente incluye:
✅ Props opcionales para customización  
✅ Componentes reutilizables  
✅ Tailwind CSS utilities  
✅ Responsive design (mobile-first)  
✅ Accessibility (WCAG AA)  
✅ Performance optimizado  

### Ejemplo de uso con props:

```jsx
// Versión básica (ya está así)
<Hero />

// Con props personalizados (futuro)
<Hero 
  title="Mi título personalizado"
  subtitle="Mi subtítulo"
  ctaText="Mi botón"
  onCtaClick={() => handleClick()}
/>
```

---

## 📱 Componentes Responsive

Todos los componentes incluyen:
- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (< 768px)

Clases Tailwind usadas:
```
md:  → 768px
lg:  → 1024px
xl:  → 1280px
2xl: → 1536px
```

---

## 🤖 ChatBot Component

**Features:**
- Botón flotante sticky
- Ventana de chat abierto/cerrado
- Mensajes usuario/bot
- Quick actions
- Ready para integrar Botpress

**Integración Botpress (próximo paso):**
```jsx
import { BotpressWebChat } from '@botpress/webchat';

export default function ChatBot() {
  return (
    <BotpressWebChat
      botId="tu_bot_id"
      hostUrl="https://cdn.botpress.cloud/webchat/v1"
    />
  );
}
```

---

## 🔌 APIs Próximas

Crearemos:

**pages/api/schedule.js** - Agendar citas
```javascript
// POST /api/schedule
// Body: { name, email, date, type }
// Response: { success, eventId, confirmationEmail }
```

**pages/api/contact.js** - Formulario de contacto
```javascript
// POST /api/contact
// Body: { name, email, phone, message }
// Response: { success, ticketId }
```

---

## 📊 Variables de entorno

Crear **.env.local**:
```env
# Google Calendar
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id
GOOGLE_CALENDAR_API_KEY=your_api_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=noreply@mucipro.com

# Botpress
NEXT_PUBLIC_BOTPRESS_BOT_ID=your_bot_id

# Base URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Producción
vercel --prod
```

### GitHub + Vercel (Automático)

1. Push a GitHub
2. Conectar repo en Vercel.com
3. Deploy automático en cada push

---

## 📈 Siguiente: APIs

El próximo paso es crear:
1. **API de agendamiento** con Google Calendar
2. **API de emails** con SendGrid
3. **Integración de base de datos** con PostgreSQL
4. **Chatbot inteligente** con Botpress

¿Quieres que lo haga ahora? 🎯

---

## ✅ Checklist de implementación

- [ ] Crear proyecto Next.js
- [ ] Instalar Tailwind CSS
- [ ] Copiar componentes
- [ ] Personalizar colores
- [ ] Agregar imágenes
- [ ] Agregar contenido real
- [ ] Testing responsive
- [ ] Crear APIs
- [ ] Integrar SendGrid
- [ ] Integrar Google Calendar
- [ ] Testing funcional
- [ ] Deploy a Vercel

---

**Última actualización:** Generado con AI Component Builder  
**Versión:** 1.0  
**Estado:** Listo para usar
