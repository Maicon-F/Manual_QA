import React, { useState } from 'react';
import style from "./style.module.scss";
import AddToCartButton from "../purchaseButton/purchaseButton";
import Item from '../../models/Item';
import ColorOptions from '../attributes/color';
import SizeOptions from '../attributes/size';

interface MyComponentProps {
  item: Item;
}


const PD: React.FC<MyComponentProps> = ({ item }) => {

  const [product, setProduct] = useState<Item>(item);
  const handleColor = (color: string) => {
    item.color = color;
    setProduct(item); // Update the parent's state with the child's data
  };

  const handleSize = (s: string) => {
    item.size = s;
    setProduct(item); // Update the parent's state with the child's data
  };


  return (
    <div className={style.container}>
      <a><img src={`${item.url}.png`} /></a>
      <div>
        <p className={style.title}>{item.name}</p>
        <ColorOptions colors={item.colors} selected={item.color} fromParent={handleColor}></ColorOptions>
        <SizeOptions sizes={item.sizes} selected={item.size} fromParent={handleSize}></SizeOptions>
        <p>Price: <i className="fas fa-euro-sign"> {item.price}</i></p>
        <AddToCartButton name="ADD TO CART" item={product}></AddToCartButton>
        <p>{item.description}</p>
      </div>
    </div>
  )
}


export default PD;



