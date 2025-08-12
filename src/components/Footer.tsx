import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Safety Shoes', href: '#safety-shoes' },
    { name: 'Gum Boots', href: '#gum-boots' },
    { name: 'School Shoes', href: '#school-shoes' },
    { name: 'Contact', href: '#contact' },
  ];

  const productCategories = [
    'Industrial Safety Shoes',
    'Waterproof Gum Boots',
    'Student School Shoes',
    'Steel Toe Boots',
    'Slip Resistant Footwear',
    'Corporate Footwear'
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
                  <p>123 Industrial Area, Sector 45</p>
                  <p>Gurgaon, Haryana - 122003</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm">+91 98765 43210</span>
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
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product}>
                  <span className="text-sm text-primary-foreground/80">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Business Info</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-2">Business Hours</h5>
                <p className="text-sm text-primary-foreground/80">
                  Monday - Saturday<br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2">Coverage Area</h5>
                <p className="text-sm text-primary-foreground/80">
                  Pan-India delivery network covering 500+ cities
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
              <p>Design by Sintwe International</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Bulk Order Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;