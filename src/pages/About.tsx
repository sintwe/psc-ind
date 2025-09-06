
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const About = () => {
  const baseUrl = "https://www.parassales.com";
  const pageUrl = `${baseUrl}/about`;

  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Paras Sales Corporation | B2B Footwear Supplier',
    'description': 'Learn about Paras Sales Corporation, a leading B2B supplier of industrial safety shoes, school shoes, and gumboots in Indore for over 70 years.',
    'url': pageUrl,
    'mainEntity': {
        '@type': 'Organization',
        'name': 'Paras Sales Corporation',
        'url': baseUrl,
        'logo': `${baseUrl}/logo.png`
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': baseUrl
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'About Us',
        'item': pageUrl
      }
    ]
  };

  const combinedJsonLd = JSON.stringify([aboutPageJsonLd, breadcrumbJsonLd]);
  const pageTitle = "About Us | B2B Wholesale Footwear Supplier | Paras Sales Corp";
  const pageDescription = "Discover Paras Sales Corporation, Indore's trusted B2B wholesale supplier of industrial safety shoes, school shoes, and gumboots for over 70 years.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="about paras sales corporation, b2b footwear supplier indore, wholesale shoe distributor, industrial safety shoes, bulk school shoes, gumboots tender"
        jsonLd={combinedJsonLd}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={`${baseUrl}/assets/optimized/product-collection.webp`}
        ogUrl={pageUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={`${baseUrl}/assets/optimized/product-collection.webp`}
      />
      <div className="min-h-screen">
        <Navigation />
        
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
            <img
                src="/assets/optimized/product-collection.webp"
                alt="B2B Footwear Supply by Paras Sales Corporation"
                className="w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4 text-shadow-lg">
                    Your Trusted B2B Footwear Partner
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/95 text-shadow-md">
                    Over 70 Years of Supplying Quality Safety, School, and Gumboot Shoes to Industries and Institutions.
                </p>
            </div>
        </section>

        <section id="story" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
                  Our Legacy in B2B Footwear
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Since our inception, Paras Sales Corporation has been dedicated to providing <strong>ISI & CE certified</strong> footwear for bulk procurement. We are a cornerstone of the B2B supply chain in Indore and beyond, specializing in industrial safety shoes, institutional school shoes, and durable gumboots.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With a legacy spanning over <strong>70 years</strong>, we combine deep industry knowledge with a commitment to quality, ensuring every client receives reliable, regulation-compliant footwear.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request a Bulk Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/assets/optimized/product-collection.webp"
                  alt="Wholesale Shoe Collection"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Our Commitment to B2B Clients
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 text-center">
                <CardContent>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To be the most reliable B2B supplier of industrial and institutional footwear, ensuring workplace safety and educational continuity through high-quality, certified products and exceptional service.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center">
                <CardContent>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be India’s foremost partner for bulk footwear procurement, driving industrial and institutional success through a focus on quality, innovation, and unwavering customer support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Why Partner with Paras Sales Corporation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our operational excellence is designed for your B2B needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ISI & CE Certified</h3>
                <p className="text-muted-foreground text-sm">All products meet rigorous national and international safety standards.</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pan-India Logistics</h3>
                <p className="text-muted-foreground text-sm">Efficient distribution network ensuring on-time delivery across India.</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bulk Order Capacity</h3>
                <p className="text-muted-foreground text-sm">Daily processing capacity of 1,000+ units to meet large-scale demand.</p>
              </div>

              <div className="text-center p-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2500+ Partner Network</h3>
                <p className="text-muted-foreground text-sm">A robust network of dealers and partners ensures widespread availability.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">70+</div>
                <div className="text-primary-foreground/80">Years of B2B Supply</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100,000+</div>
                <div className="text-primary-foreground/80">Businesses & Institutions Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-primary-foreground/80">Units Supplied Monthly</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2500+</div>
                <div className="text-primary-foreground/80">B2B Dealer Network</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Become Our Next B2B Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for exclusive wholesale pricing, tender information, and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Send Bulk Inquiry</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+918349494982">Call Our B2B Team</a>
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
