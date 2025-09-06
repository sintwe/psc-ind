
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductHero = ({ title, subtitle, images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [images.length]);

  const nextSlide = () => {
    if (images.length > 1) {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images.length > 1) {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
          <img
            src={image}
            alt={`${title} - slide ${index + 1}`}
            className="w-full h-full object-cover"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight text-white text-shadow-lg">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto text-shadow-md">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="btn-primary group shadow-hero" asChild>
              <a href="#products">
                View Product Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass-effect text-white" asChild>
                <Link to="/contact">Send Bulk Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white hover:bg-black/90 transition-all duration-300 shadow-hero" aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white hover:bg-black/90 transition-all duration-300 shadow-hero" aria-label="Next slide">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white shadow-glow scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductHero;
