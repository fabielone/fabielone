import React from 'react';

interface HighlightProps {

    text:string;
    color:string;
    bgColor:string;
}

const Highlight : React.FC<HighlightProps> = ({
    text,
    color,
    bgColor 
}) => {

    return(
        <span
        className={`${color} ${bgColor}`}
        >{text}</span>
    )
}

export default Highlight;