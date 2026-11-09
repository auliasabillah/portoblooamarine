import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const TEAL = "#047F96";
const CYAN = "#01B8DA";
const SKY = "#89D0F0";

const CSS = `
.bm-zoom{cursor:zoom-in;transition:transform .25s ease}
.bm-zoom:hover{transform:scale(1.03)}

@keyframes bmLbFade{from{opacity:0}to{opacity:1}}
@keyframes bmLbPop{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}
@keyframes bmLbImg{from{opacity:0}to{opacity:1}}

/* latar: putih tipis + blur, halaman di belakang masih terlihat */
.bmlb-overlay{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;
  background:rgba(255,255,255,.3);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:bmLbFade .25s ease-out}

/* panel pop-up: rasio 3:2 seperti desain */
.bmlb-panel{position:relative;box-sizing:border-box;display:flex;align-items:center;justify-content:center;
  width:min(76vw,105vh,900px);aspect-ratio:3/2;padding:24px 72px 40px;background:#fff;
  border:3px solid ${TEAL};border-radius:32px;box-shadow:0 14px 44px rgba(4,127,150,.22);
  animation:bmLbPop .3s ease-out;touch-action:pan-y}

.bmlb-img{width:100%;height:100%;object-fit:contain;user-select:none;-webkit-user-drag:none;animation:bmLbImg .25s ease-out}

.bmlb-close{position:absolute;top:-16px;right:-16px;width:38px;height:38px;display:grid;place-items:center;cursor:pointer;
  border-radius:50%;background:#fff;border:2.5px solid ${TEAL};color:${TEAL};box-shadow:0 3px 10px rgba(4,127,150,.25);
  transition:background .2s,border-color .2s,color .2s,transform .3s}
.bmlb-close:hover,.bmlb-close:focus-visible{background:${CYAN};border-color:${CYAN};color:#fff;transform:rotate(90deg)}

.bmlb-nav{--ty:-50%;position:absolute;top:50%;width:38px;height:38px;display:grid;place-items:center;cursor:pointer;
  border:0;border-radius:50%;background:${SKY};color:${TEAL};transform:translateY(var(--ty));
  transition:background .2s,color .2s,transform .2s}
.bmlb-nav:hover{background:${CYAN};color:#fff;transform:translateY(var(--ty)) scale(1.1)}
.bmlb-prev{left:16px}
.bmlb-next{right:16px}

.bmlb-close:focus-visible,.bmlb-nav:focus-visible{outline:3px solid rgba(1,184,218,.45);outline-offset:2px}

.bmlb-count{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);color:${TEAL};opacity:.85;
  font:700 12px 'Arial Rounded MT Bold','Arial Rounded MT',Arial,sans-serif;letter-spacing:.04em}

/* tablet portrait / layar tinggi: pop-up besar, panah di bawah */
@media (max-width:1023px), (orientation:portrait){
  .bmlb-panel{width:92vw;max-width:1100px;aspect-ratio:auto;height:min(80vh,1000px);padding:28px 24px 78px;border-radius:30px}
  .bmlb-close{top:-14px;right:-10px;width:40px;height:40px}
  .bmlb-nav{--ty:0;top:auto;bottom:18px;width:44px;height:44px}
  .bmlb-prev{left:calc(50% - 88px)}
  .bmlb-next{right:auto;left:calc(50% + 44px)}
  .bmlb-count{bottom:32px;font-size:13px}
}

/* tablet landscape (layar sentuh): pop-up lebih besar dari laptop */
@media (pointer:coarse) and (min-width:1024px) and (orientation:landscape){
  .bmlb-panel{width:min(88vw,130vh,1200px);padding:26px 88px 44px}
  .bmlb-nav{width:44px;height:44px}
  .bmlb-close{width:42px;height:42px}
}

/* HP: tetap ukuran sebelumnya */
@media (max-width:767px){
  .bmlb-panel{width:90vw;height:min(62vh,520px);padding:22px 14px 66px;border-radius:26px}
  .bmlb-close{top:-12px;right:-8px;width:34px;height:34px}
  .bmlb-nav{width:34px;height:34px;bottom:14px}
  .bmlb-prev{left:calc(50% - 74px)}
  .bmlb-next{left:calc(50% + 40px)}
  .bmlb-count{bottom:24px;font-size:12px}
}

@media (prefers-reduced-motion:reduce){
  .bmlb-overlay,.bmlb-panel,.bmlb-img{animation:none}
  .bm-zoom,.bmlb-close,.bmlb-nav{transition:none}
}
`;

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {dir === "left" ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
  </svg>
);

function Lightbox({ items, start, onClose }) {
  const [i, setI] = useState(start);
  const n = items.length;
  const cur = items[i];
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const go = useCallback((d) => setI((v) => (v + d + n) % n), [n]);

  // keyboard + kunci scroll halaman
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onCloseRef.current();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    const sw = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (sw > 0) body.style.paddingRight = `${sw}px`;
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, [go]);

  // preload gambar sebelum & sesudahnya
  useEffect(() => {
    [items[(i + 1) % n], items[(i - 1 + n) % n]].forEach((it) => {
      const im = new Image();
      im.src = it.src;
    });
  }, [i, items, n]);

  return createPortal(
    <div className="bmlb-overlay" role="dialog" aria-modal="true" aria-label="Pratinjau gambar" onClick={onClose}>
      <style>{CSS}</style>

      <div className="bmlb-panel" onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}>
        <img key={cur.src} className="bmlb-img" src={cur.src} alt={cur.alt} draggable={false} />

        <button ref={closeRef} type="button" className="bmlb-close" aria-label="Tutup" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {n > 1 && (
          <>
            <button type="button" className="bmlb-nav bmlb-prev" aria-label="Gambar sebelumnya" onClick={() => go(-1)}><Arrow dir="left" /></button>
            <span className="bmlb-count" aria-live="polite">{i + 1} / {n}</span>
            <button type="button" className="bmlb-nav bmlb-next" aria-label="Gambar berikutnya" onClick={() => go(1)}><Arrow dir="right" /></button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

/* Bungkus area halaman. Klik pada <img className="bm-zoom"> membuka lightbox,
   urutan galeri = urutan gambar bm-zoom di dalam area ini. */
export default function Gallery({ children }) {
  const ref = useRef(null);
  const [view, setView] = useState(null);

  const onClick = (e) => {
    const el = e.target instanceof Element ? e.target.closest("img.bm-zoom") : null;
    if (!el || !ref.current) return;
    const nodes = [...ref.current.querySelectorAll("img.bm-zoom")];
    setView({
      items: nodes.map((n) => ({ src: n.currentSrc || n.src, alt: n.alt })),
      i: Math.max(0, nodes.indexOf(el)),
    });
  };

  return (
    <div ref={ref} onClick={onClick} style={{ display: "contents" }}>
      <style>{CSS}</style>
      {children}
      {view && <Lightbox items={view.items} start={view.i} onClose={() => setView(null)} />}
    </div>
  );
}