
import { FC } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlogPost } from "@/data/blogPosts";
import { Link } from 'react-router-dom';

interface BlogCarouselProps {
  posts: BlogPost[];
}

const BlogCarousel: FC<BlogCarouselProps> = ({ posts }) => {
  return (
    <Carousel 
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent>
        {posts.map((post, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Link to={`/blog/${post.slug}`} className="block group">
                <Card className="overflow-hidden">
                  <CardContent className="relative aspect-video p-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <span className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-2 block">{post.tags[0]}</span>
                      <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-300">{post.title}</h2>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};

export default BlogCarousel;
