import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Shield, Thermometer, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import InquiryModal from '@/components/InquiryModal';

const gumBootProducts = [
  {
    id: 1,
    name: 'Industrial PVC Gum Boots',
    images: [
        "assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_1.webp",
        "assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_2.webp",
        "assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_3.webp",
    ],
    features: ['100% Waterproof', 'Chemical Resistant', 'Steel Toe Protection', 'Anti-Slip Sole'],
    applications: ['Chemical Plants', 'Food Processing', 'Agriculture', 'Mining']
  },
  {
    id: 2,
    name: 'Wellington Gum Boots',
    images: [
        "assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_1.webp",
        "assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_2.webp",
        "assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_3.webp",
    ],
    features: ['Easy Slip-On', 'Comfortable Fit', 'Mud Resistant', 'Durable Construction'],
    applications: ['Farming', 'Gardening', 'Construction', 'General Industry']
  },
  {
    id: 3,
    name: 'Safety Gum Boots with Steel Toe',
    images: [
        "assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_1.webp",
        "assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_2.webp",
        "assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_3.webp",
    ],
    features: ['Steel Toe Cap', 'Puncture Resistant', 'Oil Resistant', 'High Ankle Support'],
    applications: ['Oil & Gas', 'Marine Industry', 'Heavy Construction', 'Waste Management']
  },
  {
    id: 4,
    name: 'Insulated Gum Boots',
    images: [
        "assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_1.webp",
        "assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_2.webp",
        "assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_3.webp",
    ],
    features: ['Thermal Insulation', 'Cold Weather Protection', 'Waterproof', 'Comfort Lining'],
    applications: ['Cold Storage', 'Winter Construction', 'Refrigeration', 'Outdoor Work']
  }
];

const ProductCarousel = ({ images, name }) => {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);
  
    React.useEffect(() => {
      if (!api) {
        return;
      }
  
      setCurrent(api.selectedScrollSnap() + 1);
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);
  
    return (
      <div>
      <Carousel 
        setApi={setApi}
        className="w-full max-w-xs relative group"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
        <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
      </Carousel>
      <div className="flex justify-center items-center mt-2 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index + 1 ? 'w-3 h-3 bg-primary' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    );
  };

const GumBoots = () => {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Gum Boots",
    "description": "Wholesale supplier of industrial and safety gum boots in Indore. Our gum boots are waterproof, chemical resistant, and available with steel toe protection.",
    "brand": {
      "@type": "Brand",
      "name": "Paras Sales Corporation"
    },
    "supplier": {
      "@type": "Organization",
      "name": "Paras Sales Corporation"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Paras Sales Corporation"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Wholesale Gum Boots in Indore | PVC, Safety & Industrial"
        description="Top wholesale supplier of gum boots in Indore. We offer a wide range of industrial, PVC, and safety gum boots that are waterproof, chemical-resistant, and built to last."
        keywords="gum boots, gum boots Indore, wholesale gum boots, industrial gum boots, safety gum boots, waterproof boots"
        jsonLd={JSON.stringify(jsonLd)}
      />
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-80 sm:h-96 md:h-[28rem] flex items-center justify-center overflow-hidden mt-16">
        <img
            src="assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_1.webp"
            alt="Gum Boots"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Text Overlay with Blurred Background */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
            <div className="text-center text-white px-8 py-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/30 max-w-xl mx-4 shadow-hero">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 text-shadow-lg">
                Gum Boots
              </h1>
              <p className="text-lg sm:text-xl md:text-xl mb-6 text-white/90">
                Ultimate Protection Against Elements
              </p>
              <Button 
                size="lg" 
                className="btn-secondary"
                asChild
              >
                <a href="#products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Gum Boot Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional waterproof footwear for challenging work environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gumBootProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                  <ProductCarousel images={product.images} name={product.name} />
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Features:</h4>
                        <div className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <InquiryModal />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Superior Gum Boot Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Engineered for extreme conditions and demanding environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Waterproof</h3>
                <p className="text-muted-foreground">Complete protection against water, chemicals, and liquids</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded--full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chemical Resistant</h3>
                <p className="text-muted-foreground">Resistant to acids, oils, and industrial chemicals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Temperature Resistant</h3>
                <p className="text-muted-foreground">Performs in extreme hot and cold conditions</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GumBoots;
