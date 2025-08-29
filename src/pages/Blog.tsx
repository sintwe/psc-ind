
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const Blog: FC = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Paras Sales Corporation Blog",
    "url": "https://www.parassales.com/blog",
    // ... other jsonLd properties
  };

  return (
    <>
      <SEOHead
        title="Footwear Blog | Expert Tips & Guides | Paras Sales Corporation"
        description="Explore our blog for expert advice, guides, and the latest trends in footwear."
        keywords="footwear blog, shoe guide, safety shoes, school shoes, gumboots, Indore"
        jsonLd={JSON.stringify(jsonLd)}
      />
      <Navigation />
      <main className="pt-16 bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 font-poppins">Our Footwear Blog</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted source for expert advice, guides, and the latest trends in footwear.
            </p>
          </header>

          {/* Featured Post Hero */}
          {featuredPost && (
            <section className="mb-12 md:mb-20">
              <Link to={featuredPost.link} className="block group">
                <div className="relative grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-auto">
                    <img 
                      src={featuredPost.imageUrl} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:pr-8">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 inline-block">Featured Article</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-poppins group-hover:text-primary transition-colors duration-300">{featuredPost.title}</h2>
                    <p className="mt-4 text-base text-gray-600 max-w-2xl">{featuredPost.excerpt}</p>
                     <div className="mt-6 pt-4 border-t border-gray-200 flex items-center text-sm text-gray-500">
                        <span>{featuredPost.date}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Other Posts List */}
          {otherPosts.length > 0 && (
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">More Articles</h2>
                <div className="space-y-12">
                  {otherPosts.map((post) => (
                    <Link to={post.link} key={post.link} className="block group">
                      <div className="grid md:grid-cols-3 gap-8 items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="md:col-span-1 overflow-hidden rounded-lg">
                           <img 
                              src={post.imageUrl} 
                              alt={post.title} 
                              className="w-full h-full object-cover aspect-video md:aspect-square transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 inline-block">{post.category}</span>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3 font-poppins">{post.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
            </section>
          )}
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Blog;
