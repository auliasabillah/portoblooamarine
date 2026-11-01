import { siteData } from '../config/siteData';

export const Socials = () => {
  return (
    <section id="contact" className="relative w-full bg-white py-10 sm:py-14 select-none">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Title:
            "Find Me on Social Media!"
            - Color: #01B8DA
            - Font: Lilita One
            - White inner shadow
        */}
        <h2 className="font-lilita text-2xl sm:text-4xl text-[#01B8DA] text-inner-shadow-white tracking-wide mb-6 sm:mb-8 leading-tight">
          {siteData.socials.title}
        </h2>

        {/* 3 Social Media Buttons:
            - IG, Twitter, Pinterest
            - Color: #047F96
            - Container: Persegi melengkung warna #CCF5FF
        */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Instagram */}
          <a
            href={siteData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#CCF5FF] text-[#047F96] flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#b8efff] transition-all duration-200"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href={siteData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#CCF5FF] text-[#047F96] flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#b8efff] transition-all duration-200"
            aria-label="Twitter / X"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </a>

          {/* Pinterest */}
          <a
            href={siteData.socials.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#CCF5FF] text-[#047F96] flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#b8efff] transition-all duration-200"
            aria-label="Pinterest"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* WhatsApp Button:
            - "contact me!"
            - Font: Arial Rounded MT Bold
            - Color: 1EAA35
            - Container: Persegi panjang melengkung warna 8AFC9D
        */}
        <div className="flex justify-center">
          <a
            href={siteData.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#8AFC9D] text-[#1EAA35] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-rounded font-bold text-sm sm:text-base shadow-sm hover:scale-105 hover:shadow-md hover:bg-[#7dfa91] transition-all duration-200"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>{siteData.socials.whatsappLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
