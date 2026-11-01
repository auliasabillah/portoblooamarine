import { useState } from 'react';
import { siteData } from '../config/siteData';
import { Starfish, Seashell, Swirl, Sparkle, WaveBottom } from './Doodles';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Modal } from './Modal';

export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="portfolio" className="relative w-full bg-[#89D0F0] pt-10 sm:pt-14 overflow-hidden">
      {/* Scattered Little Marine Doodles matching the design */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Left Side Doodles */}
        <div className="absolute top-[6%] left-[6%] sm:left-[10%] animate-float">
          <Seashell size={26} color="#FEE383" />
        </div>
        <div className="absolute top-[18%] left-[4%] sm:left-[8%] animate-float-slow">
          <Starfish size={24} color="#FCAFB7" />
        </div>
        <div className="absolute top-[32%] left-[8%] sm:left-[14%] animate-float">
          <Swirl size={24} />
        </div>
        <div className="absolute top-[50%] left-[5%] sm:left-[9%] animate-float-slow">
          <Sparkle size={22} color="#FBA7BE" />
        </div>
        <div className="absolute top-[68%] left-[7%] sm:left-[12%] animate-float">
          <Swirl size={26} />
        </div>
        <div className="absolute top-[82%] left-[4%] sm:left-[8%] animate-float-slow">
          <Starfish size={26} color="#FCAFB7" />
        </div>

        {/* Right Side Doodles */}
        <div className="absolute top-[8%] right-[8%] sm:right-[12%] animate-float-slow">
          <Starfish size={26} color="#FCAFB7" />
        </div>
        <div className="absolute top-[22%] right-[5%] sm:right-[8%] animate-float">
          <Seashell size={26} color="#FEE383" />
        </div>
        <div className="absolute top-[40%] right-[7%] sm:right-[12%] animate-float-slow">
          <Swirl size={24} />
        </div>
        <div className="absolute top-[58%] right-[4%] sm:right-[7%] animate-float">
          <Seashell size={26} color="#FEE383" />
        </div>
        <div className="absolute top-[75%] right-[8%] sm:right-[14%] animate-float-slow">
          <Sparkle size={20} color="#FBA7BE" />
        </div>
        <div className="absolute top-[88%] right-[5%] sm:right-[9%] animate-float">
          <Seashell size={26} color="#FEE383" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 flex flex-col items-center">
        
        {/* Title Container:
            - "Let’s explore my works!"
            - Color #FEFDF8, font Lilita One
            - Container #01B8DA rounded with drop shadow #01B8DA
            - Beside title: floating seashell & starfish
        */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 select-none">
          {/* Left Floating Marine Charms */}
          <div className="flex items-center -space-x-1 sm:space-x-1 animate-float">
            <Seashell size={28} color="#F9AB6C" />
            <Starfish size={24} color="#EF6F4B" />
          </div>

          {/* Title Pill Badge */}
          <div className="bg-[#01B8DA] text-[#FEFDF8] font-lilita text-lg sm:text-2xl md:text-3xl px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full shadow-[0_6px_20px_#01B8DA] border-2 border-white/50 text-center tracking-wide text-inner-shadow-subtle hover:scale-105 transition-transform duration-200">
            {siteData.portfolio.badgeTitle}
          </div>

          {/* Right Floating Marine Charms */}
          <div className="flex items-center -space-x-1 sm:space-x-1 animate-float-slow">
            <Seashell size={28} color="#F9C878" />
            <Starfish size={24} color="#EF6F4B" />
          </div>
        </div>

        {/* 3 Project Cards Container:
            - Color: #73CAFE with drop shadow #FFF6BD (or dual soft pastel)
            - Inside: image (placeholder ready)
            - Title: #01B8DA font Lilita One with white inner shadow
            - Button "See more": white text, font Lilita One, container #01B8DA opacity 50% rounded,
              hover opacity 100%
        */}
        <div className="w-full max-w-2xl flex flex-col gap-5 sm:gap-7">
          {siteData.portfolio.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#73CAFE] rounded-3xl p-4 sm:p-6 shadow-[0_10px_25px_#FFF6BD] sm:shadow-[0_14px_30px_#FFF6BD] border-2 border-white/40 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_#FFF6BD]"
            >
              {/* Card Image / Placeholder */}
              <div className="w-full sm:w-1/2 aspect-[16/10] rounded-2xl overflow-hidden shadow-inner bg-white/70">
                <ImagePlaceholder
                  src={item.thumbnail}
                  alt={item.title}
                  aspectRatio="aspect-[16/10]"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  label={`Work #${index + 1}`}
                  sublabel="Ganti gambar karya"
                  icon="🎨"
                  rounded="rounded-2xl"
                />
              </div>

              {/* Card Title & "See more" Button */}
              <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left justify-between py-1 sm:py-2">
                <h3 className="font-lilita text-[#01B8DA] text-xl sm:text-2xl md:text-3xl text-inner-shadow-white tracking-wide leading-tight mb-4 select-none">
                  {item.title}
                </h3>

                {/* Button "See more":
                    - Text white, font Lilita One
                    - Container #01B8DA with 50% opacity, rounded
                    - Hover opacity 100% and expands
                */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="font-lilita text-white text-xs sm:text-sm py-2 px-6 sm:px-8 rounded-full bg-[#01B8DA]/50 hover:bg-[#01B8DA] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer select-none"
                >
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom of Portfolio is wavy ("dan diakhir halaman meliuk liuk") */}
      <WaveBottom fill="#ffffff" className="mt-4" />

      {/* Interactive Modal Popup when user clicks "See more" */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};
