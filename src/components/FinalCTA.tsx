import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Üretmeye Devam Et, Büyütmek Bizden!
          </h2>
          
          <div className="text-lg md:text-xl leading-relaxed mb-12 space-y-4">
            <p>Sen üretmeye devam et. Biz arkandayız.</p>
            <p>Köyden, atölyeden, mutfaktan dijitale uzanan bir yolkuluk var.</p>
            <p className="text-xl md:text-2xl font-semibold">Yalnız değilsin.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg font-semibold"
            >
              🔘 Hemen Görüşelim
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              🔘 Bana Uygun Destek Nedir?
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-80">
              Growevo - Küçük üreticilerin dijital dönüşüm partneri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};