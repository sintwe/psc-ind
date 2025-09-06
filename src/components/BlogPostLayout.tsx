
import { FC, ReactNode } from 'react';
import { BlogPost } from '@/data/blogPosts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

interface BlogPostLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

const BlogPostLayout: FC<BlogPostLayoutProps> = ({ post, children }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Paras Sales Corporation"
    }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Paras Sales Corporation`}
        description={post.description}
        keywords={post.tags.join(', ')}
        jsonLd={JSON.stringify(jsonLd)}
      />
      <Navigation />
      <main className="pt-16 bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <article>
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 font-poppins">{post.title}</h1>
              <div className="text-sm text-gray-500">
                <span>{post.date}</span>
              </div>
            </header>
            <div className="max-w-4xl mx-auto">
              <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-8" />
              {children}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostLayout;
