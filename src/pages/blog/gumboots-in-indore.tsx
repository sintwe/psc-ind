
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GumbootsInIndore: FC = () => {
  const post = blogPosts.find(p => p.slug === "gumboots-in-indore");

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
        title="Gumboots in Indore: Stay Dry and Stylish This Monsoon"
        description="Don't let the monsoon slow you down. Find out why gumboots are a must-have in Indore and discover the best waterproof and durable options at Paras Sales Corporation."
        keywords="gumboots Indore, waterproof boots Indore, monsoon boots Indore, rainy season shoes, Paras Sales Corporation"
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
                With Indore's heavy monsoon season, a reliable pair of gumboots is an absolute must-have. Whether you're navigating flooded streets, working in wet conditions, or simply want to keep your feet dry and protected, the right gumboots make all the difference. At Paras Sales Corporation, we offer a wide range of gumboots to keep you dry and comfortable.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Why Everyone in Indore Needs a Pair of Gumboots</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Complete Waterproof Protection:</strong> Our gumboots ensure your feet stay dry and comfortable, no matter how heavy the downpour.</li>
                <li><strong>Versatility for Work and Play:</strong> Gumboots are perfect for a wide range of activities, from agricultural and industrial work to casual rainy-day strolls.</li>
                <li><strong>Easy to Clean and Maintain:</strong> Simply rinse them off, and they're ready for your next adventure, making them a practical choice for everyday use.</li>
              </ul>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Discover Paras Sales Corporation's Range of Gumboots</h2>
              <p>
                As a premier supplier of gumboots in Indore, we have a wide selection to suit every need and style. Our gumboots are known for being:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>100% Waterproof:</strong> Made with high-quality, seamless rubber to guarantee that your feet stay completely dry.
                </li>
                <li>
                  <strong>Durable and Long-Lasting:</strong> Built to withstand the rigors of daily use in even the most challenging conditions.
                </li>
                <li>
                  <strong>Comfortable and Supportive:</strong> Designed for a snug and secure fit that provides all-day comfort and support.
                </li>
              </ul>

              {/* Call to Action Section */}
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Dry This Monsoon</h3>
                <p className="text-gray-700 mb-4">Explore our collection of high-quality gumboots and find the perfect pair to keep your feet dry and comfortable.</p>
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700">
                  <Link to="/gum-boots">
                    Shop Gumboots <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Visit Us in Indore Today</h2>
              <p>
                Don't let the rain slow you down. Visit our Indore store to find the perfect pair of gumboots to keep you dry and stylish this monsoon season.
              </p>
              <address className="not-prose border-l-4 border-gray-300 pl-4 text-gray-600">
                <strong>Paras Sales Corporation</strong><br />
                9, Khatipura Main Road,<br />
                Madhu's Pravesh, Indore<br />
                Madhya Pradesh - 452007<br />
                <strong>Phone:</strong> <a href="tel:+918349494982" className="text-teal-600 hover:underline">+91 83494 94982</a>
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

export default GumbootsInIndore;
