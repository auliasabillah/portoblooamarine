import MobileShell, { Pic, Cap } from "./mobile.jsx";

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

const DECO = [
  ["star", 80, 138, 26], ["star", 275, 135, 26],
  ["shell", 54, 166, 26], ["shell", 298, 166, 26],
  ["spiral", 94, 190, 22], ["spiral", 257, 190, 22],
];

export default function MerchMobile({ navigate }) {
  return (
    <MobileShell navigate={navigate} title="Merchandise" titleTop={143} deco={DECO}
      bars={[[990, 42, "left"]]} footerY={1280}>

      {/* 1. kaos */}
      <Pic src={LogoKaos} label="ilustrasi kaos" x={49} y={260} w={117} h={96} />
      <Pic src={Kaos} label="mockup kaos" x={179} y={248} w={120} h={120} delay={0.1} />

      {/* 2. scarf */}
      <Pic src={PatternScarf} label="pattern scarf" x={48} y={398} w={122} h={123} />
      <Pic src={Scarf} label="mockup scarf" x={179} y={380} w={120} h={150} delay={0.1} />

      {/* 3. topi */}
      <Pic src={LogoTopi} label="ilustrasi topi" x={63} y={533} w={96} h={96} />
      <Pic src={Topi} label="mockup topi" x={179} y={542} w={120} h={81} delay={0.1} />

      {/* 4. totebag */}
      <Pic src={LogoTotebag} label="ilustrasi totebag" x={42} y={620} w={135} h={135} />
      <Pic src={Totebag} label="mockup totebag" x={179} y={633} w={120} h={120} delay={0.1} />

      {/* 5. jam */}
      <Pic src={PatternJam} label="pattern jam" x={48} y={766} w={120} h={120} />
      <Pic src={Jam} label="mockup jam" x={179} y={763} w={120} h={127} delay={0.1} />
      <Cap y={910} w={240}>Merchandise illustrations I designed for the Universitas Negeri Malang Branding Team for an alumni gathering and graduation event.</Cap>

      {/* 6. pin */}
      <Pic src={PinCewe} label="pin karakter cewek" x={52} y={1077} w={66} h={66} />
      <Pic src={PinCowo} label="pin karakter cowok" x={107} y={1123} w={66} h={66} delay={0.1} />
      <Pic src={Pin} label="mockup pin" x={163} y={1069} w={150} h={120} delay={0.1} />
      <Cap y={1204} w={250}>A pin design I created for the Designholic 13.0 exhibition merchandise.</Cap>
    </MobileShell>
  );
}