
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackToSelectionProps {
  position: "top" | "bottom";
}

export const BackToSelection = ({ position }: BackToSelectionProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const containerClass = position === "top" 
    ? "fixed top-4 left-4 z-50" 
    : "py-8 bg-muted/50";

  const buttonClass = position === "top" 
    ? "bg-white/90 hover:bg-white text-gray-800 shadow-lg backdrop-blur-sm" 
    : "";

  return (
    <div className={containerClass}>
      {position === "bottom" ? (
        <div className="container mx-auto px-4 text-center">
          <Button 
            onClick={handleGoBack}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Ana Sayfaya Dön
          </Button>
        </div>
      ) : (
        <Button 
          onClick={handleGoBack}
          className={`gap-2 ${buttonClass}`}
          size="sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Geri
        </Button>
      )}
    </div>
  );
};
