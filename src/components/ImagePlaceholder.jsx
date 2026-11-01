import { useState } from 'react';

/**
 * ImagePlaceholder component
 * Allows the user to either:
 * 1) Display the actual image (if provided and valid)
 * 2) Display a clean, cute empty placeholder ("gambar kosong") as requested by the user
 * 3) Handle loading errors gracefully with a styled fallback box
 */
export const ImagePlaceholder = ({
  src,
  alt = 'Image',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  aspectRatio = 'aspect-square',
  label = 'Gambar Kosong',
  sublabel = 'Ganti gambar di sini',
  icon = '🖼️',
  forcePlaceholder = false,
  rounded = 'rounded-2xl',
}) => {
  const [hasError, setHasError] = useState(false);

  // If forcePlaceholder is active or no src or image failed to load, show clean placeholder
  if (forcePlaceholder || !src || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center border-2 border-dashed border-[#01B8DA]/40 bg-white/60 hover:bg-white/80 transition-all p-3 text-center ${aspectRatio} ${rounded} ${className}`}
        title="Klik atau ganti gambar di siteData.js"
      >
        <span className="text-2xl sm:text-3xl mb-1 filter drop-shadow-sm select-none animate-pulse">
          {icon}
        </span>
        <span className="font-lilita text-[#01B8DA] text-xs sm:text-sm tracking-wide leading-tight">
          {label}
        </span>
        {sublabel && (
          <span className="font-rounded text-[10px] sm:text-xs text-[#047F96]/70 mt-0.5">
            {sublabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    </div>
  );
};
