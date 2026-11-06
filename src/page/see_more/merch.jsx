import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo.PNG";
import Kerang from "../../../public/images/aksen/kerang.PNG";
import Bintang from "../../../public/images/aksen/bintang.PNG";
import Spirall from "../../../public/images/aksen/spirall.PNG";

import Topi from "../../../public/images/merch/BUCKET-HAT-WITH-BG.png";
import PinCowo from "../../../public/images/merch/IMG_4704.PNG";
import PinCewe from "../../../public/images/merch/IMG_4705.PNG";
import Jam from "../../../public/images/merch/jam-alumni-gathering.png";
import LogoKaos from "../../../public/images/merch/kaos-alumni.png";
import Kaos from "../../../public/images/merch/KAOS-FAMILY-GATHERING.png";
import Scarf from "../../../public/images/merch/Mockup-scarf-BIRU-1.png";
import Pin from "../../../public/images/merch/mokap-pin.png";
import PatternJam from "../../../public/images/merch/pattern.png";
import PatternScarf from "../../../public/images/merch/scarf-1.png";
import LogoTopi from "../../../public/images/merch/topi.png";
import LogoTotebag from "../../../public/images/merch/totebag-alumni.png";
import Totebag from "../../../public/images/merch/TOTEBAG-FAMILY-GATHERING-ALT-1.png";

const C = { sky: "#FFFFFF", cyan: "#01B8DA", teal: "#047F96", pale: "#CCF5FF" };
const u = (n) => `calc(var(--u) * ${n})`;
const lilita = { fontFamily: "'Lilita One', cursive" };
const arial = { fontFamily: "'Arial Rounded MT Bold','Arial Rounded MT',Arial,sans-serif" };
const inner = { filter: "url(#innerShadow)" };
const NAV = [["home", "Home", 36], ["about", "About", 40], ["portfolio", "Portfolio", 55], ["contact", "Contact", 48]];

function Img({ src, label = "gambar", style, round = u(6), className = "" }) {
  const s = { borderRadius: round, display: "block", width: "100%", height: "auto", ...style };
  if (src) return <img src={src} alt={label} className={className} style={s} />;
  return <div className={`grid place-items-center border border-dashed border-slate-300 bg-white/60 ${className}`} style={{ ...s, ...arial, color: C.teal, fontSize: u(7) }}>{label}</div>;
}

const Fence = ({ dir, h = 36 }) => (
  <div className={`w-full border-y border-slate-300 ${dir === "left" ? "bm-fence-l" : "bm-fence-r"}`} aria-hidden
    style={{ height: u(h), backgroundImage: "linear-gradient(90deg,#cbd5e1 1px,transparent 1px)", backgroundSize: `${u(12.5)} 100%` }} />
);

const Reveal = ({ children, style, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}
      style={{ ...style, opacity: on ? 1 : 0, transform: on ? "none" : `translateY(${u(14)})`, transition: `opacity .7s ease-out ${delay}s, transform .7s ease-out ${delay}s` }}>
      {children}
    </div>
  );
};

/* ---- helper posisi absolut (koordinat desain x 1,3) ---- */
const at = (x, y, w, h) => ({ position: "absolute", left: u(x), top: u(y), width: u(w), ...(h ? { height: u(h) } : {}) });

// gambar dengan kotak tetap seperti di desain
const Pic = ({ src, label, x, y, w, h, round = 0, fit = "contain", delay = 0 }) => (
  <Reveal delay={delay} style={at(x, y, w, h)}>
    <Img src={src} label={label} round={u(round)} style={{ height: "100%", objectFit: fit }} />
  </Reveal>
);

// teks keterangan (tengah di x = 267)
const textBase = { ...arial, color: C.teal, fontWeight: 700, fontSize: `max(9px, ${u(9.5)})`, lineHeight: 1.4 };
const Cap = ({ y, w, children, delay = 0 }) => (
  <Reveal delay={delay} style={at(267 - w / 2, y, w)}>
    <p style={{ ...textBase, textAlign: "center" }}>{children}</p>
  </Reveal>
);

const Bar = ({ y, h = 36, dir }) => (
  <div className="absolute inset-x-0" style={{ top: u(y) }}><Fence dir={dir} h={h} /></div>
);

// hiasan di bawah judul: [gambar, x tengah, y tengah, ukuran]
const DECO = [
  [Bintang, 119.9, 68.9, 38], [Bintang, 402.2, 67.2, 38],
  [Kerang, 79.1, 103.7, 38], [Kerang, 443, 103.7, 38],
  [Spirall, 153, 119.9, 32], [Spirall, 368.2, 119.9, 32],
];

export default function MerchandisePage() {
  const navigate = useNavigate();
  const onBack = () => navigate("/", { state: { scrollTo: "portfolio" } });
  const onNav = (id) => navigate("/", { state: { scrollTo: id } });

  useEffect(() => {
    const setVw = () => document.documentElement.style.setProperty("--vw", `${document.documentElement.clientWidth}px`);
    setVw();
    window.scrollTo(0, 0);
    window.addEventListener("resize", setVw);
    return () => window.removeEventListener("resize", setVw);
  }, []);

  return (
    <div className="overflow-x-clip bg-white"
      style={{ ...lilita, "--u": "calc(min(var(--vw, 100vw) / 534, 2.1px))", "--hu": "calc(min(var(--vw, 100vw) / 534, 1.55px))", "--hh": "calc(var(--hu) * 75)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
        h1,h2,h3,button,text{font-family:'Lilita One',cursive;font-weight:400}
        @keyframes bmFenceL{to{background-position-x:calc(var(--u)*-12.5)}}
        @keyframes bmFenceR{from{background-position-x:calc(var(--u)*-12.5)}to{background-position-x:0}}
        @keyframes bmFloat{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(calc(var(--u)*-7)) rotate(5deg)}}
        .bm-fence-l{animation:bmFenceL .9s linear infinite}
        .bm-fence-r{animation:bmFenceR .9s linear infinite}
        .bm-float{animation:bmFloat 3.5s ease-in-out infinite}
        @media (prefers-reduced-motion:reduce){.bm-fence-l,.bm-fence-r,.bm-float{animation:none}}
      `}</style>

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

      {/* ============ HEADER (sama dengan halaman utama, Portfolio aktif) ============ */}
      <header className="fixed inset-x-0 top-0" style={{ zIndex: 100, background: C.sky, "--u": "var(--hu)", height: u(75) }}>
        <div className="relative flex h-full items-center justify-between" style={{ padding: `0 ${u(26)}` }}>
          <Img src={Logo} label="logo blooamarine" round={0}
            style={{ width: u(150), height: u(50), objectFit: "contain", objectPosition: "left center", transform: "scale(3.9)", transformOrigin: "left center", pointerEvents: "none", marginLeft: u(-30) }} />
          <nav className="flex items-center" style={{ gap: u(9) }}>
            {NAV.map(([id, label, w]) => (
              <button key={id} onClick={() => onNav(id)}
                className={`grid place-items-center rounded-full text-white transition-all duration-300 ${id === "portfolio" ? "scale-[1.15] opacity-100" : "scale-90 opacity-50 hover:scale-100 hover:opacity-100"}`}
                style={{ ...lilita, background: C.cyan, width: u(w * 1.4), height: u(22), fontSize: u(10) }}>
                {label}
              </button>
            ))}
          </nav>
          <div className="absolute border-t border-slate-600/70" style={{ left: u(15), right: u(15), bottom: 0 }} />
        </div>
      </header>
      <div style={{ height: "var(--hh)" }} />

      {/* ============ ISI HALAMAN (tinggi total desain ~1808) ============ */}
      <main className="relative" style={{ height: u(1830) }}>
        {/* pagar selebar layar */}
        <Bar y={1377} h={35} dir="left" />

        <div className="relative mx-auto" style={{ width: u(534), height: "100%" }}>
          {/* tombol back */}
          <button type="button"
          onClick={onBack}
          className="flex items-center justify-center rounded-full bg-[#01B8DA]/50 text-white transition-colors duration-300 hover:bg-[#01B8DA]"
          style={{
            ...lilita,
            position: "fixed",
            zIndex: 50,
            pointerEvents: "auto",
            cursor: "pointer",
            top: `calc(var(--hh) + ${u(14)})`,
            left: `calc((var(--vw, 100vw) - ${u(534)}) / 2 + ${u(-30)})`,
            width: u(61),
            height: u(16),
            fontSize: u(8.5),
            gap: u(3),
            }}
          >
            <span aria-hidden>←</span> Back
          </button>

          {/* judul */}
          <Reveal style={{ position: "absolute", left: 0, right: 0, top: u(72) }}>
            <h1 className="text-center" style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(25.5), lineHeight: 1.2 }}>Merchandise</h1>
          </Reveal>

          {/* hiasan bintang laut & kerang */}
          {DECO.map(([src, cx, cy, s], i) => (
            <img key={i} src={src} alt="" aria-hidden className="bm-float absolute"
              style={{ left: u(cx - s / 2), top: u(cy - s / 2), width: u(s), height: u(s), objectFit: "contain", animationDelay: `${i * 0.4}s` }} />
          ))}

          {/* 1. kaos */}
          <Pic src={LogoKaos} label="ilustrasi kaos" x={74} y={215} w={183} h={150} />
          <Pic src={Kaos} label="mockup kaos" x={277} y={196} w={188} h={188} delay={0.1} />

          {/* 2. scarf */}
          <Pic src={PatternScarf} label="pattern scarf" x={71} y={438} w={190} h={192} />
          <Pic src={Scarf} label="mockup scarf" x={277} y={419} w={188} h={234} delay={0.1} />

          {/* 3. topi */}
          <Pic src={LogoTopi} label="ilustrasi topi" x={95} y={672} w={150} h={150} />
          <Pic src={Topi} label="mockup topi" x={277} y={685} w={188} h={126} delay={0.1} />

          {/* 4. totebag */}
          <Pic src={LogoTotebag} label="ilustrasi totebag" x={92} y={858} w={150} h={155} />
          <Pic src={Totebag} label="mockup totebag" x={277} y={845} w={188} h={187} delay={0.1} />

          {/* 5. jam */}
          <Pic src={PatternJam} label="pattern jam" x={71} y={1072} w={188} h={188} />
          <Pic src={Jam} label="mockup jam" x={277} y={1067} w={188} h={198} delay={0.1} />
          <Cap y={1296} w={348}>Merchandise illustrations I designed for the Universitas Negeri Malang Branding Team for an alumni gathering and graduation event.</Cap>

          {/* 6. pin */}
          <Pic src={PinCewe} label="pin karakter cewek" x={74} y={1457} w={100} h={100} />
          <Pic src={PinCowo} label="pin karakter cowok" x={156} y={1535} w={100} h={100} delay={0.1} />
          <Pic src={Pin} label="mockup pin" x={289} y={1490} w={170} h={120} delay={0.1} />
          <Cap y={1664} w={290}>A pin design I created for the Designholic 13.0 exhibition merchandise.</Cap>

          {/* ============ FOOTER ============ */}
          <Reveal style={at(19, 1727, 498, 77)}>
            <div className="relative h-full w-full border border-slate-600/70" style={{ borderRadius: u(14), ...arial, color: C.teal }}>
              <Img src={Logo} label="logo blooamarine" round={0}
                style={{ position: "absolute", left: u(25), top: u(10), width: u(110), height: u(40), objectFit: "contain", objectPosition: "center", transform: "scale(2.5)", transformOrigin: "center", pointerEvents: "none" }} />
              <span className="absolute" style={{ left: u(80), top: u(50), transform: "translateX(-60%)", fontSize: u(10) }}>©2026</span>
              {[["Pages", 394, [["Home", "home"], ["About", "about"], ["Portfolio", "portfolio"]]], ["Contact", 458, [["Whatsapp", null, "https://wa.me/6285733197939"]]]].map(([t, cx, links]) => (
                <div key={t} className="absolute flex flex-col items-center" style={{ left: u(cx), top: u(9), transform: "translateX(-50%)", gap: u(2.5) }}>
                  <span style={{ fontSize: u(11), marginBottom: u(3) }}>{t}</span>
                  {links.map(([l, id, href]) => href ? (
                    <a key={l} href={href} target="_blank" rel="noreferrer" className="hover:underline" style={{ ...arial, fontSize: u(7), lineHeight: u(10) }}>{l}</a>
                  ) : (
                    <button key={l} onClick={() => onNav(id)} className="hover:underline" style={{ ...arial, fontSize: u(7), lineHeight: u(10) }}>{l}</button>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}