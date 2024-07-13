import { PillsProps } from "~/components/atoms/Pills";
import TwoColumn from "~/components/layout/TwoColumn";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {  

  const pills : PillsProps[] = [
    {text:"Web Developer",color: "text-white",bgColor: "bg-blue-600"},
    {text:"AI Architect",color: "text-white",bgColor: "bg-green-600"},
    {text:"Project Manager",color: "text-white",bgColor: "bg-purple-600"},
    {text:"Coding Instructor",color: "text-white",bgColor: "bg-red-600"},];

  const punch = `Elavate your online presence with our eCommerce solutions. 
  Integrate our services gradually or opt for a full solution, either way we are here to maximize your business potential. TAKE THE NEXT STEP TOWARDS SUCCESS TODAY.
  `;

  return(
    <>
    <TwoColumn leftContent={<HeroLeft heading={"Fabiel Ramirez"} punchline={punch} pills={pills}/>} rightContent={<HeroRight />}></TwoColumn>
    </>
  )

}