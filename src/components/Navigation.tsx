
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Safety Shoes', href: '/safety-shoes' },
    { name: 'Gum Boots', href: '/gum-boots' },
    { name: 'School Shoes', href: '/school-shoes' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Back Button */}
          <div className="flex items-center">
            {isBlogPost && (
              <Button asChild variant="ghost" size="sm" className="mr-2 text-black hover:text-gray-700 hover:bg-gray-100">
                <Link to="/blog" aria-label="Back to Blog">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="ml-2 hidden sm:inline">Back to Blog</span>
                </Link>
              </Button>
            )}
            <Link to="/" className="font-poppins font-bold text-xl text-black hover:text-gray-700 transition-colors">
 Paras Sales Corporation
            </Link>
          </div>

          {/* Mobile-Style Menu for All Devices */}
          <div className="flex items-center space-x-4 text-black">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-black">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-black" />
                <span>+91 83494 94982</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@parassales.com</span>
              </div>
            </div>

            {/* Menu Button for All Devices */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-black hover:text-gray-700 hover:bg-gray-100"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium transition-colors ${
                        location.pathname === item.href 
                          ? 'text-primary' 
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-8 pt-8 border-t">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>+91 83494 94982</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>info@parassales.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
