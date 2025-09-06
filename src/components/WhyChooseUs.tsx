
import React from 'react';
import { Shield, Truck, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
    {
        icon: Shield,
        title: 'Bulk & Tender Ready',
        description: 'Our infrastructure is built to handle large volume orders and government tenders with competitive B2B pricing.',
        stats: '10,000+ Unit Capacity'
    },
    {
        icon: Truck,
        title: 'Pan-India Distribution',
        description: 'A reliable logistics network ensuring on-time delivery for your projects, wherever they are in India.',
        stats: 'Servicing 2000+ Pincodes'
    },
    {
        icon: Award,
        title: 'Certified Quality Assurance',
        description: 'All footwear is ISI & CE certified, meeting the highest standards for industrial and institutional use.',
        stats: '100% Compliant Products'
    },
    {
        icon: Users,
        title: 'Extensive Partner Network',
        description: 'Join our network of over 2,500 dealers and corporate clients who trust our quality and reliability.',
        stats: '2,500+ B2B Partners'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-surface font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Why Partner with Paras Sales Corporation?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are Indore's premier B2B footwear supplier, providing unmatched quality, reliability, and scale for your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index}>
                                <Card className="h-full text-center border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-background">
                                    <CardContent className="p-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                            <IconComponent className="h-8 w-8 text-primary" />
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {feature.title}
                                        </h3>
                                        
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        
                                        <div className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground font-medium text-sm rounded-full">
                                            {feature.stats}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 bg-gray-100 rounded-3xl p-8 md:p-12 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">70+</div>
                            <div className="text-muted-foreground text-lg">Years in B2B Supply</div>
                        </div>
                        
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100,000+</div>
                            <div className="text-muted-foreground text-lg">Businesses Served</div>
                        </div>
                        
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50,000+</div>
                            <div className="text-muted-foreground text-lg">Units Supplied Monthly</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
