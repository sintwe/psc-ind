import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import productCollection from '@/assets/optimized/product-collection.webp';
import SEOHead from '@/components/SEOHead';

const About = () => {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Paras Sales Corporation",
    "description": "Learn about Paras Sales Corporation, a leading B2B supplier of safety shoes, gumboots, and school shoes in Indore with over 70 years of experience.",
    "url": "https://www.parassales.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "Paras Sales Corporation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.parassales.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="About Paras Sales Corporation | 70+ Years in Footwear Industry"
        description="Learn about Paras Sales Corporation, a leading B2B supplier of safety shoes, gumboots, and school shoes in Indore with over 70 years of experience."
        keywords="about us, Paras Sales Corporation, footwear supplier, industrial shoes, Indore, company history"
        jsonLd={JSON.stringify(jsonLd)}
      />
      <div className="min-h-screen">
        <Navigation />
        
        {/* Enhanced Hero Section */}
        <section className="relative h-80 sm:h-96 md:h-[28rem] flex items-center justify-center overflow-hidden mt-16 hero-gradient">
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-8 py-6 rounded-2xl glass-effect max-w-xl mx-4 shadow-hero animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4">
                About Paras Sales Corporation
              </h1>
              <p className="text-lg sm:text-xl md:text-xl mb-6">
                70+ Years of Excellence in Industrial Footwear
              </p>
              <Button 
                size="lg" 
                className="btn-secondary"
                asChild
              >
                <a href="#story">Our Story</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Company Overview */}
        <section id="story" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Established with a vision to provide premium quality industrial and institutional footwear, 
                  Paras Sales Corporation has emerged as a leading <strong>ISI & CE certified</strong> B2B supplier across India. 
                  We specialize in safety shoes, gum boots, and school shoes, serving diverse industries and educational institutions.
                  With over <strong>70+ years of experience</strong> in the footwear industry, we are your trusted partner for all footwear needs.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Located in the heart of Indore at Khatipura Main Road, we understand the critical importance 
                  of quality, durability, and comfort. Our products are designed to meet the highest 
                  standards of safety and performance, backed by decades of industry expertise.
                </p>
                <Button size="lg" asChild>
                  <a href="#contact">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
              <div className="relative">
                <img
                  src={productCollection}
                  alt="Our Products"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardContent>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide superior quality industrial and institutional footwear that ensures 
                    safety, comfort, and durability for workers and students across India, while 
                    maintaining the highest standards of service and reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardContent>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become India's most trusted and preferred B2B footwear supplier, known for 
                    innovation, quality, and customer satisfaction, while contributing to workplace 
                    safety and educational excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Why Choose Paras Sales Corporation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to excellence in every aspect of our business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry-Grade Products</h3>
                <p className="text-muted-foreground text-sm">
                  Premium quality footwear meeting international safety standards (ISI & CE Certified).
                </p>
              </div>

              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All India Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Pan-India distribution network ensuring timely delivery to 1000+ pincodes.
                </p>
              </div>

              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bulk Order Ready</h3>
                <p className="text-muted-foreground text-sm">
                  Large volume orders processed efficiently with a capacity of 1000+ units daily.
                </p>
              </div>

              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted by 2500+ Dealers</h3>
                <p className="text-muted-foreground text-sm">
                  Strong partnership network with over 2000+ active partners across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">70+</div>
                <div className="text-primary-foreground/80">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100,000+</div>
                <div className="text-primary-foreground/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-primary-foreground/80">Units Delivered Monthly</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2500+</div>
                <div className="text-primary-foreground/80">Dealers</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Paras Sales Corporation 
              for their footwear needs. Contact us today for bulk orders and special rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Send Inquiry</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+918349494982">Call Now: +91 83494 94982</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
