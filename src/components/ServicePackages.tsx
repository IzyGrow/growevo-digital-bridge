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
        "Meta ve Google Ads Yönetimi", // ← Virgül eklendi
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

  // ... rest of the code remains the same
};
