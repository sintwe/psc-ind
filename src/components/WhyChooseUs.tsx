import { Shield, Truck, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Bulk Order Ready',
    description: 'Large volume orders processed efficiently with competitive pricing for distributors and corporate buyers.',
    stats: '1000+ Units Daily Capacity'
  },
  {
    icon: Truck,
    title: 'All India Delivery',
    description: 'Pan-India distribution network ensuring timely delivery to all major cities and remote locations.',
    stats: '500+ Cities Covered'
  },
  {
    icon: Award,
    title: 'Industry-Grade Products',
    description: 'Premium quality footwear meeting international safety standards and institutional requirements.',
    stats: 'ISI & CE Certified'
  },
  {
    icon: Users,
    title: 'Trusted by 200+ Dealers',
    description: 'Strong partnership network with distributors, institutions, and corporate clients across India.',
    stats: '200+ Active Partners'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Why Choose Paras Sales Corporation?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for premium industrial and institutional footwear solutions with unmatched quality and service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`text-center border-0 shadow-elegant hover-lift hover-glow animate-fade-in-up animate-stagger-${index + 1} glass-card`}
              >
                <CardContent className="p-8">
                  {/* Enhanced Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-xl mb-6 shadow-button hover-scale transition-bounce">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="inline-block px-3 py-1 bg-success/10 text-success font-medium text-sm rounded-full">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="mt-20 bg-gradient-to-br from-accent to-accent-hover rounded-3xl p-8 md:p-12 animate-fade-in-up animate-stagger-4 shadow-elegant hover-glow transition-smooth">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                50,000+
              </div>
              <div className="text-muted-foreground">Units Delivered Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;