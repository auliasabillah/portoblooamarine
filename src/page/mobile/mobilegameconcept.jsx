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
  ["star", 92, 148, 26], ["star", 281, 146, 26],
  ["shell", 66, 178, 26], ["shell", 307, 178, 26],
  ["spiral", 106, 198, 22], ["spiral", 262, 198, 22],
];

export default function GameAssetMobile({ navigate }) {
  return (
    <MobileShell navigate={navigate} deco={DECO} titleTop={145}
      title={<>2D Game Asset &amp;<br />Concept Art</>}
      bars={[[787, 44, "left"], [1068, 43, "right"]]} footerY={1384}>

      {/* 1. teapot */}
      <Pic src={TeapotSketch} label="sketsa teapot" x={48} y={252} w={108} h={102} />
      <Pic src={Teapot} label="teapot trap" x={158} y={262} w={138} h={95} delay={0.1} />

      {/* 2. crystal */}
      <Pic src={Crystal} label="crystal trap" x={50} y={380} w={150} h={115} />
      <Pic src={CrystalSketch} label="sketsa crystal" x={210} y={378} w={100} h={115} delay={0.1} />

      {/* 3. kamera */}
      <Pic src={TrapSketch} label="sketsa kamera" x={50} y={493} w={96} h={95} />
      <Pic src={Trap} label="trap kamera" x={148} y={494} w={164} h={90} delay={0.1} />

      {/* 4. phoenix */}
      <Pic src={Phoenix} label="phoenix trap" x={100} y={597} w={158} h={100} />
      <Cap y={716} w={255}>I designed the trap assets for the Roblox game Wild Trap, following the themes: Content Creator, Blossom, Crystal, and Fallen Phoenix.</Cap>

      {/* 5. witch house */}
      <Pic src={witchSketch} label="sketsa witch house" x={50} y={872} w={134} h={106} />
      <Pic src={witch} label="witch house" x={186} y={872} w={120} h={106} delay={0.1} />
      <Cap y={993} w={240}>A witch house environment design featuring a cozy, magical setting with unique details and a whimsical atmosphere</Cap>

      {/* 6. karakter */}
      <Pic src={Char} label="karakter" x={62} y={1153} w={158} h={82} />
      <Pic src={Doll} label="doll" x={236} y={1150} w={70} h={88} delay={0.1} />
      <Cap y={1248} w={262}>Character designs for a short animation project. The first is a cheerful and active 8–10 year old girl with a tragic past, reflected in her slightly jagged shapes. The second is her beloved doll friend that she carries everywhere.</Cap>
    </MobileShell>
  );
}