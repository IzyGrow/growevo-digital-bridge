
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
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/8da79c6e-96df-477d-b552-dc5bb06f66da.png" 
                alt="izyGrow Logo" 
                className="h-16 md:h-20"
              />
            </div>
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
                className="px-12 py-6 text-lg font-semibold h-auto bg-primary hover:bg-primary/90"
                onClick={() => navigate('/producer')}
              >
                🌾 Üreticiyim
              </Button>
              
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg font-semibold h-auto bg-primary hover:bg-primary/90"
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
