
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BackToSelectionProps {
  position?: "top" | "bottom";
}

export const BackToSelection = ({ position = "top" }: BackToSelectionProps) => {
  const navigate = useNavigate();

  return (
    <div className={`w-full ${position === "top" ? "py-4" : "py-8"} bg-background border-b border-border`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8a96113c-e9dd-4ba4-a31d-9df00cd1b1b1.png" 
              alt="izyGrow Logo" 
              className="h-8"
            />
          </div>
          
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="px-6 py-2"
          >
            ← Seçim Ekranına Dön
          </Button>
        </div>
      </div>
    </div>
  );
};
