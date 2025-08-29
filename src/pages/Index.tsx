
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import WhyChooseUs from '@/components/WhyChooseUs';
import InquiryForm from '@/components/InquiryForm';
import BrandSlider from '@/components/BrandSlider';
import Footer from '@/components/Footer';
import BlogCarousel from '@/components/BlogCarousel';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Index = () => {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Paras Sales Corporation",
    "url": "https://www.parassales.com",
    "logo": "https://www.parassales.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-83494-94982",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9, Khatipura Main Road, Madhu\'s Pravesh",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452007",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add your social media links here
    ]
  };

  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <>
      <SEOHead
        title="Leading Wholesaler of Safety, School & Gumboot Shoes in Indore"
        description="Paras Sales Corporation: Your trusted wholesale partner for industrial safety shoes, school shoes, and gumboots in Indore. 70+ years of experience. Pan-India delivery."
        keywords="safety shoes, school shoes, gumboots, industrial footwear, wholesale, Indore, Paras Sales Corporation"
        jsonLd={JSON.stringify(jsonLd)}
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
                  From Our Blog
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Check out our latest articles and guides on footwear.
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
          <InquiryForm />
          <BrandSlider />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
