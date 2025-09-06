
// src/components/BlogCard.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '@/data/blogPosts';
import { ArrowRight, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div variants={cardVariants}>
      <Link to={`/blog/${post.slug}`} className="block group h-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 inline-block">
              {post.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300 mb-3 font-poppins flex-grow">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
              {post.description}
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 space-y-4">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author.name}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                      })}
                  </span>
                  <div className="flex items-center text-primary font-semibold">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
