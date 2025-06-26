
export const TargetAudience = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Kimler İçin?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-3">Çiftçiler</h3>
              <p className="text-muted-foreground">Doğal ürünlerinizi daha geniş kitlelere ulaştırın</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-3">Ev Yemekleri</h3>
              <p className="text-muted-foreground">Lezzetli yemeklerinizi dijital platformlarda tanıtın</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-semibold mb-3">El Sanatları</h3>
              <p className="text-muted-foreground">Özel yapım ürünlerinizi online satın</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
