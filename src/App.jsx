import { useEffect, useRef, useState } from "react";
import Bintang from "../public/images/bintang.PNG";
import Maskot from "../public/images/bloo.png";
import Profile from "../public/images/hani.jpg";
import Kerang from "../public/images/kerang.PNG";
import Logo from "../public/images/logo.PNG";
import Illustration from "../public/images/biggle.jpg";
import Game from "../public/images/witch.png";
import Merchandise from "../public/images/totebag.png";
import Kerangbg from "../public/images/kerang-bg.png";
import Bintangbg from "../public/images/bintang-bg.png";
import Spiralbg from "../public/images/spiral-bg.png";

/* ============================================================
   blooamarine portfolio — React + Tailwind (satu file)
   Layout dibuat dari desain lebar 534px. Semua ukuran/posisi memakai
   satuan --u (= lebar layar / 534, maksimal 1000px), jadi proporsinya
   SAMA PERSIS dengan desain di semua perangkat.
   - index.html: <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
   - Ganti gambar: <Img src="/gambarmu.png" />
   ============================================================ */

const C = { sky: "#89D0F0", cyan: "#01B8DA", blue: "#73CAFE", yellow: "#FFF3A1", glow: "#FFF6BD", teal: "#047F96", cream: "#FEFDF8", pale: "#CCF5FF" };
const u = (n) => `calc(var(--u) * ${n})`;
const box = (l, t, w, h) => ({ position: "absolute", left: u(l), top: u(t), width: u(w), height: u(h) });
const lilita = { fontFamily: "'Lilita One', cursive" };
const arial = { fontFamily: "'Arial Rounded MT Bold','Arial Rounded MT',Arial,sans-serif" };
const inner = { filter: "url(#innerShadow)" };
const NAV = [["home", "Home", 331, 36], ["about", "About", 378, 40], ["portfolio", "Portfolio", 431.5, 55], ["contact", "Contact", 490, 48]];

function Img({ src, label = "gambar", style, round = u(10), className = "", fit = "cover" }) {
  const s = { borderRadius: round, objectFit: fit, ...style };
  if (src) return <img src={src} alt={label} className={className} style={s} />;
  return <div className={`grid place-items-center border border-dashed border-white/90 bg-white/40 ${className}`} style={{ ...s, ...arial, color: C.teal, fontSize: u(7) }}>{label}</div>;
}

// printilan background — memakai gambarmu (kerang-bg, bintang-bg, spiral-bg); posisi & ukuran dari desain
const DECO_IMG = { shell: Kerangbg, star: Bintangbg, spiral: Spiralbg };
// [jenis, x (% lebar konten), y (satuan desain), ukuran]
const DECO_HERO = [
  ["spiral", 7.55, 49.4, 21],
  ["star", 19.79, 13.1, 17],
  ["shell", 32.43, 43.2, 13],
  ["star", 66.05, 26.7, 24],
  ["spiral", 91.69, 47.1, 22],
  ["shell", 78.93, 78.4, 19],
  ["star", 16.07, 167.6, 12],
  ["spiral", 24.89, 193, 21],
  ["shell", 6.39, 216.4, 21],
  ["star", 77.75, 205.6, 18],
  ["shell", 95.73, 198.2, 18],
  ["spiral", 85.30, 236.9, 20],
];
const DECO_WORK = [
  ["shell", -3.50, 83.4, 22],
  ["spiral", 94.31, 101.4, 18],
  ["star", 10.24, 223.9, 19],
  ["spiral", 0, 323.2, 22],
  ["shell", 100.51, 277, 19],
  ["star", 90.63, 414, 20],
  ["star", 7.0, 483, 22],
  ["spiral", 63.15, 499, 16],
  ["shell", 37.28, 521.8, 15],
  ["shell", 98.38, 503, 19.5],
];
function Deco({ items }) {
  return items.map(([t, x, y, s], i) => (
    <span key={i} aria-hidden className="bm-twinkle pointer-events-none absolute" style={{ left: `${x}%`, top: u(y - s / 2), width: u(s), height: u(s), marginLeft: u(-s / 2), opacity: 0.8, animationDelay: `${(i % 4) * 0.7}s` }}>
      <img src={DECO_IMG[t]} alt="" className="h-full w-full object-contain" />
    </span>
  ));
}

const Fence = ({ dir }) => (
  <div className={`w-full border-y border-slate-300 ${dir === "left" ? "bm-fence-l" : "bm-fence-r"}`} aria-hidden
    style={{ height: u(36), backgroundImage: "linear-gradient(90deg,#cbd5e1 1px,transparent 1px)", backgroundSize: `${u(12.5)} 100%` }} />
);

const IG = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-full w-full"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
const XI = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.8-6.3L5.5 21H2.4l7.2-8.3L2 3h6.3l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z" /></svg>;
const PI = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg>;
const WA = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;

const WORKS = [
  ["Illustration & Mascot Design", 66, 131, Illustration], ["2D Game Asset & Concept Art", 206, 129, Game], ["Merchandise", 345, 130, Merchandise],
];

// gelombang sinus kontinu: tidak ada bagian lurus, ujung kiri/kanan juga tetap meliuk
const waveD = (t = 0) => {
  const k = (2 * Math.PI) / 560, ph = 0.6 * Math.sin(t * 0.6), A = 28 * (1 + 0.08 * Math.sin(t * 0.9));
  let d = "";
  for (let x = -700; x <= 1300; x += 8) d += `${x === -700 ? "M" : "L"}${x} ${(124 - A * Math.sin(k * (x - 30) + ph)).toFixed(1)} `;
  return d;
};

// skala tiap halaman: muat di satu layar laptop (lebar & tinggi), tanpa batas 1000px
const scr = (H, cap = "1600px") => ({ "--u": `calc(min(min(var(--vw, 100vw), ${cap}) / 534, (100svh - var(--hh)) / ${H}))` });
const screen = { minHeight: "calc(100svh - var(--hh))", scrollMarginTop: "var(--hh)" };

const Page = ({ children, h, className = "", style }) => (
  <div className={`relative mx-auto ${className}`} style={{ width: u(534), height: h ? u(h) : undefined, ...style }}>{children}</div>
);

// setiap container fade in (naik sedikit) tiap kali masuk layar saat di-scroll, berulang
const Reveal = ({ children, style, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setOn(true);
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}
      style={{ ...style, opacity: on ? 1 : 0, transform: on ? "none" : `translateY(${u(14)})`, transition: `opacity .7s ease-out ${delay}s, transform .7s ease-out ${delay}s` }}>
      {children}
    </div>
  );
};

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let cur = "home";
      NAV.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = "contact";
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  useEffect(() => {
    const setVw = () => document.documentElement.style.setProperty("--vw", `${document.documentElement.clientWidth}px`);
    setVw();
    window.addEventListener("resize", setVw);
    return () => window.removeEventListener("resize", setVw);
  }, []);
  const waveRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf, t0 = performance.now();
    const loop = (now) => {
      const t = (now - t0) / 1000;
      waveRef.current?.setAttribute("d", waveD(t));
      textRef.current?.setAttribute("startOffset", ((t * 16) % 140) - 140);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const UNIT = "blooamarine\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <div className="overflow-x-clip bg-white" style={{ ...lilita, "--hu": "calc(min(var(--vw, 100vw) / 534, 1.55px))", "--hh": "calc(var(--hu) * 75)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
        html{scroll-behavior:smooth}
        h1,h2,h3,button,text{font-family:'Lilita One',cursive;font-weight:400}
        *{font-synthesis:none}
        @keyframes bmFenceL{to{background-position-x:calc(var(--u)*-12.5)}}
        @keyframes bmFenceR{from{background-position-x:calc(var(--u)*-12.5)}to{background-position-x:0}}
        @keyframes bmFloat{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(calc(var(--u)*-7)) rotate(5deg)}}
        @keyframes bmTwinkle{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(1.2) rotate(12deg)}}
        .bm-fence-l{animation:bmFenceL .9s linear infinite}
        .bm-fence-r{animation:bmFenceR .9s linear infinite}
        .bm-float{animation:bmFloat 3.5s ease-in-out infinite}
        .bm-twinkle{animation:bmTwinkle 4s ease-in-out infinite}
        @media (prefers-reduced-motion:reduce){.bm-fence-l,.bm-fence-r,.bm-float,.bm-twinkle{animation:none}}
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

      {/* ============ HEADER (y 0–62, selalu terlihat) ============ */}
      <header className="fixed inset-x-0 top-0 z-52" style={{ background: C.sky, "--u": "var(--hu)", height: u(75) }}>
        <div className="relative flex h-full items-center justify-between" style={{ padding: `0 ${u(26)}` }}>
          <Img src={Logo} label="logo blooamarine" fit="contain" round={0} style={{ width: u(150), height: u(50), objectPosition: "left center", transform: "scale(3.9)", transformOrigin: "left center", marginLeft: u(-30) }} />
          <nav className="flex items-center" style={{ gap: u(9) }}>
            {NAV.map(([id, label, , w]) => (
              <button key={id} onClick={() => go(id)}
                className={`grid place-items-center rounded-full text-white transition-all duration-300 ${
                  active === id ? "scale-[1.15] opacity-100" : "scale-90 opacity-50 hover:scale-100 hover:opacity-100"}`}
                style={{ ...lilita, background: C.cyan, width: u(w * 1.4), height: u(22), fontSize: u(10) }}>
                {label}
              </button>
            ))}
          </nav>
          <div className="absolute border-t border-slate-600/70" style={{ left: u(15), right: u(15), bottom: 0 }} />
        </div>
      </header>
      <div style={{ height: "var(--hh)" }} />

      {/* ============ HOME (y 62–325) ============ */}
      <section id="home" className="relative flex items-center overflow-hidden" style={{ ...scr(263), ...screen, background: C.sky, borderRadius: `0 0 ${u(60)} ${u(60)}` }}>
        <Page h={263}>
          <Deco items={DECO_HERO} />
          <svg className="absolute left-0 top-0 overflow-visible" style={{ width: u(534), height: u(263) }} viewBox="0 0 534 263" aria-hidden>
            <path id="bmWave" ref={waveRef} fill="none" stroke={C.yellow} strokeWidth="50" strokeLinejoin="round" d={waveD(0)} />
            <text fontSize="20" fill={C.blue} filter="url(#innerShadow)" dy="7" style={lilita}>
              <textPath ref={textRef} href="#bmWave" startOffset="-140" textLength="1960" lengthAdjust="spacing">
                {UNIT.repeat(14)}
              </textPath>
            </text>
          </svg>
          <Reveal delay={0.2} style={box(185, 22, 160, 185)}><Img src={Maskot} label="maskot" fit="contain" round={0} style={{ width: "100%", height: "100%" }} /></Reveal>
          <Reveal delay={0.1} style={{ position: "absolute", left: 0, right: 0, top: u(208) }}>
            <h1 className="text-center" style={{ ...lilita, ...inner, color: C.yellow, fontSize: u(22), lineHeight: 1.2 }}>Welcome to my portfolio!</h1>
          </Reveal>
        </Page>
      </section>

      
      {/* ============ ABOUT (y 388–576) ============ */}
      <section id="about" className="flex flex-col justify-center" style={{ ...scr(290), ...screen }}>
        <Fence dir="left" />
        <Page h={188}>
          <Reveal style={box(71, 35, 140, 140)}><svg className="h-full w-full overflow-visible" viewBox="0 0 140 140" aria-hidden>
            <path id="bmArc" fill="none" d="M 20 70 A 50 50 0 0 1 120 70" />
            <text fontSize="20" fill={C.cyan} filter="url(#innerShadow)" textAnchor="middle" style={lilita}>
              <textPath href="#bmArc" startOffset="50%">ABOUT ME</textPath>
            </text>
          </svg></Reveal>
          <Reveal delay={0.1} style={box(97, 61, 88, 88)}><Img src={Profile} label="foto profil" round="50%" style={{ width: "100%", height: "100%" }} /></Reveal>
          <Reveal delay={0.2} style={{ position: "absolute", left: u(217), top: u(63), width: u(235) }}><p style={{ ...lilita, color: C.teal, fontSize: u(9), lineHeight: u(11.6) }}>
            Hi! I'm Hani, also known as blooamarine. I'm a freelance illustrator from Indonesia who loves creating cute characters,
            game assets, and stylized illustrations. I have experience working with various clients on different illustration
            projects, adapting to their needs and bringing their ideas to life. I'm familiar with digital art software such as
            Krita, Procreate, and Adobe Illustrator.
          </p></Reveal>
        </Page>
        <Fence dir="right" />
      </section>

      {/* ============ PORTFOLIO (y 660–1215) ============ */}
      <section id="portfolio" className="relative" style={{ "--u": "calc(min(var(--vw, 100vw) / 534, 2.1px))", height: u(555), marginTop: u(50), background: C.sky, scrollMarginTop: `calc(var(--hh) + ${u(26)})` }}>
        <Page h={555}>
          <Deco items={DECO_WORK} />
          <Reveal style={box(43, -15, 40, 40)}><Img src={Kerang} label="kerang" fit="contain" className="bm-float" round={0} style={{ width: "100%", height: "100%" }} /></Reveal>
          <Reveal style={box(77, 9, 40, 40)}><Img src={Bintang} label="bintang" fit="contain" className="bm-float" round={0} style={{ width: "100%", height: "100%" }} /></Reveal>
          <Reveal style={box(415, 1, 40, 40)}><Img src={Kerang} label="kerang" fit="contain" className="bm-float" round={0} style={{ width: "100%", height: "100%" }} /></Reveal>
          <Reveal style={box(448, -23, 40, 40)}><Img src={Bintang} label="bintang" fit="contain" className="bm-float" round={0} style={{ width: "100%", height: "100%" }} /></Reveal>
          <Reveal style={{ ...box(129, -18, 274, 36), zIndex: 10 }}>
            <h2 className="grid h-full w-full place-items-center rounded-full text-center"
              style={{ ...lilita, background: C.cyan, color: C.cream, fontSize: u(20), boxShadow: `0 ${u(3)} ${u(6)} #01B8DA` }}>
              <span style={{ ...inner, display: "inline-block" }}>Let's explore my works!</span>
            </h2>
          </Reveal>
          {WORKS.map(([title, top, h, img], i) => (
            <Reveal key={title} style={box(76, top, 390, h)} delay={0.05}>
            <article className="relative h-full w-full" style={{ background: C.yellow, borderRadius: u(28), boxShadow: `0 0 ${u(8)} rgba(255,246,189,.85)` }}>
              <Img src={img} label={title} style={box(20, 20, 185, 94)} round={u(14)} />
              <div className="absolute flex flex-col justify-center" style={{ left: u(222), top: 0, height: "100%", width: u(160), gap: u(7) }}>
                <h3 style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(15), lineHeight: 1.2 }}>{title}</h3>
                <button className="grid place-items-center rounded-full bg-[#01B8DA]/50 text-white transition-colors duration-300 hover:bg-[#01B8DA]"
                  style={{ ...lilita, width: u(63), height: u(16), fontSize: u(8) }}>
                  See more
                </button>
              </div>
            </article>
            </Reveal>
          ))}
        </Page>
        <svg className="absolute bottom-0 left-0 w-full" style={{ height: u(40) }} viewBox="0 0 534 40" preserveAspectRatio="none" aria-hidden>
          <path fill="#fff" d="M0 20 C 70 0, 150 34, 267 18 S 450 2, 534 18 V40 H0Z">
            <animate attributeName="d" dur="9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              values="M0 20 C 70 0, 150 34, 267 18 S 450 2, 534 18 V40 H0Z;M0 16 C 70 34, 150 2, 267 20 S 450 34, 534 20 V40 H0Z;M0 20 C 70 0, 150 34, 267 18 S 450 2, 534 18 V40 H0Z" />
          </path>
        </svg>
      </section>

      {/* ============ CONTACT (y 1215–1363) ============ */}
      <section id="contact" className="flex flex-col justify-center" style={{ ...scr(250), ...screen }}>
        <Page h={148}>
          <Reveal style={{ position: "absolute", left: 0, right: 0, top: u(15) }}><h2 className="text-center" style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(15) }}>Find Me on Social Media!</h2></Reveal>
          {[[222, IG, "Instagram", "https://www.instagram.com/blooamarine"], [255, XI, "X", "https://x.com/blooamarine"], [288, PI, "Pinterest", "https://pin.it/5u6B4YaZu"]].map(([x, icon, n, link]) => (
            <Reveal key={n} style={box(x, 47, 24, 24)} delay={0.1}>
              <a href={link} target="_blank" rel="noreferrer" aria-label={n} className="grid h-full w-full place-items-center transition hover:scale-110"
                style={{ background: C.pale, color: C.teal, borderRadius: u(7) }}>
                <span style={{ width: u(15), height: u(15) }}>{icon}</span>
              </a>
            </Reveal>
          ))}
          <Reveal style={box(219.5, 82, 95, 25)} delay={0.2}>
            <a href="https://wa.me/6285733197939" target="_blank" rel="noreferrer" className="flex h-full w-full items-center justify-center transition hover:scale-105"
              style={{ ...arial, background: "#8AFC9D", color: "#1EAA35", borderRadius: u(8), fontSize: u(9.5), gap: u(4) }}>
              <span style={{ width: u(14), height: u(14) }}>{WA}</span>Contact me!
            </a>
          </Reveal>
        </Page>

      <footer>
        <Page h={78}>
          <Reveal style={box(19, 0, 498, 77)}>
          <div className="relative h-full w-full border border-slate-600/70" style={{ borderRadius: u(14), ...arial, color: C.teal }}>
            <Img src={Logo} label="logo blooamarine" fit="contain" style={{ ...box(25, 10, 110, 40), objectPosition: "center", transform: "scale(2.5)", transformOrigin: "center" }} round={0} />
            <span className="absolute" style={{ left: u(80), top: u(50), transform: "translateX(-60%)", fontSize: u(10) }}>©2026</span>
            {[["Pages", 394, [["Home", "home"], ["About", "about"], ["Portfolio", "portfolio"]]], ["Contact", 458, [["Whatsapp", null, "https://wa.me/6285733197939"]]]].map(([t, cx, links]) => (
              <div key={t} className="absolute flex flex-col items-center" style={{ left: u(cx), top: u(9), transform: "translateX(-50%)", gap: u(2.5) }}>
                <span style={{ fontSize: u(11), marginBottom: u(3) }}>{t}</span>
                {links.map(([l, id, href]) => href ? (
                  <a key={l} href={href} target="_blank" rel="noreferrer" className="hover:underline" style={{ ...arial, fontSize: u(7), lineHeight: u(10) }}>{l}</a>
                ) : (
                  <button key={l} onClick={() => id && go(id)} className="hover:underline" style={{ ...arial, fontSize: u(7), lineHeight: u(10) }}>{l}</button>
                ))}
              </div>
            ))}
          </div>
          </Reveal>
        </Page>
      </footer>
      </section>
    </div>
  );
}