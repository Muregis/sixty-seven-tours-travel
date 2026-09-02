import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Home, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - 67 Tours & Travel",
    "description": "The page you are looking for could not be found on 67 Tours & Travel website.",
    "url": "https://67tours.co.ke/404"
  };

  return (
    <>
      <SEO 
        title="Page Not Found | 67 Tours & Travel"
        description="The page you are looking for could not be found. Navigate back to explore Kenya destination management services."
        canonical="https://67tours.co.ke/404"
        noindex={true}
        structuredData={structuredData}
      />
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1d302b] to-[#2d4a3b]">
        <Card className="w-full max-w-lg mx-4 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-100 rounded-full animate-pulse" />
                <MapPin className="relative h-16 w-16 text-orange-600" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-[#1d302b] mb-2">404</h1>

            <h2 className="text-2xl font-semibold text-[#1d302b] mb-4">
              Route Not Found
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              The destination you're looking for doesn't exist on our map.
              <br />
              Let us guide you back to explore Kenya's travel possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleGoHome}
                className="bg-[#1d302b] hover:bg-[#2d4a3b] text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
