import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Outlets from "./pages/Outlets";
import Franchise from "./pages/Franchise";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./pages/ScrollToTop";
import ScrollToTopOnRouteChange from "./pages/ScrollToTopRouteChange";
import SecondaryHeader from "./components/SecondaryHeader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <ScrollToTopOnRouteChange />
          <Header />
          <SecondaryHeader/>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/outlets" element={<Outlets />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {/* <ChatWidget /> */}
          <ScrollToTop/>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
