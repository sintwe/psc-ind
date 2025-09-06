
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import WhyChooseUs from '@/components/WhyChooseUs';
import BrandSlider from '@/components/BrandSlider';
import Footer from '@/components/Footer';
import BlogCarousel from '@/components/BlogCarousel';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const baseUrl = "https://www.parassales.com";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Paras Sales Corporation",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Your trusted B2B partner for industrial safety shoes, school shoes, and gumboots in Indore, Pithampur, and Dewas. 70+ years of experience in wholesale footwear.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-83494-94982",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9, Khatipura Main Road, Madhu's Pravesh",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452007",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add your social media links here, e.g.,
      // "https://www.linkedin.com/company/your-company"
    ]
  };

  const websiteJsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": baseUrl,
      "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
      }
  };

  const combinedJsonLd = JSON.stringify([organizationJsonLd, websiteJsonLd]);

  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const pageTitle = "B2B Wholesale Safety, School & Gumboot Shoes | Indore";
  const pageDescription = "Paras Sales Corporation: Your trusted B2B partner for industrial safety shoes, school shoes, and gumboots in Indore, Pithampur, and Dewas. 70+ years of experience.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="b2b footwear, wholesale safety shoes indore, bulk school shoes, gumboots supplier pithampur, industrial footwear dewas, paras sales corporation"
        jsonLd={combinedJsonLd}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={`${baseUrl}/og-image.jpg`} // Ensure you have a relevant Open Graph image
        ogUrl={baseUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={`${baseUrl}/og-image.jpg`}
      />
      <div className="min-h-screen">
        <header>
          <Navigation />
        </header>
        <main>
          <HeroSection />
          <BestSellers />
          <section className="py-12 md:py-24 bg-gray-50/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  From Our B2B Blog
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Expert insights on industrial footwear, bulk procurement, and more.
                </p>
              </div>
              <BlogCarousel posts={latestPosts} />
              <div className="text-center mt-12">
                  <Button asChild>
                      <Link to="/blog">
                          View All Posts <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
            </div>
          </section>
          <WhyChooseUs />
          <ContactSection />
          <BrandSlider />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
