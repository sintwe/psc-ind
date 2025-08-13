import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead = ({ 
  title = "Paras Sales Corporation - ISI & BIS Certified Industrial Footwear Supplier",
  description = "Leading B2B supplier of ISI & BIS certified safety shoes, gum boots & school shoes across India. 70+ years experience, bulk orders, competitive pricing, pan-India delivery.",
  keywords = "safety shoes, gum boots, school shoes, industrial footwear, ISI certified, BIS certified, bulk supplier, B2B footwear, Indore, India",
  ogImage = "/images/paras-sales-corporate-logo.jpg",
  canonicalUrl = "https://parassales.com"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Paras Sales Corporation" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Paras Sales Corporation",
          "description": description,
          "url": canonicalUrl,
          "logo": ogImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9, Khatipura Main Road, Madhu's Pravesh",
            "addressLocality": "Indore",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "452007",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-83494-94982",
            "contactType": "Business"
          },
          "foundingDate": "1954",
          "numberOfEmployees": "50-100",
          "industry": "Industrial Footwear Manufacturing and Distribution"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;