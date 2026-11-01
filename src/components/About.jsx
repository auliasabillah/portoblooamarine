import { siteData } from '../config/siteData';
import { PicketFence } from './Doodles';
import { ImagePlaceholder } from './ImagePlaceholder';

export const About = () => {
  return (
    <section id="about" className="relative w-full bg-white select-none">
      {/* 1. Top Picket Fence moving to the LEFT */}
      <PicketFence direction="left" />

      {/* Main About Me Content */}
      <div className="max-w-3xl mx-auto px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10">
          
          {/* Profile Circle with Arched "ABOUT ME" Title
              "“about me ” dengan warna 01B8DA, font lilita one dan inner shadow putih yang melengkung mengikuti lingkaran profile"
          */}
          <div className="flex flex-col items-center flex-shrink-0 relative">
            {/* Arched SVG Text */}
            <div className="w-48 h-16 sm:w-56 sm:h-20 -mb-4 sm:-mb-6 relative z-10">
              <svg
                viewBox="0 0 240 80"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Arc curve that curves over the circular profile */}
                  <path
                    id="profileArc"
                    d="M 25 75 A 95 95 0 0 1 215 75"
                    fill="none"
                  />
                </defs>
                <text
                  fill="#01B8DA"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  className="font-lilita text-2xl sm:text-3xl tracking-widest font-bold"
                  style={{ paintOrder: 'stroke fill' }}
                >
                  <textPath
                    href="#profileArc"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    ABOUT ME
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Circular Profile Picture / Placeholder */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#01B8DA] to-[#89D0F0] shadow-md transition-transform hover:scale-105 duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <ImagePlaceholder
                  src={siteData.about.personImage}
                  alt={siteData.about.personAlt}
                  aspectRatio="aspect-square"
                  className="w-full h-full rounded-full"
                  imgClassName="w-full h-full object-cover rounded-full"
                  label="Foto Profil"
                  sublabel="Ganti di public/images/person.png"
                  icon="👩‍🎨"
                  rounded="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Description / Bio Text
              "keterangan dengan warna 047F96 dan font lilita one"
          */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <p className="font-lilita text-[#047F96] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose tracking-wide">
              {siteData.about.bio}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Bottom Picket Fence moving to the RIGHT */}
      <PicketFence direction="right" />
    </section>
  );
};
