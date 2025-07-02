import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// window'a botpressWebChat'i ekle
declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

export const WhatsAppButton = () => {
  const phoneNumber = "905322373879"; // Türkiye country code ile
  const message = "Ürünleriniz hakkında daha fazla bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="icon"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
};
