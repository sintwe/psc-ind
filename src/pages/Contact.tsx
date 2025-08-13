
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/InquiryForm';
import MapboxMap from '@/components/MapboxMap';
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
                  9, Khatipura Main Road<br />
                  Madhu's Pravesh, Indore<br />
                  Madhya Pradesh - 452007
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
                  +91 83494 94982<br />
                  Main Contact Line<br />
                  Available During Business Hours
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
                  Monday - Sunday<br />
                  12:00 PM - 8:00 PM<br />
                  70+ Years of Experience
                </p>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Inquiry Form */}
        <InquiryForm />

        {/* Interactive Map Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Find Us Here
            </h2>
            <p className="text-muted-foreground">Visit our office for direct business discussions</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <MapboxMap />
          </div>
          
          {/* Fallback Static Map */}
          <div className="max-w-4xl mx-auto mt-4">
            <p className="text-sm text-muted-foreground text-center">
              Interactive map powered by Mapbox. Fallback: 
              <a 
                href="https://maps.google.com/maps?q=Khatipura+Main+Road,+Indore,+Madhya+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
