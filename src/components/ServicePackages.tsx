
export const ServicePackages = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Hizmet Paketlerimiz
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Başlangıç</h3>
              <div className="text-3xl font-bold mb-6">₺999/ay</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Sosyal medya yönetimi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Temel web sitesi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  WhatsApp entegrasyonu
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Başla
              </button>
            </div>
            
            <div className="bg-background p-6 rounded-lg border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Popüler
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Profesyonel</h3>
              <div className="text-3xl font-bold mb-6">₺1999/ay</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Tüm başlangıç özellikleri
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  E-ticaret sistemi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  SEO optimizasyonu
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Google Ads yönetimi
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Başla
              </button>
            </div>
            
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Kurumsal</h3>
              <div className="text-3xl font-bold mb-6">₺3999/ay</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Tüm profesyonel özellikler
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Özel tasarım
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  24/7 destek
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Analitik raporlama
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
