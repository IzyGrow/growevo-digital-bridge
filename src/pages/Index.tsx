import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { ThreeStepProcess } from "@/components/ThreeStepProcess";
import { TargetAudience } from "@/components/TargetAudience";
import { SuccessStories } from "@/components/SuccessStories";
import { ServicePackages } from "@/components/ServicePackages";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <ThreeStepProcess />
      <TargetAudience />
      <SuccessStories />
      <ServicePackages />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;