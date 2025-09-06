
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Lazily load the page components
const Index = lazy(() => import("@/pages/Index"));
const SafetyShoes = lazy(() => import("@/pages/SafetyShoes"));
const GumBoots = lazy(() => import("@/pages/GumBoots"));
const SchoolShoes = lazy(() => import("@/pages/SchoolShoes"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPostPage = lazy(() => import("@/pages/BlogPost"));

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create a loading component
const Loading = () => (
  <div className="w-screen h-screen grid place-content-center">
    <div className="w-20 h-20 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/safety-shoes" element={<SafetyShoes />} />
                <Route path="/gum-boots" element={<GumBoots />} />
                <Route path="/school-shoes" element={<SchoolShoes />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
