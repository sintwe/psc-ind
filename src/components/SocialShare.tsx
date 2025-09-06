
// src/components/SocialShare.tsx
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

const SocialShare: FC<SocialShareProps> = ({ url, title, description }) => {
  const socialLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    },
  ];

  return (
    <div className="text-center">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Share this post</h3>
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="icon"
            onClick={() => window.open(social.url, "_blank")}
            aria-label={`Share on ${social.name}`}
          >
            <Share2 className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
