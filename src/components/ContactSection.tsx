
import InquiryForm from './InquiryForm';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us Directly</h3>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91 83494 94982</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-muted-foreground">info@parassales.com</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p className="text-muted-foreground">9, Main Khatipura Main road, near Jail road square Indore, Madhya Pradesh, 452007</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 12 PM - 8 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send an Inquiry</h3>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
