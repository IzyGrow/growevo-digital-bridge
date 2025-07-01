import React from "react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "905322373879"; // Türkiye country code ile
    const message = "Ürünleriniz hakkında daha fazla bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 izygrow-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Üretmeye Devam Et, Büyütmek Bizden!
          </h2>
          
          <div className="text-lg md:text-xl leading-relaxed mb-12 space-y-4">
            <p>Sen üretmeye devam et. Biz arkandayız.</p>
            <p>Köyden, atölyeden, mutfaktan dijitale uzanan bir yolculuk var.</p>
            <p className="text-xl md:text-2xl font-semibold">Yalnız değilsin.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg font-semibold"
              onClick={handleWhatsAppClick}
            >
              🔘 Hemen Görüşelim
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg font-semibold"
            >
              🔘 Bana Uygun Destek Nedir?
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80 mb-4">
              izyGrow - Küçük üreticilerin dijital dönüşüm partneri
            </p>
            <footer className="flex flex-col md:flex-row items-center justify-between gap-4 text-white text-sm opacity-90">
              <div>
                Adres: İzmir, Türkiye
              </div>
              <div className="flex gap-4 items-center">
                <a href="https://instagram.com/izygrowagency" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/107780990/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/></svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
