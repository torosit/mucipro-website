import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col bg-background"
      data-testid="page-home"
    >
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <About />
        <Products />
        <Services />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
