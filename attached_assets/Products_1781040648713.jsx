import React from 'react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Aditivo Proteínico',
      description: 'Proteína de alto valor biológico. Ideal para bebidas, yogures y snacks proteicos.',
    },
    {
      id: 2,
      name: 'Aditivo Fibra',
      description: 'Fibra dietética soluble. Mejora propiedades texturales y valor nutritivo.',
    },
    {
      id: 3,
      name: 'Aditivo Antioxidante',
      description: 'Conservante natural. Extiende vida útil manteniendo frescura y sabor.',
    },
    {
      id: 4,
      name: 'Aditivo Sabor',
      description: 'Potenciador de sabor natural. Realza perfiles organolépticos únicos.',
    },
    {
      id: 5,
      name: 'Aditivo Espesante',
      description: 'Control de viscosidad natural. Mejora textura sin alterar sabor original.',
    },
  ];

  return (
    <section id="products" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#2d5016] mb-16">
          Nuestros Productos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-white hover:scale-105 transform"
            >
              {/* Imagen placeholder */}
              <div className="bg-[#c8e6c9] h-48 flex items-center justify-center">
                <span className="text-[#2d5016] font-semibold">
                  {product.name.split(' ')[1]}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2d5016] mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full bg-[#7cb342] hover:bg-[#9ccc65] text-white py-2 px-4 rounded-lg font-semibold transition-all">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
