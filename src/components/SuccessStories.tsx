
export const SuccessStories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Başarı Hikayeleri
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-lg mb-4 italic">
                "izyGrow sayesinde köyümüzdeki domates üretimimizi şehirdekilere ulaştırabildik. Satışlarımız 3 kat arttı!"
              </p>
              <div className="font-semibold">- Mehmet Bey, Çiftçi</div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-lg mb-4 italic">
                "Ev yapımı reçellerim artık online sipariş alıyor. Müşteri kitlemi genişlettim."
              </p>
              <div className="font-semibold">- Ayşe Hanım, Ev Üreticisi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
