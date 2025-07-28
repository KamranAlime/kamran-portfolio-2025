import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LoaderProps {
  isDark?: boolean;
}

export default function Loader({ isDark = false }: LoaderProps) {
  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${
        isDark ? 'bg-[#121212]' : 'bg-[#FFFFFF]'
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Lottie Animation */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <DotLottieReact
            src="https://lottie.host/15eb0167-8890-487a-9b6e-2f1531a41a96/CNQjVCAd2i.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
        
        {/* Loading Text */}
        <div className={`font-['Inter:Medium',_sans-serif] font-medium text-sm sm:text-base transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <p className="block leading-[normal] animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}