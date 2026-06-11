import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Consultoría Técnica",
      description:
        "Asesoramiento especializado para integrar nuestros aditivos en sus líneas de producción actuales.",
    },
    {
      title: "Pruebas de Muestreo",
      description:
        "Suministro de lotes de prueba y acompañamiento en el desarrollo de prototipos alimentarios.",
    },
    {
      title: "Capacitación y Soporte",
      description:
        "Formación para su equipo técnico sobre el manejo y almacenamiento de nuestros productos.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-background"
      data-testid="section-services"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Asesorías Personalizadas
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo entregamos productos; aseguramos su éxito mediante servicios
            de soporte integral.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-l-4 border-l-secondary border-t-border border-r-border border-b-border rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Patente Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="border-l-4 border-l-secondary border-t-border border-r-border border-b-border rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="text-green-600 text-4xl">🛡️</div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Formulación Patentada Registro N° 44777
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Nuestro compuesto enzimático es resultado de años de
                    investigación y desarrollo. La protección de patente en
                    Colombia garantiza que la tecnología detrás de estos
                    resultados es innovadora, probada y exclusiva.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cada producto Mucipro contiene la fórmula patentada que ha
                    demostrado mejorar significativamente la digestión, ganancia
                    de peso y eficiencia alimentaria en ganado. No es un
                    suplemento convencional — es una solución tecnológica
                    respaldada por innovación protegida.
                  </p>
                  <div className="flex gap-6 flex-wrap text-sm">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Fórmula patentada en Colombia
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Resultados científicamente validados
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Protección intelectual garantizada
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
