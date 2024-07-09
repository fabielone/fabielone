
interface HeroRightProps{
    imgUrl:string;
}

export default function HeroRight({imgUrl}:HeroRightProps){

    return(
        <>
        Hero Right
        {imgUrl}
        </>
    )
}