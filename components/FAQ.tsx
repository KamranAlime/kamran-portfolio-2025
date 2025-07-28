import { useState } from 'react';
import svgPaths from "../imports/svg-7ay9lnnqqg";
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What kind of projects do you work on?",
    answer: "I work on a variety of design projects including product design (UI/UX), mobile/web interfaces, branding, logo design, and visual storytelling. I'm also exploring AI tools and Figma-to-code workflows to speed up and enhance the design process."
  },
  {
    id: 2,
    question: "Are you open to freelance or full-time opportunities?",
    answer: "Yes, I'm open to both freelance and full-time roles — especially if the project aligns with my design philosophy and allows room for creativity and problem-solving."
  },
  {
    id: 3,
    question: "What tools do you use?",
    answer: "My main tools include Figma, Adobe Creative Suite (Photoshop, Illustrator), Miro, and AI-based tools for automation and code generation. I also use InVision and Webflow depending on the project."
  },
  {
    id: 4,
    question: "What makes your design approach unique?",
    answer: "I blend user-centered design thinking with strategic storytelling. My process is research-driven, collaborative, and focused on building meaningful experiences — not just beautiful interfaces."
  },
  {
    id: 5,
    question: "Do you do branding as well?",
    answer: "Yes! I offer full branding services — from logo design to complete brand identity systems including color palettes, typography, and brand guidelines."
  },
  {
    id: 6,
    question: "Do you mentor or teach design?",
    answer: "Yes, I occasionally mentor beginner designers and share insights on design systems, workflows, and portfolio building. I'm also open to guest sessions or workshops."
  },
  {
    id: 7,
    question: "Where are you based? Can you work remotely?",
    answer: "I'm based in Faisalabad, Pakistan, and I work remotely with clients and teams across different time zones."
  },
  {
    id: 8,
    question: "What industries have you worked in?",
    answer: "I've worked across several industries including tech, education, e-commerce, health, and startups. I enjoy adapting my design approach to different sectors and user needs."
  },
  {
    id: 9,
    question: "How can I contact you?",
    answer: "You can reach out via my contact form or directly email me at hey@kamranali.me. I'm also available on LinkedIn and Behance."
  }
];

function FAQHeader({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-center w-full max-w-[595px] mx-auto px-4">
      <div className={`font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-xl sm:text-2xl lg:text-[24px] w-full transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#5a5a5a]'}`}>
        <p className="leading-[normal]">
          <span className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#303030]'}`}>
            Frequently asked questions
          </span>
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            {" "}
          </span>
          (FAQ)
        </p>
      </div>
      <div className={`font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-sm sm:text-base lg:text-[16px] w-full transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#757575]'}`}>
        <p className="block leading-[1.6] mb-0">
          These are the most commonly asked questions about me.
        </p>
        <p className="leading-[1.6]">
          <span>{`Can't find what you're looking for? Just`}</span>
          <span className={`transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-[#0e529b]'}`}> </span>
          <a
            className={`[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pixel transition-all duration-300 hover:scale-105 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#0e529b] hover:text-blue-600'}`}
            href="mailto:hey@kamranali.me"
            style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
          >
            <span className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] leading-[1.6]">
              email
            </span>
          </a>
          !
        </p>
      </div>
    </div>
  );
}

function ChevronIcon({ isOpen, isDark }: { isOpen: boolean; isDark: boolean }) {
  return (
    <div 
      className={`relative shrink-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p357a58b0}
          fill={isDark ? "#ffffff" : "var(--fill-0, black)"}
          fillRule="evenodd"
          className="transition-colors duration-300"
        />
      </svg>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle, isDark }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
  isDark: boolean;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <button
        onClick={onToggle}
        className={`box-border content-stretch flex flex-row items-center justify-between px-2 py-1.5 relative shrink-0 w-full cursor-pixel transition-all duration-300 hover:scale-[1.01] rounded-lg`}
        style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
      >
        <div className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-sm sm:text-base lg:text-[16px] text-left transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-neutral-700'} flex-1 pr-4`}>
          <p className="block leading-[normal] text-left">
            {item.id}. {item.question}
          </p>
        </div>
        <ChevronIcon isOpen={isOpen} isDark={isDark} />
      </button>
      
      {/* Expandable Answer */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-xs sm:text-sm lg:text-[14px] text-left w-full px-2 py-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-[#8c8c8c]'}`}>
          <p className="block leading-[1.5]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQList({ isDark }: { isDark: boolean }) {
  const [openItem, setOpenItem] = useState<number | null>(1); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-6 lg:gap-8 items-start justify-start p-0 relative shrink-0 w-full max-w-[766px] mx-auto px-4">
      {faqData.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openItem === item.id}
          onToggle={() => toggleItem(item.id)}
          isDark={isDark}
        />
      ))}
    </div>
  );
}

function FAQContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 lg:gap-10 items-center justify-start p-0 relative shrink-0 w-full">
      <FAQHeader isDark={isDark} />
      <FAQList isDark={isDark} />
    </div>
  );
}

export default function FAQ({ isDark }: { isDark: boolean }) {
  return (
    <div 
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 sm:px-6 lg:px-0 py-6 lg:py-[34px] relative w-full transition-colors duration-500"
      style={{ backgroundColor: isDark ? '#121212' : '#FFFFFF' }}
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full max-w-[1160px] mx-auto">
        <FAQContent isDark={isDark} />
      </div>
    </div>
  );
}