
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const safetyProducts = [
  {
    id: 1,
    name: 'WF 05',
    category: 'WeFly',
    images: [
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_1.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_2.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_3.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_4.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_6.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_7.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_8.webp",
      "src/assets/optimized/products images/WeFly Images/WF 05/WF05_9.webp"
    ],
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant', 'Puncture Proof'],
    applications: ['Construction', 'Manufacturing', 'Mining', 'Heavy Industry']
  },
  {
    id: 2,
    name: 'WF01 Black',
    category: 'WeFly',
    images: [
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_1(1).webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_3(1).webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_4.webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_6(1).webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_6.webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_7(1).webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_7.webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_8(1).webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_8.webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_9(1).webp",
      "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_9.webp"
    ],
    features: ['Lightweight Composite Toe', 'Electrical Hazard Protection', 'Breathable', 'Comfortable'],
    applications: ['Electronics', 'Food Industry', 'Light Manufacturing', 'Warehousing']
  },
  {
    id: 3,
    name: 'WF02 Green',
    category: 'WeFly',
    images: ["src/assets/optimized/products images/WeFly Images/WF02 Green/WF02Green_Final_2025_7.webp"],
    features: ['Ankle Protection', 'Waterproof', 'Heat Resistant', 'Durable Leather'],
    applications: ['Welding', 'Foundry', 'Chemical Plants', 'Oil & Gas']
  },
  {
    id: 4,
    name: 'WeFly 1904',
    category: 'WeFly',
    images: [
      "src/assets/optimized/products images/WeFly Images/WeFly 1904/SWAG_1904_2025_13.webp",
      "src/assets/optimized/products images/WeFly Images/WeFly 1904/SWAG_1904_2025_14.webp",
      "src/assets/optimized/products images/WeFly Images/WeFly 1904/SWAG_1904_2025_16.webp",
      "src/assets/optimized/products images/WeFly Images/WeFly 1904/SWAG_1904_2025_3.webp"
    ],
    features: ['Cut Resistant Upper', 'Metatarsal Guard', 'Chemical Resistant', 'Anti-Static'],
    applications: ['Glass Industry', 'Metal Cutting', 'Sharp Object Handling', 'Automotive']
  },
  {
    id: 5,
    name: 'CL 07',
    category: 'Clawz',
    images: [
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_1.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_2.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_3.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_4.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_5.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_6.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_7.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_8.webp",
      "src/assets/optimized/products images/CLAWZ/CL 07/CL07_Final_2025_9.webp"
    ],
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant', 'Puncture Proof'],
    applications: ['Construction', 'Manufacturing', 'Mining', 'Heavy Industry']
  },
  {
    id: 6,
    name: 'CL01',
    category: 'Clawz',
    images: [
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_1.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_2.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_3.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_4.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_5.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_6.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_7.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_8.webp",
      "src/assets/optimized/products images/CLAWZ/CL01/CL01_Final_2025_9.webp"
    ],
    features: ['Lightweight Composite Toe', 'Electrical Hazard Protection', 'Breathable', 'Comfortable'],
    applications: ['Electronics', 'Food Industry', 'Light Manufacturing', 'Warehousing']
  },
  {
    id: 7,
    name: 'CL02',
    category: 'Clawz',
    images: [
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_1.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_2.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_3.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_4.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_5.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_6.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_7.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_8.webp",
      "src/assets/optimized/products images/CLAWZ/CL02/CL02_Final_2025_9.webp"
    ],
    features: ['Ankle Protection', 'Waterproof', 'Heat Resistant', 'Durable Leather'],
    applications: ['Welding', 'Foundry', 'Chemical Plants', 'Oil & Gas']
  },
  {
    id: 8,
    name: 'CL03',
    category: 'Clawz',
    images: [
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_1.webp",
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_2.webp",
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_3.webp",
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_4.webp",
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_5.webp",
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_6.webp",
      "src/assets/optimized/products images/CLAWZ/CL03/CL03_Final_2025_9.webp"
    ],
    features: ['Cut Resistant Upper', 'Metatarsal Guard', 'Chemical Resistant', 'Anti-Static'],
    applications: ['Glass Industry', 'Metal Cutting', 'Sharp Object Handling', 'Automotive']
  },
  {
    id: 9,
    name: 'CL04',
    category: 'Clawz',
    images: [
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_1.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_2.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_3.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_4.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_5.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_6.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_7.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_8.webp",
      "src/assets/optimized/products images/CLAWZ/CL04/CL04_Final_2025_9.webp"
    ],
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant', 'Puncture Proof'],
    applications: ['Construction', 'Manufacturing', 'Mining', 'Heavy Industry']
  },
  {
    id: 10,
    name: 'CL06',
    category: 'Clawz',
    images: [
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_1.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_2.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_3.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_4.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_5.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_6.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_7.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_8.webp",
      "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_9.webp"
    ],
    features: ['Lightweight Composite Toe', 'Electrical Hazard Protection', 'Breathable', 'Comfortable'],
    applications: ['Electronics', 'Food Industry', 'Light Manufacturing', 'Warehousing']
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

const SafetyShoes = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Industrial Safety Shoes",
    "description": "Wholesale supplier of high-quality industrial safety shoes in Indore. Our range includes steel toe, composite toe, and high ankle boots for various applications.",
    "brand": {
      "@type": "Brand",
      "name": "Paras Sales Corporation"
    },
    "supplier": {
      "@type": "Organization",
      "name": "Paras Sales Corporation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9, Khatipura Main Road, Madhu's Pravesh",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452007",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Paras Sales Corporation"
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 15,
      "returnMethod": "https://schema.org/ReturnByMail"
    }
  };

  return (
    <>
      <SEOHead
        title="Wholesale Safety Shoes in Indore | Steel Toe, Composite & More"
        description="Find the best deals on wholesale safety shoes in Indore. Paras Sales Corporation offers a wide range of steel toe, composite toe, and high ankle safety boots for all industries."
        keywords="industrial safety shoes, safety shoes Indore, steel toe boots, composite toe shoes, wholesale safety shoes, safety footwear"
        jsonLd={JSON.stringify(jsonLd)}
      />
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-80 sm:h-96 md:h-[28rem] flex items-center justify-center overflow-hidden mt-16">
          <img
            src="src/assets/optimized/products images/WeFly Images/WF 05/WF05_1.webp"
            alt="Safety Shoes"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Text Overlay with Blurred Background */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
            <div className="text-center text-white px-8 py-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/30 max-w-xl mx-4 shadow-hero">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 text-shadow-lg">
                Safety Shoes
              </h1>
              <p className="text-lg sm:text-xl md:text-xl mb-6 text-white/90">
                Built for Protection. Designed for Comfort.
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
                Our Safety Shoe Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional-grade safety footwear for every industrial application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetyProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <ProductCarousel images={product.images} name={product.name} />
                    
                    <div className="p-6">
                    <Badge variant="secondary" className="text-xs mb-2">{product.category}</Badge>
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
                      
                      <Button className="w-full" variant="outline" asChild>
                        <Link to="/contact">Send Inquiry</Link>
                      </Button>
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
                Why Choose Our Safety Shoes?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry-leading protection meets uncompromising comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Maximum Protection</h3>
                <p className="text-muted-foreground">Steel toe caps, puncture-resistant soles, and comprehensive foot protection</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Electrical Safety</h3>
                <p className="text-muted-foreground">Electrical hazard protection and anti-static properties for safe operation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All-Weather Ready</h3>
                <p className="text-muted-foreground">Water-resistant, oil-resistant, and slip-resistant for any condition</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SafetyShoes;
