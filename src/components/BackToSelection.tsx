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
        <div className="flex justify-center">
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