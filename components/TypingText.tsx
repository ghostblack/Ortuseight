import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1; 
      const fullText = text;

      setDisplayedText(
        isDeleting 
          ? fullText.substring(0, displayedText.length - 1) 
          : fullText.substring(0, displayedText.length + 1)
      );

      // Speed control
      setTypingSpeed(isDeleting ? 80 : 150);

      // Typing Logic
      if (!isDeleting && displayedText === fullText) {
        // Finished typing entire sentence
        setTimeout(() => setIsDeleting(true), 3000); // Wait 3 seconds before deleting
      } else if (isDeleting && displayedText === '') {
        // Finished deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed, text]);
  
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mix-blend-screen">
      <h1 className="text-brand-orange font-sans text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-center whitespace-nowrap leading-none select-none">
        {displayedText}
        <span className="animate-cursor text-white font-thin ml-1">|</span>
      </h1>
    </div>
  );
};

export default TypingText;