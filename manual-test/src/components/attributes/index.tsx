import React, { useState } from 'react';
import style from "./style.module.scss";

interface MyComponentProps {
    colors: string[]; 
    selected: string;
    fromParent:(data:string) => void;
}

const ColorOptions:React.FC<MyComponentProps> = ({colors, selected, fromParent }) =>{
        const [color, setColor] = useState(selected);

        const handle = (color:string) => {
            setColor(color); 
            fromParent(color);
          };

        return(
            <div className={style.container}>
                {colors.map(c =>(
                    <div style={{backgroundColor:c}} className={c ==color?style.selected:""} onClick={()=>handle(c)} > </div>
                ))}

            </div>
        )

}

export default ColorOptions;