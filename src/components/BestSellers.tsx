import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Steel Toe Safety Boots',
        category: 'Safety Shoes',
        image: '/optimized/46198705-0da9-486f-9f7e-55aed2569499.webp',
        features: ['Steel Toe Cap', 'Anti-Slip Sole', 'Oil Resistant'],
        badge: 'Best Seller',
        popular: true
    },
    {
        id: 7,
        name: 'Kids School Shoes',
        category: 'School Shoes',
        image: '/optimized/91a2cab1-603e-4b76-9de8-a8703b7a21c8.webp',
        features: ['Durable Material', 'Comfortable Fit', 'Non-Marking Sole'],
        badge: 'School Special'
    },
    {
        id: 2,
        name: 'Industrial Safety Shoes',
        category: 'Safety Shoes',
        image: '/optimized/3af3ae31-1c43-4083-9b3e-d4aeeda0c076.webp',
        features: ['Lightweight Design', 'Slip Resistant', 'Comfortable Fit'],
        badge: 'Popular',
        popular: true
    },
    {
        id: 8,
        name: 'Formal School Shoes',
        category: 'School Shoes',
        image: '/optimized/8cdefb05-9e31-4b0d-a022-2ebae48b4e75.webp',
        features: ['Smart Look', 'Easy to Clean', 'Breathable'],
        badge: 'Classic'
    },
    {
        id: 3,
        name: 'Heavy Duty Safety Boots',
        category: 'Safety Shoes',
        image: '/optimized/55d17159-1c58-4d7e-8a56-e1c1e8fd75a5.webp',
        features: ['Double Density Sole', 'Steel Toe Protection', 'Durable Build'],
        badge: 'Quality Choice'
    },
    {
        id: 9,
        name: 'Workplace Gum Boots',
        category: 'Gum Boots',
        image: '/optimized/be1d9dce-1518-4a3e-8f9c-86a1ce906790.webp',
        features: ['Waterproof', 'Durable Rubber', 'Good Grip'],
        badge: 'Industrial Use'
    },
    {
        id: 10,
        name: 'Standard Gum Boots',
        category: 'Gum Boots',
        image: '/optimized/8cdefb05-9e31-4b0d-a022-2ebae48b4e75.webp',
        features: ['Modern Design', 'Comfortable Fit', 'Protective Features'],
        badge: 'Farmer Choice'
    }
];

const categoryUrls = {
    'Safety Shoes': '/safety-shoes',
    'Gum Boots': '/gum-boots',
    'School Shoes': '/school-shoes',
};

const BestSellers = () => {
    const orderedCategories = ['Safety Shoes', 'Gum Boots', 'School Shoes'];

    const categorizedProducts = products.reduce((acc, product) => {
        if (orderedCategories.includes(product.category)) {
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            acc[product.category].push(product);
        }
        return acc;
    }, {});

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-50">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
                        Our Most Popular Footwear
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our top-selling industrial, institutional, and safety footwear trusted by businesses and schools.
                    </p>
                </div>

                {orderedCategories.map((category) => (
                    categorizedProducts[category] && (
                        <div key={category} className="mb-16 last:mb-0">
                            <h3
                                className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-10"
                            >
                                {category}
                            </h3>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
                            >
                                {categorizedProducts[category].map((product) => (
                                    <div
                                        key={product.id}
                                    >
                                        <Card
                                            className="product-card w-80 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-400/20 dark:hover:shadow-gray-800/20 hover:-translate-y-2"
                                        >
                                            <CardContent className="p-0">
                                                <div className="relative overflow-hidden rounded-t-lg group">
                                                    {product.badge && (
                                                        <Badge
                                                            className={`absolute top-4 left-4 z-10 transition-transform duration-300 hover:scale-110 text-xs font-semibold uppercase tracking-wider ${
                                                                 product.popular ? 'bg-indigo-600 text-white' : 'bg-gray-900 text-white'
                                                            }`}
                                                        >
                                                            {product.badge}
                                                        </Badge>
                                                    )}
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-auto aspect-square object-cover transition-all duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gray-900/60 dark:bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
                                                        <Link to={categoryUrls[product.category] || '#'}>
                                                            <Button variant="outline" size="icon" className="rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white transition-transform hover:scale-110">
                                                                <Eye className="h-5 w-5" />
                                                            </Button>
                                                        </Link>
                                                        <Link to="/contact">
                                                            <Button variant="outline" size="icon" className="rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white transition-transform hover:scale-110">
                                                                <MessageSquare className="h-5 w-5" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="p-6 text-center">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                                                        {product.name}
                                                    </h3>
                                                    <div className="space-y-2 mb-6 text-left">
                                                        {product.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                                <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mr-2 flex-shrink-0" />
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <Button
                                                        className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                                                        asChild
                                                    >
                                                        <Link to={categoryUrls[product.category] || '#'}>View All Products</Link>
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                ))}

            
            </div>
        </section>
    );
};

export default BestSellers;