import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy el asistente virtual de Mucipro. ¿En qué te puedo ayudar hoy?", sender: "bot", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), text: inputValue, sender: "user", timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Gracias por tu mensaje. Un asesor comercial se pondrá en contacto pronto. ¿Deseas agendar una consulta?",
        sender: "bot",
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    handleSend();
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(true)}
              data-testid="button-open-chat"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[350px]"
          >
            <Card className="flex flex-col h-[500px] shadow-xl border-border">
              {/* Header */}
              <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center rounded-t-xl">
                <div className="font-semibold">Asistente Mucipro</div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary/20" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-muted/20 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      msg.sender === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-white border border-border text-foreground rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-background border-t border-border">
                <Button variant="outline" size="sm" className="text-xs shrink-0 rounded-full" onClick={() => handleQuickAction("Agendar Consulta")}>
                  Agendar Consulta
                </Button>
                <Button variant="outline" size="sm" className="text-xs shrink-0 rounded-full" onClick={() => handleQuickAction("Preguntas Frecuentes")}>
                  Preguntas Frecuentes
                </Button>
              </div>

              {/* Input */}
              <div className="p-4 bg-background border-t border-border flex gap-2 rounded-b-xl">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSend} disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
