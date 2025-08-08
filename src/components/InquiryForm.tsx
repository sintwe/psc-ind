import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Phone, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Inquiry Sent Successfully!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });

    setIsSubmitting(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      category: '',
      quantity: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in your industrial footwear products. Please share more details.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 surface-gradient relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Send Your Requirement
            </h2>
            <p className="text-xl text-muted-foreground">
              Get competitive quotes for bulk orders. We respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up animate-stagger-1">
              <Card className="border-0 shadow-elegant glass-card hover-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="h-5 w-5 mr-2" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                    <p className="text-lg font-semibold">+91 98765 43210</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                    <p className="text-lg font-semibold">info@parassales.com</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Business Hours</Label>
                    <p className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-success hover:bg-success/90 text-success-foreground"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-gradient-to-br from-accent to-accent-hover hover-glow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center text-primary mb-3">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Why Choose Us?</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Competitive bulk pricing</li>
                    <li>• Pan-India delivery network</li>
                    <li>• Quality assured products</li>
                    <li>• 24-hour response guarantee</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 animate-fade-in-up animate-stagger-2">
              <Card className="border-0 shadow-elegant glass-card hover-glow transition-smooth">
                <CardHeader>
                  <CardTitle className="text-primary">Send Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Contact Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email ID *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">Product Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="safety-shoes">Safety Shoes</SelectItem>
                            <SelectItem value="gum-boots">Gum Boots</SelectItem>
                            <SelectItem value="school-shoes">School Shoes</SelectItem>
                            <SelectItem value="all-categories">All Categories</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., 100 pairs"
                          value={formData.quantity}
                          onChange={(e) => handleChange('quantity', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message / Custom Requirements</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your specific requirements, sizes needed, or any special customizations..."
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending Inquiry...
                        </>
                      ) : (
                        'Send Inquiry'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;