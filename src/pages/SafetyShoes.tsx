
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Droplets, ArrowRight } from 'lucide-react';
import safetyShoes from '@/assets/safety-shoes-hero.jpg';
import productCollection from '@/assets/product-collection.jpg';

const safetyProducts = [
  {
    id: 1,
    name: 'Steel Toe Safety Boots',
    image: productCollection,
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant', 'Puncture Proof'],
    applications: ['Construction', 'Manufacturing', 'Mining', 'Heavy Industry']
  },
  {
    id: 2,
    name: 'Composite Toe Safety Shoes',
    image: productCollection,
    features: ['Lightweight Composite Toe', 'Electrical Hazard Protection', 'Breathable', 'Comfortable'],
    applications: ['Electronics', 'Food Industry', 'Light Manufacturing', 'Warehousing']
  },
  {
    id: 3,
    name: 'High Ankle Safety Boots',
    image: productCollection,
    features: ['Ankle Protection', 'Waterproof', 'Heat Resistant', 'Durable Leather'],
    applications: ['Welding', 'Foundry', 'Chemical Plants', 'Oil & Gas']
  },
  {
    id: 4,
    name: 'Cut Resistant Safety Shoes',
    image: productCollection,
    features: ['Cut Resistant Upper', 'Metatarsal Guard', 'Chemical Resistant', 'Anti-Static'],
    applications: ['Glass Industry', 'Metal Cutting', 'Sharp Object Handling', 'Automotive']
  }
];

const SafetyShoes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
        <img
          src={safetyShoes}
          alt="Safety Shoes"
          className="w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
            Safety Shoes
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
            Built for Protection. Designed for Comfort.
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
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Send Inquiry
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
  );
};

export default SafetyShoes;
