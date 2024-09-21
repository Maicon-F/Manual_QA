import React, { useState } from 'react';
import style from "./style.module.scss";

interface MyComponentProps {
    sizes: string[]; 
    selected: string;
    fromParent:(data:string) => void;
}

const SizeOptions:React.FC<MyComponentProps> = ({sizes, selected, fromParent }) =>{
        const [size, setColor] = useState(selected);

        const handle = (color:string) => {
            setColor(color); 
            fromParent(color);
          };

        return(
            <div className={style.container}>
                {sizes.map(s =>(
                    <div className={s ==size?style.selected:""} onClick={()=>handle(s)} >{s}</div>
                ))}

            </div>
        )

}

export default SizeOptions;