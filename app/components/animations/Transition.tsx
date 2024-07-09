interface TransitionProps{
    properties:string;
}

export default function Transition({properties}:TransitionProps){

    return(
        <>
        {properties}
        </>
    )
}