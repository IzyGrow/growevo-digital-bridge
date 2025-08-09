import { useState } from 'react';
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Selection from "./pages/Selection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const clientId = "ecf7c15b-43c6-4e92-b307-abd7c831730e";

const configuration: Configuration = {
  color: '#000',
};

const App = () => {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Selection />} />
            <Route path="/producer" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <WebchatProvider client={client} configuration={configuration}>
          <Fab onClick={toggleWebchat} />
          <div
            style={{
              display: isWebchatOpen ? 'block' : 'none',
            }}
          >
            <Webchat />
          </div>
        </WebchatProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
