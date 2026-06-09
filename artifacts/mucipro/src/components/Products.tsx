import { motion } from "framer-motion";
import { Zap, Leaf, Shield, Sparkles, Droplets } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Products() {
  const products = [
    {
      title: "Aditivo Proteínico",
      description: "Enriquecedor de alimentos con proteína de alta digestibilidad extraída del mucílago.",
      icon: Zap,
    },
    {
      title: "Aditivo Fibra",
      description: "Fibra dietaria soluble para mejorar el tránsito intestinal y la salud digestiva.",
      icon: Leaf,
    },
    {
      title: "Aditivo Antioxidante",
      description: "Concentrado rico en polifenoles para preservación natural y beneficios a la salud.",
      icon: Shield,
    },
    {
      title: "Aditivo Sabor",
      description: "Potenciador natural de sabor con notas dulces y afrutadas características del café.",
      icon: Sparkles,
    },
    {
      title: "Aditivo Espesante",
      description: "Agente texturizante natural para bebidas, salsas y postres, sin alterar el color.",
      icon: Droplets,
    },
  ];

  return (
    <section id="products" className="py-24 bg-muted/30" data-testid="section-products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Productos</h2>
          <p className="text-lg text-muted-foreground">
            Línea especializada de aditivos de grado alimenticio derivados del mucílago de café.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    Más Información
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
