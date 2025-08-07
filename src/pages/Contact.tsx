
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/InquiryForm';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden mt-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-primary">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch for bulk orders and business inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                <p className="text-muted-foreground text-sm">
                  Industrial Area, Sector 5<br />
                  New Delhi - 110001<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                <p className="text-muted-foreground text-sm">
                  +91 98765 43210<br />
                  +91 87654 32109<br />
                  Toll Free: 1800-123-4567
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                <p className="text-muted-foreground text-sm">
                  info@parassales.com<br />
                  sales@parassales.com<br />
                  support@parassales.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-poppins font-bold text-primary mb-6">
                Send Your Inquiry
              </h2>
              <InquiryForm />
            </div>

            <div>
              <h2 className="text-2xl font-poppins font-bold text-primary mb-6">
                Find Us Here
              </h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
