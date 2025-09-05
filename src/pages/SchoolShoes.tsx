
import Navigation from \'@/components/Navigation\';
import Footer from \'@/components/Footer\';
import { Button } from \'@/components/ui/button\';
import { Card, CardContent } from \'@/components/ui/card\';
import { Badge } from \'@/components/ui/badge\';
import { GraduationCap, Heart, Star, ArrowRight } from \'lucide-react\';
import { Link } from \'react-router-dom\';
import SEOHead from \'@/components/SEOHead\';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

const schoolShoeImages = [
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_1.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_2.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_3.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_4.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_5.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_6.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_7.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_8.webp",
  "src/assets/optimized/products images/CLAWZ/CL06/CL06_Final_2025_9.webp"
];

const schoolShoeProducts = [
  {
    id: 1,
    name: \'Black Leather School Shoes\',
    image: "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_1(1).webp",
    features: [\'Premium Leather\', \'Comfortable Sole\', \'Polished Finish\', \'Durable Construction\'],
    suitableFor: [\'Primary School\', \'High School\', \'Daily Wear\', \'Formal Events\']
  },
  {
    id: 2,
    name: \'Brown Canvas School Shoes\',
    image: "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_3(1).webp",
    features: [\'Canvas Upper\', \'Breathable Material\', \'Flexible Sole\', \'Easy Maintenance\'],
    suitableFor: [\'Sports Activities\', \'Casual Wear\', \'PT Classes\', \'Outdoor Activities\']
  },
  {
    id: 3,
    name: \'White Sports School Shoes\',
    image: "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_4.webp",
    features: [\'Sports Design\', \'Cushioned Sole\', \'Non-Slip Grip\', \'Lightweight\'],
    suitableFor: [\'Sports Period\', \'Physical Training\', \'Running\', \'Games\']
  },
  {
    id: 4,
    name: \'Formal Black Oxford Shoes\',
    image: "src/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_6(1).webp",
    features: [\'Oxford Style\', \'Leather Upper\', \'Formal Design\', \'Professional Look\'],
    suitableFor: [\'Senior School\', \'Presentations\', \'School Events\', \'Formal Occasions\']
  }
];

const SchoolShoes = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const jsonLd = {
    // ... (your existing jsonLd object)
  };

  return (
    <>
      <SEOHead
        title="Wholesale School Shoes in Indore | Black, Brown, White & More"
        description="Get the best deals on wholesale school shoes in Indore. Paras Sales Corporation offers a wide selection of leather, canvas, and sports school shoes for all ages."
        keywords="school shoes, school shoes Indore, wholesale school shoes, school footwear, black school shoes, white school shoes"
        jsonLd={JSON.stringify(jsonLd)}
      />
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative h-80 sm:h-96 md:h-[28rem] flex items-center justify-center overflow-hidden mt-16">
        <Carousel
              plugins={[plugin.current]}
              className="w-full h-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {schoolShoeImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
            src={image}
            alt="School Shoes"
            className="w-full h-full object-cover object-center"
          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          
          {/* Text Overlay with Blurred Background */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
            <div className="text-center text-white px-8 py-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/30 max-w-xl mx-4 shadow-hero">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 text-shadow-lg">
                School Shoes
              </h1>
              <p className="text-lg sm:text-xl md:text-xl mb-6 text-white/90">
                Quality Footwear for Growing Minds
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
                School Shoe Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Quality footwear designed specifically for educational institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {schoolShoeProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
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
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Suitable For:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.suitableFor.map((use, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {use}
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

        {/* ... (rest of your component) ... */}
        <Footer />
      </div>
    </>
  );
};

export default SchoolShoes;
