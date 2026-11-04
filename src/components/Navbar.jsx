import { useState } from 'react';
import { siteData } from '../config/siteData';
import { BubbleLogo } from './Doodles';


export const Navbar = ({ activeSection, setActiveSection }) => {
  const [useCustomPlaceholder, setUseCustomPlaceholder] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId.replace('#', ''));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#89D0F0]/95 backdrop-blur-md border-b border-white/30 shadow-sm transition-all duration-200">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group flex-shrink-0"
          aria-label="blooamarine home"
        >
          {siteData.brand.logoImage && !useCustomPlaceholder ? (
            <img
              src={siteData.brand.logoImage}
              alt={siteData.brand.name}
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              onError={() => setUseCustomPlaceholder(true)}
            />
          ) : (
            <BubbleLogo size="normal" />
          )}
        </a>

        {/* Navigation Buttons:
            - Color #01B8DA
            - Active: enlarged (scale-105/110), opacity 100%, font Lilita One, text white
            - Inactive: smaller (scale-90/95), opacity 50%, font Lilita One, text white
            - Hover inactive: opacity becomes 100%, container enlarges (hover:scale-105)
        */}
        <nav className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap justify-end">
          {siteData.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, sectionId)}
                className={`font-lilita text-white rounded-full transition-all duration-200 select-none tracking-wide text-xs sm:text-sm py-1.5 px-3 sm:px-4 ${
                  isActive
                    ? 'bg-[#01B8DA] opacity-100 scale-105 sm:scale-110 shadow-md ring-2 ring-white/70'
                    : 'bg-[#01B8DA] opacity-50 scale-90 sm:scale-95 hover:opacity-100 hover:scale-105 active:scale-95'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
