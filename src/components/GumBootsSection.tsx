import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Shield, Zap, Truck } from 'lucide-react';
import gumBootsCollection from '@/assets/gum-boots-collection.jpg';

const gumBootsProducts = [
  {
    id: 1,
    name: 'Industrial Wellington Boots',
    features: ['100% Waterproof', 'Steel Toe Protection', 'Chemical Resistant', 'Anti-Slip Sole'],
    applications: ['Chemical Plants', 'Food Processing', 'Marine Industry', 'Agriculture'],
    certifications: ['ISI Marked', 'CE Certified', 'IP Rating'],
    popular: true
  },
  {
    id: 2,
    name: 'Safety Gum Boots',
    features: ['Reinforced Toe Cap', 'Oil Resistant', 'Easy Clean Surface', 'Comfortable Lining'],
    applications: ['Construction', 'Mining', 'Waste Management', 'Utilities'],
    certifications: ['Safety Standards Compliant', 'Quality Tested']
  },
  {
    id: 3,
    name: 'Chemical Resistant Boots',
    features: ['Acid & Alkali Resistant', 'Non-Porous Material', 'Seamless Construction', 'Heat Resistant'],
    applications: ['Chemical Industry', 'Pharmaceutical', 'Laboratory Work', 'Cleaning Services'],
    certifications: ['Chemical Resistance Tested', 'EN Standards']
  },
  {
    id: 4,
    name: 'High Visibility Gum Boots',
    features: ['Reflective Strips', 'Bright Color Options', 'Steel Toe Available', 'Puncture Resistant'],
    applications: ['Traffic Management', 'Airport Operations', 'Emergency Services', 'Night Work'],
    certifications: ['High Visibility Standards', 'Safety Compliant']
  }
];

const GumBootsSection = () => {
  return (
    <section id="gum-boots" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <Droplets className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Gum Boots
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium waterproof and chemical-resistant gum boots designed for challenging work environments where protection against liquids and chemicals is essential.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-fade-in-up animate-stagger-1">
          <div className="relative rounded-2xl overflow-hidden shadow-hero">
            <img
              src={gumBootsCollection}
              alt="Gum Boots Collection"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white">
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3">
                    Ultimate Protection Against Elements.
                  </h3>
                  <p className="text-lg mb-6">
                    Waterproof, slip-resistant boots for the most challenging conditions.
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
              <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">100% Waterproof</h3>
              <p className="text-muted-foreground">Complete protection against water, chemicals, and liquid spills in all working conditions.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-3">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">Chemical Resistance</h3>
              <p className="text-muted-foreground">Superior resistance to acids, alkalis, oils, and industrial chemicals for safe operation.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-4">
            <CardContent className="p-8">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-3">Slip Resistant</h3>
              <p className="text-muted-foreground">Advanced tread patterns and compounds for maximum grip on wet and slippery surfaces.</p>
            </CardContent>
          </Card>
        </div>

        {/* Product Range */}
        <div className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Our Gum Boots Range
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gumBootsProducts.map((product, index) => (
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

        {/* Industries Served */}
        <div className="mb-16">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Industries We Serve
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Chemical Plants', 
              'Food Processing', 
              'Marine Industry', 
              'Construction', 
              'Agriculture', 
              'Mining',
              'Waste Management',
              'Utilities',
              'Pharmaceutical',
              'Laboratory Work',
              'Emergency Services',
              'Cleaning Services'
            ].map((industry, index) => (
              <Card key={index} className={`text-center p-4 border-0 shadow-sm hover-lift animate-fade-in-up animate-stagger-${(index % 4) + 1}`}>
                <CardContent className="p-2">
                  <p className="text-sm font-medium text-muted-foreground">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in-up">
          <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
            Need Waterproof Protection?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get competitive pricing for bulk gum boots orders. Perfect for industries requiring liquid and chemical protection.
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

export default GumBootsSection;