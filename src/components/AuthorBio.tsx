// src/components/AuthorBio.tsx
import { FC } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AuthorBio: FC = () => {
  return (
    <div className="mt-16 flex items-center gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl">
      <Avatar className="h-20 w-20">
        <AvatarImage src="/path-to-your-author-image.jpg" alt="Author Name" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-poppins">About the Author</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          This is a short and engaging bio about the author. It can include their expertise, years of experience, or a fun fact to make it more personal.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
