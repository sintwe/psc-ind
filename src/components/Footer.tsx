import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Safety Shoes', href: '/safety-shoes' },
    { name: 'Gum Boots', href: '/gum-boots' },
    { name: 'School Shoes', href: '/school-shoes' },
    { name: 'Contact', href: '/contact' },
  ];

  const productCategories = [
    { name: 'Industrial Safety Shoes', href: '/safety-shoes' },
    { name: 'Waterproof Gum Boots', href: '/gum-boots' },
    { name: 'Student School Shoes', href: '/school-shoes' },
    { name: 'Steel Toe Boots', href: '/safety-shoes' },
    { name: 'Slip Resistant Footwear', href: '/safety-shoes' },
    { name: 'Corporate Footwear', href: '/contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-poppins font-bold mb-2">
                Paras Sales Corporation
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Your trusted partner for premium industrial and institutional footwear solutions across India.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div className="text-sm">
                  <p>9, Main Khatipura Main road, near Jail road square</p>
                  <p>Indore, Madhya Pradesh, 452007</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm">+91 83494 94982</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm">info@parassales.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Business Info</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-2">70+ Years of Excellence</h5>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2">Coverage Area</h5>
                <p className="text-sm text-primary-foreground/80">
                  Pan-India delivery network covering 1000+ pincodes.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-2">Trusted By</h5>
                <p className="text-sm text-primary-foreground/80">
                  2500+ Dealers & 2000+ Active Partners
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>© 2025 Paras Sales Corporation. All rights reserved.</p>
              <p>Design by <a href="https://sintwe.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Sintwe International</a></p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/bulk-order-terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Bulk Order Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;