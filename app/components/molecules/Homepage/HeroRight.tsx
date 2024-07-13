import { FaMountain, FaChalkboardTeacher, FaPaintBrush } from "react-icons/fa";


// interface HeroRightProps{
//     imgUrl:string;
// }

export default function HeroRight(){
    

    return(
        <div className="flex flex-col items-center relative px-4 pt-16 mx-auto lg:py-16 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        {/* { <div className="flex justify-center h-full w-fit aspect-video place-items-center rounded-md shadow-md overflow-hidden lg:w-fit xl:w-fit">
          <img
            src={imgUrl}
            className="object-cover object-top w-full max-w-xl "
            alt=""
          />
        </div> } */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white rounded-lg p-8 shadow-lg">
        <p className="text-xl font-semibold leading-relaxed">
          🌟 Based in <span className="text-yellow-300">Tijuana, Mexico</span>, a vibrant city in Baja California, I have
          years of experience in development and a passion for crafting detailed solutions. 
          <span className="block mt-4">
            <FaMountain className="inline-block mr-2 text-2xl text-yellow-300" /> I enjoy the <span className="text-yellow-300">outdoors</span>,
            <FaChalkboardTeacher className="inline-block mx-2 text-2xl text-yellow-300" /> <span className="text-yellow-300">teaching</span>, and
            <FaPaintBrush className="inline-block mx-2 text-2xl text-yellow-300" /> <span className="text-yellow-300">painting</span>.
          </span>
        </p>
      </div>
        </div>
    )
}