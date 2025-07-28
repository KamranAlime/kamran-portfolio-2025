import { useRef, useEffect, useState } from 'react';
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";

interface PixelArtHoverProps {
  imageSrc: string;
  alt: string;
  className?: string;
  isDark?: boolean;
  backgroundPosition?: string;
}

export function PixelArtHover({ 
  imageSrc, 
  alt, 
  className = '', 
  isDark = false,
  backgroundPosition = 'center center'
}: PixelArtHoverProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [pixelArtReady, setPixelArtReady] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Create pixel art version of the image with proper error handling
  const createPixelArt = (img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    try {
      const ctx = canvas.getContext('2d');
      if (!ctx || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // More thorough validation - ensure container is actually visible and has proper dimensions
      if (!rect || rect.width <= 0 || rect.height <= 0 || rect.width > 5000 || rect.height > 5000) {
        // Don't log errors, just silently skip to avoid console spam
        return;
      }

      // Ensure the container is actually in the viewport and visible
      const computedStyle = window.getComputedStyle(container);
      if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden' || computedStyle.opacity === '0') {
        return;
      }
      
      // Set canvas size to match container with safer bounds
      const canvasWidth = Math.max(10, Math.min(2000, Math.floor(rect.width)));
      const canvasHeight = Math.max(10, Math.min(2000, Math.floor(rect.height)));
      
      // Only proceed if dimensions are reasonable
      if (canvasWidth < 10 || canvasHeight < 10) {
        return;
      }
      
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Pixel size for the effect with bounds checking
      const pixelSize = Math.max(4, Math.min(16, 8)); // Ensure pixel size is reasonable
      const cols = Math.max(5, Math.min(250, Math.floor(canvas.width / pixelSize)));
      const rows = Math.max(5, Math.min(250, Math.floor(canvas.height / pixelSize)));

      // More thorough validation
      if (cols <= 0 || rows <= 0 || cols > 500 || rows > 500) {
        return;
      }

      // Create a temporary canvas for sampling
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = cols;
      tempCanvas.height = rows;

      // Validate image dimensions more thoroughly
      if (!img.complete || img.naturalWidth <= 0 || img.naturalHeight <= 0) {
        return;
      }

      // Draw the original image scaled down for sampling
      tempCtx.drawImage(img, 0, 0, cols, rows);
      
      // Get image data with better error handling
      let imageData;
      try {
        if (cols <= 0 || rows <= 0) return;
        imageData = tempCtx.getImageData(0, 0, cols, rows);
        if (!imageData || !imageData.data || imageData.data.length === 0) return;
      } catch (error) {
        // Canvas security error or other issues - silently fail
        return;
      }

      // Clear main canvas with fallback color
      ctx.fillStyle = isDark ? '#1f2937' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create pixel art effect
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const index = (y * cols + x) * 4;
          
          // Validate array bounds
          if (index + 3 >= imageData.data.length) continue;
          
          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const a = imageData.data[index + 3];

          if (a > 50) { // Only draw if pixel is not transparent
            // Create pixel art color with slight variation
            const pixelR = Math.floor(r / 32) * 32;
            const pixelG = Math.floor(g / 32) * 32;
            const pixelB = Math.floor(b / 32) * 32;
            
            ctx.fillStyle = `rgb(${pixelR}, ${pixelG}, ${pixelB})`;
            
            // Draw pixel with small gap for authentic pixel art look
            const pixelX = x * pixelSize;
            const pixelY = y * pixelSize;
            
            // Validate pixel position bounds
            if (pixelX + pixelSize <= canvas.width && pixelY + pixelSize <= canvas.height) {
              ctx.fillRect(pixelX + 1, pixelY + 1, pixelSize - 2, pixelSize - 2);
              
              // Add highlight effect
              if (pixelR + pixelG + pixelB > 200 && pixelSize > 3) {
                ctx.fillStyle = `rgba(255, 255, 255, 0.3)`;
                ctx.fillRect(pixelX + 1, pixelY + 1, pixelSize - 3, pixelSize - 3);
              }
            }
          }
        }
      }
    } catch (error) {
      // Silently handle errors to avoid console spam
      // Don't attempt fallback as it might cause more issues
      return;
    }
  };

  // Handle image load with better validation and proper timing
  const handleImageLoad = () => {
    if (!isIntersecting) return; // Only proceed if component is visible
    
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!img || !canvas || !container) return;
    
    // Ensure image is fully loaded and has valid dimensions
    if (!img.complete || img.naturalWidth <= 0 || img.naturalHeight <= 0) return;
    
    // Wait for container to be properly sized with multiple checks
    const attemptPixelArt = (attempts = 0) => {
      if (attempts > 5) return; // Reduced attempts to avoid infinite loops
      
      const rect = container.getBoundingClientRect();
      if (rect && rect.width > 10 && rect.height > 10) {
        createPixelArt(img, canvas);
        setPixelArtReady(true);
      } else {
        // Try again after a longer delay
        setTimeout(() => attemptPixelArt(attempts + 1), 100);
      }
    };
    
    // Initial attempt with reasonable delay
    setTimeout(() => attemptPixelArt(), 50);
  };

  // Handle resize with better debouncing and validation
  const handleResize = () => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!img || !canvas || !container || !pixelArtReady) return;
    if (!img.complete || img.naturalWidth <= 0) return;
    
    // Check if container has valid dimensions before attempting resize
    const rect = container.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      setTimeout(() => {
        createPixelArt(img, canvas);
      }, 150);
    }
  };

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Initial setup effect - only when visible
  useEffect(() => {
    if (!isIntersecting) return;
    
    const img = imgRef.current;
    const canvas = canvasRef.current;
    
    if (img && canvas && img.complete && img.naturalWidth > 0) {
      handleImageLoad();
    }
  }, [imageSrc, isDark, isIntersecting]);

  // Resize listener
  useEffect(() => {
    const handleResizeDebounced = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', handleResizeDebounced);
    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
      clearTimeout(window.resizeTimeout);
    };
  }, [pixelArtReady]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      {/* Original Image (hidden, used for pixel art generation) */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={() => {
          // Silently handle image load errors
          setPixelArtReady(false);
        }}
        style={{ display: 'none' }}
        crossOrigin="anonymous"
      />
      
      {/* Background Image Display */}
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat transition-all duration-500 ease-out ${
          isHovered && pixelArtReady ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
        style={{ 
          backgroundImage: `url('${imageSrc}')`,
          backgroundPosition: backgroundPosition,
        }}
      />
      
      {/* Pixel Art Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
          isHovered && pixelArtReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ 
          imageRendering: 'pixelated',
          imageRendering: '-webkit-optimize-contrast',
          imageRendering: 'crisp-edges',
        }}
      />
      
      {/* Overlay Effects */}
      {isHovered && pixelArtReady && (
        <div className="absolute inset-0">
          {/* Scan lines effect */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 2px,
                ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 4px
              )`
            }}
          />
          
          {/* Subtle glow effect */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
              isDark ? 'bg-blue-500/5' : 'bg-purple-500/5'
            }`}
          />
        </div>
      )}
      
      {/* Loading state */}
      {!pixelArtReady && (
        <div className={`absolute inset-0 flex items-center justify-center ${
          isDark ? 'bg-gray-800/50' : 'bg-gray-200/50'
        } backdrop-blur-sm`}>
          <div className={`w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`} />
        </div>
      )}
    </div>
  );
}