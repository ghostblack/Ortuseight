import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Welcome', active: true },
    { name: 'Football', active: false },
    { name: 'Futsal', active: false },
    { name: 'Running', active: false },
    { name: 'Lifestyle', active: false },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent font-sans">
      {/* Logo Area */}
      <div className="flex flex-col items-center justify-center z-50">
        <div className="flex flex-col items-center">
             {/* Simple Logo Circle as per screenshot vibe */}
             <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center mb-1 relative">
                <div className="w-4 h-4 bg-white rounded-full absolute -top-1 -right-1"></div>
                <div className="w-full h-full border-2 border-transparent border-t-white rounded-full animate-spin duration-3000"></div>
             </div>
            <span className="text-[10px] tracking-[0.1em] font-medium text-white/90">ortuseight</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:ml-20">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.name.toLowerCase()}`}
            className={`text-base font-normal tracking-wide transition-colors duration-300 flex items-center ${
              link.active ? 'text-white' : 'text-gray-500 hover:text-white'
            }`}
          >
            {link.active && (
              <span className="mr-2 text-brand-orange font-bold">—</span>
            )}
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="hidden md:flex items-center gap-6">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border border-gray-600 rounded-none px-4 py-1.5 text-sm text-white placeholder-gray-500 w-48 focus:outline-none focus:border-white transition-colors font-sans"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
        </div>
        <button className="text-white hover:text-brand-orange transition-colors">
            <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden z-50 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
            <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-light tracking-wider ${
                link.active ? 'text-brand-orange' : 'text-white'
                }`}
            >
                {link.name}
            </a>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;