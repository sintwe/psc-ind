import React from 'react';

// Using a more structured data object to improve readability
const brands = [
  { name: 'Walkaroo', logo: '/optimized/Walkaroo.webp', alt: 'Walkaroo Logo' },
  { name: 'Rex', logo: '/optimized/rex.webp', alt: 'Rex Logo' },
  { name: 'Addoxy', logo: '/optimized/addoxy.webp', alt: 'Addoxy Logo' },
  { name: 'Lakhani Armaan', logo: '/optimized/lakhani.webp', alt: 'Lakhani Armaan Logo' },
  { name: 'Relaxo', logo: '/optimized/relaxo.webp', alt: 'Relaxo Logo' },
  { name: 'Flite', logo: '/optimized/flite.webp', alt: 'Flite Logo' },
  { name: 'Bahamas', logo: '/optimized/bahamas.webp', alt: 'Bahamas Logo' },
  { name: 'Sparx', logo: '/optimized/sparx.webp', alt: 'Sparx Logo' },
  { name: 'Coaster', logo: '/optimized/coaster.webp', alt: 'Coaster Logo' },
  { name: 'Action Flotter', logo: '/optimized/Action.webp', alt: 'Action Flotter Logo' },
];

const BrandSlider: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">
          Trusted by Top Brands
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
              <div className="flex items-center justify-center h-24 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 border border-gray-200">
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;