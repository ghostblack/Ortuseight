import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      tag: "#GiveItAll",
      title: "BUKAN SEKADAR KEMENANGAN, TAPI PERJALANAN",
      image: "https://images.unsplash.com/photo-1552674605-46d957b542e3?auto=format&fit=crop&q=80&w=800", // Runner jumping
    },
    {
      id: 2,
      tag: "'#Produk \"Lunar\"'",
      title: "GRAVITY? WE DON'T KNOW HER.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800", // Fitness/Stretching
    },
    {
      id: 3,
      tag: "#Katalog Summer 2025",
      title: "THE FUTURE IS NOW: SUMMER 2025 PREVIEW",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800", // Shoes
    }
  ];

  return (
    <section className="w-full bg-[#111111] text-white py-20 px-4 md:px-10 lg:px-[80px] font-sans">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">STAY AHEAD</h2>
            <p className="text-gray-400 text-lg font-light tracking-wide">News, innovations, and stories from the field.</p>
          </div>
          <button className="hidden md:block px-8 py-3 border border-white text-white text-lg hover:bg-white hover:text-black transition-colors duration-300">
            Read Story
          </button>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gray-700/50 mb-12"></div>

        {/* --- News Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item) => (
            <div key={item.id} className="relative group w-full h-[500px] overflow-hidden bg-gray-800 cursor-pointer">
              
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                
                {/* Top Tag */}
                <span className="text-gray-300 text-xl font-light tracking-wide">
                  {item.tag}
                </span>

                {/* Bottom Content */}
                <div className="flex flex-col gap-6">
                  {/* Floating Action Button */}
                  <div>
                    <button className="w-12 h-12 bg-[#E85D24] flex items-center justify-center text-white hover:bg-[#d14914] transition-colors">
                      <ArrowRight size={24} />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- Footer Controls / Pagination --- */}
        <div className="w-full border border-gray-700/50 py-4 px-6 flex items-center justify-between">
          
          <button className="text-gray-500 hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-4">
             {/* Active Dots (Orange) */}
             <span className="w-3 h-3 rounded-full bg-[#E85D24]"></span>
             <span className="w-3 h-3 rounded-full bg-[#E85D24]"></span>
             <span className="w-3 h-3 rounded-full bg-[#E85D24]"></span>
             
             {/* Inactive Dots (Gray) */}
             <span className="w-3 h-3 rounded-full bg-gray-600"></span>
             <span className="w-3 h-3 rounded-full bg-gray-600"></span>
             <span className="w-3 h-3 rounded-full bg-gray-600"></span>
          </div>

          <button className="text-white hover:text-[#E85D24] transition-colors">
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default NewsSection;