import { useState, useEffect } from 'react';
import { PixelArtHover } from './PixelArtHover';
import CaseStudyModal from './CaseStudyModal';
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";
import imgTally100 from "figma:asset/2bbfea79b7bcbaacb7ca0fc33574f4cf933dd464.png";
import imgYuweenProject from "figma:asset/6e70542bc5f4b0d9ff9a48f3173055f642ede05f.png";
import imgRenmoProject from "figma:asset/d6a0c340da274650a426bee2682826ab3795ae9f.png";
import imgKidshubProject from "figma:asset/5777a1ea459d02ae514c8414ef4d8bd65c691599.png";

// Preload project images for faster loading
const projectImages = [imgTally100, imgYuweenProject, imgRenmoProject, imgKidshubProject];

function preloadImages() {
  projectImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

interface ProjectData {
  year: string;
  title: string;
  description: string;
  role: string;
  image: string;
}

const projects: ProjectData[] = [
  {
    year: "2024",
    title: "Tally100",
    description: "A practice management platform for health and wellness professionals.",
    role: "Head of Design & Product",
    image: imgTally100
  },
  {
    year: "2023",
    title: "Yuween",
    description: "A multivendor delivery management app for ordering everything from one platform.",
    role: "Senior Product Designer",
    image: imgYuweenProject
  },
  {
    year: "2022",
    title: "Renmo",
    description: "A home rental management platform for booking, hosting, and managing stays.",
    role: "Senior Product Designer",
    image: imgRenmoProject
  },
  {
    year: "2021",
    title: "Kidshub",
    description: "A childcare management platform for attendance, billing, and parent communication.",
    role: "Product Designer",
    image: imgKidshubProject
  }
];

function ProjectHeader({ year, title, description, role, isDark }: { 
  year: string; 
  title: string; 
  description: string; 
  role: string; 
  isDark: boolean; 
}) {
  return (
    <div className="box-border content-stretch flex flex-col lg:flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between gap-4 lg:gap-0 leading-[0] not-italic p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col lg:flex-row gap-4 lg:gap-[137px] items-start justify-start p-0 relative shrink-0 text-left w-full lg:w-auto">
        <div className="box-border content-stretch flex flex-col sm:flex-row gap-2 sm:gap-[34px] items-start justify-start p-0 relative shrink-0 w-full lg:w-auto">
          <div className={`flex flex-col h-[19px] justify-center relative shrink-0 text-xs sm:text-sm lg:text-[14px] w-auto lg:w-11 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#b3b3b3]'}`}>
            <p className="block leading-[24px]">{year}</p>
          </div>
          <div className={`flex flex-col h-auto lg:h-[29px] justify-center relative shrink-0 ${isDark ? 'text-white' : 'text-[#1e1e1e]'} text-lg sm:text-xl lg:text-[21px] w-full lg:w-[145px] transition-colors duration-300`}>
            <p className="block leading-[28.8px]">{title}</p>
          </div>
        </div>
        <div className={`flex flex-col justify-center relative shrink-0 ${isDark ? 'text-gray-300' : 'text-[#1e1e1e]'} text-sm sm:text-base lg:text-[16px] w-full lg:w-[380px] transition-colors duration-300`}>
          <p className="block leading-[24px]">{description}</p>
        </div>
      </div>
      <div className={`flex flex-col justify-center relative shrink-0 text-xs sm:text-sm lg:text-[14px] text-left lg:text-right w-full lg:w-[174.06px] transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#b3b3b3]'}`}>
        <p className="block leading-[24px]">{role}</p>
      </div>
    </div>
  );
}

function ProjectSection({ project, isDark, onProjectClick }: { 
  project: ProjectData; 
  isDark: boolean;
  onProjectClick: (projectName: string) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-0 pt-4 px-0 relative shrink-0 w-full">
      <div className={`absolute border-[1px_0px_0px] border-solid inset-0 pointer-events-none transition-colors duration-300 ${isDark ? 'border-gray-600' : 'border-[#bbbbbb]'}`} />
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
        <ProjectHeader 
          year={project.year}
          title={project.title}
          description={project.description}
          role={project.role}
          isDark={isDark}
        />
        
        {/* Project Image with Pixel Art Hover Effect - Clickable */}
        <div 
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[540px] cursor-pixel transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-lg sm:rounded-xl lg:rounded-[34px] overflow-hidden"
          onClick={() => onProjectClick(project.title)}
          style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
        >
          <PixelArtHover
            imageSrc={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full h-full cursor-pixel transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-lg sm:rounded-xl lg:rounded-[34px]"
            isDark={isDark}
            backgroundPosition={project.title === 'Tally100' ? 'center top' : 'center center'}
          />
        </div>
      </div>
    </div>
  );
}

export default function RecentWork({ isDark }: { isDark: boolean }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  // Preload all project images on component mount
  useEffect(() => {
    preloadImages();
  }, []);

  const handleProjectClick = (projectName: string) => {
    setSelectedProject(projectName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject('');
  };

  return (
    <>
      <div 
        className={`box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full max-w-[1364px] mx-auto px-4 lg:px-0 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-[#1e1e1e]'
        }`}
        style={{ cursor: `url('${pixelCursor}') 12 12, auto` }}
      >
        {/* Recent work title with dark theme support */}
        <div className={`flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-auto lg:h-[26px] justify-center leading-[0] not-italic relative shrink-0 ${isDark ? 'text-white' : 'text-[#1e1e1e]'} text-base sm:text-lg lg:text-[18.281px] text-left w-full transition-colors duration-300`}>
          <p className="block leading-[26px]">Recent work</p>
        </div>
        
        {/* Projects section with pixel art hover effects */}
        <div className="box-border content-stretch flex flex-col gap-8 lg:gap-16 items-center justify-start p-0 relative shrink-0 w-full">
          {projects.map((project, index) => (
            <ProjectSection
              key={`${project.title}-${index}`}
              project={project}
              isDark={isDark}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        isDark={isDark}
        projectName={selectedProject}
      />
    </>
  );
}