import MobileShell, { Pic, Cap } from "./mobile.jsx";

import Biggle1 from "../../../public/images/illus/biggle-sketch.png";
import Biggle2 from "../../../public/images/illus/biggle.jpg";
import Ichiban from "../../../public/images/illus/ichiban-sketch.png";
import Ichiban2 from "../../../public/images/illus/ichiban.jpg";
import Book1 from "../../../public/images/illus/book-1.png";
import Book2 from "../../../public/images/illus/book-2.png";
import Tuno1 from "../../../public/images/illus/tuno-1.png";
import TunoAll from "../../../public/images/illus/tuno-all.png";
import TunaSiluet from "../../../public/images/illus/tuno-siluet.png";
import Sun from "../../../public/images/illus/here-comes-the-sun.png";

const DECO = [
  ["star", 80, 138, 26], ["star", 275, 135, 26],
  ["shell", 54, 166, 26], ["shell", 298, 166, 26],
  ["spiral", 93, 190, 22], ["spiral", 257, 190, 22],
];

export default function IllustrationMobile({ navigate }) {
  return (
    <MobileShell navigate={navigate} title="Illustration" titleTop={143} deco={DECO}
      bars={[[500, 42, "left"], [852, 42, "right"], [1285, 42, "left"], [1740, 42, "right"]]}
      footerY={2097}>

      {/* 1. Biggle.3 poster */}
      <Pic src={Biggle1} label="Biggle sketsa" x={48} y={245} w={126} h={175} />
      <Pic src={Biggle2} label="Biggle poster" x={182} y={245} w={126} h={175} delay={0.1} />
      <Cap y={434} w={250}>A poster illustration I created for the Biggle.3 Art Poster Competition with the theme “Daylight Dream.”</Cap>

      {/* 2. Ichiban Sushi Matsuri */}
      <Pic src={Ichiban} label="sketsa Ichiban" x={48} y={589} w={126} h={172} />
      <Pic src={Ichiban2} label="Ichiban final" x={182} y={589} w={126} h={172} delay={0.1} />
      <Cap y={775} w={250}>An illustration I made for the Ichiban Sushi Matsuri 2026 Fanart Competition, where I was selected as one of the finalists</Cap>

      {/* 3. buku anak bilingual */}
      <Pic src={Book1} label="halaman buku 1" x={48} y={939} w={260} h={130} />
      <Pic src={Book2} label="halaman buku 2" x={48} y={1076} w={260} h={130} delay={0.1} />
      <Cap y={1221} w={250}>A bilingual children’s book illustration commission I worked on for a client.</Cap>

      {/* 4. maskot KKP */}
      {/* kolom kiri: siluet di atas character sheet */}
      <Pic src={TunaSiluet} label="siluet maskot" x={48} y={1355} w={122} h={122} round={0} fit="contain" />
      <Pic src={TunoAll} label="character sheet" x={48} y={1477} w={122} h={122} round={0} fit="contain" delay={0.1} />
      {/* kolom kanan: teks pengantar, lalu poster yang menjulur lebih bawah dari kolom kiri */}
      <Cap x={178} y={1372} w={130} align="left" delay={0.1}>
        A character mascot design I created for a competition held by Indonesia’s Ministry of Marine Affairs and Fisheries (KKP).
      </Cap>
      <Pic src={Tuno1} label="poster maskot" x={178} y={1440} w={130} h={185} round={3} delay={0.1} />
      {/* teks penjelasan: 3 baris pertama pendek (di sebelah kiri poster), sisanya melebar penuh */}
      <Cap x={53} y={1601} w={260} align="left" delay={0.1}>
        <span className="block">Inspired by the yellowfin</span>
        <span className="block">tuna, the mascot represents</span>
        <span className="block">fishermen’s spirit to grow</span>
        and improve, in line with the theme “Nelayan Naik Kelas.” The sailor hat, vest, and fishing net reflect the fishermen’s identity and hard work. Blue represents the sea as a source of life, white symbolizes hope, and yellow represents optimism and prosperity.
      </Cap>

      {/* 5. Here Comes the Sun */}
      <Pic src={Sun} label="Here Comes the Sun" x={48} y={1830} w={260} h={183} />
      <Cap y={2030} w={250}>An illustration inspired by The Beatles’ song “Here Comes the Sun.”</Cap>
    </MobileShell>
  );
}