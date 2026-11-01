import { siteData } from '../config/siteData';
import { BubbleLogo } from './Doodles';

export const Footer = () => {
  return (
    <footer className="w-full bg-white pb-10 sm:pb-14 px-4 select-none">
      {/* Container dengan stroke tipis:
          "credit dengan container stroke tipis yg berisi logo (ku ganti sendiri, buat gambar kosong aja)
           dibawahnya c 2026, pages, dan contact berwarna 047F96 font Arial Rounded MT Bold"
      */}
      <div className="max-w-xl mx-auto rounded-3xl border border-[#047F96]/30 bg-white/95 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-8">
          
          {/* Left Column: Logo & Copyright */}
          <div className="flex flex-col items-center sm:items-start">
            <a href="#home" className="inline-block mb-3 transition-transform hover:scale-105">
              {siteData.brand.logoImage ? (
                <img
                  src={siteData.brand.logoImage}
                  alt={siteData.brand.name}
                  className="h-8 sm:h-9 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              {/* Fallback / Bubble Typography Logo */}
              <div className="block">
                <BubbleLogo size="normal" />
              </div>
            </a>

            {/* ©2026 */}
            <div className="flex items-center gap-1 text-[#047F96] font-rounded font-bold text-sm sm:text-base">
              <span>©</span>
              <span>{siteData.brand.year}</span>
            </div>
          </div>

          {/* Right Column: Pages & Contact */}
          <div className="flex items-start gap-10 sm:gap-14 text-left">
            {/* Pages Column */}
            <div className="flex flex-col">
              <h4 className="font-rounded font-bold text-[#047F96] text-sm sm:text-base mb-2">
                Pages
              </h4>
              <ul className="flex flex-col gap-1">
                {siteData.footer.pages.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-rounded text-xs sm:text-sm text-[#047F96] hover:text-[#01B8DA] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col">
              <h4 className="font-rounded font-bold text-[#047F96] text-sm sm:text-base mb-2">
                Contact
              </h4>
              <ul className="flex flex-col gap-1">
                {siteData.footer.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-rounded text-xs sm:text-sm text-[#047F96] hover:text-[#01B8DA] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <span className="font-rounded text-xs sm:text-sm text-[#047F96]">
                    ...
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
