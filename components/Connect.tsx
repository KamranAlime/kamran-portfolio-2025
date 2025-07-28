import svgPaths from "../imports/svg-6e6z8y5ffj";
import pixelCursor from "figma:asset/f30d8d9b6e85217b054a41b579a259d65bbaf425.png";

function ContactInfo({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 ${isDark ? 'text-white' : 'text-[#1e1e1e]'} text-xl sm:text-2xl lg:text-[24px] w-full transition-colors duration-300`}>
        <p className="block leading-[normal]">{`Let's Connect`}</p>
      </div>
      <div className={`font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 ${isDark ? 'text-gray-400' : 'text-[#757575]'} text-sm sm:text-base lg:text-[16px] w-full transition-colors duration-300`}>
        <p className="block leading-[1.6]">{`Feel free to reach out for collaborations or just a friendly hello `}</p>
      </div>
    </div>
  );
}

function ContactDetails({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-center w-full">
      <ContactInfo isDark={isDark} />
      <a 
        href="mailto:hey@kamranali.me"
        className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#0e529b] hover:text-[#0a3d7a]'} text-sm sm:text-base lg:text-[16px] w-full cursor-pixel transition-all duration-300 hover:scale-105 hover:underline`}
        style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
      >
        <p className="block leading-[1.6]">hey@kamranali.me</p>
      </a>
    </div>
  );
}

function LinkedInIcon({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://www.linkedin.com/in/kamranalime/"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative shrink-0 size-6 sm:size-7 cursor-pixel transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'hover:drop-shadow-[0_4px_8px_rgba(59,130,246,0.5)]' : 'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'}`}
      data-name="mdi:linkedin"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="mdi:linkedin">
          <path
            d={svgPaths.p196d3100}
            fill={isDark ? "#ffffff" : "var(--fill-0, #5A5A5A)"}
            id="Vector"
            className="transition-colors duration-300"
          />
        </g>
      </svg>
    </a>
  );
}

function FacebookIcon({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://www.facebook.com/KamranAliProductDesigner"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative shrink-0 size-6 sm:size-7 cursor-pixel transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'hover:drop-shadow-[0_4px_8px_rgba(59,130,246,0.5)]' : 'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'}`}
      data-name="ic:baseline-facebook"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="ic:baseline-facebook">
          <path
            d={svgPaths.p32517500}
            fill={isDark ? "#ffffff" : "var(--fill-0, #5A5A5A)"}
            id="Vector"
            className="transition-colors duration-300"
          />
        </g>
      </svg>
    </a>
  );
}

function InstagramIcon({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://www.instagram.com/kamranalime"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative shrink-0 size-6 sm:size-7 cursor-pixel transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'hover:drop-shadow-[0_4px_8px_rgba(236,72,153,0.5)]' : 'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'}`}
      data-name="ri:instagram-fill"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="ri:instagram-fill">
          <path
            d={svgPaths.p3378df00}
            fill={isDark ? "#ffffff" : "var(--fill-0, #5A5A5A)"}
            id="Vector"
            className="transition-colors duration-300"
          />
        </g>
      </svg>
    </a>
  );
}

function TwitterIcon({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://x.com/KamranAlime"
      target="_blank"
      rel="noopener noreferrer"
      className={`h-6 sm:h-7 relative shrink-0 w-5 sm:w-6 cursor-pixel transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'hover:drop-shadow-[0_4px_8px_rgba(59,130,246,0.5)]' : 'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'}`}
      data-name="fa6-brands:square-x-twitter"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 28"
      >
        <g id="fa6-brands:square-x-twitter">
          <path
            d={svgPaths.p1f54300}
            fill={isDark ? "#ffffff" : "var(--fill-0, #5A5A5A)"}
            id="Vector"
            className="transition-colors duration-300"
          />
        </g>
      </svg>
    </a>
  );
}

function DribbbleIcon({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://dribbble.com/kamranalime"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative shrink-0 size-6 sm:size-7 cursor-pixel transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'hover:drop-shadow-[0_4px_8px_rgba(236,72,153,0.5)]' : 'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'}`}
      data-name="streamline-flex:dribble-solid"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#clip0_26_602)" id="streamline-flex:dribble-solid">
          <path
            clipRule="evenodd"
            d={svgPaths.p6836680}
            fill={isDark ? "#ffffff" : "var(--fill-0, #5A5A5A)"}
            fillRule="evenodd"
            id="Vector"
            className="transition-colors duration-300"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_602">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function BehanceIcon({ isDark }: { isDark: boolean }) {
  return (
    <a
      href="https://www.behance.net/kamranalime"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative shrink-0 size-6 sm:size-7 cursor-pixel transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark ? 'hover:drop-shadow-[0_4px_8px_rgba(59,130,246,0.5)]' : 'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]'}`}
      data-name="fa:behance-square"
      style={{ cursor: `url('${pixelCursor}') 12 12, pointer` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="fa:behance-square">
          <path
            d={svgPaths.p2fa89a00}
            fill={isDark ? "#ffffff" : "var(--fill-0, #5A5A5A)"}
            id="Vector"
            className="transition-colors duration-300"
          />
        </g>
      </svg>
    </a>
  );
}

function SocialIcons({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 sm:gap-8 lg:gap-9 items-center justify-center p-0 relative shrink-0">
      <LinkedInIcon isDark={isDark} />
      <FacebookIcon isDark={isDark} />
      <InstagramIcon isDark={isDark} />
      <TwitterIcon isDark={isDark} />
      <DribbbleIcon isDark={isDark} />
      <BehanceIcon isDark={isDark} />
    </div>
  );
}

function ContactSection({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 sm:gap-8 items-center justify-start p-0 relative shrink-0 w-full">
      <ContactDetails isDark={isDark} />
      <SocialIcons isDark={isDark} />
    </div>
  );
}

function Copyright({ isDark }: { isDark: boolean }) {
  return (
    <div className={`font-['Work_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 ${isDark ? 'text-gray-400' : 'text-[#000000]'} text-sm sm:text-base lg:text-[16px] text-center w-full transition-colors duration-300`}>
      <p className="block leading-[1.6]">© 2025 by Kamran Ali</p>
    </div>
  );
}

function ConnectContent({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 sm:gap-10 items-center justify-start p-0 relative shrink-0 w-full max-w-[595px] mx-auto px-4 sm:px-6 lg:px-0">
      <ContactSection isDark={isDark} />
      <Copyright isDark={isDark} />
    </div>
  );
}

function Divider({ isDark }: { isDark: boolean }) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 1920 1"
        >
          <line
            id="Line 82"
            stroke={isDark ? "rgba(64, 64, 64, 1)" : "rgba(217, 217, 217, 1)"}
            x2="1920"
            y1="0.5"
            y2="0.5"
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Connect({ isDark }: { isDark: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 sm:gap-16 items-center justify-start p-0 relative w-full">
      <Divider isDark={isDark} />
      <ConnectContent isDark={isDark} />
    </div>
  );
}