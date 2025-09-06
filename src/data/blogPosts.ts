
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar?: string; // Optional: path to an avatar image
  };
  tags: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "safety-shoes-in-indore",
    title: "Your B2B Guide to Safety Shoes in Indore",
    description: "A complete guide for B2B buyers on finding the best safety shoes in Indore for industrial and construction work. Learn about top brands and features from a trusted 70-year-old firm.",
    image: "/lovable-uploads/3af3ae31-1c43-4083-9b3e-d4aeeda0c076.png",
    date: "2024-07-20",
    author: {
      name: "Paras Sales Corporation",
    },
    tags: ["safety shoes in Indore", "industrial safety shoes", "safety footwear supplier", "PPE footwear", "safety shoes Pithampur", "safety shoes Dewas", "steel toe boots", "workplace safety", "ISI certified safety shoes"],
    category: "Safety Shoes",
  },
  {
    slug: "school-shoes-in-indore",
    title: "A B2B Guide to Sourcing School Shoes in Indore",
    description: "An essential guide for schools and uniform distributors on sourcing bulk school shoes in Indore. Learn about the benefits of partnering with a local B2B supplier.",
    image: "/lovable-uploads/8cdefb05-9e31-4b0d-a022-2ebae48b4e75.png",
    date: "2024-07-19",
    author: {
      name: "Paras Sales Corporation",
    },
    tags: ["school shoe supplier Indore", "bulk school shoes", "B2B footwear", "school uniform shoes", "institutional footwear", "wholesale school shoes Indore", "school shoe tender"],
    category: "School Shoes",
  },
  {
    slug: "gumboots-in-indore",
    title: "Why Quality Gumboots are a B2B Essential in Indore",
    description: "A guide for B2B procurement managers on why gumboots are vital for hygiene and safety in industries like food processing, chemical plants, and construction.",
    image: "/lovable-uploads/46198705-0da9-486f-9f7e-55aed2569499.png",
    date: "2024-07-18",
    author: {
      name: "Paras Sales Corporation",
    },
    tags: ["gumboots in Indore", "industrial gumboots", "chemical resistant boots", "waterproof gumboots", "gumboots Pithampur", "food processing", "monsoon footwear", "PVC boots", "heavy-duty gumboots"],
    category: "Gumboots",
  },
];
