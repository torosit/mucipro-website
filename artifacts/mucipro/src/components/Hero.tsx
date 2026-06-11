import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 to-green-950"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 opacity-20">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
            fill="currentColor"
            className="text-white"
          />
          <path
            d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z"
            fill="currentColor"
            className="text-white opacity-50"
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl"
        >
          Mucipro SAS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl font-medium"
        >
          Transformando residuos de café en innovación alimentaria
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            className="bg-green-700 hover:bg-green-800 text-white text-lg h-12 px-8 font-semibold"
          >
            <a href="#products">Explorar Productos</a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-green-700 hover:bg-green-800 text-white text-lg h-12 px-8 font-semibold"
          >
            <a href="#contact">Agendar Consulta</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
