
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SafetyShoesInIndore: FC = () => {
  const post = blogPosts.find(p => p.slug === "safety-shoes-in-indore");

  if (!post) return <div>Blog post not found</div>; // Or a proper 404 component

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "Paras Sales Corporation"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Paras Sales Corporation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.parassales.com/logo.png",
      },
    },
    "datePublished": post.date,
    "description": post.description,
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        keywords="safety shoes Indore, industrial shoes Indore, construction shoes Indore, steel toe shoes, Paras Sales Corporation"
        jsonLd={JSON.stringify(jsonLd)}
      />
      <Navigation />
      <main className="pt-20 bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <article>
            {/* Article Header */}
            <header className="mb-8 md:mb-12">
              <img src={post.image} alt={post.title} className="w-full h-auto md:h-[400px] object-cover rounded-2xl shadow-lg mb-8" />
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 my-4 leading-tight">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-500">
                <span>{post.date}</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg lg:prose-xl max-w-full text-gray-700 leading-relaxed">
              <p>
                Indore, a bustling industrial hub, demands the best in personal protective equipment (PPE). When it comes to footwear, nothing is more critical than a sturdy pair of safety shoes. Whether you work in construction, manufacturing, or any other demanding environment, the right safety shoes are essential for protecting your feet from injury. At Paras Sales Corporation, we specialize in providing top-tier safety footwear tailored for Indore's workforce.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Why Quality Safety Shoes Matter</h2>
              <p>
                Investing in high-quality safety shoes is not just about compliance; it's about ensuring your well-being. A good pair of safety shoes can protect you from a multitude of workplace hazards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Impact Protection:</strong> Steel or composite toe caps shield your feet from falling objects.</li>
                <li><strong>Puncture Resistance:</strong> Reinforced soles prevent sharp materials like nails from penetrating the shoe.</li>
                <li><strong>Slip Prevention:</strong> Specially designed outsoles offer superior grip on wet or oily surfaces.</li>
                <li><strong>Electrical Hazard Protection:</strong> Insulated footwear can protect you from electrical shocks.</li>
                <li><strong>Chemical Resistance:</strong> Durable materials withstand exposure to various chemicals and hazardous substances.</li>
              </ul>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Paras Sales Corporation: Your Trusted Partner for Safety Footwear in Indore</h2>
              <p>
                We are a leading supplier of safety shoes in Indore, offering a comprehensive range designed for maximum protection and comfort. Our commitment to quality is unwavering:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Built to Last:</strong> We source shoes from top brands known for their high-quality materials and robust construction, ensuring they withstand the toughest conditions.
                </li>
                <li>
                  <strong>Comfort for All-Day Wear:</strong> Our ergonomic designs provide excellent support and cushioning, reducing fatigue and keeping you comfortable throughout your workday.
                </li>
                <li>
                  <strong>Certified for Safety:</strong> All our safety shoes meet or exceed IS:15298 and other relevant industry safety standards, giving you complete peace of mind.
                </li>
              </ul>

              {/* Call to Action Section */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Explore Our Safety Shoe Collection</h3>
                <p className="text-gray-700 mb-4">Ready to find the perfect pair of safety shoes? Browse our extensive collection online or visit our store.</p>
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link to="/safety-shoes">
                    Shop Safety Shoes <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Visit Our Store in Indore</h2>
              <p>
                We invite you to visit our store in Indore to experience our full range of safety shoes firsthand. Our knowledgeable staff is always ready to help you find the perfect fit for your specific needs.
              </p>
              <address className="not-prose border-l-4 border-gray-300 pl-4 text-gray-600">
                <strong>Paras Sales Corporation</strong><br />
                9, Khatipura Main Road,<br />
                Madhu's Pravesh, Indore<br />
                Madhya Pradesh - 452007<br />
                <strong>Phone:</strong> <a href="tel:+918349494982" className="text-blue-600 hover:underline">+91 83494 94982</a>
              </address>
            </div>

            {/* Social Sharing */}
            <div className="mt-8 md:mt-12 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Share this post</h3>
                <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}><Share2 className="h-5 w-5" /></Button>
                    <Button variant="outline" size="icon" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`, '_blank')}><Share2 className="h-5 w-5" /></Button>
                    <Button variant="outline" size="icon" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}&summary=${post.description}`, '_blank')}><Share2 className="h-5 w-5" /></Button>
                </div>
            </div>

          </article>
        </div>
      </main>
    </>
  );
};

export default SafetyShoesInIndore;
