import React from 'react';
import { ArrowRight } from 'lucide-react';

const BannerSection: React.FC = () => {
  return (
    <section className="w-full bg-white font-sans py-10 px-4 md:px-10 lg:p-[80px]">
      
      {/* Banner Container with Image */}
      {/* Height updated to lg:h-[800px] to match 1280x800 request on standard desktops (1440px width - 160px padding = 1280px width) */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden bg-black">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.imgur.com/Xt2TNum.png" 
            alt="Banner Background" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-normal tracking-tight mb-10 leading-tight drop-shadow-lg">
            Stronger steps ahead. Give it all.
          </h2>

          {/* CTA Button */}
          <button className="bg-[#E85D24] text-white px-8 py-4 text-lg font-medium flex items-center gap-3 hover:bg-[#d14914] transition-colors duration-300">
            <span>Explore Now</span>
            <ArrowRight size={24} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;