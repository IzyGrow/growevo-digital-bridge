import { Card, CardContent } from "@/components/ui/card";

export const SuccessStories = () => {
  const stories = [
    {
      name: "Fatma",
      location: "Ulamış Köyü",
      story: "Sadece Instagram'la başladım, şimdi web sitem ve 10 kat fazla siparişim var.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Mehmet",
      location: "Antakya",
      story: "Zeytinyağı satışım dijital destek sayesinde 5 kata çıktı. Artık büyük şehirlere bile gönderim yapıyorum.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Ayşe",
      location: "Kooperatif Üyesi",
      story: "El yapımı ürünlerimizi online satışa açtık. Şimdi hem yerel hem de uluslararası müşterilerimiz var.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Birlikte Büyüdüğümüz Üreticiler
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{story.story}"
                  </blockquote>
                  <div className="font-semibold text-foreground">
                    – {story.name}, {story.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};