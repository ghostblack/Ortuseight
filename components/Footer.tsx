import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black font-sans pt-24 border-t border-gray-100">
      
      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[80px] mb-24">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">
          
          {/* Left Section: Logo & Tagline */}
          <div className="lg:w-1/3 flex flex-col items-start">
            {/* Logo Placeholder - Fixed size random image as requested */}
            <div className="mb-8">
               {/* Using the text style from navbar but bigger, or an actual image if preferred. 
                   Design shows large text logo. I will use an image tag for easy replacement. */}
               <img 
                 src="https://i.imgur.com/4jhYMd0.png" 
                 alt="Ortuseight Logo" 
                 className="h-16 w-auto object-contain"
               />
            </div>
            
            <p className="text-[#555] text-xl leading-relaxed max-w-md font-normal">
              Sejatinya kita Sebagai manusia wajib memberikan yg terbaik di hidup kita dalam hal apa pun.
            </p>
          </div>

          {/* Right Section: Navigation Columns */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            
            {/* Column 1: ORTUS PRODUCT */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold uppercase tracking-wide text-black">ORTUS PRODUCT</h4>
              <ul className="flex flex-col gap-4 text-lg text-[#555]">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Football</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Futsal</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Running</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Lifestyle</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">New Arrival</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">SALE</a></li>
              </ul>
            </div>

            {/* Column 2: WHERE TO BUY */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold uppercase tracking-wide text-black">WHERE TO BUY</h4>
              <ul className="flex flex-col gap-4 text-lg text-[#555]">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Store Location</a></li>
              </ul>
            </div>

            {/* Column 3: ORTUS TEAM */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold uppercase tracking-wide text-black">ORTUS TEAM</h4>
              <ul className="flex flex-col gap-4 text-lg text-[#555]">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Athletes</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Team</a></li>
              </ul>
            </div>

            {/* Column 4: ABOUT US */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold uppercase tracking-wide text-black">ABOUT US</h4>
              <ul className="flex flex-col gap-4 text-lg text-[#555]">
                <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">F.A.Q</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Tracking Order</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#1A1A1A] text-white py-6 px-4">
        <div className="max-w-[1440px] mx-auto text-center font-light text-sm tracking-wide text-gray-400">
          <p>Privacy Policy Terms and Conditions © 2025 Ortuseight. All Rights Reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;