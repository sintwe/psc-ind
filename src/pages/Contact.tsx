
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import SEOHead from '@/components/SEOHead';
import { lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MapboxMap = lazy(() => import('@/components/MapboxMap'));

const Contact = () => {
  const baseUrl = "https://www.parassales.com";
  const pageUrl = `${baseUrl}/contact`;

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Paras Sales Corporation for B2B Footwear Orders',
    'description': 'Contact us for wholesale inquiries, bulk orders, and tenders for industrial safety shoes, school shoes, and gumboots in Indore, Pithampur, and Dewas.',
    'url': pageUrl,
    'mainEntity': {
        '@type': 'Organization',
        'name': 'Paras Sales Corporation',
        'url': baseUrl,
        'logo': `${baseUrl}/logo.png`,
        "telephone": "+91-83494-94982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9, Khatipura Main Road, Madhu's Pravesh",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452007",
          "addressCountry": "IN"
        }
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
        'name': 'Contact Us',
        'item': pageUrl
      }
    ]
  };

  const combinedJsonLd = JSON.stringify([contactPageJsonLd, breadcrumbJsonLd]);
  const pageTitle = "Contact for B2B Wholesale Shoe Orders | Indore, Pithampur";
  const pageDescription = "Contact Paras Sales Corp for wholesale inquiries and bulk orders of safety shoes, school shoes, and gumboots in Indore, Pithampur, and Dewas.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="contact paras sales, b2b shoe inquiry, wholesale footwear contact, indore safety shoes supplier, pithampur industrial shoes, dewas gumboots bulk order"
        jsonLd={combinedJsonLd}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={`${baseUrl}/assets/optimized/contact-hero.webp`}
        ogUrl={pageUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={`${baseUrl}/assets/optimized/contact-hero.webp`}
      />
      <div className="min-h-screen">
        <Navigation />
        
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
            <img
                src="/assets/optimized/contact-hero.webp"
                alt="Contact Paras Sales Corporation for B2B Footwear"
                className="w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4 text-shadow-lg">
                    Contact Our B2B Team
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/95 text-shadow-md">
                    Get in touch for bulk orders, wholesale pricing, and partnership inquiries.
                </p>
                <Button size="lg" className="btn-primary group shadow-hero mt-8" asChild>
                    <a href="#contact-form">
                        Send B2B Inquiry
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </Button>
            </div>
        </section>

        <div id="contact-form">
          <ContactSection />
        </div>

        <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-poppins font-bold text-primary mb-4">
                Visit Our Head Office
              </h2>
              <p className="text-lg text-muted-foreground">For B2B meetings and direct procurement discussions.</p>
            </div>
            <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg">
              <Suspense fallback={<div className="text-center p-8">Loading map...</div>}>
                <MapboxMap />
              </Suspense>
            </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
