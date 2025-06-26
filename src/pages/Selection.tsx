
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              izyGrow
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              İşinizi büyüten dijital büyüme ajansı
            </p>
          </div>
          
          {/* Selection Buttons */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Hangi kategoriyi seçiyorsunuz?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg font-semibold h-auto"
                onClick={() => navigate('/producer')}
              >
                🌾 Üreticiyim
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="px-12 py-6 text-lg font-semibold h-auto"
                onClick={() => window.open('https://growevo-growth-hub.lovable.app/', '_blank')}
              >
                🏢 Kurumsalım
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
