import React from 'react';
export interface PillsProps{
    text: string;
    color: string;
    bgColor: string;

}

const Pills: React.FC<PillsProps> = (
    {text,
    color,
    bgColor}) => {
    return(
        <>
        <p className={`${color} ${bgColor}`}>{text}</p>
        </>
    )
}

export default Pills;
