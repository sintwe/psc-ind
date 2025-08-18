
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-poppins font-bold text-xl text-white hover:text-white/80 transition-colors" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              Paras Sales Corporation
            </Link>
          </div>

          {/* Mobile-Style Menu for All Devices */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-white/90" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
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
                  className="text-white hover:text-white/80 hover:bg-white/10"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
                >
                  <Menu className="h-5 w-5" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} />
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
