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


  return(
    <>
    <TwoColumn leftContent={<HeroLeft heading={"Fabiel Ramirez"}  pills={pills}/>} rightContent={<HeroRight />}></TwoColumn>
  
    </>
  )

}