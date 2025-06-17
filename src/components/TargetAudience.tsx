export const TargetAudience = () => {
  const producers = [
    "Zeytin yağı üreten Ayşe Teyze",
    "El yapımı sabun üreten Berna",
    "Lavanta, incir kurusu, erişte satan kadın kooperatifi",
    "Küçük mandıralar, seramikçiler, arıcılar..."
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Kimler İçin?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-12">
            {producers.map((producer, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>{producer}</span>
              </div>
            ))}
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-primary bg-primary/10 p-6 rounded-lg">
            Sen üretiyorsan, bu destek senin için.
          </div>
        </div>
      </div>
    </section>
  );
};