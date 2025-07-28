import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../imports/svg-d6zfdcii7g";
import imgArtboard211 from "figma:asset/329e7f47019a5823a3d6317adb2989474ed6b519.png";
import imgArtboard12 from "figma:asset/375f04475d58860a792faa70a15c4a4f65949479.png";
import imgArtboard22 from "figma:asset/ba5c6d0acba933dfd54035e5d7893791825932fa.png";
import imgArtboard11 from "figma:asset/a9df38ba849f3c559f14e45db2b922fc873b4492.png";
import imgArtboard41 from "figma:asset/7a3ff0cf42ceb2dcfb16e7d043c71102002e78b8.png";
import imgArtboard111 from "figma:asset/9db4b401ca5ed251edb12724549864a5b5a4b72a.png";
import imgPosterImg1 from "figma:asset/c6629ff922375689446b384b3496d932f6c87f38.png";
import imgLastPoster2 from "figma:asset/3c56bc659195ef0bd3e7f5c615dfa62f9b000e31.png";
import imgLastPoster1 from "figma:asset/5b74b0735ec42709c7f3ac45316dfa40f059c0bf.png";
import imgInsta1 from "figma:asset/dc631e1c9177476dc812d9c862d17c120922ea99.png";
import imgWhatsAppImage20241119At0034192 from "figma:asset/ae13b64f63d0bac1fc7d6b0b2987cb86f1393633.png";
import imgWhatsAppImage20241119At0034201 from "figma:asset/c6b55b54fea205edeffb460a63964c48ad10a80c.png";
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";

function ExperimentHeader({ isDark }: { isDark: boolean }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center text-center">
        <div className={`font-semibold text-xl sm:text-2xl lg:text-3xl ${isDark ? 'text-white' : 'text-[#1e1e1e]'} transition-colors duration-300`}>
          <p className="leading-normal">
            <span className={`font-medium ${isDark ? 'text-gray-400' : 'text-[#5a5a5a]'} transition-colors duration-300`}>
              My passion
            </span>
            , visual explorations
          </p>
        </div>
        <div className={`font-normal text-sm sm:text-base lg:text-lg max-w-3xl ${isDark ? 'text-gray-400' : 'text-[#757575]'} transition-colors duration-300`}>
          <p className="leading-relaxed">
            As a multi-disciplinary designer, I enjoy exploring various ways to
            visualize my creativity. Hover over to play my daily UI work, 3D
            motion graphics, graphic designs, Vr/Xr and photography.
          </p>
        </div>
      </div>
    </div>
  );
}

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

    // Add wheel event listener to the window when modal is open
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
    // Only start dragging if clicking on the image, not the backdrop
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
      handleReset(); // Reset zoom and position for new image
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
      handleReset(); // Reset zoom and position for new image
    }
  };

  // Enhanced click outside to close functionality
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking on the backdrop itself, not when dragging
    if (e.target === e.currentTarget && !isDragging) {
      onClose();
    }
  };

  // Click outside image to close
  const handleImageContainerClick = (e: React.MouseEvent) => {
    // Close if clicking in the image container but not on the image itself
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
            alt={`Experiment detail ${currentIndex + 1} of ${images.length}`}
            className="max-w-full max-h-full object-contain transition-transform duration-300 select-none"
            style={{
              transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
              transformOrigin: 'center center'
            }}
            draggable={false}
            onLoad={() => setImageLoaded(true)}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
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

function ExperimentCard({ image, isDark, className = "", onClick }: { 
  image: string; 
  isDark: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div 
      className={`${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} relative rounded-2xl aspect-square w-full cursor-pixel transition-all duration-300 hover:scale-105 hover:shadow-xl group ${isDark ? 'hover:shadow-white/10' : 'hover:shadow-black/10'} border`}
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
      onClick={onClick}
    >
      <div className="overflow-hidden relative w-full h-full rounded-2xl">
        <div
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-300 group-hover:scale-110 ${className}`}
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* Zoom Icon Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDark ? 'bg-black/50' : 'bg-black/30'
        } rounded-2xl`}>
          <div className={`${
            isDark ? 'bg-white/90 text-black' : 'bg-black/80 text-white'
          } rounded-full p-3 backdrop-blur-sm`}>
            <ZoomIn className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperimentGrid({ isDark, onImageClick }: { 
  isDark: boolean; 
  onImageClick: (image: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <ExperimentCard 
          image={imgArtboard211} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgArtboard211)}
        />
        <ExperimentCard 
          image={imgArtboard12} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgArtboard12)}
        />
        <ExperimentCard 
          image={imgArtboard22} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgArtboard22)}
        />
        <ExperimentCard 
          image={imgArtboard11} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgArtboard11)}
        />
        <ExperimentCard 
          image={imgArtboard41} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgArtboard41)}
        />
        <ExperimentCard 
          image={imgArtboard111} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgArtboard111)}
        />
        <ExperimentCard 
          image={imgPosterImg1} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgPosterImg1)}
        />
        <ExperimentCard 
          image={imgLastPoster2} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgLastPoster2)}
        />
        <ExperimentCard 
          image={imgLastPoster1} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgLastPoster1)}
        />
        <ExperimentCard 
          image={imgInsta1} 
          isDark={isDark}
          className=""
          onClick={() => onImageClick(imgInsta1)}
        />
        
        {/* Special dual image card */}
        <div 
          className={`${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} relative rounded-2xl aspect-square w-full cursor-pixel transition-all duration-300 hover:scale-105 hover:shadow-xl group ${isDark ? 'hover:shadow-white/10' : 'hover:shadow-black/10'} border`}
          style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          onClick={() => onImageClick(imgWhatsAppImage20241119At0034192)}
        >
          <div className="overflow-hidden relative w-full h-full rounded-2xl">
            <div
              className="absolute left-0 top-0 w-[56%] h-full bg-center bg-cover bg-no-repeat transition-all duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('${imgWhatsAppImage20241119At0034192}')` }}
            />
            <div
              className="absolute right-0 top-0 w-[44%] h-full bg-center bg-cover bg-no-repeat transition-all duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('${imgWhatsAppImage20241119At0034201}')` }}
            />
            {/* Zoom Icon Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isDark ? 'bg-black/50' : 'bg-black/30'
            } rounded-2xl`}>
              <div className={`${
                isDark ? 'bg-white/90 text-black' : 'bg-black/80 text-white'
              } rounded-full p-3 backdrop-blur-sm`}>
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experiment({ isDark }: { isDark: boolean }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  
  // Array of all experiment images in order
  const allImages = [
    imgArtboard211,
    imgArtboard12,
    imgArtboard22,
    imgArtboard11,
    imgArtboard41,
    imgArtboard111,
    imgPosterImg1,
    imgLastPoster2,
    imgLastPoster1,
    imgInsta1,
    imgWhatsAppImage20241119At0034192 // Note: This one shows multiple images in one card
  ];

  const handleImageClick = (image: string) => {
    const index = allImages.indexOf(image);
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
      <div className="w-full">
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 items-center justify-start">
          <ExperimentHeader isDark={isDark} />
          <ExperimentGrid isDark={isDark} onImageClick={handleImageClick} />
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImageIndex >= 0 && (
        <ImageZoomModal
          images={allImages}
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