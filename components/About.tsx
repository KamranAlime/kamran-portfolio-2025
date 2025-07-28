import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../imports/svg-tl9qfu0085";
import imgImage12 from "figma:asset/ac5ea96a6a3e2c7ba30c5c60d664bfff660b1704.png";
import imgABlackAndWhitePhotoOfTheAuthorStandingInAFieldWithTrees from "figma:asset/16797337edc4e249c1fdeacb78972c9c935e4294.png";
import imgScreenshot20250718At23833Am1 from "figma:asset/fd03cfc0e5328951c8a6afcb1683bd8c42d9a765.png";
import imgImg202403050003071 from "figma:asset/612ecfefecf0387c7cff6456f5e6ea68debac6dc.png";
import imgImage1586 from "figma:asset/cd7ff39f6e50cc4a62c59bd37422d3f879d34ee2.png";
import imgImage1587 from "figma:asset/216cf6df676d1156efca9ac8c702f9eb83005e49.png";
import imgImage1588 from "figma:asset/b71a3006c57a75ba341a8325a8f38bce932bb51f.png";
import img123A121 from "figma:asset/9a78c264c8ce78ccece2bfa4d18a482cefae0798.png";
import imgImage1589 from "figma:asset/feda30960bee09c6dd9b21225247db855b726e8d.png";
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";

function ImageZoomModal({ images, currentIndex, isOpen, onClose, onNavigate, isDark }: {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  isDark: boolean;
}) {
  const [zoomLevel, setZoomLevel] = useState(0.8);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset zoom and position when modal opens or image changes
  useEffect(() => {
    if (isOpen) {
      // Set initial zoom based on screen size
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;
      
      let initialZoom = 0.8;
      if (isMobile) {
        initialZoom = 0.6;
      } else if (isTablet) {
        initialZoom = 0.7;
      }
      
      setZoomLevel(initialZoom);
      setPosition({ x: 0, y: 0 });
      setImageLoaded(false);
    }
  }, [isOpen, currentIndex]);

  // Mouse wheel zoom functionality
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const zoomSpeed = 0.1;
      const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
      
      setZoomLevel(prev => {
        const newZoom = Math.max(0.3, Math.min(2.5, prev + delta));
        return newZoom;
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  // Keyboard shortcuts and navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          handleReset();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.3));
  };

  const handleReset = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    let resetZoom = 0.8;
    if (isMobile) {
      resetZoom = 0.6;
    } else if (isTablet) {
      resetZoom = 0.7;
    }
    
    setZoomLevel(resetZoom);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) return;
    
    const threshold = window.innerWidth < 768 ? 0.6 : 0.8;
    if (zoomLevel > threshold) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const threshold = window.innerWidth < 768 ? 0.6 : 0.8;
    if (isDragging && zoomLevel > threshold) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Navigation functions
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
      handleReset();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
      handleReset();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isDragging) {
      onClose();
    }
  };

  const handleImageContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isDragging) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[300] flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-xl transition-all duration-500"
        style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)' }}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex items-center justify-center">
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'bg-gray-900/90 hover:bg-gray-800/90 text-white disabled:text-gray-500' 
                  : 'bg-white/90 hover:bg-gray-100/90 text-gray-800 disabled:text-gray-400'
              } backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
              style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className={`absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'bg-gray-900/90 hover:bg-gray-800/90 text-white disabled:text-gray-500' 
                  : 'bg-white/90 hover:bg-gray-100/90 text-gray-800 disabled:text-gray-400'
              } backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
              style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Controls */}
        <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex flex-wrap gap-1 sm:gap-2 ${
          isDark ? 'bg-gray-900/90' : 'bg-white/90'
        } backdrop-blur-sm rounded-lg p-1.5 sm:p-2 shadow-lg`}>
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 0.3}
            className={`p-1.5 sm:p-2 rounded-md transition-all duration-200 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-white disabled:text-gray-500' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 disabled:text-gray-400'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <ZoomOut className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          
          <div className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium ${
            isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
          }`}>
            {Math.round(zoomLevel * 100)}%
          </div>
          
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 2.5}
            className={`p-1.5 sm:p-2 rounded-md transition-all duration-200 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-white disabled:text-gray-500' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 disabled:text-gray-400'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          
          <button
            onClick={handleReset}
            className={`p-1.5 sm:p-2 rounded-md transition-all duration-200 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          
          <button
            onClick={onClose}
            className={`p-1.5 sm:p-2 rounded-md transition-all duration-200 ${
              isDark 
                ? 'bg-red-900/50 hover:bg-red-800/50 text-red-400' 
                : 'bg-red-100 hover:bg-red-200 text-red-600'
            }`}
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Image Container */}
        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg"
          onClick={handleImageContainerClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ 
            cursor: zoomLevel > (window.innerWidth < 768 ? 0.6 : 0.8)
              ? isDragging 
                ? 'grabbing' 
                : 'grab'
              : 'default'
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
            className="max-w-full max-h-full object-contain transition-transform duration-300 select-none"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              transformOrigin: 'center center'
            }}
            draggable={false}
            onLoad={() => setImageLoaded(true)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Instructions */}
        {imageLoaded && (
          <div className={`absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 ${
            isDark ? 'bg-gray-900/90 text-gray-300' : 'bg-white/90 text-gray-600'
          } backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-center shadow-lg max-w-[90vw]`}>
            <div className="hidden sm:block">
              <div>Scroll to zoom • Drag to pan • Click outside image to close</div>
              <div className="text-xs opacity-75 mt-1">
                Keyboard: Arrow keys to navigate • +/- to zoom • 0 to reset • Esc to close
                {images.length > 1 && (
                  <span className="block">
                    {currentIndex + 1} of {images.length}
                  </span>
                )}
              </div>
            </div>
            <div className="sm:hidden">
              <div>Scroll to zoom • Drag to pan</div>
              <div className="text-xs opacity-75 mt-1">
                Tap outside image to close
                {images.length > 1 && (
                  <span className="block">
                    {currentIndex + 1} of {images.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ABlackAndWhitePhotoOfTheAuthorStandingInAFieldWithTrees({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="[background-size:100%_100%] bg-no-repeat bg-top-left max-w-[210.66px] rounded-[100px] shrink-0 size-[210.66px] cursor-pixel transition-all duration-500 hover:scale-105 hover:shadow-xl ring-2 ring-transparent hover:ring-blue-400/50 mx-auto sm:mx-0"
      data-name="A black and white photo of the author standing in a field with trees"
      style={{
        backgroundImage: `url('${imgABlackAndWhitePhotoOfTheAuthorStandingInAFieldWithTrees}')`,
        cursor: `url('${pixelCursor}') 12 12, pointer`,
        boxShadow: isDark ? '0 25px 50px -12px rgba(255, 255, 255, 0.1)' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    />
  );
}

function Container({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center sm:items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <ABlackAndWhitePhotoOfTheAuthorStandingInAFieldWithTrees isDark={isDark} />
    </div>
  );
}

function Margin({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center sm:items-start justify-start pb-8 pt-0 px-0 relative shrink-0 w-full sm:w-[210.66px]"
      data-name="Margin"
    >
      <Container isDark={isDark} />
    </div>
  );
}

function Heading2({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center sm:items-start justify-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className={`flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-lg sm:text-xl lg:text-[24px] text-center sm:text-left transition-colors duration-300 ${isDark ? 'text-white' : 'text-neutral-700'}`}>
        <p className="block leading-[28.8px] whitespace-pre">
          I am Kamran, a product designer from Pakistan.
        </p>
      </div>
    </div>
  );
}

function Paragraph({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-4 sm:gap-6 lg:gap-[27px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-sm sm:text-base lg:text-[16px] text-center sm:text-left w-full transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-[#8c8c8c]'}`}
      data-name="Paragraph"
    >
      <div className="flex flex-col justify-center w-full relative shrink-0">
        <p className="block leading-[1.5] lg:leading-[27px]">
          My journey began with graphic design, but I quickly found my passion
          in building digital products that are not just beautiful, but
          purposeful. From healthcare, edtech, construction SaaS to e-commerce,
          I've helped startups turn raw ideas into scalable, user-first 
          experiences. At places like Tally100, Yuween, and Renmo, I've led design from the
          ground up—owning everything from brand identity and design systems to
          end-to-end product UI/UX.
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="block leading-[1.5] lg:leading-[27px]">
          What drives me is clarity. Whether simplifying complex workflows or
          designing seamless mobile interactions, I believe good design should
          remove friction—not add to it. I work best in zero-to-one spaces,
          where ideas are messy, speed matters, and every design decision can
          shape the future of a product.
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="block leading-[1.5] lg:leading-[27px]">
          I'm also a mentor, speaker, and Figma educator, committed to sharing
          what I know and learning what I don't. When I'm not designing, you'll
          probably find me studying new tools, experimenting with interfaces, or
          deep-diving into typography and visual storytelling.
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="block leading-[1.5] lg:leading-[27px]">
          I'm currently based in Faisalabad, Pakistan—and always open to
          meaningful collaborations, new ideas, and good conversations.
        </p>
      </div>
    </div>
  );
}

function Container1({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full lg:max-w-[759px]"
      data-name="Container"
    >
      <Heading2 isDark={isDark} />
      <Paragraph isDark={isDark} />
    </div>
  );
}

function SkillHeading({ title, isDark }: { title: string; isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className={`flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-base lg:text-[18px] text-left w-full transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-[#333333]'}`}>
        <p className="block leading-[28.8px]">{title}</p>
      </div>
    </div>
  );
}

function SkillContent({ content, isDark }: { content: string; isDark: boolean }) {
  return (
    <div className="[flex-flow:wrap] box-border content-center flex gap-4 items-center justify-start p-0 relative shrink-0 w-full">
      <div className={`flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-xs sm:text-sm lg:text-[14px] text-left w-full transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#8c8c8c]'}`}>
        <p className="block leading-[1.5] lg:leading-[27px]">{content}</p>
      </div>
    </div>
  );
}

function Frame74756({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <SkillHeading title="Formative" isDark={isDark} />
      <SkillContent 
        content="User Interviews, Secondary Research, Competitive Analysis, User Stories, AI-Assisted Research (ChatGPT, X Ai, Bard, Claude)"
        isDark={isDark}
      />
    </div>
  );
}

function Frame74757({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <SkillHeading title="Generative" isDark={isDark} />
      <SkillContent 
        content="Interaction Design, Systems Thinking, Storyboarding, Affinity Mapping, Prototyping, Product Strategy, User Flows, Information Architecture, UI Design, Prompt Design for UX/UI, AI-Aided Ideation (Galileo AI, Uizard)"
        isDark={isDark}
      />
    </div>
  );
}

function Frame74758({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <SkillHeading title="Summative" isDark={isDark} />
      <SkillContent 
        content="Heuristic Analysis, Usability Testing, A/B Testing, QA"
        isDark={isDark}
      />
    </div>
  );
}

function Frame74759({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <SkillHeading title="Tools:" isDark={isDark} />
      <SkillContent 
        content="Figma, Miro, Adobe XD, InVision, Adobe Creative Suite, Sketch, Notion, V0, Figma Make, Lovable, Cursor, Midjourney, ChatGPT"
        isDark={isDark}
      />
    </div>
  );
}

function Container2({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-2 pt-0 lg:pt-[7px] px-0 relative shrink-0 w-full lg:max-w-[316px]"
      data-name="Container"
    >
      <Frame74756 isDark={isDark} />
      <Frame74757 isDark={isDark} />
      <Frame74758 isDark={isDark} />
      <Frame74759 isDark={isDark} />
    </div>
  );
}

function Frame74743({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 p-0 relative shrink-0 w-full">
      <Container1 isDark={isDark} />
      <Container2 isDark={isDark} />
    </div>
  );
}

function NewAboutSection({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center lg:items-start justify-start p-0 relative w-full max-w-[1160px] mx-auto"
      data-name="Container"
    >
      <Margin isDark={isDark} />
      <Frame74743 isDark={isDark} />
    </div>
  );
}

function PhotoGalleryHeading({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.8px] pt-0 px-0 relative shrink-0 w-full">
      <div className={`flex flex-col font-['PP_Neue_Montreal:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-lg sm:text-xl lg:text-[24px] text-left transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#1a1b1f]'}`}>
        <p className="block leading-[28.8px] whitespace-pre">
          pictures of cool people —
        </p>
      </div>
    </div>
  );
}

function PhotoGalleryContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <PhotoGalleryHeading isDark={isDark} />
    </div>
  );
}

function PhotoGalleryGrid({ isDark, onImageClick }: { 
  isDark: boolean; 
  onImageClick: (image: string) => void;
}) {
  const photos = [
    { src: imgScreenshot20250718At23833Am1, aspectRatio: "aspect-[228/402]" },
    { src: imgImg202403050003071, aspectRatio: "aspect-[300/400]" },
    { src: imgImage1586, aspectRatio: "aspect-[566/400]" },
    { src: imgImage1587, aspectRatio: "aspect-[320/400]" },
    { src: imgImage1588, aspectRatio: "aspect-[579/400]" },
    { src: img123A121, aspectRatio: "aspect-[225/400]" },
    { src: imgImage1589, aspectRatio: "aspect-square" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`bg-center bg-cover bg-no-repeat w-full h-48 sm:h-56 lg:h-64 shrink-0 cursor-pixel transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden relative group ${isDark ? 'hover:shadow-white/20' : 'hover:shadow-black/20'} ${photo.aspectRatio}`}
          style={{ 
            backgroundImage: `url('${photo.src}')`,
            cursor: `url('${pixelCursor}') 12 12, pointer`
          }}
          onClick={() => onImageClick(photo.src)}
        >
          {/* Zoom Icon Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            isDark ? 'bg-black/50' : 'bg-black/30'
          } rounded-lg`}>
            <div className={`${
              isDark ? 'bg-white/90 text-black' : 'bg-black/80 text-white'
            } rounded-full p-3 backdrop-blur-sm`}>
              <ZoomIn className="w-5 h-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PhotoGallerySection({ isDark, onImageClick }: { 
  isDark: boolean; 
  onImageClick: (image: string) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full max-w-[1160px] mx-auto">
      <PhotoGalleryContent isDark={isDark} />
      <PhotoGalleryGrid isDark={isDark} onImageClick={onImageClick} />
    </div>
  );
}

function AboutPage({ isDark, onImageClick }: { 
  isDark: boolean; 
  onImageClick: (image: string) => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-16 lg:gap-[80px] items-center justify-start p-0 relative shrink-0 w-full">
      <NewAboutSection isDark={isDark} />
      <PhotoGallerySection isDark={isDark} onImageClick={onImageClick} />
    </div>
  );
}

export default function About({ isDark }: { isDark: boolean }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  
  // Array of all gallery images in order
  const galleryImages = [
    imgScreenshot20250718At23833Am1,
    imgImg202403050003071,
    imgImage1586,
    imgImage1587,
    imgImage1588,
    img123A121,
    imgImage1589
  ];

  const handleImageClick = (image: string) => {
    const index = galleryImages.indexOf(image);
    if (index !== -1) {
      setSelectedImageIndex(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(-1);
  };

  const handleNavigate = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div 
        className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start relative w-full transition-colors duration-500"
        style={{ backgroundColor: isDark ? '#121212' : '#FFFFFF' }}
      >
        <AboutPage isDark={isDark} onImageClick={handleImageClick} />
      </div>

      {/* Image Zoom Modal */}
      {selectedImageIndex >= 0 && (
        <ImageZoomModal
          images={galleryImages}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex >= 0}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
          isDark={isDark}
        />
      )}
    </>
  );
}