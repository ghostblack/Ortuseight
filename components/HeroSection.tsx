import React from 'react';
import HeroColumn from './HeroColumn';
import TypingText from './TypingText';

const HeroSection: React.FC = () => {
  return (
    <div id="welcome" className="relative w-full h-screen grid grid-cols-1 md:grid-cols-3 bg-black">
      
      {/* Column 1: Football/Futsal */}
      <HeroColumn 
        imageSrc="https://i.imgur.com/oCKIAFl.png" 
        category="FOOTBALL/FUTSAL"
        delay={0}
      />

      {/* Column 2: Lifestyle */}
      <HeroColumn 
        imageSrc="https://i.imgur.com/UJeEIwR.png" 
        category="LIFESTYLE"
        delay={0.1}
        darken
      />

      {/* Column 3: Running */}
      <HeroColumn 
        imageSrc="https://i.imgur.com/FDDXmcA.png" 
        category="RUNNING"
        delay={0.2}
      />

      {/* Overlay Text Centered Absolute */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
        <TypingText text="#TEAM ORTUSEIGHT" />
      </div>

    </div>
  );
};

export default HeroSection;