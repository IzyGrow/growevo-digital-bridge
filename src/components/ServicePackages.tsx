import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicePackages = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "905322373879"; // Türkiye country code ile
    const message = "Ürünleriniz hakkında daha fazla bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const packages = [
    {
      name: "Başlangıç",
      description: "Web sitesi + Instagram düzeni",
      features: [
        "Instagram profil düzenlemesi",
        "Temel SEO optimizasyonu",
        "Funnel ve Mesaj Yönetimi",
        "Meta ve Google Ads Yönetimi"
      ],
      popular: false
    },
    {
      name: "Orta Seviye",
      description: "Web sitesi + sosyal medya + içerik desteği",
      features: [
        "Profesyonel ve Dinamik web sitesi",
        "Çoklu sosyal medya yönetimi",
        "Haftalık içerik desteği",
        "Temel analitik raporları",
        "E-ticaret entegrasyonu",
        "Meta ve Google Ads Yönetimi",
        "Temel Seo optimizasyonu ve Blog",
        "Whatsapp Reklam"
      ],
      popular: true
    },
    {
      name: "Özel Paket",
      description: "Bize Ulaşın",
      features: [
        "Tam dijital paket",
        "Profesyonel reklam kampanyaları",
        "Aylık strateji danışmanlığı",
        "Detaylı analitik raporları",
        "Marka kimliği geliştirme",
        "7/24 destek hattı"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            İhtiyacına Uygun Paketler Var
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      En Popüler
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              onClick={handleWhatsAppClick}
            >
              Hangi paket bana uygun?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
