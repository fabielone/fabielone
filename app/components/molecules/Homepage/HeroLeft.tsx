import Pills, { PillsProps } from '../../atoms/Pills';

interface HeroLeftProps {
    
    heading:string;
    punchline:string;
    pills: PillsProps[];
    }

export default function HeroLeft({heading,punchline,pills}:HeroLeftProps) {

    return(
        <div>
            <div>
                {pills.map((pill) => (
                    <Pills key={pill.text} {...pill} />
                ))}
            </div>
            <h1>{heading}</h1>
            <p>{punchline}</p>
            
        </div>
    )

}