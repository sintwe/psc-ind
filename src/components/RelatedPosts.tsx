// src/components/RelatedPosts.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, blogPosts } from '@/data/blogPosts';

interface RelatedPostsProps {
  currentPost: BlogPost;
}

const RelatedPosts: FC<RelatedPostsProps> = ({ currentPost }) => {
  const related = blogPosts.filter(
    (post) => post.category === currentPost.category && post.slug !== currentPost.slug
  ).slice(0, 2);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-poppins">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {related.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="block group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300 mb-2 font-poppins">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
