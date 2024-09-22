import React, { useState } from "react";
import style from "./style.module.scss";
import plusImg from "../../assets/icons/plus-square.svg";
import minusImg from "../../assets/icons/minus-square.svg";
import { Exception } from "sass";
import Item from "../../models/Item";
import User from "../../models/User";
import Swal from "sweetalert2";

interface MyPropsInterface{
    item: Item;
}

const ItemCart:React.FC<MyPropsInterface> = ({item}) => {
        let [updateCart, setUpdateCart] = useState(false);
        const add = (item:Item) =>{
            setUpdateCart(!updateCart)
            addItemToCart(item);
        }

        const rem = (item:Item) =>{
            setUpdateCart(!updateCart)
            removeItemFromCart(item);
        }

        const factor = item.quantity > 1? 1.5:1;

        return (
            <div className={style.card}>
                <div className={style.container}>
                    <img onClick={()=>add(item)} className={`${style.btn} ${style.plus}`} src={plusImg} alt="Increase quantity" />
                    
                    <a href={`/product/${item.id}`}>
                        <img className={style.mainImg} src={`${item.url}.png`} alt={item.name} />
                    </a>
                    
                    <img onClick={()=>rem(item) } className={`${style.btn} ${style.minus}`} src={minusImg} alt="Decrease quantity" />
                </div>

                <div className={style.productDetails}>
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <p className={style.price} >
                        {item.price} * {item.quantity} <i style={{fontWeight:"bold"}}>{` =  ${(item.price*item.quantity*factor).toFixed(2)}  `}</i> 
                        <i className="fas fa-euro-sign" style={{fontSize:"26px"}}></i>
                    </p>
                </div>
            </div>
        );
    
}

export default ItemCart;


const addItemToCart = (product: Item) => {
    console.log("Adding a new product to the cart...")
    let hasProduct = false;
    let myCart: Item[] = [];

    let user = loadUserData();

    if (user === undefined)
        throw Exception

    let oldCartData = user.items;

    if (oldCartData != undefined)
        for (let p of oldCartData) {
            if (p.id === product.id && p.color == product.color && p.size == product.size) {
                hasProduct = true;
                product.quantity = (p.quantity + 1);
                myCart.push(product);
                continue;
            }
            myCart.push(p)
        }

    if (!hasProduct) {
        product.quantity = 1;
        myCart.push(product);
    }

    user.items = myCart;
    save(user);
}


const removeItemFromCart = (product: Item) => {
    let hasProduct = false;
    let myCart: Item[] = [];

    let user = loadUserData();

    if (user === undefined)
        throw Exception

    let oldCartData = user.items;

    if (oldCartData != undefined)
        for (let p of oldCartData) {
            if (p.id === product.id && p.color == product.color && p.size == product.size) {
                hasProduct = true;
                product.quantity = (p.quantity - 1);
                if(product.quantity === 0){
                    window.location.reload();
                    continue;
                }

                myCart.push(product);
                continue;
            }
            myCart.push(p)
        }

    user.items = myCart;
    save(user);
}

const loadUserData = () => {
    const users: User[] = loadUsers();
    const storedProducts = localStorage.getItem('user');
    let loggedUser: User;

    if (storedProducts) {
        loggedUser = JSON.parse(storedProducts) as User;
    } else {
        Swal.fire({
            title: 'Failure!',
            text: 'Please, login before purchaing!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
     return;
    }

    for (let u of users) {
        if (loggedUser.name === u.name && u != undefined) {
            return u;
        }
    }

};

const save = (user: User) => {
    const oldData: User[] = loadUsers();
    let data: User[] = [];

    for (let u of oldData) {
        if (u.name === user.name) {
            data.push(user);
            continue;
        }
        data.push(u);
    }
    localStorage.setItem('users', JSON.stringify(data));
};


const loadUsers = () => {
    const storedProducts = localStorage.getItem('users');
    if (storedProducts) {
        return JSON.parse(storedProducts) as User[];
    } else {
        return [];
    }
};











