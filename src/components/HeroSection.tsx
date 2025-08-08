
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import safetyShoes from '@/assets/safety-shoes-hero.jpg';
import gumBoots from '@/assets/gum-boots-hero.jpg';
import schoolShoes from '@/assets/school-shoes-hero.jpg';

const slides = [
  {
    id: 1,
    image: safetyShoes,
    category: 'Safety Shoes',
    title: 'Built for Protection. Designed for Comfort.',
    subtitle: 'Premium industrial safety footwear for all working environments',
    cta: 'Explore Safety Shoes',
    href: '/safety-shoes'
  },
  {
    id: 2,
    image: gumBoots,
    category: 'Gum Boots',
    title: 'Ultimate Protection Against Elements.',
    subtitle: 'Waterproof, slip-resistant boots for challenging conditions',
    cta: 'Explore Gum Boots',
    href: '/gum-boots'
  },
  {
    id: 3,
    image: schoolShoes,
    category: 'School Shoes',
    title: 'Quality Footwear for Growing Minds.',
    subtitle: 'Durable, comfortable school shoes built to last',
    cta: 'Explore School Shoes',
    href: '/school-shoes'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
          <img
            src={slide.image}
            alt={slide.category}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Enhanced Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 glass-effect rounded-full text-sm font-medium shadow-glow hover-scale transition-bounce">
              {slides[currentSlide].category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-primary group shadow-hero"
              asChild
            >
              <Link to={slides[currentSlide].href}>
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg"
              className="btn-secondary glass-effect"
              asChild
            >
              <Link to="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full glass-effect text-white hover-scale transition-bounce shadow-button"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full glass-effect text-white hover-scale transition-bounce shadow-button"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 hover-scale ${
              index === currentSlide 
                ? 'bg-white shadow-glow scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
