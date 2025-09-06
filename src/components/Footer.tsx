
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact for B2B', href: '/contact' },
  ];

  const b2bCategories = [
    { name: 'Wholesale Safety Shoes', href: '/safety-shoes' },
    { name: 'Industrial Gum Boots', href: '/gum-boots' },
    { name: 'Institutional School Shoes', href: '/school-shoes' },
    { name: 'Tenders & Bulk Inquiries', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-poppins font-bold mb-4">Paras Sales Corporation</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Indore's leading B2B supplier of certified safety, industrial, and institutional footwear.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">9, Khatipura Main Road, Madhu's Pravesh, Indore, MP 452007</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+918349494982" className="text-sm hover:text-white">+91 83494 94982</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@parassales.com" className="text-sm hover:text-white">info@parassales.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">Mon-Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">B2B Categories</h4>
            <ul className="space-y-3">
              {b2bCategories.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Why Partner With Us?</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>70+ Years of Industry Trust</li>
              <li>Pan-India Wholesale Delivery</li>
              <li>ISI & CE Certified Products</li>
              <li>2500+ Strong Dealer Network</li>
              <li>Dedicated B2B Support</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-center md:text-left text-primary-foreground/80">
              <p>&copy; {new Date().getFullYear()} Paras Sales Corporation. All Rights Reserved.</p>
              <p>Design by <a href="https://sintwe.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Sintwe</a></p>
            </div>
            <div className="flex items-center gap-x-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-white">Terms of Service</Link>
              <Link to="/sitemap" className="text-primary-foreground/80 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
