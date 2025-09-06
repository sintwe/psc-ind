
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Star } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import InquiryModal from '@/components/InquiryModal';
import ProductCarousel from '@/components/ProductCarousel';
import ProductHero from '@/components/ProductHero';

const schoolShoeProducts = [
  {
    id: 1,
    name: 'Black Leather School Shoes',
    images: [
      "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_1(1).webp",
      "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_3(1).webp",
    ],
    features: ['Premium Leather', 'Comfortable Sole', 'Polished Finish', 'Durable Construction'],
    suitableFor: ['Primary & High Schools', 'Bulk Uniform Tenders', 'Daily Wear']
  },
  {
    id: 2,
    name: 'White Canvas PT Shoes',
    images: [
      "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_4.webp",
      "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_6(1).webp",
    ],
    features: ['Breathable Canvas', 'Flexible Sole', 'Easy to Clean', 'Reinforced Stitching'],
    suitableFor: ['Sports & PT Uniforms', 'Wholesale Distributors', 'School Supply Contracts']
  },
  // Add more products...
];

const SchoolShoes = () => {
  const baseUrl = "https://www.parassales.com";
  const pageUrl = `${baseUrl}/school-shoes`;

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    "name": "Wholesale School Shoes Collection",
    "description": "Bulk supplier of school shoes in Indore for educational institutions and uniform distributors.",
    'itemListElement': schoolShoeProducts.map((product, index) => ({
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
          'name': 'Paras Sales Corporation Supply'
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
        'name': 'School Shoes',
        'item': pageUrl
      }
    ]
  };

  const combinedJsonLd = JSON.stringify([itemListJsonLd, breadcrumbJsonLd]);
  const pageTitle = "Wholesale School Shoes Supplier in Indore | Bulk Tenders";
  const pageDescription = "Paras Sales is a leading B2B supplier of school shoes in Indore. We provide durable and affordable footwear for school uniform tenders and bulk orders.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="wholesale school shoes indore, bulk school shoes, school uniform shoes, b2b school shoes, school shoe tender indore, school footwear supplier"
        jsonLd={combinedJsonLd}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={`${baseUrl}/assets/optimized/school-shoes-hero.webp`}
        ogUrl={pageUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={`${baseUrl}/assets/optimized/school-shoes-hero.webp`}
      />
      <div className="min-h-screen">
        <Navigation />
        
        <ProductHero 
          title="B2B School Shoe Supply"
          subtitle="Your Partner for School Uniform & Bulk Footwear Tenders"
          images={[
            "/assets/optimized/school-shoes-hero.webp",
            "/assets/optimized/products images/WeFly Images/WF01 Black/WF01Black_Final_2025_1(1).webp",
          ]}
        />

        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Our School Shoe Tender Collection
              </h2>
              <p className="text-lg text-muted-foreground">
                Durable, comfortable, and uniform-compliant footwear for bulk orders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {schoolShoeProducts.map((product) => (
                <Card key={product.id} id={`product-${product.id}`} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <ProductCarousel images={product.images} name={product.name} />
                    <div className="p-6">
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
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Ideal For:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.suitableFor.map((use, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{use}</Badge>
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
                Your Trusted Partner for Institutional Supplies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We have supplied school shoes to institutions across Indore for decades.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><GraduationCap className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">Bulk Order Specialists</h3>
                    <p className="text-muted-foreground">Reliable supply and consistent sizing for large school tenders.</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><Heart className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">Unmatched Durability</h3>
                    <p className="text-muted-foreground">Shoes designed to withstand the rigors of daily school life, ensuring long-term value.</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"><Star className="h-8 w-8 text-primary" /></div>
                    <h3 className="text-xl font-semibold mb-2">Trusted Local Supplier</h3>
                    <p className="text-muted-foreground">70 years of experience providing quality footwear to schools in Indore.</p>
                </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SchoolShoes;
