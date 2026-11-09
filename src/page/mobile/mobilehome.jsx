import { useEffect, useRef, useState } from "react";
import Bintang from "../../../public/images/aksen/bintang.PNG";
import Maskot from "../../../public/images/bloo.png";
import Profile from "../../../public/images/hani.jpg";
import Kerang from "../../../public/images/aksen/kerang.PNG";
import Logo from "../../../public/images/logo.PNG";
import Illustration from "../../../public/images/porto/biggle.jpg";
import Game from "../../../public/images/porto/witch.png";
import Merchandise from "../../../public/images/porto/totebag.png";
import Kerangbg from "../../../public/images/aksen/kerang-bg.png";
import Bintangbg from "../../../public/images/aksen/bintang-bg.png";
import Spiralbg from "../../../public/images/aksen/spiral-bg.png";

/* ============================================================
   Tampilan HP — desain lebar 356px.
   Semua ukuran memakai satuan --u (= lebar layar / 356, maks 1,9px),
   jadi proporsinya sama persis di semua ukuran HP.
   Dipakai App.jsx saat lebar layar < 768px.
   ============================================================ */

const C = { sky: "#89D0F0", cyan: "#01B8DA", blue: "#73CAFE", yellow: "#FFF3A1", teal: "#047F96", cream: "#FEFDF8", pale: "#CCF5FF", panel: "#EBF6FF" };
const u = (n) => `calc(var(--u) * ${n})`;
const box = (l, t, w, h) => ({ position: "absolute", left: u(l), top: u(t), width: u(w), height: u(h) });
const lilita = { fontFamily: "'Lilita One', cursive" };
const arial = { fontFamily: "'Arial Rounded MT Bold','Arial Rounded MT',Arial,sans-serif" };
const inner = { filter: "url(#innerShadow)" };
const HEADER_TOP = 18;
const MENU = [["home", "Home"], ["about", "About"], ["portfolio", "Portfolio"], ["contact", "Contact"]];
const WA_LINK = "https://wa.me/6285733197939";

function Img({ src, label = "gambar", style, round = u(10), className = "", fit = "cover" }) {
  const s = { borderRadius: round, objectFit: fit, ...style };
  if (src) return <img src={src} alt={label} className={className} style={s} />;
  return <div className={`grid place-items-center border border-dashed border-white/90 bg-white/40 ${className}`} style={{ ...s, ...arial, color: C.teal, fontSize: u(7) }}>{label}</div>;
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

const Wrap = ({ children }) => <div className="relative mx-auto h-full" style={{ width: u(356) }}>{children}</div>;

const Fence = ({ dir, h = 43, pitch = 14.5 }) => (
  <div className={`w-full border-y border-slate-300 ${dir === "left" ? "bm-fence-l" : "bm-fence-r"}`} aria-hidden
    style={{ "--pitch": u(pitch), height: u(h), backgroundImage: "linear-gradient(90deg,#cbd5e1 1px,transparent 1px)", backgroundSize: `${u(pitch)} 100%` }} />
);

/* ---- printilan background ---- */
const DECO_IMG = { shell: Kerangbg, star: Bintangbg, spiral: Spiralbg };
const pct = (x) => +((x / 356) * 100).toFixed(2);

const DECO_HERO = [
  ["shell", 42, 144, 19], ["spiral", 293, 147, 22], ["star", 127, 175, 15], ["shell", 270, 208, 22],
  ["spiral", 67, 245, 22], ["star", 316, 282, 22], ["shell", 25, 445, 19], ["spiral", 127, 523, 22],
  ["star", 311, 523, 16], ["star", 42, 575, 22], ["shell", 234, 560, 22], ["spiral", 178, 607, 22],
].map(([t, x, y, s]) => [t, pct(x), y, s]);

const DECO_WORK = [
  ["spiral", 113, 58, 12], ["star", 30, 87, 24], ["shell", 200, 76, 19], ["star", 323, 80, 22],
  ["shell", 333, 278, 19], ["spiral", 26, 317, 14], ["shell", 25, 515, 19], ["star", 342, 543, 17],
  ["star", 28, 740, 22], ["shell", 216, 759, 17], ["star", 327, 768, 17], ["spiral", 121, 778, 19],
].map(([t, x, y, s]) => [t, pct(x), y, s]);

function Deco({ items }) {
  return items.map(([t, x, y, s], i) => (
    <span key={i} aria-hidden className="bm-twinkle pointer-events-none absolute"
      style={{ left: `${x}%`, top: u(y - s / 2), width: u(s), height: u(s), marginLeft: u(-s / 2), opacity: 0.8, animationDelay: `${(i % 4) * 0.7}s` }}>
      <img src={DECO_IMG[t]} alt="" className="h-full w-full object-contain" />
    </span>
  ));
}

/* ---- ikon ---- */
const IG = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-full w-full"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
const XI = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.8-6.3L5.5 21H2.4l7.2-8.3L2 3h6.3l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z" /></svg>;
const TT = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>;
const LI = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const WA = <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;

/* ---- gelombang pita kuning: disamakan dengan App.jsx ---- */
const waveD = (t = 0) => {
  const k = (2 * Math.PI) / 560;
  const ph = 0.6 * Math.sin(t * 0.6);
  const A = 28 * (1 + 0.08 * Math.sin(t * 0.9));

  let d = "";
  for (let x = -700; x <= 1300; x += 8) {
    const y = 365 - A * Math.sin(k * (x - 30) + ph);
    d += `${x === -700 ? "M" : "L"}${x} ${y.toFixed(1)} `;
  }
  return d;
};

/* ---- gelombang putih dasar Portfolio ---- */
const waveBottomD = (t, amp, wl, speed, base, off = 0) => {
  const k = (2 * Math.PI) / wl;
  let d = "M0 60 ";

  for (let x = 0; x <= 356; x += 4) {
    d += `L${x} ${(base - amp * Math.sin(k * x - t * speed + off)).toFixed(1)} `;
  }

  return d + "L356 60 Z";
};

const WORKS = [
  ["Illustration", 100, 196, Illustration, "/illustration"],
  ["2D Game Asset & Concept Art", 311, 210, Game, "/gameconcept"],
  ["Merchandise", 536, 193, Merchandise, "/merchandise"],
];

const FLOAT = [[Kerang, 35, 0, 30], [Bintang, 64, 36, 28], [Bintang, 320, -3, 28], [Kerang, 294, 38, 30]];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
  html{scroll-behavior:smooth}
  h1,h2,h3,button,text{font-family:'Lilita One',cursive;font-weight:400}
  *{font-synthesis:none}
  @keyframes bmFenceL{to{background-position-x:calc(var(--pitch) * -1)}}
  @keyframes bmFenceR{from{background-position-x:calc(var(--pitch) * -1)}to{background-position-x:0}}
  @keyframes bmFloat{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(calc(var(--u)*-6)) rotate(5deg)}}
  @keyframes bmTwinkle{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(1.2) rotate(12deg)}}
  .bm-fence-l{animation:bmFenceL .9s linear infinite}
  .bm-fence-r{animation:bmFenceR .9s linear infinite}
  .bm-float{animation:bmFloat 3.5s ease-in-out infinite}
  .bm-twinkle{animation:bmTwinkle 4s ease-in-out infinite}
  @media (prefers-reduced-motion:reduce){.bm-fence-l,.bm-fence-r,.bm-float,.bm-twinkle{animation:none}}
`;

export default function MobileHome({ navigate }) {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let cur = "home";
      MENU.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = "contact";
      setActive(cur);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const setVw = () => document.documentElement.style.setProperty("--vw", `${document.documentElement.clientWidth}px`);
    setVw();
    window.addEventListener("resize", setVw);
    return () => window.removeEventListener("resize", setVw);
  }, []);

  const mascotRef = useRef(null);
  const morphRef = useRef(null);

  useEffect(() => {
    const el = mascotRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const h = el.getBoundingClientRect().height;
      morphRef.current?.setAttribute("radius", Math.max(1, (h * 3) / 185).toFixed(2));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const waveRef = useRef(null);
  const textRef = useRef(null);
  const w1Ref = useRef(null);
  const w2Ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    const t0 = performance.now();

    const loop = (now) => {
      const t = (now - t0) / 1000;

      waveRef.current?.setAttribute("d", waveD(t));
      textRef.current?.setAttribute("startOffset", ((t * 16) % 140) - 140);

      const br = 1 + 0.12 * Math.sin(t * 0.8);

      w1Ref.current?.setAttribute("d", waveBottomD(t, 10 * br, 210, 1.2, 28, 1.5));
      w2Ref.current?.setAttribute("d", waveBottomD(t, 12 * br, 290, 1.6, 34));

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const UNIT = "blooamarine" + "\u00A0".repeat(5);

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

          <filter id="mascotOutlineM" x="-8%" y="-8%" width="116%" height="116%">
            <feComponentTransfer in="SourceGraphic" result="clean"><feFuncA type="linear" slope="10" intercept="-8" /></feComponentTransfer>
            <feMorphology ref={morphRef} in="clean" operator="dilate" radius="3" result="d" />
            <feGaussianBlur in="d" stdDeviation="0.5" result="db" />
            <feFlood floodColor="#fff" result="w" />
            <feComposite in="w" in2="db" operator="in" result="s" />
            <feMerge><feMergeNode in="s" /><feMergeNode in="clean" /></feMerge>
          </filter>
        </defs>
      </svg>

      {/* HEADER */}
      <header className="fixed inset-x-0 z-50 flex justify-center" style={{ top: u(HEADER_TOP) }}>
        <div className="relative" style={{ width: u(298) }}>
          <div className="relative flex items-center justify-between rounded-full"
            style={{ height: u(44), padding: `0 ${u(21)} 0 ${u(19)}`, background: C.panel }}>
            <Img src={Logo} label="logo blooamarine" fit="contain" round={0}
              style={{ width: u(100), height: u(33), objectPosition: "left center", transform: "scale(3.9)", transformOrigin: "left center", marginLeft: u(-22), pointerEvents: "none" }} />

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

          <nav className="absolute left-0 right-0"
          style={{
            top: u(52), background: C.panel, borderRadius: u(24), padding: `${u(6)} 0`,
            transformOrigin: "top",
            transition: `opacity .25s, transform .25s, visibility 0s linear ${menu ? "0s" : ".25s"}`,
            opacity: menu ? 1 : 0,
            transform: menu ? "none" : `translateY(${u(-8)}) scale(.97)`,
            visibility: menu ? "visible" : "hidden",
            pointerEvents: menu ? "auto" : "none",
          }}>
            {MENU.map(([id, label], i) => (
              <button key={id} tabIndex={menu ? 0 : -1} onClick={() => go(id)}
                style={{ ...lilita, display: "block", width: "73%", margin: "0 auto", height: u(25), fontSize: u(14), textAlign: "center", color: C.teal,
                  borderBottom: i < MENU.length - 1 ? "1px solid #047F96" : "none" }}>
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="relative overflow-hidden" style={{ height: u(695), background: C.sky, borderRadius: `0 0 ${u(55)} ${u(55)}` }}>
        <Wrap>
          <Deco items={DECO_HERO} />

          <svg className="absolute left-0 top-0 overflow-visible" style={{ width: u(356), height: u(695) }} viewBox="0 0 356 695" aria-hidden>
            <path id="bmWaveM" ref={waveRef} fill="none" stroke={C.yellow} strokeWidth="66" strokeLinejoin="round" d={waveD(0)} />
            <text fontSize="17" fill={C.blue} filter="url(#innerShadow)" dy="6" style={lilita}>
              <textPath ref={textRef} href="#bmWaveM" startOffset="-130" textLength="1560" lengthAdjust="spacing">{UNIT.repeat(12)}</textPath>
            </text>
          </svg>

          <Reveal delay={0.2} style={box(60, 200, 250, 250)}>
            <div ref={mascotRef} style={{ width: "100%", height: "100%" }}>
              <Img src={Maskot} label="maskot" fit="contain" round={0} style={{ width: "100%", height: "100%", filter: "url(#mascotOutlineM)" }} />
            </div>
          </Reveal>

          <Reveal delay={0.1} style={{ position: "absolute", left: 0, right: 0, top: u(480) }}>
            <h1 className="text-center" style={{ ...lilita, ...inner, color: C.yellow, fontSize: u(25), lineHeight: 1.2 }}>Welcome to my portfolio!</h1>
          </Reveal>
        </Wrap>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative" style={{ height: u(523), marginTop: u(50), scrollMarginTop: u(20) }}>
        <div className="absolute inset-x-0" style={{ top: 0 }}><Fence dir="left" h={43} /></div>
        <div className="absolute inset-x-0" style={{ top: u(481) }}><Fence dir="right" h={42} /></div>

        <Wrap>
          <Reveal style={{ position: "absolute", left: 0, right: 0, top: u(124) }}>
            <h2 className="text-center" startOffset="50%" style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(23), lineHeight: 1.2 }}>ABOUT ME</h2>
          </Reveal>

          <Reveal delay={0.1} style={box(127, 165, 104, 104)}>
            <Img src={Profile} label="foto profil" round="50%" style={{ width: "100%", height: "100%" }} />
          </Reveal>

          <Reveal delay={0.2} style={{ position: "absolute", left: u(48), top: u(292), width: u(260) }}>
            <p className="text-center" style={{ ...lilita, color: C.teal, fontSize: u(11), lineHeight: u(12.2) }}>
              Hi! I'm Hani, also known as blooamarine. I'm a freelance illustrator from Indonesia who loves creating cute characters,
              game assets, and stylized illustrations. I have experience working with various clients on different illustration
              projects, adapting to their needs and bringing their ideas to life. I'm familiar with digital art software such as
              Krita, Procreate, and Adobe Illustrator.
            </p>
          </Reveal>
        </Wrap>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative" style={{ height: u(844), marginTop: u(82), background: C.sky, scrollMarginTop: u(40) }}>
        <svg aria-hidden className="pointer-events-none absolute inset-x-0 w-full"
        style={{ bottom: -1, height: `calc(${u(90)} + 1px)` }} viewBox="0 0 356 60" preserveAspectRatio="none">
          <path ref={w1Ref} fill="#fff" fillOpacity="0.55" d={waveBottomD(0, 10, 210, 1.2, 28, 1.5)} />
          <path ref={w2Ref} fill="#fff" d={waveBottomD(0, 12, 290, 1.6, 34)} />
        </svg>

        <Wrap>
          <Deco items={DECO_WORK} />

          {FLOAT.map(([src, cx, cy, s], i) => (
            <Reveal key={i} style={box(cx - s / 2, cy - s / 2, s, s)}>
              <Img src={src} label="hiasan" fit="contain" className="bm-float" round={0} style={{ width: "100%", height: "100%" }} />
            </Reveal>
          ))}

          <Reveal style={{ ...box(52, -16, 248, 38), zIndex: 10 }}>
            <h2 className="grid h-full w-full place-items-center rounded-full text-center"
              style={{ ...lilita, background: C.cyan, color: C.cream, fontSize: u(19), boxShadow: `0 ${u(3)} ${u(6)} #01B8DA` }}>
              <span style={{ ...inner, display: "inline-block" }}>Let's explore my works!</span>
            </h2>
          </Reveal>

          {WORKS.map(([title, top, h, img, path]) => (
            <Reveal key={title} style={box(37, top, 281, h)} delay={0.05}>
              <article className="relative h-full w-full" style={{ background: C.yellow, borderRadius: u(30), boxShadow: `0 0 ${u(8)} rgba(255,246,189,.85)` }}>
                <Img src={img} label={title} style={box(19, 20, 243, 126)} round={u(14)} />

                <div className="absolute flex items-center justify-between" style={{ left: u(27), right: u(27), top: u(146), bottom: 0 }}>
                  <h3 style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(15), lineHeight: u(20), maxWidth: u(150) }}>{title}</h3>

                  <button type="button" onClick={() => path && navigate(path)}
                    className={`grid shrink-0 place-items-center rounded-full bg-[#01B8DA] text-white transition-colors duration-300 hover:bg-[#01B8DA] ${path ? "cursor-pointer" : "cursor-default"}`}
                    style={{ ...lilita, width: u(66), height: u(20), fontSize: u(8.5) }}>
                    See more
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </Wrap>
      </section>

      {/* CONTACT + FOOTER */}
      <section id="contact" className="relative" style={{ height: u(382), scrollMarginTop: u(20) }}>
        <Wrap>
          <Reveal style={{ position: "absolute", left: 0, right: 0, top: u(44) }}>
            <h2 className="text-center" style={{ ...lilita, ...inner, color: C.cyan, fontSize: u(20) }}>Find Me on Social Media!</h2>
          </Reveal>

          {[[109, IG, "Instagram", "https://www.instagram.com/blooamarine"], [146, TT, "TikTok", "https://www.tiktok.com/@blooamarine"], [183, XI, "X", "https://x.com/blooamarine"], [220, LI, "LinkedIn", "https://www.linkedin.com/in/blooamarine"]].map(([x, icon, n, link]) => (
            <Reveal key={n} style={box(x, 92, 30, 30)} delay={0.1}>
              <a href={link} target="_blank" rel="noreferrer" aria-label={n} className="grid h-full w-full place-items-center transition hover:scale-110"
                style={{ background: C.pale, color: C.teal, borderRadius: u(8) }}>
                <span style={{ width: u(18), height: u(18) }}>{icon}</span>
              </a>
            </Reveal>
          ))}

          <Reveal style={box(131, 132, 97, 28)} delay={0.2}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex h-full w-full items-center justify-center transition hover:scale-105"
              style={{ ...arial, background: "#8AFC9D", color: "#1EAA35", borderRadius: u(9), fontSize: u(9.5), gap: u(4) }}>
              <span style={{ width: u(15), height: u(15) }}>{WA}</span>Contact me!
            </a>
          </Reveal>

          <Reveal style={box(19, 216, 314, 146)}>
            <div className="relative h-full w-full border border-slate-700/70" style={{ borderRadius: u(22), ...arial, color: C.teal }}>
              <Img src={Logo} label="logo blooamarine" fit="contain" round={0}
                style={{ ...box(31, 19, 108, 35), objectPosition: "center", transform: "scale(3.9)", transformOrigin: "center", pointerEvents: "none" }} />

              <span className="absolute" style={{ left: u(147), top: u(16), fontSize: u(9.5) }}>©2026</span>

              {[["Pages", 25, [["Home", "home"], ["About", "about"], ["Portfolio", "portfolio"]]], ["Contact", 94, [["Whatsapp", null, WA_LINK]]]].map(([t, x, links]) => (
                <div key={t} className="absolute flex flex-col items-start" style={{ left: u(x), top: u(70), gap: u(3) }}>
                  <span style={{ fontSize: u(12.5), lineHeight: u(18), marginBottom: u(3) }}>{t}</span>

                  {links.map(([l, id, href]) => href ? (
                    <a key={l} href={href} target="_blank" rel="noreferrer" className="hover:underline" style={{ ...arial, fontSize: u(6.5), lineHeight: u(9) }}>{l}</a>
                  ) : (
                    <button key={l} onClick={() => go(id)} className="hover:underline" style={{ ...arial, fontSize: u(6.5), lineHeight: u(9) }}>{l}</button>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </Wrap>
      </section>
    </div>
  );
}