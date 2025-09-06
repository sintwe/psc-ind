
// src/pages/BlogPost.tsx
import { FC, Suspense, useState, useEffect, lazy, useMemo } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import SocialShare from "@/components/SocialShare";
import { Badge } from "@/components/ui/badge";
import RelatedPosts from "@/components/RelatedPosts";
import AuthorBio from "@/components/AuthorBio";
import { calculateReadingTime } from "@/utils/readingTime";
import { Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

type ContentComponentType = React.LazyExoticComponent<React.FC> | null;

// A map of slug -> lazy component
const contentModules = import.meta.glob("/src/pages/blog/*-content.tsx");
const contentComponents: Record<string, ContentComponentType> = {};

for (const path in contentModules) {
  const slug = path.match(/\/src\/pages\/blog\/(.*)-content\.tsx$/)?.[1];
  if (slug) {
    contentComponents[slug] = lazy(contentModules[path] as () => Promise<{ default: React.ComponentType<object> }>);
  }
}

const BlogPostPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => blogPosts.find((p) => p.slug === slug), [slug]);
  const Content = useMemo(() => (slug ? contentComponents[slug] || null : null), [slug]);

  const readingTime = useMemo(() => {
    if (!post) return 0;
    const text = post.description;
    return calculateReadingTime(text);
  }, [post]);

  const [isHydrating, setIsHydrating] = useState(true);
  useEffect(() => {
    setIsHydrating(false);
  }, []);

  if (isHydrating) {
    return (
      <>
        <Navigation />
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
          <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <div className="w-16 h-16 border-t-4 border-b-4 border-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">Loading post...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  const baseUrl = "https://www.parassales.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = `${baseUrl}${post.image}`;

  // Advanced JSON-LD Structured Data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title,
    "image": {
        "@type": "ImageObject",
        "url": imageUrl
    },
    "datePublished": post.date,
    "dateModified": post.date, // Assuming the publish date is the last modification date
    "author": {
        "@type": "Organization",
        "name": "Paras Sales Corporation",
        "url": baseUrl
    },
    "publisher": {
        "@type": "Organization",
        "name": "Paras Sales Corporation",
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
        }
    },
    "description": post.description,
    "keywords": post.tags.join(', ')
  };

  const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
          {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
          },
          {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": `${baseUrl}/blog`
          },
          {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": postUrl
          }
      ]
  };

  const combinedJsonLd = JSON.stringify([articleJsonLd, breadcrumbJsonLd]);

  return (
    <>
      <SEOHead
        title={`${post.title} | Paras Sales Corporation`}
        description={post.description}
        keywords={post.tags.join(', ')}
        ogTitle={post.title}
        ogDescription={post.description}
        ogImage={imageUrl}
        ogUrl={postUrl}
        twitterTitle={post.title}
        twitterDescription={post.description}
        twitterImage={imageUrl}
        twitterCard="summary_large_image"
        jsonLd={combinedJsonLd}
      />

      <Navigation />
      <main className="pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <article>
            <header className="mb-8 md:mb-12 text-center md:text-left">
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 my-4 leading-tight font-poppins">
                {post.title}
              </h1>
              <div className="flex items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                {readingTime > 0 && (
                  <>
                    <span className="mx-2">·</span>
                    <Clock className="inline-block h-4 w-4 mr-1" />
                    <span>{readingTime} min read</span>
                  </>
                )}
              </div>
              <img src={post.image} alt={post.title} className="w-full h-auto md:h-[400px] object-cover rounded-2xl shadow-lg mt-8" />
            </header>

            <div className="prose prose-lg dark:prose-invert lg:prose-xl max-w-full text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="lead">{post.description}</p>
              {Content && (
                <Suspense fallback={<div className="text-center"><p>Loading content...</p></div>}>
                  <Content />
                </Suspense>
              )}
            </div>

            <div className="mt-8 md:mt-12">
              <SocialShare 
                url={postUrl}
                title={post.title}
                description={post.description}
              />
            </div>

            <AuthorBio />
          </article>
          
          <RelatedPosts currentPost={post} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
