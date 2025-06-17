import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Web sitem yoksa ne olur?",
      answer: "Hiç sorun değil! Sıfırdan başlayarak size özel, kullanıcı dostu bir web sitesi kuruyoruz. Tüm teknik detaylarla biz ilgileniyoruz, siz sadece ürününüze odaklanın."
    },
    {
      question: "Ben hiç teknoloji bilmem, olur mu?",
      answer: "Tabii ki! Zaten bu yüzden buradayız. Teknolojiden hiç anlamamanız sorun değil. Biz her şeyi size anlatarak, basit bir şekilde öğreterek ilerleyeceğiz. Karmaşık hiçbir şey yapmak zorunda değilsiniz."
    },
    {
      question: "Ayda ne kadar öderim?",
      answer: "Paket seçiminize göre aylık ödeme planlarımız var. Başlangıç seviyesinden profesyonel pakete kadar farklı seçenekler sunuyoruz. Detaylı fiyat bilgisi için bizimle iletişime geçin."
    },
    {
      question: "Devlet desteğiyle kullanabilir miyim?",
      answer: "Evet! Birçok devlet desteği ve hibe programı dijital dönüşüm hizmetlerini kapsamaktadır. KOSGEB, TKDK ve diğer destekler hakkında size rehberlik edebiliriz."
    },
    {
      question: "Ne kadar sürede sonuç görürüm?",
      answer: "İlk 30 gün içinde web siteniz hazır olur ve sosyal medya düzeniniz kurulur. Satış artışını genellikle 2-3 ay içinde görmeye başlarsınız. Tabii ki bu, ürününüze ve hedef kitlenize bağlı olarak değişebilir."
    },
    {
      question: "Sadece belli bir bölgede mi çalışıyorsunuz?",
      answer: "Hayır! Türkiye'nin her yerinden üreticilerle çalışıyoruz. Online toplantılar ve uzaktan destek ile tüm hizmetlerimizi verebiliyoruz. Gerektiğinde bölgenize ziyaret de düzenleyebiliriz."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Sık Sorulan Sorular
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};