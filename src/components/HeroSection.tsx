
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/assets/optimized/safety-shoes-hero.webp',
    category: 'B2B Safety Shoes',
    title: 'Wholesale Industrial Safety Footwear',
    subtitle: 'Your trusted partner for bulk orders of ISI-certified safety shoes in Indore.',
    cta: 'View Safety Shoes',
    href: '/safety-shoes'
  },
  {
    id: 2,
    image: '/assets/optimized/gum-boots-hero.webp',
    category: 'Bulk Gum Boot Supply',
    title: 'Industrial & Agricultural Gum Boots',
    subtitle: 'Waterproof, chemical-resistant PVC gumboots for wholesale and tender supply.',
    cta: 'View Gum Boots',
    href: '/gum-boots'
  },
  {
    id: 3,
    image: '/assets/optimized/school-shoes-hero.webp',
    category: 'Institutional Tenders',
    title: 'Wholesale School Shoe Supplier',
    subtitle: 'Durable and uniform-compliant footwear for school tenders and bulk orders.',
    cta: 'View School Shoes',
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
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
          <img
            src={slide.image}
            alt={slide.category}
            className="w-full h-full object-cover"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-black/60 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium text-white shadow-glow">
              {slides[currentSlide].category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight text-white text-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto text-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="btn-primary group shadow-hero" asChild>
              <Link to={slides[currentSlide].href}>
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" className="btn-secondary glass-effect" asChild>
              <Link to="/contact">Send Bulk Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white hover:bg-black/90 transition-all duration-300 shadow-hero" aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white hover:bg-black/90 transition-all duration-300 shadow-hero" aria-label="Next slide">
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white shadow-glow scale-125' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
