// Cute Pastel Marine Doodles matching the user's design image

// 1. Cute Pink / Coral Starfish
export const Starfish = ({ className = '', size = 26, color = '#FCAFB7' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none filter drop-shadow-sm pointer-events-none ${className}`}
  >
    <path
      d="M50 8 C53 25 58 35 73 38 C90 41 97 50 85 64 C73 78 68 83 71 95 C62 88 56 80 50 80 C44 80 38 88 29 95 C32 83 27 78 15 64 C3 50 10 41 27 38 C42 35 47 25 50 8 Z"
      fill={color}
      stroke="#ffffff"
      strokeWidth="3.5"
      strokeLinejoin="round"
      opacity="0.95"
    />
    {/* Cute center dots */}
    <circle cx="50" cy="50" r="3.5" fill="#ffffff" opacity="0.85" />
    <circle cx="50" cy="40" r="2.5" fill="#ffffff" opacity="0.85" />
    <circle cx="50" cy="60" r="2.5" fill="#ffffff" opacity="0.85" />
    <circle cx="40" cy="50" r="2.5" fill="#ffffff" opacity="0.85" />
    <circle cx="60" cy="50" r="2.5" fill="#ffffff" opacity="0.85" />
  </svg>
);

// 2. Cute Yellow Pastel Scallop Seashell
export const Seashell = ({ className = '', size = 26, color = '#FEE383' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none filter drop-shadow-sm pointer-events-none ${className}`}
  >
    <path
      d="M15 70 C5 45 20 15 50 15 C80 15 95 45 85 70 C75 82 25 82 15 70 Z"
      fill={color}
      stroke="#ffffff"
      strokeWidth="3.5"
      opacity="0.95"
    />
    {/* Shell ribs */}
    <path d="M50 15 L50 78" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M50 15 Q35 45 32 75" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M50 15 Q65 45 68 75" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M50 15 Q22 45 20 68" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M50 15 Q78 45 80 68" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    {/* Shell base hinge */}
    <path d="M35 78 C35 84 65 84 65 78 Z" fill={color} stroke="#ffffff" strokeWidth="2.5" />
  </svg>
);

// 3. Cute White/Cyan Swirl Bubble
export const Swirl = ({ className = '', size = 22, color = 'rgba(255, 255, 255, 0.85)' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M50 50 A 6 6 0 0 1 56 56 A 14 14 0 0 1 42 70 A 24 24 0 0 1 26 46 A 34 34 0 0 1 60 16 A 44 44 0 0 1 94 60"
      stroke={color}
      strokeWidth="5.5"
      strokeLinecap="round"
    />
  </svg>
);

// 4. Cute 4-Point Pink Sparkle Star
export const Sparkle = ({ className = '', size = 22, color = '#FBA7BE' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none filter drop-shadow-sm pointer-events-none ${className}`}
  >
    <path
      d="M50 6 C50 35 65 50 94 50 C65 50 50 65 50 94 C50 65 35 50 6 50 C35 50 50 35 50 6 Z"
      fill={color}
      stroke="#ffffff"
      strokeWidth="3"
      opacity="0.9"
    />
  </svg>
);

// 5. Picket Fence Divider (Moving left or right continuously)
export const PicketFence = ({ direction = 'left' }) => {
  return (
    <div className="w-full overflow-hidden py-3 sm:py-4 bg-white select-none border-y border-[#BEE7F5]/50">
      <div className={`flex w-[200%] ${direction === 'left' ? 'animate-fence-left' : 'animate-fence-right'}`}>
        {/* First Half */}
        <div className="flex w-1/2 justify-between items-center px-1">
          {Array.from({ length: 42 }).map((_, i) => (
            <div
              key={`fence-1-${i}`}
              className="w-[2.5px] sm:w-[3px] h-8 sm:h-11 bg-[#BEE7F5] rounded-full mx-[2px] sm:mx-1 flex-shrink-0"
            />
          ))}
        </div>
        {/* Second Half (duplicate for seamless loop) */}
        <div className="flex w-1/2 justify-between items-center px-1">
          {Array.from({ length: 42 }).map((_, i) => (
            <div
              key={`fence-2-${i}`}
              className="w-[2.5px] sm:w-[3px] h-8 sm:h-11 bg-[#BEE7F5] rounded-full mx-[2px] sm:mx-1 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. Wavy Yellow Ribbon with undulating "blooamarine" text
// "garis meliuk liuk dapat bergerak ditempat dengan warna FFF3A1 dan di dalamnya terdapat nama “blooamarine”
//  yang meliuk liuk (ga datar spt di contoh) mengikuti bg kuning itu ke kanan dengan warna 73CAFE,
//  font lilita one dan inner shadow putih."
export const WavyRibbon = () => {
  return (
    <div className="relative w-full overflow-hidden py-2 sm:py-4 animate-wave-sway select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1000 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Wave ribbon guide curve path that moves left to right */}
          <path
            id="ribbonWavePath"
            d="M -50 82 Q 130 135 320 75 T 700 80 T 1080 75"
            fill="none"
          />
          {/* Subtle drop shadow for the yellow band */}
          <filter id="ribbonShadow" x="-10%" y="-20%" width="120%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#01B8DA" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* The Yellow Ribbon Band (#FFF3A1) curving across */}
        <path
          d="M -50 40 
             Q 130 95 320 35 
             T 700 40 
             T 1080 35 
             L 1080 120 
             Q 900 125 700 120 
             T 320 115 
             T -50 120 
             Z"
          fill="#FFF3A1"
          filter="url(#ribbonShadow)"
        />

        {/* Undulating text following the ribbon wave curve to the right */}
        <text
          fill="#73CAFE"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinejoin="round"
          className="font-lilita text-2xl sm:text-3xl tracking-widest uppercase font-bold"
          style={{ paintOrder: 'stroke fill' }}
          dy="10"
        >
          <textPath href="#ribbonWavePath" startOffset="0%">
            blooamarine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blooamarine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blooamarine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blooamarine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blooamarine
          </textPath>
        </text>
      </svg>
    </div>
  );
};

// 7. Curved Wave Bottom for sections
export const WaveBottom = ({ fill = "#ffffff", className = "" }) => (
  <div className={`w-full overflow-hidden leading-none select-none ${className}`} aria-hidden="true">
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className="w-full h-8 sm:h-12 md:h-16 block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 C 300 55 900 55 1200 0 L 1200 60 L 0 60 Z"
        fill={fill}
      />
    </svg>
  </div>
);

// 8. Custom Bubble SVG Logo matching the exact cute lettering in the design
export const BubbleLogo = ({ size = "normal" }) => {
  return (
    <span
      className={`font-lilita tracking-tight select-none inline-block text-white filter drop-shadow-sm ${
        size === "large" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
      }`}
      style={{
        textShadow: `
          -2px -2px 0 #73CAFE,
          2px -2px 0 #73CAFE,
          -2px 2px 0 #73CAFE,
          2px 2px 0 #73CAFE,
          0 3px 0 #047F96
        `,
      }}
    >
      blooamarine
    </span>
  );
};
