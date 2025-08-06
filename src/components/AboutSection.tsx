import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Award, Globe, Target, Handshake } from 'lucide-react';
import companyFacility from '@/assets/company-facility.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            About Paras Sales Corporation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for premium industrial and institutional footwear solutions with over 15 years of excellence in the industry.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-fade-in-up animate-stagger-1">
            <h3 className="text-3xl font-poppins font-bold text-primary mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2009, Paras Sales Corporation began with a simple mission: to provide high-quality, reliable footwear solutions for industries and institutions across India. What started as a small business has grown into one of the country's most trusted B2B footwear suppliers.
              </p>
              <p>
                Over the years, we have built strong relationships with manufacturers, distributors, and end customers, ensuring that every pair of shoes we supply meets the highest standards of quality, durability, and safety.
              </p>
              <p>
                Today, we serve over 200 active dealers and have delivered more than 500,000 pairs of footwear to satisfied customers across 500+ cities in India.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in-up animate-stagger-2">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={companyFacility}
                alt="Company Facility"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="border-0 shadow-elegant animate-fade-in-up animate-stagger-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide superior quality industrial and institutional footwear that ensures safety, comfort, and durability for workers and students across India, while building lasting partnerships with our dealers and customers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant animate-fade-in-up animate-stagger-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become India's leading B2B footwear supplier, known for exceptional quality, reliable service, and innovative solutions that meet the evolving needs of industries and educational institutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-1">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-poppins font-semibold text-primary mb-3">Quality Excellence</h4>
                <p className="text-muted-foreground">
                  We are committed to delivering only the highest quality products that meet international standards and exceed customer expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-2">
              <CardContent className="p-8">
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-poppins font-semibold text-primary mb-3">Trust & Reliability</h4>
                <p className="text-muted-foreground">
                  Building long-term relationships based on trust, transparency, and consistent delivery of promises to our partners and customers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-elegant animate-fade-in-up animate-stagger-3">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-poppins font-semibold text-primary mb-3">Customer Focus</h4>
                <p className="text-muted-foreground">
                  Putting our customers first by understanding their unique needs and providing tailored solutions with exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-accent rounded-2xl p-8 md:p-12 mb-20 animate-fade-in-up">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Our Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Pairs Delivered</div>
            </div>
            
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Active Dealers</div>
            </div>
            
            <div>
              <div className="text-4xl font-poppins font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>

        {/* Infrastructure & Capabilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-poppins font-bold text-center text-primary mb-12">
            Infrastructure & Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Daily Production Capacity',
                value: '1000+ Units',
                description: 'High-volume processing capability for bulk orders'
              },
              {
                title: 'Quality Control',
                value: 'Multi-Stage Testing',
                description: 'Rigorous quality checks at every stage of processing'
              },
              {
                title: 'Warehouse Facility',
                value: '10,000 Sq Ft',
                description: 'Modern storage facility ensuring product safety'
              },
              {
                title: 'Delivery Network',
                value: 'Pan-India Coverage',
                description: 'Reliable logistics partners for timely delivery'
              },
              {
                title: 'Product Range',
                value: '100+ SKUs',
                description: 'Extensive variety to meet diverse requirements'
              },
              {
                title: 'Customer Service',
                value: '24/7 Support',
                description: 'Dedicated support team for customer assistance'
              }
            ].map((item, index) => (
              <Card key={index} className={`border-0 shadow-elegant animate-fade-in-up animate-stagger-${(index % 3) + 1}`}>
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-primary mb-2">{item.title}</h4>
                  <div className="text-2xl font-bold text-secondary mb-2">{item.value}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center bg-surface rounded-2xl p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-3xl font-poppins font-bold text-primary mb-8">
            Certifications & Standards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-2">ISI Certified</h4>
              <p className="text-sm text-muted-foreground">All safety products meet ISI standards</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-2">CE Compliant</h4>
              <p className="text-sm text-muted-foreground">European conformity standards met</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-2">Quality Assured</h4>
              <p className="text-sm text-muted-foreground">Stringent quality control processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;