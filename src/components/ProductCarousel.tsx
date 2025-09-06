import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

const ProductCarousel = ({ images, name }) => {
    const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );
    const [api, setApi] = React.useState(null);
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    return (
      <div>
      <Carousel
        setApi={setApi}
        className="w-full max-w-xs relative group"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
        <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0" />
      </Carousel>
      <div className="flex justify-center items-center mt-2 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index + 1 ? 'w-3 h-3 bg-primary' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ProductCarousel;
