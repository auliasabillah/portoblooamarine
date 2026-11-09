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
  ["star", 97, 138, 26], ["star", 275, 135, 26],
  ["shell", 73, 166, 26], ["shell", 298, 166, 26],
  ["spiral", 110, 190, 22], ["spiral", 257, 190, 22],
];

export default function MerchMobile({ navigate }) {
  return (
    <MobileShell navigate={navigate} title="Merchandise" titleTop={143} deco={DECO}
      bars={[[1011, 42, "left"]]} footerY={1322}>

      {/* 1. kaos */}
      <Pic src={LogoKaos} label="ilustrasi kaos" x={48} y={262} w={118} h={120} />
      <Pic src={Kaos} label="mockup kaos" x={180} y={258} w={128} h={128} delay={0.1} />

      {/* 2. scarf */}
      <Pic src={PatternScarf} label="pattern scarf" x={50} y={413} w={117} h={117} />
      <Pic src={Scarf} label="mockup scarf" x={180} y={392} w={128} h={159} delay={0.1} />

      {/* 3. topi */}
      <Pic src={LogoTopi} label="ilustrasi topi" x={62} y={565} w={106} h={88} />
      <Pic src={Topi} label="mockup topi" x={180} y={562} w={128} h={84} delay={0.1} />

      {/* 4. totebag */}
      <Pic src={LogoTotebag} label="ilustrasi totebag" x={64} y={667} w={108} h={104} />
      <Pic src={Totebag} label="mockup totebag" x={180} y={655} w={128} h={128} delay={0.1} />

      {/* 5. jam */}
      <Pic src={PatternJam} label="pattern jam" x={52} y={797} w={117} h={117} />
      <Pic src={Jam} label="mockup jam" x={181} y={789} w={129} h={134} delay={0.1} />
      <Cap y={939} w={240}>Merchandise illustrations I designed for the Universitas Negeri Malang Branding Team for an alumni gathering and graduation event.</Cap>

      {/* 6. pin */}
      <Pic src={PinCewe} label="pin karakter cewek" x={60} y={1097} w={58} h={58} />
      <Pic src={PinCowo} label="pin karakter cowok" x={110} y={1135} w={58} h={58} delay={0.1} />
      <Pic src={Pin} label="mockup pin" x={193} y={1118} w={108} h={56} delay={0.1} />
      <Cap y={1216} w={250}>A pin design I created for the Designholic 13.0 exhibition merchandise.</Cap>
    </MobileShell>
  );
}