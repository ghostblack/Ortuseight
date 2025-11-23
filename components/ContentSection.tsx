import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

// Mock Data for different tabs
const ALL_PRODUCTS = {
  new_arrival: [
    {
      id: 1,
      name: "CATALYST LIBERTE X DORAEMON FG",
      color: "White Cyan",
      price: 749000,
      image: "https://i.imgur.com/AxFXIhV.png",
    },
    {
      id: 2,
      name: "CATALYST LEGION V5 FG",
      color: "Off White Gold",
      price: 629100,
      originalPrice: 699000,
      discount: 10,
      image: "https://i.imgur.com/Tch71pV.png",
    },
    {
      id: 3,
      name: "HYPNOS",
      color: "Pale Pink",
      price: 629100,
      originalPrice: 699000,
      discount: 10,
      image: "https://i.imgur.com/1fWGFDn.png",
    },
    {
      id: 4,
      name: "CATALYST LIBERTE X DORAEMON FG",
      color: "Black Pink",
      price: 749000,
      image: "https://i.imgur.com/4r5lz8E.png",
    },
    {
      id: 5,
      name: "JOGOSALA RAMPAGE",
      color: "Shocking Orange",
      price: 499000,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "FORTE SAVAGE FG",
      color: "Neon Green",
      price: 549000,
      originalPrice: 600000,
      discount: 8,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      name: "INSIGNIA IN",
      color: "Deep Blue",
      price: 399000,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      name: "CATALYST CYPHER",
      color: "Midnight Black",
      price: 429000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    }
  ],
  most_popular: [
    {
      id: 101,
      name: "JOGOSALA VENOM",
      color: "Black Gold",
      price: 599000,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 102,
      name: "CATALYST MEISTER",
      color: "Red Baron",
      price: 899000,
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 103,
      name: "HYPERBLAST",
      color: "Aqua Blue",
      price: 450000,
      originalPrice: 500000,
      discount: 10,
      image: "https://images.unsplash.com/photo-1552674605-46d957b542e3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 104,
      name: "EL TIBURON V2",
      color: "Silver Bullet",
      price: 675000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 105,
      name: "CATALYST LEGION V3",
      color: "White Red",
      price: 629000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 106,
      name: "HORIZON",
      color: "Lemon Yellow",
      price: 399000,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    }
  ],
  special_edition: [
    {
      id: 201,
      name: "ORTUS X MARVEL",
      color: "Iron Man Red",
      price: 1200000,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 202,
      name: "ORTUS X STAR WARS",
      color: "Vader Black",
      price: 1250000,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 203,
      name: "ORTUS X DISNEY",
      color: "Mickey Black",
      price: 1100000,
      discount: 5,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 204,
      name: "CATALYST GLITCH",
      color: "Cyberpunk Neon",
      price: 999000,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 205,
      name: "INDEPENDENCE DAY",
      color: "Red White",
      price: 850000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    }
  ]
};

type CategoryKey = keyof typeof ALL_PRODUCTS;

const ContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('new_arrival');
  const [startIndex, setStartIndex] = useState(0);

  const ITEMS_PER_PAGE = 4;
  const currentProducts = ALL_PRODUCTS[activeTab];
  const maxIndex = Math.max(0, currentProducts.length - ITEMS_PER_PAGE);
  
  // Logic to slide to next set of products
  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex(prev => Math.min(prev + 1, maxIndex));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const handleTabChange = (tab: CategoryKey) => {
    setActiveTab(tab);
    setStartIndex(0); // Reset slider to start when switching tabs
  };

  // Logic for scrollbar thumb position and width
  const totalItems = currentProducts.length;
  // Thumb width reflects the view ratio (items visible / total items). Min width 20% for visibility.
  const thumbWidth = Math.min(100, Math.max((ITEMS_PER_PAGE / totalItems) * 100, 20));
  
  // Thumb position (left) reflects the scroll progress
  // If maxIndex is 0 (all items fit), left is 0.
  // Otherwise, calculate percentage of traversable space (100% - thumbWidth)
  const progressRatio = maxIndex > 0 ? startIndex / maxIndex : 0;
  const thumbLeft = progressRatio * (100 - thumbWidth);

  // Slice products for display
  const visibleProducts = currentProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="konten" className="w-full bg-white text-black py-16 px-4 md:px-10 lg:px-[80px] font-sans">
      
      {/* --- TOP SECTION: Product Carousel --- */}
      <div className="mb-20 w-full max-w-[1440px] mx-auto">
        
        {/* Header Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 border-b border-gray-100 pb-4">
          <div className="flex flex-wrap items-center gap-8">
            
            {/* New Arrival Tab */}
            <button 
              onClick={() => handleTabChange('new_arrival')}
              className="flex items-center gap-3 group"
            >
              <span className={`w-8 h-1 transition-colors ${activeTab === 'new_arrival' ? 'bg-brand-orange' : 'bg-gray-200 group-hover:bg-gray-300'}`}></span>
              <span className={`text-xl md:text-2xl transition-colors ${activeTab === 'new_arrival' ? 'font-medium text-black' : 'font-light text-gray-400 group-hover:text-gray-600'}`}>
                New Arrival
              </span>
            </button>

            {/* Most Popular Tab */}
            <button 
              onClick={() => handleTabChange('most_popular')}
              className="flex items-center gap-3 group"
            >
               <span className={`w-8 h-1 transition-colors ${activeTab === 'most_popular' ? 'bg-brand-orange' : 'bg-gray-200 group-hover:bg-gray-300'}`}></span>
               <span className={`text-xl md:text-2xl transition-colors ${activeTab === 'most_popular' ? 'font-medium text-black' : 'font-light text-gray-400 group-hover:text-gray-600'}`}>
                Most Popular
              </span>
            </button>

            {/* Special Edition Tab */}
            <button 
               onClick={() => handleTabChange('special_edition')}
               className="flex items-center gap-3 group"
            >
               <span className={`w-8 h-1 transition-colors ${activeTab === 'special_edition' ? 'bg-brand-orange' : 'bg-gray-200 group-hover:bg-gray-300'}`}></span>
               <span className={`text-xl md:text-2xl transition-colors ${activeTab === 'special_edition' ? 'font-medium text-black' : 'font-light text-gray-400 group-hover:text-gray-600'}`}>
                Special Edition
              </span>
            </button>

          </div>
          <a href="#" className="hidden md:block text-sm font-medium underline underline-offset-4 hover:text-brand-orange transition-colors">
            View All
          </a>
        </div>

        {/* Product Grid / Carousel View */}
        {/* Removed min-h-[500px] and mb-8 to fix spacing issues */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="w-full flex items-center justify-between mt-8">
          {/* Progress Bar (Scrollbar style) */}
          <div className="h-0.5 bg-gray-100 w-full max-w-xs relative rounded-full overflow-hidden">
            <div 
              className="absolute top-0 bottom-0 bg-black transition-all duration-500 ease-out"
              style={{ width: `${thumbWidth}%`, left: `${thumbLeft}%` }}
            ></div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 transition-colors ${startIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:text-brand-orange'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              className={`p-2 transition-colors ${startIndex >= maxIndex ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:text-brand-orange'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>


      {/* --- BOTTOM SECTION: Fixed Size Bento Grid --- */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[850px]">
        
        {/* ITEM 1: BERLIN (Col 1, Row 1 & 2) */}
        <div className="md:row-span-2 relative group overflow-hidden bg-gray-900 w-full h-[500px] md:h-full">
          <img 
            src="https://i.imgur.com/VOpINC5.png" 
            alt="Berlin" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
          
          {/* Pagination Dots */}
          <div className="absolute top-8 left-8 flex gap-3 z-10">
            <span className="w-3 h-3 rounded-full bg-brand-orange shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600/80 shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600/80 shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600/80 shadow-sm"></span>
          </div>
          
          {/* Text */}
          <h3 className="absolute bottom-8 left-8 text-white text-5xl font-normal uppercase tracking-wider">BERLIN</h3>
        </div>

        {/* ITEM 2: SPECIAL EDITION (Col 2, Row 1) */}
        <div className="relative group overflow-hidden bg-white w-full h-[400px] md:h-full border border-gray-100">
          <img 
            src="https://i.imgur.com/7wDdvF0.png"
            alt="Special Edition" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <h3 className="absolute bottom-8 left-8 text-brand-orange text-2xl font-bold uppercase">
            SPECIAL EDITION
          </h3>
        </div>

        {/* ITEM 3: INFO CARD (Col 3, Row 1) */}
        <div className="relative bg-[#F6F6F8] w-full h-[400px] md:h-full flex flex-col justify-between p-8">
          
          {/* Logo Area - Using the provided SVG */}
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 471 479" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1F1F1F]">
              {/* NOTE: Removed the background rect from SVG to let parent bg show, keeping the paths */}
              <path fillRule="evenodd" clipRule="evenodd" d="M63.9898 43.7846C59.2413 36.6809 51.1284 32 41.9171 32C41.7831 32 41.6498 32.0032 41.5152 32.0045C45.5239 35.2121 48.5761 39.5553 50.1777 44.5453C50.9925 47.0819 51.4335 49.7845 51.4335 52.5899C51.4335 52.7266 51.4296 52.8633 51.4276 52.9993C53.6009 52.0804 55.9905 51.5715 58.4997 51.5715C62.0288 51.5715 65.3188 52.5802 68.1031 54.3177C73.2109 57.5071 76.6107 63.1608 76.6107 69.6079C76.6107 79.569 68.5023 87.6443 58.4997 87.6443C54.4837 87.6443 50.7736 86.3402 47.7704 84.1361C43.2945 80.8523 40.3893 75.5688 40.3893 69.6079C40.3893 63.7133 43.2298 58.48 47.6208 55.1891C47.7064 54.334 47.7534 53.4678 47.7534 52.5899C47.7534 50.2713 47.447 48.0249 46.8831 45.8819C38.071 50.1698 32 59.1828 32 69.6079C32 75.0098 33.6309 80.0317 36.4276 84.2148C41.1761 91.3185 49.2883 96 58.4997 96C73.1358 96 85 84.1836 85 69.6079C85 56.9071 75.9912 46.303 63.9898 43.7846Z" fill="#1F1F1F"/>
              {/* Using just the main logo path for clarity at this size, as full SVG is very complex and large */}
              <path d="M40.832 252.312C36.176 252.312 32.96 248.64 32.96 243.432C32.96 238.248 36.152 234.528 40.856 234.528C44.864 234.528 47.48 237.096 47.912 240.312H46.088C45.752 238.392 44.336 236.064 40.832 236.064C36.68 236.064 34.784 239.592 34.784 243.432C34.784 247.272 36.704 250.776 40.832 250.776C44.456 250.776 45.968 248.28 46.16 245.904H47.984C47.576 249.648 44.912 252.312 40.832 252.312Z" fill="#1F1F1F" fillOpacity="0.8"/>
            </svg>
          </div>
          
          {/* Text Content */}
          <div className="flex-grow flex flex-col justify-center mb-6"> 
            <p className="text-[#777] text-xl mb-2 font-normal tracking-wide">Check out latest updates!</p>
            <h4 className="text-3xl font-bold leading-tight text-black tracking-tight">
              Life is a journey, don't walk it alone. Find the perfect partner for your feet, every single day
            </h4>
          </div>

          {/* Button - Inside Padding */}
          <button className="mt-auto w-full bg-brand-orange text-white h-12 flex items-center justify-between px-6 hover:bg-orange-600 transition-colors group">
            <span className="font-medium text-lg">Check Now</span>
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ITEM 4: BEST QUALITY (Col 2, Row 2) */}
        <div className="relative group overflow-hidden bg-white w-full h-[400px] md:h-full border border-gray-100">
           <img 
            src="https://i.imgur.com/GCuIBk8.png"
            alt="Best Quality" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <h3 className="absolute bottom-8 left-8 text-brand-orange text-2xl font-bold uppercase">
            BEST QUALITY
          </h3>
        </div>

        {/* ITEM 5: RUNNING WITH US (Col 3, Row 2) */}
        <div className="relative group overflow-hidden bg-black w-full h-[400px] md:h-full">
          <img 
            src="https://i.imgur.com/Cp5pGqn.png"
            alt="Running" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
             <h3 className="text-white text-3xl font-bold uppercase leading-none">
               RUNNING<br/>WITH US
             </h3>
             <ArrowRight className="text-brand-orange w-8 h-8" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;