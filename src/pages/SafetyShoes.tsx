
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Droplets } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import InquiryModal from '@/components/InquiryModal';
import ProductCarousel from '@/components/ProductCarousel';
import ProductHero from '@/components/ProductHero';

const safetyProducts = [
  {
    id: 1,
    name: 'WF 05',
    category: 'WeFly',
    images: [
      "/assets/optimized/products images/WeFly Images/WF 05/WF05_1.webp",
      "/assets/optimized/products images/WeFly Images/WF 05/WF05_2.webp",
    ],
    features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant', 'Puncture Proof'],
    applications: ['Construction', 'Manufacturing', 'Mining', 'Heavy Industry']
  },
  {
    id: 2,
    name: 'WF01 Black',
    category: 'WeFly',
    images: [
      "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_1(1).webp",
      "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_3(1).webp",
    ],
    features: ['Lightweight Composite Toe', 'Electrical Hazard Protection', 'Breathable', 'Comfortable'],
    applications: ['Electronics', 'Food Industry', 'Light Manufacturing', 'Warehousing']
  },
  // Add other products here...
];

const SafetyShoes = () => {
  const baseUrl = "https://www.parassales.com";
  const pageUrl = `${baseUrl}/safety-shoes`;

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    "name": "Industrial Safety Shoes Collection",
    "description": "A collection of top-quality industrial safety shoes for wholesale and B2B procurement in Indore.",
    'itemListElement': safetyProducts.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.name,
        'url': `${pageUrl}#product-${product.id}`,
        'image': `${baseUrl}${product.images[0]}`,
        'description': product.features.join(', '),
        'brand': {
          '@type': 'Brand',
          'name': product.category
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'Organization',
            'name': 'Paras Sales Corporation'
          }
        }
      }
    }))
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
        'name': 'Safety Shoes',
        'item': pageUrl
      }
    ]
  };

  const combinedJsonLd = JSON.stringify([itemListJsonLd, breadcrumbJsonLd]);
  const pageTitle = "B2B Safety Shoes Supplier in Indore | Wholesale Prices";
  const pageDescription = "Paras Sales Corporation is the leading B2B supplier of industrial safety shoes in Indore. We offer wholesale prices on steel toe, composite toe, and other safety footwear.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="b2b safety shoes, wholesale safety shoes indore, industrial footwear supplier, steel toe boots, composite toe shoes pithampur, safety shoes dewas"
        jsonLd={combinedJsonLd}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={`${baseUrl}/assets/optimized/safety-shoes-hero.webp`}
        ogUrl={pageUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={`${baseUrl}/assets/optimized/safety-shoes-hero.webp`}
      />
      <div className="min-h-screen">
        <Navigation />
        
        <ProductHero 
          title="Industrial Safety Shoes"
          subtitle="Wholesale Supplier for Indore, Pithampur & Dewas"
          images={[
            "/assets/optimized/safety-shoes-hero.webp",
            "/assets/optimized/products images/WeFly Images/WF 05/WF05_1.webp",
          ]}
        />

        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Our B2B Safety Shoe Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Top-grade safety footwear for every industrial application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetyProducts.map((product) => (
                <Card key={product.id} id={`product-${product.id}`} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <ProductCarousel images={product.images} name={product.name} />
                    <div className="p-6">
                      <Badge variant="secondary" className="text-xs mb-2">{product.category}</Badge>
                      <h3 className="text-lg font-semibold mb-3">{product.name}</h3>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Features:</h4>
                        <div className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{app}</Badge>
                          ))}
                        </div>
                      </div>
                      <InquiryModal productName={product.name} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Why Partner With Paras Sales Corporation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted B2B partner for industrial safety footwear in Indore.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><Shield className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">Bulk & Wholesale Supply</h3>
                    <p className="text-muted-foreground">Competitive pricing and reliable stock for large-scale industrial needs.</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><Zap className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">ISI-Certified Quality</h3>
                    <p className="text-muted-foreground">All our safety shoes meet stringent ISI standards for guaranteed protection.</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><Droplets className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">Expert Local Support</h3>
                    <p className="text-muted-foreground">Over 70 years of experience serving industries in Indore, Pithampur, and Dewas.</p>
                </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SafetyShoes;
