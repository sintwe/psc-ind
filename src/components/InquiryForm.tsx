
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Mail } from 'lucide-react';
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

    return (
        <div className="p-1">
            <form className="space-y-4">
                {/* Name and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} />
                    </div>
                </div>
                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="phone">Contact Number *</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email ID *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
                    </div>
                </div>
                {/* Category and Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="category">Product Category</Label>
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
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input id="quantity" placeholder="e.g., 100 pairs" value={formData.quantity} onChange={(e) => handleChange('quantity', e.target.value)} />
                    </div>
                </div>
                {/* Message */}
                <div>
                    <Label htmlFor="message">Message / Custom Requirements</Label>
                    <Textarea id="message" placeholder="Please describe your specific requirements..." value={formData.message} onChange={(e) => handleChange('message', e.target.value)} rows={3} />
                </div>

                {/* Two Buttons with Enhanced Styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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
        </div>
    );
};

export default InquiryForm;
