import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// Placeholder images - replace these URLs with your actual images
const images = {
  logo: 'https://via.placeholder.com/107x55/333/fff?text=LOGO',
  profile: 'https://via.placeholder.com/100x98/333/fff?text=Profile',
  tally100Logo: 'https://via.placeholder.com/93x36/333/fff?text=Tally100',
  kidshubLogo: 'https://via.placeholder.com/135x36/333/fff?text=KidsHub',
  renmoLogo: 'https://via.placeholder.com/127x36/333/fff?text=Renmo',
  yuweenLogo: 'https://via.placeholder.com/153x36/333/fff?text=Yuween',
  e4Logo: 'https://via.placeholder.com/132x35/333/fff?text=E4+Solutions',
  pixelCursor: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAOSURBVDhPYwAC/x8wMHAAJhgPQwOWQpwAAAAASUVORK5CYII=',
  // Recent Work project images
  tally100Dashboard: 'https://via.placeholder.com/760x436/e5c98f/333?text=Tally100+Dashboard',
  yuweenApp1: 'https://via.placeholder.com/268x891/584d43/fff?text=Yuween+App+1',
  yuweenApp2: 'https://via.placeholder.com/268x891/584d43/fff?text=Yuween+App+2',
  renmoApp1: 'https://via.placeholder.com/268x1041/5e766d/fff?text=Renmo+App+1',
  renmoApp2: 'https://via.placeholder.com/268x1041/5e766d/fff?text=Renmo+App+2',
  kidshubDashboard: 'https://via.placeholder.com/493x458/595b89/fff?text=Kidshub+Dashboard',
  kidshubMobile: 'https://via.placeholder.com/224x828/595b89/fff?text=Kidshub+Mobile'
};

function Theme({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <button 
      onClick={toggleTheme}
      className="relative shrink-0 size-6 cursor-pixel transition-all duration-300 hover:scale-110 hover:rotate-12 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      data-name="Theme"
      style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
    >
      {isDark ? (
        <Sun className="size-full text-yellow-500 transition-all duration-500 rotate-0" />
      ) : (
        <Moon className="size-full text-gray-700 dark:text-gray-300 transition-all duration-500" />
      )}
    </button>
  );
}

function Navigation({ activeLink, setActiveLink, isDark, toggleTheme }: { 
  activeLink: string; 
  setActiveLink: (link: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}) {
  const navItems = ['Work', 'Experiment', 'About', 'FAQ', 'Resume'];

  return (
    <div className="box-border content-stretch flex flex-row gap-10 items-center justify-start p-0 relative shrink-0">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => setActiveLink(item)}
          className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap cursor-pixel transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
            activeLink === item 
              ? 'text-[#303030] dark:text-white' 
              : 'text-[#5a5a5a] dark:text-gray-400 hover:text-[#303030] dark:hover:text-white'
          }`}
          style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
        >
          <p className={`block leading-[normal] whitespace-pre transition-all duration-300 ${
            activeLink === item 
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

function Header({ activeLink, setActiveLink, isDark, toggleTheme }: { 
  activeLink: string; 
  setActiveLink: (link: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div
        className={`bg-center bg-cover bg-no-repeat h-[55px] shrink-0 w-[107px] cursor-pixel transition-all duration-500 hover:scale-105 ${
          isDark 
            ? 'filter brightness-150 contrast-110 hover:brightness-200 hover:contrast-125' 
            : 'filter grayscale hover:grayscale-0'
        } hover:brightness-110`}
        data-name="image 12"
        style={{ 
          backgroundImage: `url('${images.logo}')`,
          cursor: `url('${images.pixelCursor}') 12 12, pointer`
        }}
      />
      <Navigation activeLink={activeLink} setActiveLink={setActiveLink} isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}

function GridBackground({ isDark }: { isDark: boolean }) {
  return (
    <div className="absolute h-[502px] left-1/2 top-0 translate-x-[-50%] w-[1354px]">
      <div className="absolute bottom-0 left-[-0.037%] right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1355 502"
        >
          <g id="Frame 16" opacity={isDark ? "0.1" : "0.2"}>
            {Array.from({ length: 20 }, (_, i) => (
              <path
                key={i}
                d={`M${1 + i * 60} 9L${1 + i * 60} 493`}
                stroke={isDark ? "#666666" : "#666666"}
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

function AvailableBadge({ isDark }: { isDark: boolean }) {
  return (
    <div 
      className={`${isDark ? 'bg-yellow-900/30 border border-yellow-700/50' : 'bg-[#fff1c2]'} box-border content-stretch flex flex-row gap-2.5 items-start justify-center px-3 py-2 relative rounded-[100px] shrink-0 transition-all duration-300 hover:scale-105 cursor-pixel`}
      style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
    >
      <div className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 ${isDark ? 'text-yellow-400' : 'text-[#522504]'} text-[14px] text-center text-nowrap transition-colors duration-300`}>
        <p className="block leading-[normal] whitespace-pre">
          Available for new project
        </p>
      </div>
    </div>
  );
}

function HeroContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start leading-[0] p-0 relative shrink-0 text-center">
      <div className={`font-['Inter:Bold',_sans-serif] font-bold not-italic relative shrink-0 ${isDark ? 'text-white' : 'text-[#303030]'} text-[34px] text-nowrap transition-colors duration-300`}>
        <p className="block leading-[normal] whitespace-pre">
          I'm Kamran✌🏼
          <br />
          Product Designer and Mentor
        </p>
      </div>
      <div className={`font-['Work_Sans:Regular',_sans-serif] font-normal relative shrink-0 ${isDark ? 'text-gray-300' : 'text-[#5a5a5a]'} text-[0px] w-[1086px] transition-colors duration-300`}>
        <p className="leading-[22px] not-italic text-[16px] whitespace-pre-wrap">
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
            style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
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
            style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
          >
            <span
              className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] leading-[22px] not-italic text-[16px]"
            >
              Kidshub
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

function ProfileSection({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0">
      <div
        className="bg-center bg-cover bg-no-repeat h-[98px] rounded-[100px] shrink-0 w-[100px] cursor-pixel transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25 ring-2 ring-transparent hover:ring-blue-400/50"
        data-name="image 2"
        style={{ 
          backgroundImage: `url('${images.profile}')`,
          cursor: `url('${images.pixelCursor}') 12 12, pointer`
        }}
      />
      <HeroContent isDark={isDark} />
    </div>
  );
}

function CompanyLogos({ isDark }: { isDark: boolean }) {
  const logos = [
    { src: images.tally100Logo, width: 93, height: 36 },
    { src: images.kidshubLogo, width: 135, height: 36 },
    { src: images.renmoLogo, width: 127, height: 36 },
    { src: images.yuweenLogo, width: 153, height: 36 },
    { src: images.e4Logo, width: 132, height: 35 }
  ];

  return (
    <div className="box-border content-stretch flex flex-row gap-20 items-center justify-start p-0 relative shrink-0 w-full">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`bg-center bg-contain bg-no-repeat cursor-pixel transition-all duration-500 hover:scale-110 hover:drop-shadow-lg ${
            isDark 
              ? 'filter brightness-125 contrast-110 saturate-150 hover:brightness-150 hover:contrast-125 hover:saturate-200' 
              : 'filter grayscale hover:grayscale-0'
          }`}
          style={{ 
            backgroundImage: `url('${logo.src}')`,
            cursor: `url('${images.pixelCursor}') 12 12, pointer`,
            width: `${logo.width}px`,
            height: `${logo.height}px`
          }}
        />
      ))}
    </div>
  );
}

function HeroSection({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-center justify-start p-0 relative shrink-0 w-[960px]">
      <ProfileSection isDark={isDark} />
      <CompanyLogos isDark={isDark} />
    </div>
  );
}

function MainContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 h-[502px] items-center justify-start px-[90px] py-0 relative shrink-0 w-[1354px]">
      <GridBackground isDark={isDark} />
      <AvailableBadge isDark={isDark} />
      <HeroSection isDark={isDark} />
    </div>
  );
}

// Recent Work Components
interface ProjectProps {
  year: string;
  title: string;
  description: string;
  role: string;
  isDark: boolean;
}

function ProjectHeader({ year, title, description, role, isDark }: ProjectProps) {
  return (
    <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-[137px] items-start justify-start p-0 relative shrink-0 text-left">
        <div className="box-border content-stretch flex flex-row gap-[34px] items-start justify-start p-0 relative shrink-0">
          <div className="flex flex-col h-[19px] justify-center relative shrink-0 text-[#b3b3b3] text-[14px] w-11">
            <p className="block leading-[24px]">{year}</p>
          </div>
          <div className={`flex flex-col h-[29px] justify-center relative shrink-0 ${isDark ? 'text-white' : 'text-[#1e1e1e]'} text-[21px] w-[145px] transition-colors duration-300`}>
            <p className="block leading-[28.8px]">{title}</p>
          </div>
        </div>
        <div className={`flex flex-col justify-center relative shrink-0 ${isDark ? 'text-gray-300' : 'text-[#1e1e1e]'} text-[16px] w-[380px] transition-colors duration-300`}>
          <p className="block leading-[24px]">{description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#b3b3b3] text-[14px] text-right w-[174.06px]">
        <p className="block leading-[24px]">{role}</p>
      </div>
    </div>
  );
}

function TallyProject({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <ProjectHeader 
        year="2024"
        title="Tally100"
        description="A practice management platform for health and wellness professionals."
        role="Head of Design & Product"
        isDark={isDark}
      />
      <div
        className={`${isDark ? 'bg-[#c4a66b]' : 'bg-[#e5c98f]'} h-[540px] overflow-clip relative rounded-[34px] shrink-0 w-[962px] cursor-pixel transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group`}
        style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
      >
        <div
          className="[background-size:101.35%_100.25%] absolute bg-bottom bg-no-repeat h-[436px] left-1/2 rounded-[14px] translate-x-[-50%] translate-y-[-50%] w-[760px] transition-all duration-500 group-hover:scale-105"
          style={{
            top: "calc(50% + 61px)",
            backgroundImage: `url('${images.tally100Dashboard}')`,
          }}
        >
          <div className="absolute border-[#897a5c] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
        </div>
      </div>
    </div>
  );
}

function YuweenProject({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <ProjectHeader 
        year="2023"
        title="Yuween"
        description="A multivendor delivery management app for ordering everything from one platform."
        role="Senior Product Designer"
        isDark={isDark}
      />
      <div
        className={`${isDark ? 'bg-[#6b5d51]' : 'bg-[#584d43]'} h-[540px] overflow-clip relative rounded-[34px] shrink-0 w-full cursor-pixel transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group`}
        style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
      >
        <div className="absolute contents left-[188px] top-[-293px]">
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-[891px] left-[188px] rounded-[14px] top-[100px] w-[267.97px] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images.yuweenApp1}')` }}
          >
            <div className="absolute border-[#8b7969] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
          </div>
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-[891px] left-[506px] top-[-293px] w-[267.97px] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images.yuweenApp2}')` }}
          >
            <div className="absolute border-[#8b7969] border-[3px] border-solid inset-[-3px] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RenmoProject({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <ProjectHeader 
        year="2022"
        title="Renmo"
        description="A home rental management platform for booking, hosting, and managing stays."
        role="Senior Product Designer"
        isDark={isDark}
      />
      <div
        className={`${isDark ? 'bg-[#708076]' : 'bg-[#5e766d]'} h-[540px] overflow-clip relative rounded-[34px] shrink-0 w-full cursor-pixel transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group`}
        style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
      >
        <div className="absolute contents left-[188px] top-[-466px]">
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-[1041px] left-[188px] rounded-[14px] top-[100.67px] w-[268px] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images.renmoApp1}')` }}
          >
            <div className="absolute border-[#98a5a0] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
          </div>
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-[1041px] left-[506px] rounded-[14px] top-[-466px] w-[268px] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images.renmoApp2}')` }}
          >
            <div className="absolute border-[#98a5a0] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function KidshubProject({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <ProjectHeader 
        year="2021"
        title="Kidshub"
        description="A childcare management platform for attendance, billing, and parent communication."
        role="Senior Product Designer"
        isDark={isDark}
      />
      <div
        className={`${isDark ? 'bg-[#6d6f97]' : 'bg-[#595b89]'} h-[540px] overflow-clip relative rounded-[34px] shrink-0 w-full cursor-pixel transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group`}
        style={{ cursor: `url('${images.pixelCursor}') 12 12, pointer` }}
      >
        <div className="absolute contents left-[102px] top-[100.849px]">
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-[457.571px] left-[102px] rounded-[14px] top-[100.848px] w-[493.475px] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images.kidshubDashboard}')` }}
          >
            <div className="absolute border-[#7677a0] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
          </div>
          <div
            className="absolute bg-center bg-cover bg-no-repeat h-[828.303px] left-[637.298px] rounded-[14px] top-[100.848px] w-[223.702px] transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${images.kidshubMobile}')` }}
          >
            <div className="absolute border-[#7677a0] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[17px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-4 px-0 relative shrink-0 w-full">
      <div className="absolute border-[#bbbbbb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      {children}
    </div>
  );
}

function RecentWork({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full max-w-[962px] mx-auto">
      <div className={`flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[26px] justify-center leading-[0] not-italic relative shrink-0 ${isDark ? 'text-white' : 'text-[#1e1e1e]'} text-[18.281px] text-left w-full transition-colors duration-300`}>
        <p className="block leading-[26px]">Recent work</p>
      </div>
      <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">
        <ProjectSection>
          <TallyProject isDark={isDark} />
        </ProjectSection>
        <ProjectSection>
          <YuweenProject isDark={isDark} />
        </ProjectSection>
        <ProjectSection>
          <RenmoProject isDark={isDark} />
        </ProjectSection>
        <ProjectSection>
          <KidshubProject isDark={isDark} />
        </ProjectSection>
      </div>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeLink, setActiveLink] = useState('Work');

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Container with responsive margins */}
      <div className="mx-auto 
        max-w-[1920px] 
        px-[278px] py-[34px]
        max-xl:px-[120px] max-xl:py-[24px]
        max-sm:px-[24px] max-sm:py-[16px]">
        
        {/* Main layout */}
        <div className="box-border content-stretch flex flex-col gap-20 items-center justify-start p-0 relative w-full">
          <Header activeLink={activeLink} setActiveLink={setActiveLink} isDark={isDark} toggleTheme={toggleTheme} />
          <MainContent isDark={isDark} />
          {/* Recent Work Section */}
          <RecentWork isDark={isDark} />
        </div>
      </div>
    </div>
  );
}