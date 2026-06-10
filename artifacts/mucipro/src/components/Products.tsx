import { motion } from "framer-motion";
import { Zap, Leaf, Shield, Sparkles, Droplets, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const products: Product[] = [
  {
    id: 1,
    title: "Aditivo Proteínico",
    description:
      "Proteína de alto valor biológico. Ideal para bebidas, yogures y snacks proteicos.",
    Icon: Zap,
  },
  {
    id: 2,
    title: "Aditivo Fibra",
    description:
      "Fibra dietética soluble. Mejora propiedades texturales y valor nutritivo.",
    Icon: Leaf,
  },
  {
    id: 3,
    title: "Aditivo Antioxidante",
    description:
      "Conservante natural. Extiende vida útil manteniendo frescura y sabor.",
    Icon: Shield,
  },
  {
    id: 4,
    title: "Aditivo Sabor",
    description:
      "Potenciador de sabor natural. Realza perfiles organolépticos únicos.",
    Icon: Sparkles,
  },
  {
    id: 5,
    title: "Aditivo Espesante",
    description:
      "Control de viscosidad natural. Mejora textura sin alterar sabor original.",
    Icon: Droplets,
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-muted/30"
      data-testid="section-products"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-muted-foreground">
            Línea especializada de aditivos de grado alimenticio derivados del
            mucílago de café.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className="h-full flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-product-${product.id}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-sm text-muted-foreground">
                  {product.description}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/5"
                    data-testid={`button-product-info-${product.id}`}
                  >
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
