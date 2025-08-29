
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SchoolShoesInIndore: FC = () => {
  const post = blogPosts.find(p => p.slug === "school-shoes-in-indore");

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
        keywords="school shoes Indore, kids shoes Indore, children's shoes Indore, durable school shoes, Paras Sales Corporation"
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
                As a parent in Indore, you want the best for your child, and that includes their school shoes. A good pair of school shoes needs to be comfortable, durable, and supportive to keep up with your child's active day, from the classroom to the playground. At Paras Sales Corporation, we offer a wide range of school shoes that meet these exact needs.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">What to Look for in Quality School Shoes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proper Fit:</strong> A well-fitting shoe is crucial for comfort and healthy foot development. Ensure there's enough room for growth but not so much that the shoe is loose.</li>
                <li><strong>Durable Materials:</strong> Look for high-quality leather or modern synthetic materials that can withstand daily wear and tear.</li>
                <li><strong>Supportive Soles:</strong> A sturdy, non-slip sole is essential for safety, providing the necessary grip and support for active kids.</li>
                <li><strong>Easy Fastening:</strong> For younger children, Velcro straps or easy-to-tie laces are ideal for fostering independence.</li>
              </ul>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Paras Sales Corporation: The Smart Choice for School Shoes in Indore</h2>
              <p>
                We are a leading provider of school shoes in Indore, offering a wide selection that ticks all the boxes for parents and kids alike. Our shoes are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Kid-Approved Styles:</strong> From classic black shoes to more modern designs, we offer styles that kids are excited to wear.
                </li>
                <li>
                  <strong>Built for Play:</strong> Our school shoes are designed to handle the rigors of the playground, the classroom, and everything in between.
                </li>
                <li>
                  <strong>Affordable Quality:</strong> We believe that great school shoes shouldn't break the bank. We offer competitive pricing without compromising on quality.
                </li>
              </ul>

              {/* Call to Action Section */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find the Perfect Pair for Your Child</h3>
                <p className="text-gray-700 mb-4">Browse our collection of durable and comfortable school shoes online, or visit us in-store for a professional fitting.</p>
                <Button asChild className="bg-green-600 text-white hover:bg-green-700">
                  <Link to="/school-shoes">
                    Shop School Shoes <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">Visit Our Store in Indore</h2>
              <p>
                Bring your child to our Indore store for a professional fitting. Our friendly and experienced team will help you find the ideal school shoes to start the school year right.
              </p>
              <address className="not-prose border-l-4 border-gray-300 pl-4 text-gray-600">
                <strong>Paras Sales Corporation</strong><br />
                9, Khatipura Main Road,<br />
                Madhu's Pravesh, Indore<br />
                Madhya Pradesh - 452007<br />
                <strong>Phone:</strong> <a href="tel:+918349494982" className="text-green-600 hover:underline">+91 83494 94982</a>
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

export default SchoolShoesInIndore;
