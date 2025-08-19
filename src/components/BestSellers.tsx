
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Steel Toe Safety Boots',
    category: 'Safety Shoes',
    image: '/lovable-uploads/46198705-0da9-486f-9f7e-55aed2569499.png',
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant'],
    badge: 'Best Seller',
    popular: true
  },
  {
    id: 2,
    name: 'Industrial Safety Shoes',
    category: 'Safety Shoes',
    image: '/lovable-uploads/3af3ae31-1c43-4083-9b3e-d4aeeda0c076.png',
    features: ['Lightweight Design', 'Slip Resistant', 'Comfortable Fit'],
    badge: 'Popular',
    popular: true
  },
  {
    id: 3,
    name: 'Heavy Duty Safety Boots',
    category: 'Safety Shoes',
    image: '/lovable-uploads/55d17159-1c58-4d7e-8a56-e1c1e8fd75a5.png',
    features: ['Double Density Sole', 'Steel Toe Protection', 'Durable Build'],
    badge: 'Quality Choice'
  },
  {
    id: 4,
    name: 'Athletic Safety Shoes',
    category: 'Safety Shoes',
    image: '/lovable-uploads/91a2cab1-603e-4b76-9de8-a8703b7a21c8.png',
    features: ['Sports Style', 'Breathable Material', 'Non-Slip Sole'],
    badge: 'New'
  },
  {
    id: 5,
    name: 'Professional Safety Boots',
    category: 'Safety Shoes',
    image: '/lovable-uploads/be1d9dce-1518-4a3e-8f9c-86a1ce906790.png',
    features: ['Premium Leather', 'Enhanced Grip', 'Long Lasting'],
    badge: 'Recommended'
  },
  {
    id: 6,
    name: 'Sport Safety Shoes',
    category: 'Safety Shoes',
    image: '/lovable-uploads/8cdefb05-9e31-4b0d-a022-2ebae48b4e75.png',
    features: ['Modern Design', 'Comfortable Fit', 'Protective Features'],
    badge: 'Student Choice'
  }
];

const BestSellers = () => {
  return (
    <section className="py-20 surface-gradient relative overflow-hidden">
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
              className={`product-card group animate-fade-in-up animate-stagger-${Math.min(index + 1, 4)} hover-glow`}
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
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
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
            className="btn-primary"
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
