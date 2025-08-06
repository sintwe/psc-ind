import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import WhyChooseUs from '@/components/WhyChooseUs';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BestSellers />
      <WhyChooseUs />
      <InquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
