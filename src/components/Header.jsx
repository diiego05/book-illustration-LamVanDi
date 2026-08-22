import React from 'react';

const HandDrawnStar = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="#e67e22" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 15 
         C52 28, 55 35, 62 38 
         C73 42, 85 41, 90 43 
         C80 49, 70 54, 68 62 
         C66 74, 76 83, 73 88 
         C61 80, 53 72, 50 75 
         C47 72, 39 80, 27 88 
         C24 83, 34 74, 32 62 
         C30 54, 20 49, 10 43 
         C15 41, 27 42, 38 38 
         C45 35, 48 28, 50 15 Z" 
      stroke="#2c2c2c" 
      strokeWidth="3" 
      strokeLinejoin="round" 
    />
  </svg>
);

const Spiral = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 50 
         C42 46, 46 36, 54 39 
         C63 42, 59 53, 47 50 
         C35 47, 41 31, 56 34 
         C72 37, 66 61, 41 57 
         C16 53, 28 20, 60 25 
         C85 29, 81 75, 41 71 
         C8 67, 18 10, 62 13" 
      stroke="#e67e22" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const Letter = ({ char, highlightStar = false }) => {
  return (
    <span className="relative inline-block hover-wobble cursor-pointer transition-transform duration-300 font-sketch text-sketch-green text-[45px] min-[375px]:text-[55px] sm:text-[90px] md:text-[110px] font-bold leading-none select-none drop-shadow-[3px_3px_0px_#2c2c2c] md:drop-shadow-[4px_4px_0px_#2c2c2c] [-webkit-text-stroke:1.5px_#2c2c2c] sm:[-webkit-text-stroke:3px_#2c2c2c]">
      {char}
      {highlightStar && (
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <HandDrawnStar className="w-[18px] h-[18px] min-[375px]:w-[24px] min-[375px]:h-[24px] sm:w-[38px] sm:h-[38px] md:w-[48px] md:h-[48px] transform rotate-[15deg] translate-y-[-2px] animate-float" />
        </span>
      )}
    </span>
  );
};

export default function Header() {
  return (
    <header className="relative w-full py-12 px-4 flex flex-col items-center justify-center mb-12">
      
      {/* Upper floating attributes */}
      <div className="w-full max-w-4xl flex justify-between items-center px-4 md:px-12 mb-6">
        {/* creative */}
        <div className="transform -rotate-6 animate-float">
          <span className="font-hand text-sketch-charcoal text-2xl sm:text-4xl md:text-5xl font-semibold">
            creative
          </span>
        </div>
        
        {/* proactive */}
        <div className="transform rotate-6 animate-float-delayed">
          <span className="font-hand text-sketch-charcoal text-2xl sm:text-4xl md:text-5xl font-semibold">
            proactive
          </span>
        </div>
      </div>

      {/* PORTFOLIO IN ONE LINE */}
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        {/* Left Spiral */}
        <Spiral className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 transform -rotate-12 animate-float" />
        
        {/* PORTFOLIO Letters */}
        <div className="flex gap-0.5 sm:gap-1">
          <Letter char="P" />
          <Letter char="O" highlightStar={true} />
          <Letter char="R" />
          <Letter char="T" />
          <Letter char="F" />
          <Letter char="O" highlightStar={true} />
          <Letter char="L" />
          <Letter char="I" />
          <Letter char="O" />
        </div>

        {/* Right Spiral */}
        <Spiral className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 transform rotate-45 scale-x-[-1] animate-float-delayed" />
      </div>

      {/* "by: Lam Van Di" handwritten text below */}
      <div className="self-end mt-6 mr-8 sm:mr-16 md:mr-24 transform rotate-3">
        <span className="font-hand text-sketch-charcoal text-2xl sm:text-3xl md:text-4xl font-semibold">
          by: Lam Van Di
        </span>
      </div>
    </header>
  );
}
