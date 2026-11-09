import { useEffect, useRef, useState } from "react";
import Logo from "../../../public/images/logo.PNG";
import Kerang from "../../../public/images/aksen/kerang.PNG";
import Bintang from "../../../public/images/aksen/bintang.PNG";
import Spirall from "../../../public/images/aksen/spirall.PNG";
import Gallery from "../../page/box.jsx";

/* ============================================================
   Shell halaman detail versi HP — desain lebar 356px.
   Dipakai oleh mobilemerch.jsx dan mobilegame.jsx.
   ============================================================ */

const C = { cyan: "#01B8DA", teal: "#047F96", pale: "#CCF5FF", panel: "#EBF6FF" };
export const u = (n) => `calc(var(--u) * ${n})`;
const lilita = { fontFamily: "'Lilita One', cursive" };
const arial = { fontFamily: "'Arial Rounded MT Bold','Arial Rounded MT',Arial,sans-serif" };
const inner = { filter: "url(#innerShadow)" };
const MENU = [["home", "Home"], ["about", "About"], ["portfolio", "Portfolio"], ["contact", "Contact"]];
const WA_LINK = "https://wa.me/6285733197939";
const HEADER_TOP = 18;
const OFF = 34; // di desain header di y=52, di kode di y=18 (fixed) -> konten digeser naik 34
const DECO_IMG = { star: Bintang, shell: Kerang, spiral: Spirall };

export function useIsMobile() {
  const q = "(max-width: 1023px), (orientation: portrait)";
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}

function Img({ src, label = "gambar", style, round = 0, className = "" }) {
  const s = { borderRadius: round, display: "block", ...style };
  if (src) return <img src={src} alt={label} className={className} style={s} />;
  return <div className={`grid place-items-center border border-dashed border-slate-300 bg-white/60 ${className}`} style={{ ...s, ...arial, color: C.teal, fontSize: u(7) }}>{label}</div>;
}

const Reveal = ({ children, style, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}
      style={{ ...style, opacity: on ? 1 : 0, transform: on ? "none" : `translateY(${u(12)})`, transition: `opacity .7s ease-out ${delay}s, transform .7s ease-out ${delay}s` }}>
      {children}
    </div>
  );
};

const at = (x, y, w, h) => ({ position: "absolute", left: u(x), top: u(y), width: u(w), ...(h ? { height: u(h) } : {}) });

/* gambar dengan kotak tetap seperti di desain */
export const Pic = ({ src, label, x, y, w, h, delay = 0 }) => (
  <Reveal delay={delay} style={at(x, y, w, h)}>
    <Img src={src} label={label} className="bm-zoom" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  </Reveal>
);

/* keterangan, rata tengah di x = 178 */
const textBase = { ...arial, color: C.teal, fontWeight: 700, fontSize: `max(8px, ${u(8.3)})`, lineHeight: 1.4, textAlign: "center" };
export const Cap = ({ y, w, x, align = "center", children, delay = 0 }) => (
  <Reveal delay={delay} style={at(x ?? (178 - w / 2), y, w)}>
    <p style={{ ...textBase, textAlign: align }}>{children}</p>
  </Reveal>
);

const Fence = ({ dir, h = 43, pitch = 14.5 }) => (
  <div className={`w-full border-y border-slate-300 ${dir === "left" ? "bm-fence-l" : "bm-fence-r"}`} aria-hidden
    style={{ "--pitch": u(pitch), height: u(h), backgroundImage: "linear-gradient(90deg,#cbd5e1 1px,transparent 1px)", backgroundSize: `${u(pitch)} 100%` }} />
);

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
  h1,h2,h3,button,text{font-family:'Lilita One',cursive;font-weight:400}
  *{font-synthesis:none}
  @keyframes bmFenceL{to{background-position-x:calc(var(--pitch) * -1)}}
  @keyframes bmFenceR{from{background-position-x:calc(var(--pitch) * -1)}to{background-position-x:0}}
  @keyframes bmFloat{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(calc(var(--u)*-6)) rotate(5deg)}}
  .bm-fence-l{animation:bmFenceL .9s linear infinite}
  .bm-fence-r{animation:bmFenceR .9s linear infinite}
  .bm-float{animation:bmFloat 3.5s ease-in-out infinite}
  @media (prefers-reduced-motion:reduce){.bm-fence-l,.bm-fence-r,.bm-float{animation:none}}
`;

/*
  props:
  - navigate : dari react-router
  - title    : isi judul (boleh pakai <br />)
  - titleTop : y atas judul (koordinat desain)
  - deco     : [["star"|"shell"|"spiral", xTengah, yTengah, ukuran], ...]
  - bars     : [[y, tinggi, "left"|"right"], ...] pagar selebar layar
  - footerY  : y atas footer (tombol Back otomatis 44px di atasnya)
*/
export default function MobileShell({ navigate, title, titleTop, deco = [], bars = [], footerY, children }) {
  const [menu, setMenu] = useState(false);
  const H = footerY + 170;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const onNav = (id) => { setMenu(false); navigate("/", { state: { scrollTo: id } }); };
  const onBack = () => navigate("/", { state: { scrollTo: "portfolio" } });

  return (
    <div className="overflow-x-clip bg-white" style={{ ...lilita, "--u": "calc(min(var(--vw, 100vw) / 356, 2.5px))" }}>
      <style>{CSS}</style>

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <filter id="innerShadow" x="-5%" y="-10%" width="110%" height="125%">
            <feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0" /></feComponentTransfer>
            <feGaussianBlur stdDeviation="0.6" /><feOffset dx="0.3" dy="1" result="off" />
            <feFlood floodColor="#fff" result="w" /><feComposite in="w" in2="off" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" result="sh" />
            <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="sh" /></feMerge>
          </filter>
        </defs>
      </svg>

      {/* ============ HEADER (sama dengan mobilehome) ============ */}
      <header className="fixed inset-x-0 z-50 flex justify-center" style={{ top: u(HEADER_TOP) }}>
        <div className="relative" style={{ width: u(298) }}>
          <div className="relative flex items-center justify-between rounded-full"
            style={{ height: u(44), padding: `0 ${u(21)} 0 ${u(19)}`, background: C.panel, border: "1px solid #7FC8EA" }}>
            <Img src={Logo} label="logo blooamarine" round={0}
              style={{ width: u(100), height: u(33), objectFit: "contain", objectPosition: "left center", transform: "scale(3.9)", transformOrigin: "left center", marginLeft: u(-22), pointerEvents: "none" }} />

            <button type="button" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((v) => !v)}
              className="relative" style={{ width: u(24), height: u(24) }}>
              {[-5.5, 0, 5.5].map((y, i) => (
                <span key={i} style={{
                  position: "absolute", left: "50%", top: "50%",
                  width: u(16), height: u(menu ? 2.6 : 2), marginLeft: u(-8), marginTop: u(menu ? -1.3 : -1),
                  background: C.teal, borderRadius: u(2),
                  transition: "transform .3s, opacity .3s, height .3s",
                  transform: menu ? (i === 1 ? "scaleX(0)" : `rotate(${i === 0 ? 45 : -45}deg)`) : `translateY(${u(y)})`,
                  opacity: menu && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>

          <nav aria-hidden={!menu} className="absolute left-0 right-0"
            style={{
              top: u(52), background: C.panel, borderRadius: u(24), padding: `${u(6)} 0`,
              transformOrigin: "top", transition: "opacity .25s, transform .25s",
              opacity: menu ? 1 : 0, transform: menu ? "none" : `translateY(${u(-8)}) scale(.97)`,
              pointerEvents: menu ? "auto" : "none",
            }}>
            {MENU.map(([id, label], i) => (
              <button key={id} tabIndex={menu ? 0 : -1} onClick={() => onNav(id)}
                style={{ ...lilita, display: "block", width: "73%", margin: "0 auto", height: u(25), fontSize: u(14), textAlign: "center", color: C.teal,
                  borderBottom: i < MENU.length - 1 ? "1px solid #047F96" : "none" }}>
                {label}
              </button>
            ))}
          </nav>
          {/* tombol back fixed di kiri atas (seperti desktop/header) */}
          <button type="button" onClick={onBack}
            className="absolute flex items-center justify-center rounded-full bg-[#01B8DA] text-white transition-colors duration-300 hover:bg-[#01B8DA]"
            style={{ ...lilita, left: u(-18), top: u(60), width: u(52), height: u(22), fontSize: u(8.5), gap: u(2.5), zIndex: 60 }}>
            <span aria-hidden>←</span> Back
          </button>
        </div>
      </header>

      {/* ============ ISI HALAMAN ============ */}
      <Gallery>
      <main className="relative" style={{ height: u(H - OFF) }}>
        <div className="absolute inset-x-0" style={{ top: u(-OFF), height: u(H) }}>
          {/* pagar selebar layar */}
          {bars.map(([y, h, dir], i) => (
            <div key={i} className="absolute inset-x-0" style={{ top: u(y) }}><Fence dir={dir} h={h} /></div>
          ))}

          <div className="relative mx-auto h-full" style={{ width: u(356) }}>
            {/* judul */}
            <Reveal style={{ position: "absolute", left: 0, right: 0, top: u(titleTop) }}>
              <h1 className="text-center" style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(22), lineHeight: 1.2 }}>{title}</h1>
            </Reveal>

            {/* hiasan */}
            {deco.map(([k, cx, cy, s], i) => (
              <img key={i} src={DECO_IMG[k]} alt="" aria-hidden className="bm-float absolute"
                style={{ left: u(cx - s / 2), top: u(cy - s / 2), width: u(s), height: u(s), objectFit: "contain", animationDelay: `${i * 0.4}s` }} />
            ))}

            {children}



            {/* footer */}
            <Reveal style={at(20, footerY, 316, 147)}>
              <div className="relative h-full w-full border border-slate-700/70" style={{ borderRadius: u(22), ...arial, color: C.teal }}>
                <Img src={Logo} label="logo blooamarine" round={0}
                  style={{ position: "absolute", left: u(31), top: u(19), width: u(108), height: u(35), objectFit: "contain", objectPosition: "center", transform: "scale(3.9)", transformOrigin: "center", pointerEvents: "none" }} />

                <span className="absolute" style={{ left: u(147), top: u(16), fontSize: u(9.5) }}>©2026</span>

                {[["Pages", 25, [["Home", "home"], ["About", "about"], ["Portfolio", "portfolio"]]], ["Contact", 94, [["Whatsapp", null, WA_LINK]]]].map(([t, x, links]) => (
                  <div key={t} className="absolute flex flex-col items-start" style={{ left: u(x), top: u(70), gap: u(3) }}>
                    <span style={{ fontSize: u(12.5), lineHeight: u(18), marginBottom: u(3) }}>{t}</span>
                    {links.map(([l, id, href]) => href ? (
                      <a key={l} href={href} target="_blank" rel="noreferrer" className="hover:underline" style={{ ...arial, fontSize: u(6.5), lineHeight: u(9) }}>{l}</a>
                    ) : (
                      <button key={l} onClick={() => onNav(id)} className="hover:underline" style={{ ...arial, fontSize: u(6.5), lineHeight: u(9) }}>{l}</button>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      </Gallery>
    </div>
  );
}