
export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Sıkça Sorulan Sorular
          </h2>
          
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Ne kadar sürede sonuç alabilirim?</h3>
              <p className="text-muted-foreground">
                İlk 30 gün içinde dijital varlığınızı kuruyor, 90 gün içinde ilk sonuçları almaya başlıyorsunuz.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Teknik bilgim yok, sorun olur mu?</h3>
              <p className="text-muted-foreground">
                Hiç sorun değil! Tüm teknik işlemleri biz hallederiz. Siz sadece üretmeye odaklanın.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Hangi sosyal medya platformlarında aktifim?</h3>
              <p className="text-muted-foreground">
                Instagram, Facebook, WhatsApp Business ve Google My Business platformlarında varlığınızı kurarız.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Fotoğraf çekimini kim yapacak?</h3>
              <p className="text-muted-foreground">
                Size ürün fotoğrafı çekimi için rehberlik ederiz veya profesyonel çekim hizmeti sağlarız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
