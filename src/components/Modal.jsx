import { useEffect } from 'react';

export const Modal = ({ item, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#01B8DA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#CCF5FF] text-[#047F96] font-lilita text-lg flex items-center justify-center hover:bg-[#01B8DA] hover:text-white transition-all shadow-sm"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Image */}
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#89D0F0]/20 border border-[#BEE7F5]">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Title */}
        <h3 className="font-lilita text-2xl sm:text-3xl text-[#01B8DA] tracking-wide mb-3 text-inner-shadow-subtle">
          {item.title}
        </h3>

        {/* Category Badge */}
        {item.category && (
          <span className="inline-block bg-[#CCF5FF] text-[#047F96] font-lilita text-xs px-3 py-1 rounded-full mb-3">
            {item.category}
          </span>
        )}

        {/* Description */}
        <p className="font-lilita text-[#047F96] text-sm sm:text-base leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Tools used */}
        {item.tools && (
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-[#CCF5FF]">
            <span className="font-lilita text-xs text-[#047F96]/80 mr-1">Tools:</span>
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="bg-[#89D0F0]/30 text-[#047F96] font-rounded text-xs px-2.5 py-0.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
