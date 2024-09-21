import React, { useState } from 'react';
import style from "./style.module.scss";
import CustomButton from "../CustomButton/customButton";
import Item from '../../models/Item';
import ColorOptions from '../attributes/color';
import SizeOptions from '../attributes/size';

interface MyComponentProps {
    item:Item;
  }


const PD: React.FC<MyComponentProps> =  ({ item}) => {

        const [product, setProduct] = useState<Item>(item);
        const handleDataFromChild = (color: string) => {
            item.color = color;
            setProduct(item); // Update the parent's state with the child's data
          };


        return (
                <div className={style.container}>
                    <a><img  src={`${item.url}.png`}/></a>
                    <div>
                        <p className={style.title}>{item.name}</p>
                        <ColorOptions colors={item.colors} selected={item.color} fromParent={handleDataFromChild}></ColorOptions>
                        <SizeOptions sizes={item.sizes} selected={item.size} fromParent={handleDataFromChild}></SizeOptions>
                        <p>Price: <i className="fas fa-euro-sign"> {item.price}</i></p>
                        <CustomButton name="ADD TO CART" item={product}></CustomButton>
                        <p>{item.description}</p>
                    </div>
                </div>
        )
    }


    export default PD;




