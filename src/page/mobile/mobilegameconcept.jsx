import MobileShell, { Pic, Cap } from "./mobile.jsx";

import Char from "../../../public/images/gameasset/char.png";
import CrystalSketch from "../../../public/images/gameasset/crystal-sketch.PNG";
import Crystal from "../../../public/images/gameasset/crystal-trap.png";
import Doll from "../../../public/images/gameasset/doll.png";
import Phoenix from "../../../public/images/gameasset/phoenix-trap.png";
import TeapotSketch from "../../../public/images/gameasset/teapot-sketch.PNG";
import Teapot from "../../../public/images/gameasset/teapot-trap.png";
import TrapSketch from "../../../public/images/gameasset/trap-kamera-sketch.png";
import Trap from "../../../public/images/gameasset/trap-kamera.png";
import witchSketch from "../../../public/images/gameasset/witch-sketch.png";
import witch from "../../../public/images/gameasset/witch.png";

const DECO = [
  ["star", 76, 148, 26], ["star", 281, 146, 26],
  ["shell", 50, 178, 26], ["shell", 307, 178, 26],
  ["spiral", 89, 198, 22], ["spiral", 262, 198, 22],
];

export default function GameAssetMobile({ navigate }) {
  return (
    <MobileShell navigate={navigate} deco={DECO} titleTop={145}
      title={<>2D Game Asset &amp;<br />Concept Art</>}
      bars={[[780, 44, "left"], [1072, 43, "right"]]} footerY={1350}>

      {/* 1. teapot */}
      <Pic src={TeapotSketch} label="sketsa teapot" x={52} y={260} w={93} h={102} />
      <Pic src={Teapot} label="teapot trap" x={130} y={252} w={186} h={118} delay={0.1} />

      {/* 2. crystal */}
      <Pic src={Crystal} label="crystal trap" x={51} y={361} w={174} h={128} />
      <Pic src={CrystalSketch} label="sketsa crystal" x={215} y={372} w={90} h={106} delay={0.1} />

      {/* 3. kamera */}
      <Pic src={TrapSketch} label="sketsa kamera" x={52} y={489} w={91} h={90} />
      <Pic src={Trap} label="trap kamera" x={152} y={489} w={150} h={93} delay={0.1} />

      {/* 4. phoenix */}
      <Pic src={Phoenix} label="phoenix trap" x={93} y={584} w={163} h={106} />
      <Cap y={702} w={255}>I designed the trap assets for the Roblox game Wild Trap, following the themes: Content Creator, Blossom, Crystal, and Fallen Phoenix.</Cap>

      {/* 5. witch house */}
      <Pic src={witchSketch} label="sketsa witch house" x={51} y={877} w={117} h={106} />
      <Pic src={witch} label="witch house" x={170} y={872} w={124} h={112} delay={0.1} />
      <Cap y={1004} w={240}>A witch house environment design featuring a cozy, magical setting with unique details and a whimsical atmosphere</Cap>

      {/* 6. karakter */}
      <Pic src={Char} label="karakter" x={55} y={1144} w={173} h={110} />
      <Pic src={Doll} label="doll" x={220} y={1149} w={90} h={90} delay={0.1} />
      <Cap y={1255} w={262}>Character designs for a short animation project. The first is a cheerful and active 8–10 year old girl with a tragic past, reflected in her slightly jagged shapes. The second is her beloved doll friend that she carries everywhere.</Cap>
    </MobileShell>
  );
}