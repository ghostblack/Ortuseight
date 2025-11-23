import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import NewsSection from './components/NewsSection';
import BannerSection from './components/BannerSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <NewsSection />
      <BannerSection />
      <Footer />
    </main>
  );
};

export default App;