
export const ThreeStepProcess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            3 Adımda Dijital Dönüşüm
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analiz</h3>
              <p className="text-muted-foreground">İşinizi ve hedef kitlenizi analiz ediyoruz</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strateji</h3>
              <p className="text-muted-foreground">Size özel dijital strateji geliştiriyoruz</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Uygulama</h3>
              <p className="text-muted-foreground">Stratejinizi hayata geçiriyoruz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
