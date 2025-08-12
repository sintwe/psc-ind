
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import schoolShoes from '@/assets/school-shoes-hero.jpg';
import productCollection from '@/assets/product-collection.jpg';

const schoolShoeProducts = [
  {
    id: 1,
    name: 'Black Leather School Shoes',
    image: productCollection,
    features: ['Premium Leather', 'Comfortable Sole', 'Polished Finish', 'Durable Construction'],
    suitableFor: ['Primary School', 'High School', 'Daily Wear', 'Formal Events']
  },
  {
    id: 2,
    name: 'Brown Canvas School Shoes',
    image: productCollection,
    features: ['Canvas Upper', 'Breathable Material', 'Flexible Sole', 'Easy Maintenance'],
    suitableFor: ['Sports Activities', 'Casual Wear', 'PT Classes', 'Outdoor Activities']
  },
  {
    id: 3,
    name: 'White Sports School Shoes',
    image: productCollection,
    features: ['Sports Design', 'Cushioned Sole', 'Non-Slip Grip', 'Lightweight'],
    suitableFor: ['Sports Period', 'Physical Training', 'Running', 'Games']
  },
  {
    id: 4,
    name: 'Formal Black Oxford Shoes',
    image: productCollection,
    features: ['Oxford Style', 'Leather Upper', 'Formal Design', 'Professional Look'],
    suitableFor: ['Senior School', 'Presentations', 'School Events', 'Formal Occasions']
  }
];

const SchoolShoes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 md:h-[28rem] flex items-center justify-center overflow-hidden mt-16">
        <img
          src={schoolShoes}
          alt="School Shoes"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Text Overlay with Blurred Background */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20">
          <div className="text-center text-white px-8 py-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 max-w-xl mx-4 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 text-shadow-lg">
              School Shoes
            </h1>
            <p className="text-lg sm:text-xl md:text-xl mb-6">
              Quality Footwear for Growing Minds
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
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
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Perfect School Shoes for Every Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comfortable, durable, and designed for active school life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">School Approved</h3>
              <p className="text-muted-foreground">Meets school dress code requirements and standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfort First</h3>
              <p className="text-muted-foreground">Designed for all-day comfort during school hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Long Lasting</h3>
              <p className="text-muted-foreground">Built to withstand daily wear and active use</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolShoes;
