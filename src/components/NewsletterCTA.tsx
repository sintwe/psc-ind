// src/components/NewsletterCTA.tsx
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const NewsletterCTA: FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API endpoint)
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-primary/10 dark:bg-gray-800 p-8 rounded-2xl">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 font-poppins mb-3">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Get the latest articles, product updates, and special offers delivered straight to your inbox.
        </p>
        {submitted ? (
          <p className="text-lg font-medium text-green-600 dark:text-green-500">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="btn-primary">Subscribe</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterCTA;
