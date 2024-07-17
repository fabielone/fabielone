import { PillsProps } from "~/components/atoms/Pills";
import TwoColumn from "~/components/layout/TwoColumn";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {  

  const pills : PillsProps[] = [
    {text:"Web Development",color: "text-gray-500",bgColor: "bg-transparent"},
    {text:"AI Solutions",color: "text-gray-500",bgColor: "bg-transparent"},
    {text:"Online Marketing",color: "text-gray-500",bgColor: "bg-transparent"},
  ]
  const punch = `Elavate your online presence with our eCommerce solutions. 
  Integrate our services gradually or opt for a full solution, either way we are here to maximize your business potential. TAKE THE NEXT STEP TOWARDS SUCCESS TODAY.
  `;

  return(
    <>
    <TwoColumn leftContent={<HeroLeft heading={"Fabiel Ramirez"} punchline={punch} pills={pills}/>} rightContent={<HeroRight />}></TwoColumn>
    </>
  )

}