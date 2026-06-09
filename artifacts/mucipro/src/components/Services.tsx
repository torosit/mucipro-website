import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado para integrar nuestros aditivos en sus líneas de producción actuales.",
    },
    {
      title: "Pruebas de Muestreo",
      description: "Suministro de lotes de prueba y acompañamiento en el desarrollo de prototipos alimentarios.",
    },
    {
      title: "Capacitación y Soporte",
      description: "Formación para su equipo técnico sobre el manejo y almacenamiento de nuestros productos.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Asesorías Personalizadas</h2>
          <p className="text-lg text-muted-foreground">
            No solo entregamos productos; aseguramos su éxito mediante servicios de soporte integral.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
