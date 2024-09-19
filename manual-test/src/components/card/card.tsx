import React from "react";
import style from "./style.module.scss";



export default class Card extends React.Component<any,any>{
    render(){

        const { item} = this.props;
        let price = item.price.toFixed(2);


        return (
            <div className={style.card} >
                <div className={style.container}>
                    <a href={`/product/${item.id}`}><img  src={`${item.url}.png`}/></a>
                </div>
                <div>
                    <p>{item.name}</p>
                    <p><i className="fas fa-euro-sign" ></i>  {price}</p>
                </div>
            </div>
        )
    }
    }




