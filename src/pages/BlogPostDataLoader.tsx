
import { FC, Suspense, useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import NotFound from "@/pages/NotFound";
import BlogPostPage, { BlogPost } from "@/pages/BlogPost";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { z } from "zod";

const contentModules = import.meta.glob("/src/pages/blog/*-content.tsx");

// Define the final, corrected Zod schema
const blogPostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(), // Make description optional
  image: z.string(),
  date: z.preprocess((arg: unknown) => {
    if (typeof arg === 'object' && arg !== null && 'toDate' in arg && typeof (arg as { toDate: () => Date }).toDate === 'function') {
      return (arg as { toDate: () => Date }).toDate().toISOString();
    }
    return arg;
  }, z.string()),
  tags: z.array(z.string()).optional(), // Make tags optional
  faqSchema: z.any().optional(),
  productSchema: z.any().optional(),
  howToSchema: z.any().optional(),
});

type ContentComponentType = React.LazyExoticComponent<React.FC>;

const BlogPostDataLoader: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [Content, setContent] = useState<ContentComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostAndContent = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, 'posts', slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const postData = { slug: docSnap.id, ...docSnap.data() };
          const validationResult = blogPostSchema.safeParse(postData);

          if (validationResult.success) {
            setPost(validationResult.data as BlogPost);

            const contentPath = `/src/pages/blog/${slug}-content.tsx`;
            if (contentModules[contentPath]) {
              const ContentComponent = lazy(contentModules[contentPath] as () => Promise<{ default: React.ComponentType<object> }>);
              setContent(ContentComponent);
            } else {
              console.error(`Content file not found for slug: ${slug}`);
              setError("Content not found");
            }
          } else {
            console.error("Invalid post data:", validationResult.error.flatten());
            setError("Invalid post data");
          }
        } else {
          setError("Post not found");
        }
      } catch (err) {
        console.error("Error fetching post or content: ", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndContent();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="pt-20 bg-white">
          <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl text-center">
            <div className="w-12 h-12 border-t-4 border-b-4 border-primary rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading post...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post || !Content) {
    return <NotFound />;
  }

  return <BlogPostPage post={post} Content={Content} />;
};

export default BlogPostDataLoader;
