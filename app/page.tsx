'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Loader from '../components/Loader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from "../imports/svg-7rlh2vk9nr";
import imgImage12 from "figma:asset/ac5ea96a6a3e2c7ba30c5c60d664bfff660b1704.png";
import imgWhiteLogo from 'figma:asset/0cf75b46dd73e22aa70be31922ff16f50977a8a4.png';
import imgNewProfileImage from 'figma:asset/d99627790406b1985ff6a3063863917f9b5fe82b.png';
import imgLogo from "figma:asset/f379a171146e9438bd16975e8e8c170b4f1ca1d7.png";
import imgGroup from "figma:asset/e571fdcbf8621302be9017f1748fc196a9577a1a.png";
import imgGroup74740 from "figma:asset/e4666f4757e3d576c1f3a544957a022bf2777a6b.png";
import imgYuweenLogo from "figma:asset/7016125efec31e4795ece28399badb4478b65bc6.png";
import imgGroup74741 from "figma:asset/a31d3f30d726f2429b9206a3c84bba2da1cc3e5a.png";
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";
import RecentWork from "../components/RecentWork";
import Mentions from "../components/Mentions";
import Connect from "../components/Connect";
import Experiment from "../components/Experiment";
import About from "../components/About";
import FAQ from "../components/FAQ";

// Preload critical images
const preloadImages = [
  imgImage12,
  imgWhiteLogo,
  imgNewProfileImage,
  pixelCursor
];

// Image preloader function
function preloadCriticalImages() {
  preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function Theme({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <button 
      onClick={toggleTheme}
      className="relative shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pixel transition-all duration-300 hover:scale-110 hover:rotate-12 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      data-name="Theme"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      {isDark ? (
        <Sun className="w-full h-full text-yellow-500 transition-all duration-500 rotate-0" />
      ) : (
        <Moon className="w-full h-full text-gray-700 dark:text-gray-300 transition-all duration-500" />
      )}
    </button>
  );
}

function MobileMenuButton({ isOpen, onClick, isDark }: { isOpen: boolean; onClick: () => void; isDark: boolean }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative z-50 p-2 cursor-pixel transition-all duration-300 hover:scale-105"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <div className="w-5 h-4 flex flex-col justify-between">
        <span className={`w-full h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-700'} ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`w-full h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-700'} ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-full h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-700'} ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </div>
    </button>
  );
}

function Navigation({ activeLink, setActiveLink, isDark, toggleTheme, isMobile = false, onItemClick }: { 
  activeLink: string; 
  setActiveLink: (link: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  isMobile?: boolean;
  onItemClick?: () => void;
}) {
  const navItems = ['Work', 'Experiments', 'About', 'FAQ', 'Resume'];

  const handleItemClick = (item: string) => {
    if (item === 'Resume') {
      window.open('https://drive.google.com/file/d/1vPy-g7nQl4B9xNujmZ-yXbDUIBefu0En/view?usp=sharing', '_blank');
      if (onItemClick) onItemClick();
    } else {
      setActiveLink(item);
      if (onItemClick) onItemClick();
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-6 items-center justify-center p-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleItemClick(item)}
            className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-lg text-center cursor-pixel transition-all duration-300 hover:scale-105 ${
              activeLink === item && item !== 'Resume'
                ? 'text-[#303030] dark:text-white' 
                : 'text-[#5a5a5a] dark:text-gray-400 hover:text-[#303030] dark:hover:text-white'
            }`}
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <p className={`block leading-[normal] whitespace-pre transition-all duration-300 ${
              activeLink === item && item !== 'Resume'
                ? '[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font]' 
                : 'hover:[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font]'
            }`}>
              {item}
            </p>
          </button>
        ))}
        <Theme isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-row gap-6 xl:gap-10 items-center justify-start p-0 relative shrink-0">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => handleItemClick(item)}
          className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-sm text-left text-nowrap cursor-pixel transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
            activeLink === item && item !== 'Resume'
              ? 'text-[#303030] dark:text-white' 
              : 'text-[#5a5a5a] dark:text-gray-400 hover:text-[#303030] dark:hover:text-white'
          }`}
          style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
        >
          <p className={`block leading-[normal] whitespace-pre transition-all duration-300 ${
            activeLink === item && item !== 'Resume'
              ? '[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font]' 
              : 'hover:[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font]'
          }`}>
            {item}
          </p>
        </button>
      ))}
      <Theme isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}

function Header({ activeLink, setActiveLink, isDark, toggleTheme, isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: { 
  activeLink: string; 
  setActiveLink: (link: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <>
      {/* Sticky Header */}
      <div 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? `backdrop-blur-xl shadow-lg border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}` 
            : 'bg-transparent'
        }`}
        style={isScrolled ? { backgroundColor: isDark ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)' } : {}}
      >
        <div className="mx-auto max-w-[1920px] 
          px-4 py-3
          sm:px-6 sm:py-4
          md:px-8 md:py-5
          lg:px-16 lg:py-5
          xl:px-24 xl:py-5
          2xl:px-[278px] 2xl:py-[28px]">
          
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            {/* Optimized Logo */}
            <div
              className={`bg-center bg-cover bg-no-repeat h-7 sm:h-8 md:h-10 lg:h-[45px] shrink-0 w-14 sm:w-16 md:w-20 lg:w-[90px] cursor-pixel transition-all duration-500 hover:scale-105 hover:brightness-110`}
              data-name="logo"
              style={{ 
                backgroundImage: `url('${isDark ? imgWhiteLogo : imgImage12}')`,
                cursor: `url('${pixelCursor}') 12 12, pointer`
              }}
            />
            
            {/* Desktop Navigation */}
            <Navigation 
              activeLink={activeLink} 
              setActiveLink={setActiveLink} 
              isDark={isDark} 
              toggleTheme={toggleTheme}
            />
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <Theme isDark={isDark} toggleTheme={toggleTheme} />
              <MobileMenuButton 
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isDark={isDark}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`absolute inset-0 backdrop-blur-xl`}
          style={{ backgroundColor: isDark ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative z-50 h-full flex items-center justify-center">
          <Navigation 
            activeLink={activeLink} 
            setActiveLink={setActiveLink} 
            isDark={isDark} 
            toggleTheme={toggleTheme}
            isMobile={true}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

function Frame16({ isDark }: { isDark: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full">
      <div className="w-full max-w-[1354px] h-full">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1141 502"
        >
          <g id="Frame 16" opacity={isDark ? "0.3" : "0.2"}>
            <path
              d="M1.00002 9L1 493"
              stroke={isDark ? "url(#paint0_linear_1_82_dark)" : "url(#paint0_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M61 9L61 493"
              stroke={isDark ? "url(#paint1_linear_1_82_dark)" : "url(#paint1_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M121 9L121 493"
              stroke={isDark ? "url(#paint2_linear_1_82_dark)" : "url(#paint2_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M181 9L181 493"
              stroke={isDark ? "url(#paint3_linear_1_82_dark)" : "url(#paint3_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M241 9L241 493"
              stroke={isDark ? "url(#paint4_linear_1_82_dark)" : "url(#paint4_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M301 9L301 493"
              stroke={isDark ? "url(#paint5_linear_1_82_dark)" : "url(#paint5_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M361 9L361 493"
              stroke={isDark ? "url(#paint6_linear_1_82_dark)" : "url(#paint6_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M421 9L421 493"
              stroke={isDark ? "url(#paint7_linear_1_82_dark)" : "url(#paint7_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M481 9L481 493"
              stroke={isDark ? "url(#paint8_linear_1_82_dark)" : "url(#paint8_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M541 9L541 493"
              stroke={isDark ? "url(#paint9_linear_1_82_dark)" : "url(#paint9_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M601 9L601 493"
              stroke={isDark ? "url(#paint10_linear_1_82_dark)" : "url(#paint10_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M661 9L661 493"
              stroke={isDark ? "url(#paint11_linear_1_82_dark)" : "url(#paint11_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M721 9L721 493"
              stroke={isDark ? "url(#paint12_linear_1_82_dark)" : "url(#paint12_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M781 9L781 493"
              stroke={isDark ? "url(#paint13_linear_1_82_dark)" : "url(#paint13_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M841 9L841 493"
              stroke={isDark ? "url(#paint14_linear_1_82_dark)" : "url(#paint14_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M901 9L901 493"
              stroke={isDark ? "url(#paint15_linear_1_82_dark)" : "url(#paint15_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M961 9L961 493"
              stroke={isDark ? "url(#paint16_linear_1_82_dark)" : "url(#paint16_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M1021 9L1021 493"
              stroke={isDark ? "url(#paint17_linear_1_82_dark)" : "url(#paint17_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M1081 9L1081 493"
              stroke={isDark ? "url(#paint18_linear_1_82_dark)" : "url(#paint18_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M1141 9L1141 493"
              stroke={isDark ? "url(#paint19_linear_1_82_dark)" : "url(#paint19_linear_1_82)"}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          </g>
          <defs>
            {/* Light theme gradients */}
            {Array.from({ length: 20 }, (_, i) => (
              <linearGradient
                key={`light-${i}`}
                gradientUnits="userSpaceOnUse"
                id={`paint${i}_linear_1_82`}
                x1={i === 0 ? "2.11563e-05" : (i * 60).toString()}
                x2={i === 0 ? "0" : (i * 60).toString()}
                y1="9"
                y2="493"
              >
                <stop offset="0.0979793" stopColor="white" />
                <stop offset="0.478097" stopColor="#666666" />
                <stop offset="0.870656" stopColor="white" />
              </linearGradient>
            ))}
            
            {/* Dark theme gradients */}
            {Array.from({ length: 20 }, (_, i) => (
              <linearGradient
                key={`dark-${i}`}
                gradientUnits="userSpaceOnUse"
                id={`paint${i}_linear_1_82_dark`}
                x1={i === 0 ? "2.11563e-05" : (i * 60).toString()}
                x2={i === 0 ? "0" : (i * 60).toString()}
                y1="9"
                y2="493"
              >
                <stop offset="0.0979793" stopColor="#404040" />
                <stop offset="0.478097" stopColor="#888888" />
                <stop offset="0.870656" stopColor="#404040" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame74694({ isDark }: { isDark: boolean }) {
  return (
    <div 
      className={`${isDark ? 'bg-yellow-900/30 border border-yellow-700/50' : 'bg-[#fff1c2]'} box-border content-stretch flex flex-row gap-2.5 items-start justify-center px-3 py-2 relative rounded-[100px] shrink-0 transition-all duration-300 hover:scale-105 cursor-pixel`}
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <div className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 ${isDark ? 'text-yellow-400' : 'text-[#522504]'} text-xs sm:text-sm text-center text-nowrap transition-colors duration-300`}>
        <p className="block leading-[normal] whitespace-pre">
          Available for new project
        </p>
      </div>
    </div>
  );
}

function Frame13({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start leading-[0] p-0 relative shrink-0 text-center">
      <div className={`font-['Inter:Bold',_sans-serif] font-bold not-italic relative shrink-0 ${isDark ? 'text-white' : 'text-[#303030]'} text-2xl sm:text-3xl lg:text-[34px] text-center transition-colors duration-300`}>
        <p className="block leading-[normal] whitespace-pre">
          I'm Kamran✌🏼
          <br />
          Product Designer and Mentor
        </p>
      </div>
      <div className={`font-['Work_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[0px] w-full max-w-4xl px-4 transition-colors duration-300`}>
        <p className={`leading-[22px] not-italic text-sm sm:text-base whitespace-pre-wrap ${isDark ? 'text-gray-300' : 'text-[#5a5a5a]'}`}>
          <span className={`font-['Inter:Regular',_sans-serif] font-normal ${isDark ? 'text-gray-400' : 'text-[#757575]'} transition-colors duration-300`}>
            Currently leading design at a B2B, SaaS startup making marketing and
            operations intelligent with the power of AI. I have experience
            working in product design and research roles at tech startups, local
            businesses, design agencies, Fortune 50+ companies, and more!
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal">
            <br />
            <br />
          </span>
          <span className={`font-['Inter:Regular',_sans-serif] font-normal ${isDark ? 'text-gray-400' : 'text-[#757575]'} transition-colors duration-300`}>
            Previously at
          </span>
          <span className={`font-['Inter:Regular',_sans-serif] font-normal ${isDark ? 'text-white' : 'text-[#303030]'} transition-colors duration-300`}>
            {" "}
          </span>
          <a
            className={`[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pixel font-['Inter:Medium',_sans-serif] font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#303030] hover:text-blue-600'} transition-all duration-300 hover:scale-105`}
            href="https://auth.tally100.com/sign-in"
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <span
              className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] leading-[22px]"
            >
              Tally100
            </span>
          </a>
          <span className={`font-['Inter:Regular',_sans-serif] font-normal ${isDark ? 'text-white' : 'text-[#303030]'} transition-colors duration-300`}>
            {" "}
          </span>
          <span className={`font-['Inter:Regular',_sans-serif] font-normal ${isDark ? 'text-gray-400' : 'text-[#757575]'} transition-colors duration-300`}>
            and
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal">
            {" "}
          </span>
          <span className={`font-['Inter:Regular',_sans-serif] font-normal ${isDark ? 'text-white' : 'text-[#303030]'} transition-colors duration-300`}>
            ﻿
          </span>
          <a
            className={`[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pixel font-['Inter:Medium',_sans-serif] font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#2c2c2c] hover:text-blue-600'} transition-all duration-300 hover:scale-105`}
            href="https://www.mykidshub.com/"
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <span
              className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] leading-[22px] not-italic text-sm sm:text-base"
            >
              Kidshub
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function ProfileImage({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="cursor-pixel transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25 ring-2 ring-transparent hover:ring-blue-400/50 rounded-full overflow-hidden"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
      title="Kamran Ali - Product Designer"
    >
      <ImageWithFallback
        src={imgNewProfileImage}
        alt="Kamran Ali - Product Designer"
        className="h-20 sm:h-24 md:h-28 lg:h-[98px] w-20 sm:w-24 md:w-28 lg:w-[100px] object-cover"
        fallback={
          <div
            className={`h-20 sm:h-24 md:h-28 lg:h-[98px] w-20 sm:w-24 md:w-28 lg:w-[100px] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl ${
              isDark ? 'bg-gradient-to-br from-blue-600 to-purple-700' : 'bg-gradient-to-br from-blue-500 to-indigo-600'
            }`}
          >
            K
          </div>
        }
      />
    </div>
  );
}

function Frame14({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0">
      <ProfileImage isDark={isDark} />
      <Frame13 isDark={isDark} />
    </div>
  );
}

function Logo({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat h-6 sm:h-7 md:h-8 lg:h-9 shrink-0 w-[47px] sm:w-[54px] md:w-[65px] lg:w-[93px] cursor-pixel transition-all duration-500 hover:scale-110 hover:drop-shadow-lg filter grayscale hover:grayscale-0"
      data-name="Logo"
      style={{ 
        backgroundImage: `url('${imgLogo}')`,
        cursor: `url('${pixelCursor}') 12 12, pointer`
      }}
    />
  );
}

function Group({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat h-6 sm:h-7 md:h-8 lg:h-9 shrink-0 w-[68px] sm:w-[81px] md:w-[101px] lg:w-[135px] cursor-pixel transition-all duration-500 hover:scale-110 hover:drop-shadow-lg filter grayscale hover:grayscale-0"
      data-name="Group"
      style={{ 
        backgroundImage: `url('${imgGroup}')`,
        cursor: `url('${pixelCursor}') 12 12, pointer`
      }}
    />
  );
}

function Group74740({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat h-6 sm:h-7 md:h-8 lg:h-9 shrink-0 w-[64px] sm:w-[76px] md:w-[95px] lg:w-[127px] cursor-pixel transition-all duration-500 hover:scale-110 hover:drop-shadow-lg filter grayscale hover:grayscale-0"
      style={{ 
        backgroundImage: `url('${imgGroup74740}')`,
        cursor: `url('${pixelCursor}') 12 12, pointer`
      }}
    />
  );
}

function YuweenLogo({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat h-6 sm:h-7 md:h-8 lg:h-9 shrink-0 w-[77px] sm:w-[92px] md:w-[114px] lg:w-[153px] cursor-pixel transition-all duration-500 hover:scale-110 hover:drop-shadow-lg filter grayscale hover:grayscale-0"
      data-name="Yuween Logo"
      style={{ 
        backgroundImage: `url('${imgYuweenLogo}')`,
        cursor: `url('${pixelCursor}') 12 12, pointer`
      }}
    />
  );
}

function Group74741({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat h-[18px] sm:h-[21px] md:h-[26px] lg:h-[35px] shrink-0 w-[66px] sm:w-[79px] md:w-[99px] lg:w-[132px] cursor-pixel transition-all duration-500 hover:scale-110 hover:drop-shadow-lg filter grayscale hover:grayscale-0"
      style={{ 
        backgroundImage: `url('${imgGroup74741}')`,
        cursor: `url('${pixelCursor}') 12 12, pointer`
      }}
    />
  );
}

function Frame17({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-20 min-h-[35px] sm:min-h-[42px] md:min-h-[52px] lg:min-h-[74px] items-center justify-center p-0 relative shrink-0 w-full">
      <Logo isDark={isDark} />
      <Group isDark={isDark} />
      <Group74740 isDark={isDark} />
      <YuweenLogo isDark={isDark} />
      <Group74741 isDark={isDark} />
    </div>
  );
}

function Frame74681({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 sm:gap-16 lg:gap-20 items-center justify-start p-0 relative shrink-0 w-full max-w-4xl">
      <Frame14 isDark={isDark} />
      <Frame17 isDark={isDark} />
    </div>
  );
}

function MainContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start px-4 sm:px-8 lg:px-[90px] py-0 relative size-full min-h-[400px] sm:min-h-[450px] lg:min-h-[502px]">
          <Frame16 isDark={isDark} />
          <Frame74694 isDark={isDark} />
          <Frame74681 isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [activeLink, setActiveLink] = useState('Work');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preload critical images and handle initial loading
  useEffect(() => {
    preloadCriticalImages();
    
    // Simulate loading time and ensure smooth entrance
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loader duration
    
    return () => clearTimeout(loadingTimer);
  }, []);

  // Handle scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const renderContent = () => {
    if (activeLink === 'Experiments') {
      return (
        <>
          <Experiment isDark={isDark} />
          <Connect isDark={isDark} />
        </>
      );
    }

    if (activeLink === 'About') {
      return (
        <>
          <About isDark={isDark} />
          <Connect isDark={isDark} />
        </>
      );
    }

    if (activeLink === 'FAQ') {
      return (
        <>
          <FAQ isDark={isDark} />
          <Connect isDark={isDark} />
        </>
      );
    }
    
    // Default Work page content
    return (
      <>
        <MainContent isDark={isDark} />
        <RecentWork isDark={isDark} />
        <Mentions isDark={isDark} />
        <Connect isDark={isDark} />
      </>
    );
  };

  // Show loader during initial loading
  if (isLoading) {
    return <Loader isDark={isDark} />;
  }

  return (
    <div 
      className="min-h-screen transition-all duration-500 animate-in fade-in duration-1000"
      style={{ backgroundColor: isDark ? '#121212' : '#FFFFFF' }}
    >
      {/* Sticky Header */}
      <Header 
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        isDark={isDark}
        toggleTheme={toggleTheme}
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Main Content */}
      <div className="relative">
        {/* Responsive Container with optimized margins */}
        <div className="mx-auto max-w-[1920px] 
          px-4 py-6
          sm:px-6 sm:py-8
          md:px-8 md:py-10
          lg:px-16 lg:py-12
          xl:px-24 xl:py-16
          2xl:px-[278px] 2xl:py-[34px]">
          
          {/* Main layout */}
          <div className="box-border content-stretch flex flex-col gap-20 items-center justify-start p-0 relative w-full">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}