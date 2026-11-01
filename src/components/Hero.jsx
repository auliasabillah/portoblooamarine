import { siteData } from '../config/siteData';
import { Starfish, Seashell, Swirl, Sparkle, WavyRibbon, WaveBottom } from './Doodles';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-[#89D0F0] pt-6 sm:pt-10 overflow-hidden">
      {/* Decorative Floating Marine Doodles matching the design */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Top Left */}
        <div className="absolute top-[8%] left-[8%] sm:left-[12%] animate-float">
          <Starfish size={28} color="#FCAFB7" />
        </div>
        <div className="absolute top-[20%] left-[5%] sm:left-[8%] animate-float-slow">
          <Swirl size={24} />
        </div>
        <div className="absolute top-[32%] left-[12%] sm:left-[18%] animate-float">
          <Seashell size={26} color="#FEE383" />
        </div>

        {/* Top Right */}
        <div className="absolute top-[10%] right-[10%] sm:right-[15%] animate-float-slow">
          <Sparkle size={24} color="#FBA7BE" />
        </div>
        <div className="absolute top-[22%] right-[5%] sm:right-[8%] animate-float">
          <Swirl size={26} />
        </div>
        <div className="absolute top-[32%] right-[14%] sm:right-[18%] animate-float-slow">
          <Seashell size={26} color="#FEE383" />
        </div>

        {/* Mid Left & Right */}
        <div className="absolute top-[52%] left-[6%] sm:left-[10%] animate-float-slow">
          <Sparkle size={20} color="#FBA7BE" />
        </div>
        <div className="absolute top-[65%] left-[10%] sm:left-[14%] animate-float">
          <Swirl size={22} />
        </div>
        <div className="absolute top-[75%] left-[4%] sm:left-[8%] animate-float-slow">
          <Seashell size={26} color="#FEE383" />
        </div>

        <div className="absolute top-[62%] right-[8%] sm:right-[12%] animate-float">
          <Starfish size={26} color="#FCAFB7" />
        </div>
        <div className="absolute top-[72%] right-[4%] sm:right-[7%] animate-float-slow">
          <Swirl size={24} />
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        {/* Wavy Yellow Ribbon (#FFF3A1) with undulating blooamarine text */}
        <div className="w-full relative mt-2 sm:mt-4">
          <WavyRibbon />

          {/* Central Mascot Illustration / Placeholder
              Sits right in the center, overlapping the wavy ribbon
          */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 filter drop-shadow-lg transition-transform hover:scale-105 duration-300">
              <ImagePlaceholder
                src={siteData.hero.mascotImage}
                alt={siteData.hero.mascotAlt}
                className="w-full h-full object-contain"
                imgClassName="w-full h-full object-contain filter drop-shadow-md"
                label="Maskot blooamarine"
                sublabel="Ganti di public/images/mascot.png"
                icon="👒"
                rounded="rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Welcome Title:
            "welcome to my portfolio!"
            - Color: #FFF3A1
            - Font: Lilita One
            - White inner shadow
        */}
        <div className="mt-8 sm:mt-12 mb-6 sm:mb-10 text-center px-4 relative z-20">
          <h1
            className="font-lilita text-2xl sm:text-4xl md:text-5xl text-[#FFF3A1] tracking-wide text-inner-shadow-white select-none leading-tight"
          >
            {siteData.hero.welcomeText}
          </h1>
        </div>
      </div>

      {/* Bottom curved slightly into the next section */}
      <WaveBottom fill="#ffffff" className="mt-2" />
    </section>
  );
};
