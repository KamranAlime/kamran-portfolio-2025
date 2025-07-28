import React from 'react';
import { X } from 'lucide-react';
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  projectName?: string;
}

export default function CaseStudyModal({ isOpen, onClose, isDark, projectName }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 backdrop-blur-md transition-all duration-500 ${
          isDark ? 'bg-black/60' : 'bg-black/30'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative max-w-lg w-full mx-auto transform transition-all duration-500 modal-enter ${
        isDark 
          ? 'bg-[#1a1a1a] border border-gray-700 shadow-2xl shadow-black/50' 
          : 'bg-white border border-gray-200 shadow-2xl shadow-black/10'
      } rounded-2xl overflow-hidden`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDark 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
          }`}
          style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="px-8 pt-8 pb-6">
          <div className="text-center">
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              isDark 
                ? 'bg-blue-900/30 border border-blue-700/50' 
                : 'bg-blue-50 border border-blue-200'
            }`}>
              <svg 
                className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className={`font-['Inter:Bold',_sans-serif] font-bold text-xl mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {projectName ? `${projectName} Case Study` : 'Case Study'}
            </h3>

            {/* Description */}
            <p className={`font-['Inter:Regular',_sans-serif] text-base leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm currently working on documenting this project's design process, challenges, and solutions. 
              The detailed case study will be available soon!
            </p>

            {/* Status Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isDark 
                ? 'bg-yellow-900/30 border border-yellow-700/50 text-yellow-400' 
                : 'bg-yellow-50 border border-yellow-200 text-yellow-700'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                isDark ? 'bg-yellow-400' : 'bg-yellow-600'
              }`} />
              Coming Soon
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`px-8 pb-8 border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="pt-6 text-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Want to know more about this project?{' '}
              <a 
                href="mailto:hello@kamran.design" 
                className={`font-medium transition-colors duration-300 hover:underline ${
                  isDark 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
                style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}