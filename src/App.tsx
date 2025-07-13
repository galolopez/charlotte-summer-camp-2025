import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fragrance from "./pages/Fragrance";
import NotFound from "./pages/NotFound";
import Media from "./pages/Media";
import NewSongFestival from "./pages/NewSongFestival";
import Activities from "./pages/Activities";
import FloatingFeedbackButton from "./components/FloatingFeedbackButton";
import LostAndFound from "./pages/LostAndFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fragrance" element={<Fragrance />} />
          <Route path="/media" element={<Media />} />
          <Route path="/new-song-festival" element={<NewSongFestival />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/lost-and-found" element={<LostAndFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingFeedbackButton 
          onClick={() => {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLScbU2KI5aU6e9I6AlSjfhPxnC_tT4vxy4WWc-KSy4nWe9vzeQ/viewform', '_blank');
          }}
        />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
