import { useState, useEffect } from "react";
import { Menu, X, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#about" },
    { name: "Productos", href: "#products" },
    { name: "Servicios", href: "#services" },
    { name: "Testimonios", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-transparent text-white"
      }`}
      data-testid="header-nav"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" data-testid="link-logo">
          <Sprout className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white"}`} />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
            Mucipro SAS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/90"
              }`}
              data-testid={`link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            variant={isScrolled ? "default" : "secondary"}
            className={!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}
          >
            <a href="#contact" data-testid="button-contact">Agendar Consulta</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Agendar Consulta</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
