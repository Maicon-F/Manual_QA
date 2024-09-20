import React, { Component } from 'react';
import style from './style.module.scss';
import Item from '../../models/Item';

interface MyComponentProps{
    name: String;
    item: Item;    
}

const CustomButton:React.FC<MyComponentProps> = ({name, item})=> {

    

    const addToCart = ()=>{
        console.log("addToCart");
        addItemToCart(item);
      };

    return(  
        <div><button className={style.button}   onClick={()=> addToCart()}>{name}</button></div>
    )
}

export default CustomButton;


const addItemToCart =(product:Item) =>{
    let hasProduct = false;
    let myCart:Item[] = [];
    let oldCart:Item[] = loadProducts();

    for(let p of oldCart){
         if( p.id === product.id && p.color == product.color && p.size==product.size){
            hasProduct =true;
            product.quantity=(p.quantity+1);
            myCart.push(product);
            continue;
         }

         myCart.push(p)
    }

    if(!hasProduct){
     product.quantity = 1;
     myCart.push(product);
    }

    saveProducts(myCart);
 }

 const loadProducts = () => {
     const storedProducts = localStorage.getItem('products');
     const items:Item[] = [];
     if (storedProducts) {
       // If products exist in localStorage, parse them
       return JSON.parse(storedProducts) as Item[];
     } else {
       // Otherwise, return an empty list
       return items;
     }
   };
 
   // Function to save products to itemlocalStorage
   const saveProducts = (products: Item[]) => {
     localStorage.setItem('products', JSON.stringify(products));
   };




function useState(color: string): [any, any] {
    throw new Error('Function not implemented.');
}

