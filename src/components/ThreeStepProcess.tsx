import { Card, CardContent } from "@/components/ui/card";

export const ThreeStepProcess = () => {
  const steps = [
    {
      icon: "🧭",
      title: "1. Seni Dinliyoruz",
      description: "Seninle ve ürünlerinle tanışıyor, neye ihtiyacın olduğunu belirliyoruz."
    },
    {
      icon: "🛠",
      title: "2. Dijital Düzenini Kuruyoruz",
      description: "Web siteni kuruyor, sosyal medyayı düzenliyor, satış kanallarını açıyoruz."
    },
    {
      icon: "🚀",
      title: "3. Büyümene Destek Veriyoruz",
      description: "Reklam, içerik, tasarım ve büyüme önerileriyle yanında oluyoruz."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Büyümek İçin Sadece 3 Adım
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};