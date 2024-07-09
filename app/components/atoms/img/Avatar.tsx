interface AvatarProps{
    imgUrl:string;
    fName:string;
    lName:string;
}

export default function Avatar({imgUrl,fName,lName}:AvatarProps){
    return(
        <>
       {imgUrl+fName+lName}

        </>
    )
}