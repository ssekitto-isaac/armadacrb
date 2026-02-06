import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProductSuitePage from "./pages/ProductSuitePage";
import CreditReportsPage from "./pages/CreditReportsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import PortfolioPage from "./pages/PortfolioPage";
import DataManagementPage from "./pages/DataManagementPage";
import NewsPage from "./pages/NewsPage";
import Contact from "./pages/Contactus";
import SelfInquiry from "./pages/SelfInquiry";

import FAQPage from "./pages/FAQ";
import DisputeResolutionForm from "./pages/DisputeResolutionForm";
import AboutArmada from "./pages/AboutArmada";
import OurPeople from "./pages/OurPeople";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

           <Route path="/contact" element={<Contact />} />
              <Route path="/SelfInquiry" element={<SelfInquiry />} />
              <Route path="/FAQ" element={<FAQPage />} />
                 <Route path="/DisputeResolutionForm" element={<DisputeResolutionForm />} />
                  <Route path="/AboutArmada" element={<AboutArmada />} />
                    <Route path="/OurPeople" element={<OurPeople />} />
                          <Route path="*" element={<NotFound />} 
          <Route path="/product-suites" element={<ProductSuitePage />} />
          <Route path="/product-suites/credit-reports" element={<CreditReportsPage />} />
          <Route path="/product-suites/analytics" element={<AnalyticsPage />} />
          <Route path="/product-suites/portfolio" element={<PortfolioPage />} />
          <Route path="/product-suites/data-management" element={<DataManagementPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/self-inquiry" element={<SelfInquiry />} />
          <Route path="/news" element={<NewsPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
