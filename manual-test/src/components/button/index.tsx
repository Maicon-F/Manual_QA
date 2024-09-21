
import style from "./style.module.scss";

interface MyComponentProps {
    name: string;
}

const Button:React.FC<MyComponentProps> = ({name})=> {
    return(  
        <div > <a  href={"/signup"}><button className={style.button}>{name}</button></a></div>
    )
}

export default Button;
