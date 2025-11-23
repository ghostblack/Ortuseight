import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroColumnProps {
  imageSrc: string;
  category: string;
  delay: number;
  darken?: boolean;
}

const HeroColumn: React.FC<HeroColumnProps> = ({ imageSrc, category, delay, darken }) => {
  return (
    <div 
      className="relative w-full h-[33vh] md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-white/5 last:border-0"
    >
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Dark Overlay - Always dark to match moody screenshot */}
      <div className={`absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50 ${darken ? 'bg-black/60' : ''}`} />

      {/* Content Positioned at Bottom */}
      <div className="absolute bottom-10 left-8 md:bottom-16 md:left-10 z-20 flex flex-col gap-4">
        
        {/* Animated Arrow */}
        <div className="transform transition-all duration-500 ease-out">
            <ArrowRight className="text-white w-6 h-6 md:w-8 md:h-8 font-light" strokeWidth={1} />
        </div>

        {/* Category Label */}
        <h2 className="text-2xl md:text-4xl font-sans font-medium text-white tracking-wide uppercase leading-tight">
          {category}
        </h2>
      </div>
    </div>
  );
};

export default HeroColumn;