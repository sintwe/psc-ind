import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import WhyChooseUs from '@/components/WhyChooseUs';
import SafetyShoesSection from '@/components/SafetyShoesSection';
import GumBootsSection from '@/components/GumBootsSection';
import SchoolShoesSection from '@/components/SchoolShoesSection';
import AboutSection from '@/components/AboutSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BestSellers />
      <WhyChooseUs />
      <SafetyShoesSection />
      <GumBootsSection />
      <SchoolShoesSection />
      <AboutSection />
      <InquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
