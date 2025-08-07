
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import productCollection from '@/assets/product-collection.jpg';

const products = [
  {
    id: 1,
    name: 'Steel Toe Safety Boots',
    category: 'Safety Shoes',
    image: productCollection,
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant'],
    badge: 'Best Seller',
    popular: true
  },
  {
    id: 2,
    name: 'Industrial Gum Boots',
    category: 'Gum Boots',
    image: productCollection,
    features: ['100% Waterproof', 'Chemical Resistant', 'Steel Toe'],
    badge: 'Popular',
    popular: true
  },
  {
    id: 3,
    name: 'Premium School Shoes',
    category: 'School Shoes',
    image: productCollection,
    features: ['Durable Leather', 'Comfort Sole', 'Long Lasting'],
    badge: 'Quality Choice'
  },
  {
    id: 4,
    name: 'High Ankle Safety Boots',
    category: 'Safety Shoes',
    image: productCollection,
    features: ['Ankle Protection', 'Breathable Material', 'Non-Slip'],
    badge: 'New'
  },
  {
    id: 5,
    name: 'Wellington Gum Boots',
    category: 'Gum Boots',
    image: productCollection,
    features: ['Easy Slip-On', 'Flexible Design', 'Mud Resistant'],
    badge: 'Recommended'
  },
  {
    id: 6,
    name: 'Formal School Shoes',
    category: 'School Shoes',
    image: productCollection,
    features: ['Polished Finish', 'Comfortable Fit', 'Daily Wear'],
    badge: 'Student Choice'
  }
];

const BestSellers = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Best Selling Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular industrial and institutional footwear trusted by businesses across India
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`product-card group animate-fade-in-up animate-stagger-${Math.min(index + 1, 4)}`}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-lg">
                  {product.badge && (
                    <Badge 
                      className={`absolute top-4 left-4 z-10 ${
                        product.popular ? 'bg-success text-success-foreground' : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        className="bg-success text-success-foreground hover:bg-success/90"
                        asChild
                      >
                        <Link to="/contact">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Inquire
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-secondary">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    asChild
                  >
                    <Link to="/contact">Send Inquiry</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up animate-stagger-4">
          <Button 
            size="lg" 
            className="px-8 py-3 bg-primary hover:bg-primary-hover"
            asChild
          >
            <Link to="/contact">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
