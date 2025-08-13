import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import WhyChooseUs from '@/components/WhyChooseUs';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navigation />
      </header>
      <main>
        <HeroSection />
        <BestSellers />
        <WhyChooseUs />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
