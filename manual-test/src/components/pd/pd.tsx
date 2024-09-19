import React, { useState } from 'react';
import style from "./style.module.scss";
import CustomButton from "../CustomButton/customButton";
import ColorOptions from "../attributes";
import Item from '../../models/Item';

interface MyComponentProps {
    item:Item;
  }


const PD: React.FC<MyComponentProps> =  ({ item}) => {


        return (
                <div className={style.container}>
                    <a><img  src={`${item.url}.png`}/></a>
                    <div>
                        <p className={style.title}>{item.name}</p>
                        <p>Price: <i className="fas fa-euro-sign"> {item.price}</i></p>
                        <ColorOptions colors={item.colors} pickedColor={item.color}></ColorOptions>
                        <CustomButton name="ADD TO CART"></CustomButton>
                        <p>{item.description}</p>
                    </div>
                </div>
               
        )
    
    }

    export default PD;




