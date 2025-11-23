import React from 'react';

interface ProductCardProps {
  name: string;
  color: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, color, price, originalPrice, discount, image }) => {
  // Helper to match specific "IDR 629,100.00" format
  const formatCurrency = (val: number) => {
    return "IDR " + val.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="flex flex-col justify-start items-start p-0 gap-8 bg-white w-full font-sans group h-full">
      
      {/* Image Section - Square aspect ratio */}
      <div className="relative w-full aspect-square bg-[#FAFAFA] flex items-center justify-center">
         {discount && (
            <div className="absolute top-0 right-0 bg-[#F05A22] text-white text-sm font-medium px-3 py-1 z-10">
              {discount}%
            </div>
         )}
         <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
         />
      </div>

      {/* Details Section with 32px gap from image (handled by parent gap-8) */}
      <div className="flex flex-col items-start w-full gap-4 px-0 pb-0">
         
         {/* Price */}
         <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-black leading-none">
              {formatCurrency(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through decoration-gray-400">
                {formatCurrency(originalPrice)}
              </span>
            )}
         </div>

         {/* Name & Color */}
         <div className="flex flex-col gap-1 w-full">
             <h3 className="text-base font-normal uppercase text-black leading-tight">
               {name}
             </h3>
             <p className="text-sm text-gray-500 font-normal">
               {color}
             </p>
         </div>

         {/* Button */}
         <button className="w-full bg-[#F05A22] text-white text-base font-medium py-3 px-4 hover:bg-[#d14914] transition-colors text-center">
           Buy Now
         </button>
      </div>
    </div>
  );
};

export default ProductCard;