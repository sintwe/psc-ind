
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/NotFound";

const BlogPostPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <NotFound />;

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
        keywords={post.tags.join(", ")}
        jsonLd={JSON.stringify(jsonLd)}
      />
      <Navigation />
      <main className="pt-20 bg-white">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <article>
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

            <div className="prose prose-lg lg:prose-xl max-w-full text-gray-700 leading-relaxed">
                <p>{post.description}</p>
            </div>

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

export default BlogPostPage;
