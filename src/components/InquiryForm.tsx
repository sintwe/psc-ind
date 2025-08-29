import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Phone, CheckCircle, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InquiryForm = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        category: '',
        quantity: '',
        message: '',
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const getFormattedMessage = () => {
        return `Inquiry Details:
Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}
Category: ${formData.category}
Quantity: ${formData.quantity}
Message: ${formData.message}`;
    };

    const handleWhatsAppSubmit = () => {
        if (!formData.name || !formData.phone) {
            toast({
                title: "Required fields missing",
                description: "Please fill out your Name and Contact Number.",
                variant: "destructive",
            });
            return;
        }
        const whatsappUrl = `https://wa.me/918349494982?text=${encodeURIComponent(getFormattedMessage())}`;
        window.open(whatsappUrl, '_blank');

        toast({
            title: "Opening WhatsApp...",
            description: "Please send the pre-filled message to submit your inquiry.",
        });
    };

    // New function to handle Gmail submission
    const handleGmailSubmit = () => {
        if (!formData.name || !formData.email) {
            toast({
                title: "Required fields missing",
                description: "Please fill out your Name and Email ID.",
                variant: "destructive",
            });
            return;
        }
        const subject = encodeURIComponent("New Inquiry from Website");
        const body = encodeURIComponent(getFormattedMessage());
        const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@parassales.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');

        toast({
            title: "Opening Gmail...",
            description: "Please send the pre-filled message to submit your inquiry.",
        });
    };

    // Original function to handle general email submission
    const handleEmailSubmit = () => {
        if (!formData.name || !formData.email) {
            toast({
                title: "Required fields missing",
                description: "Please fill out your Name and Email ID.",
                variant: "destructive",
            });
            return;
        }
        const subject = encodeURIComponent("New Inquiry from Website");
        const body = encodeURIComponent(getFormattedMessage());
        const mailtoUrl = `mailto:info@parassales.com?subject=${subject}&body=${body}`;
        window.open(mailtoUrl, '_blank');

        toast({
            title: "Opening Email...",
            description: "Please send the pre-filled message to submit your inquiry.",
        });
    };

    return (
        <section id="contact" className="relative py-20 px-4 min-h-screen flex items-center justify-center dark:bg-gray-900 bg-gray-100">
            {/* --- Animated Background --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient animate-pulse" />
            </div>

            <div className="container mx-auto max-w-6xl z-10">
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
                        Send Your Requirement
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Get a competitive quote for your bulk orders. We'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* --- Contact Info Card (Beautiful) --- */}
                    <div
                        className="lg:col-span-1 flex flex-col justify-between"
                    >
                        <Card className="h-full border-0 shadow-lg bg-gray-800 dark:bg-gray-950 text-white rounded-xl overflow-hidden relative">
                            <div className="p-8">
                                <h3 className="text-3xl font-bold mb-6">Contact Us Directly</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <Phone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-400">Phone</p>
                                            <a href="tel:+918349494982" className="text-lg font-semibold hover:underline">+91 83494 94982</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <a href="mailto:info@parassales.com" className="text-lg font-semibold hover:underline">info@parassales.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-400">Address</p>
                                            <a href="https://maps.app.goo.gl/SX7LbqP9Q3iwPTXx5" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">
                                                9, Main Khatipura Main road, near Jail road square<br/>Indore, Madhya Pradesh, 452007
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-gray-400">Business Hours</p>
                                            <p className="text-lg font-semibold">Mon - Sat: 12 PM - 8 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* --- Inquiry Form Card (Glassmorphism) --- */}
                    <div
                        className="lg:col-span-2"
                    >
                        <Card className="p-8 border-0 shadow-lg dark:bg-white/10 bg-white/50 backdrop-blur-lg rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Send Your Inquiry</h3>
                            <form className="space-y-6">
                                {/* Name and Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name *</Label>
                                        <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required />
                                    </div>
                                    <div>
                                        <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">Company Name</Label>
                                        <Input id="company" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} />
                                    </div>
                                </div>
                                {/* Phone and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Contact Number *</Label>
                                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
                                    </div>
                                    <div>
                                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email ID *</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
                                    </div>
                                </div>
                                {/* Category and Quantity */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">Product Category</Label>
                                        <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                                            <SelectTrigger>
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
                                        <Label htmlFor="quantity" className="text-gray-700 dark:text-gray-300">Estimated Quantity</Label>
                                        <Input id="quantity" placeholder="e.g., 100 pairs" value={formData.quantity} onChange={(e) => handleChange('quantity', e.target.value)} />
                                    </div>
                                </div>
                                {/* Message */}
                                <div>
                                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message / Custom Requirements</Label>
                                    <Textarea id="message" placeholder="Please describe your specific requirements..." value={formData.message} onChange={(e) => handleChange('message', e.target.value)} rows={4} />
                                </div>

                                {/* Two Buttons with Enhanced Styling */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Button
                                        type="button"
                                        onClick={handleWhatsAppSubmit}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700 py-3 transition-transform duration-200 transform hover:scale-105"
                                    >
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        Send via WhatsApp
                                    </Button>

                                    <Button
                                        type="button"
                                        onClick={handleGmailSubmit}
                                        className="w-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700 py-3 transition-transform duration-200 transform hover:scale-105"
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        Send via Gmail
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;