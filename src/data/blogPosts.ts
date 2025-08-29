export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-ultimate-guide-to-choosing-the-right-footwear-for-your-industry",
    title: "The Ultimate Guide to Choosing the Right Footwear for Your Industry",
    description: "A comprehensive guide to selecting the best footwear for various sectors, including construction, manufacturing, and healthcare.",
    image: "/lovable-uploads/d415232a-04c9-450a-81cb-63172c1a84f5.png",
    date: "2024-07-21",
    tags: ["Safety", "Industry", "Footwear Guide"],
  },
  {
    slug: "safety-shoes-in-indore",
    title: "Safety Shoes in Indore: A Complete Guide",
    description: "A complete guide to finding the best safety shoes in Indore for industrial and construction work. Learn about top brands, features, and where to buy.",
    image: "/lovable-uploads/3af3ae31-1c43-4083-9b3e-d4aeeda0c076.png",
    date: "2024-07-20",
    tags: ["Safety", "Indore", "Industrial"],
  },
  {
    slug: "school-shoes-in-indore",
    title: "Choosing the Perfect School Shoes in Indore",
    description: "Everything you need to know about choosing the perfect pair of school shoes for your child in Indore. Comfort and durability are key!",
    image: "/lovable-uploads/8cdefb05-9e31-4b0d-a022-2ebae48b4e75.png",
    date: "2024-07-19",
    tags: ["School", "Indore", "Children"],
  },
  {
    slug: "gumboots-in-indore",
    title: "Stay Dry! Your Guide to Gumboots in Indore",
    description: "Stay dry and comfortable during the monsoon season with our guide to the best gumboots in Indore. We cover styles, materials, and local vendors.",
    image: "/lovable-uploads/46198705-0da9-486f-9f7e-55aed2569499.png",
    date: "2024-07-18",
    tags: ["Monsoon", "Indore", "Gumboots"],
  },
];
