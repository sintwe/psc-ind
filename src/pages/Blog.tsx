
// src/pages/Blog.tsx
import { FC, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import NewsletterCTA from "@/components/NewsletterCTA";
import BlogCard from "@/components/BlogCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Blog: FC = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))], []);

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => filter === "All" || post.category === filter)
      .filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [filter, searchTerm]);
  
  const baseUrl = "https://www.parassales.com";
  const blogUrl = `${baseUrl}/blog`;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Paras Sales Corporation Blog",
    "url": blogUrl,
    "description": "Expert insights on industrial safety footwear, school shoes, and gumboots for B2B procurement.",
    "publisher": {
      "@type": "Organization",
      "name": "Paras Sales Corporation",
      "logo": { "@type": "ImageObject", "url": `${baseUrl}/logo.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": blogUrl },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${baseUrl}/blog/${post.slug}` },
      "headline": post.title,
      "image": `${baseUrl}${post.image}`,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": "Paras Sales Corporation", "url": baseUrl },
      "description": post.description
    }))
  };

  return (
    <>
      <SEOHead
        title="B2B Footwear Blog: Safety, School & Gumboots | Paras Sales Corporation"
        description="The official B2B blog for Paras Sales Corporation. Get expert advice on industrial safety shoes, bulk school shoes, and waterproof gumboots for your business needs."
        keywords="b2b footwear blog, industrial safety shoes, bulk school shoes, gumboots supplier, indore, pithampur"
        jsonLd={JSON.stringify(blogJsonLd)}
        ogUrl={blogUrl}
      />
      <Navigation />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-primary mb-4">
              The Paras Sales B2B Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your resource for expert insights on industrial, safety, and institutional footwear procurement.
            </p>
          </header>

          <div className="mb-12 sticky top-0 bg-gray-50/90 dark:bg-gray-900/90 py-4 z-10 backdrop-blur-sm">
            <div className="relative mb-6 max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-12 w-full h-12 rounded-full shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex justify-center flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 font-poppins">
            {filter === "All" ? "All Articles" : `Category: ${filter}`}
            <span className="text-base font-normal text-muted-foreground ml-2">({filteredPosts.length} posts)</span>
          </h2>

          {filteredPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
                <p className="text-xl text-gray-500 dark:text-gray-400">No articles found.</p>
                <p className="mt-2 text-muted-foreground">Try adjusting your search or filter.</p>
            </div>
          )}

          <section className="mt-20">
            <NewsletterCTA />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
