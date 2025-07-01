import React from "react";
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
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hizmet Paketlerimiz</h2>
          <p className="text-lg text-muted-foreground">İhtiyacına uygun dijital büyüme paketini seç!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <Card key={pkg.name} className={`flex flex-col h-full ${pkg.popular ? 'border-2 border-primary shadow-lg scale-105' : ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  {pkg.name}
                  {pkg.popular && <span className="ml-2 px-2 py-1 text-xs rounded bg-primary text-white">En Popüler</span>}
                </CardTitle>
                <div className="text-muted-foreground text-base mt-2 text-center">{pkg.description}</div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="text-left mb-6 space-y-2 mt-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-auto"
                  variant={pkg.popular ? "default" : "secondary"}
                  onClick={handleWhatsAppClick}
                >
                  Bilgi Al
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
