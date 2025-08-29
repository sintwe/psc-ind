import React from 'react';
import { Shield, Truck, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
    {
        icon: Shield,
        title: 'Bulk Order Ready',
        description: 'Large volume orders processed efficiently with competitive pricing for distributors and corporate buyers.',
        stats: '1000+ Units Daily Capacity'
    },
    {
        icon: Truck,
        title: 'All India Delivery',
        description: 'Pan-India distribution network ensuring timely delivery to all major cities and remote locations.',
        stats: '1000+ Pincodes Covered'
    },
    {
        icon: Award,
        title: 'Industry-Grade Products',
        description: 'Premium quality footwear meeting international safety standards and institutional requirements.',
        stats: 'ISI & CE Certified'
    },
    {
        icon: Users,
        title: 'Trusted by 2500+ Dealers',
        description: 'Strong partnership network with distributors, institutions, and corporate clients across India.',
        stats: '2000+ Active Partners'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header with better typography and animation */}
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
                        Why Choose Paras Sales Corporation?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Your trusted partner for premium industrial and institutional footwear solutions with unmatched quality and service.
                    </p>
                </div>

                {/* Features Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index}>
                                <Card
                                    className="h-full text-center border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900"
                                >
                                    <CardContent className="p-8">
                                        {/* Enhanced Icon Container */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mb-6 shadow-lg">
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        
                                        {/* Content */}
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                                            {feature.title}
                                        </h3>
                                        
                                        <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        
                                        {/* Stats */}
                                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-medium text-sm rounded-full">
                                            {feature.stats}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                {/* Enhanced Bottom Stats Section */}
                <div
                    className="mt-20 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 shadow-inner-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                70+
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-lg">Years of Excellence</div>
                        </div>
                        
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                100,000+
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-lg">Happy Customers</div>
                        </div>
                        
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                50,000+
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-lg">Units Delivered Monthly</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;