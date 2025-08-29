import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  jsonLd?: string;
}

const SEOHead = ({ title, description, keywords, jsonLd }: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {jsonLd && <script type="application/ld+json">{jsonLd}</script>}
    </Helmet>
  );
};

export default SEOHead;
