import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Star, Truck } from 'lucide-react';
import schoolShoesCollection from '@/assets/school-shoes-collection.jpg';

const schoolShoesProducts = [
  {
    id: 1,
    name: 'Classic Black School Shoes',
    features: ['Genuine Leather Upper', 'Comfortable Sole', 'Long-lasting Build', 'Easy Maintenance'],
    ageGroups: ['Primary (5-10 years)', 'Middle (11-14 years)', 'Senior (15-18 years)'],
    sizes: 'UK 1 to UK 10',
    popular: true
  },
  {
    id: 2,
    name: 'Sports School Shoes',
    features: ['Breathable Material', 'Cushioned Insole', 'Flexible Design', 'Non-marking Sole'],
    ageGroups: ['Primary (5-10 years)', 'Middle (11-14 years)', 'Senior (15-18 years)'],
    sizes: 'UK 1 to UK 10'
  },
  {
    id: 3,
    name: 'Formal School Shoes',
    features: ['Polished Finish', 'Premium Leather', 'Formal Design', 'Professional Look'],
    ageGroups: ['Middle (11-14 years)', 'Senior (15-18 years)'],
    sizes: 'UK 3 to UK 10'
  },
  {
    id: 4,
    name: 'Canvas School Shoes',
    features: ['Lightweight Canvas', 'Ventilated Design', 'Machine Washable', 'Quick Dry'],
    ageGroups: ['Primary (5-10 years)', 'Middle (11-14 years)'],
    sizes: 'UK 1 to UK 8'
  }
];

const SchoolShoesSection = () => {
  return (
    <section id="school-shoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            School Shoes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality footwear for growing minds. Durable, comfortable school shoes designed to support students through their educational journey with style and reliability.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-fade-in-up animate-stagger-1">
          <div className="relative rounded-2xl overflow-hidden shadow-hero">
            <img
              src={schoolShoesCollection}
              alt="School Shoes Collection"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white">
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3">
                    Quality Footwear for Growing Minds.
                  </h3>
                  <p className="text-lg mb-6">
                    Durable, comfortable school shoes built to last through every school day.
                  </p>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Get Institutional Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-2">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">Comfort First</h3>
              <p className="text-muted-foreground">Designed with growing feet in mind, providing all-day comfort for active students.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-3">
            <CardContent className="p-8">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">Made from high-quality materials to withstand daily wear and maintain their appearance.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-4">
            <CardContent className="p-8">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">School Approved</h3>
              <p className="text-muted-foreground">Designs that meet school uniform requirements while ensuring student comfort and safety.</p>
            </CardContent>
          </Card>
        </div>

        {/* Product Range */}
        <div className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Our School Shoes Range
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {schoolShoesProducts.map((product, index) => (
              <Card key={product.id} className={`shadow-elegant hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-poppins font-semibold text-primary">
                      {product.name}
                    </h4>
                    {product.popular && (
                      <Badge className="bg-success text-success-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-secondary mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-secondary mb-2">Age Groups:</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.ageGroups.map((age, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {age}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-secondary mb-2">Size Range:</h5>
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        {product.sizes}
                      </Badge>
                    </div>

                    <Button className="w-full" variant="outline">
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits for Institutions */}
        <div className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Benefits for Educational Institutions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Bulk Discounts',
                description: 'Special pricing for institutional orders of 50+ pairs',
                icon: '💰'
              },
              {
                title: 'Size Assortment',
                description: 'Complete size range from UK 1 to UK 10 available',
                icon: '📏'
              },
              {
                title: 'Quality Guarantee',
                description: '6-month quality warranty on all school shoes',
                icon: '✅'
              },
              {
                title: 'Fast Delivery',
                description: 'Quick delivery for urgent institutional requirements',
                icon: '🚚'
              }
            ].map((benefit, index) => (
              <Card key={index} className={`text-center border-0 shadow-sm hover-lift animate-fade-in-up animate-stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-poppins font-semibold text-primary mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Size Guide */}
        <div className="mb-16 bg-accent rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-poppins font-bold text-center text-primary mb-8">
            Size Guide for Schools
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-primary mb-2">Primary School</h4>
              <p className="text-sm text-muted-foreground mb-2">Ages 5-10 years</p>
              <Badge className="bg-white text-primary">UK 1 - UK 4</Badge>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Middle School</h4>
              <p className="text-sm text-muted-foreground mb-2">Ages 11-14 years</p>
              <Badge className="bg-white text-primary">UK 3 - UK 7</Badge>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-2">Senior School</h4>
              <p className="text-sm text-muted-foreground mb-2">Ages 15-18 years</p>
              <Badge className="bg-white text-primary">UK 5 - UK 10</Badge>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-surface rounded-2xl p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
            Need School Shoes for Your Institution?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get special institutional pricing for bulk orders. We serve schools, colleges, and educational institutions across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
              <a href="#contact">
                <Truck className="h-5 w-5 mr-2" />
                Get Institutional Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+919876543210">Call Now: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolShoesSection;