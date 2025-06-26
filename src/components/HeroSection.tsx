
export const HeroSection = () => {
  console.log("HeroSection component loaded");
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Küçük Üreticilerin Dijital Partneri
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Üretmeye odaklan, büyütme işini bize bırak
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Hemen Başla
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
