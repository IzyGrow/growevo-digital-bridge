import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("value-proposition");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/3ecda02c-4261-4d58-a0ea-6f473010f0ce.png')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Üretiyorsan, büyütmeyi birlikte başarırız.
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 font-light opacity-90 max-w-3xl mx-auto">
            Web sitesi, sosyal medya, satış desteği... Küçük üreticilerin ihtiyaç duyduğu tüm dijital araçlar tek çatı altında.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              🔘 Destek Almak İstiyorum
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-100 bg-black/20 hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold"
              onClick={scrollToNextSection}
            >
              🔘 Nasıl Yardımcı Oluyorsunuz?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};