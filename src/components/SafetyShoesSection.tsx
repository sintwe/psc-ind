import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, CheckCircle, Truck } from 'lucide-react';
import safetyCollection from '@/assets/safety-shoes-collection.jpg';

const safetyProducts = [
  {
    id: 1,
    name: 'Steel Toe Safety Boots',
    features: ['Steel Toe Protection', 'Slip Resistant Sole', 'Oil & Chemical Resistant', 'Puncture Resistant'],
    applications: ['Construction', 'Manufacturing', 'Mining', 'Oil & Gas'],
    certifications: ['ISI Marked', 'CE Certified', 'ASTM Standards'],
    popular: true
  },
  {
    id: 2,
    name: 'High Ankle Safety Shoes',
    features: ['Ankle Support', 'Breathable Material', 'Anti-Static', 'Heat Resistant'],
    applications: ['Electrical Work', 'Welding', 'Heavy Industry', 'Warehouse'],
    certifications: ['ISI Marked', 'IS 15298 Compliant']
  },
  {
    id: 3,
    name: 'Composite Toe Boots',
    features: ['Non-Metal Toe Cap', 'Lightweight', 'Electrical Hazard Protection', 'Comfort Insole'],
    applications: ['Electronics', 'Airport Security', 'Food Processing'],
    certifications: ['CE Certified', 'ASTM F2413']
  },
  {
    id: 4,
    name: 'Cut Resistant Safety Shoes',
    features: ['Cut Level 5 Protection', 'Reinforced Upper', 'Non-Slip Outsole', 'Moisture Wicking'],
    applications: ['Glass Industry', 'Metal Fabrication', 'Sharp Material Handling'],
    certifications: ['EN ISO 20345', 'Cut Resistance A5']
  }
];

const SafetyShoesSection = () => {
  return (
    <section id="safety-shoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Safety Shoes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of industrial safety footwear designed to protect workers in hazardous environments while ensuring maximum comfort and durability.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-fade-in-up animate-stagger-1">
          <div className="relative rounded-2xl overflow-hidden shadow-hero">
            <img
              src={safetyCollection}
              alt="Safety Shoes Collection"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white">
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3">
                    Built for Protection. Designed for Comfort.
                  </h3>
                  <p className="text-lg mb-6">
                    Premium safety footwear meeting international standards for industrial applications.
                  </p>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Get Bulk Quote
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
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">Maximum Protection</h3>
              <p className="text-muted-foreground">Steel toe caps, puncture-resistant soles, and chemical protection for complete workplace safety.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-3">
            <CardContent className="p-8">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">All-Day Comfort</h3>
              <p className="text-muted-foreground">Ergonomic design with cushioned insoles and breathable materials for extended wear comfort.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-4">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">Certified Quality</h3>
              <p className="text-muted-foreground">ISI marked and internationally certified products meeting the highest safety standards.</p>
            </CardContent>
          </Card>
        </div>

        {/* Product Range */}
        <div className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Our Safety Shoe Range
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safetyProducts.map((product, index) => (
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
                      <h5 className="font-semibold text-secondary mb-2">Applications:</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-secondary mb-2">Certifications:</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert, idx) => (
                          <Badge key={idx} className="bg-accent text-accent-foreground text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
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

        {/* CTA Section */}
        <div className="text-center bg-accent rounded-2xl p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
            Need Bulk Safety Footwear?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get competitive pricing for bulk orders. We serve distributors, corporate buyers, and institutions across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover" asChild>
              <a href="#contact">
                <Truck className="h-5 w-5 mr-2" />
                Get Bulk Quote
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

export default SafetyShoesSection;