
import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/data/blogPosts";
import { Link } from 'react-router-dom';

interface BlogCarouselProps {
  posts: BlogPost[];
}

const BlogCarousel: FC<BlogCarouselProps> = ({ posts }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-1 h-full">
            <Link to={`/blog/${post.slug}`} className="block group h-full">
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <CardContent className="p-6 flex flex-col">
                  <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2 block">{post.tags[0]}</span>
                  <h2 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors duration-300">{post.title}</h2>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
