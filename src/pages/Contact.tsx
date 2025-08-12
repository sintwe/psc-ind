
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

        {/* Map Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
              Find Us Here
            </h2>
            <p className="text-muted-foreground">Visit our office for direct business discussions</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1234567890!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdcc344eaaaab%3A0x2fff2ec2ace5cd49!2sKhatipura%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704262800000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paras Sales Corporation - Khatipura, Indore Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
