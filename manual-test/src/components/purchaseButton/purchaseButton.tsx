import React, { Component } from 'react';
import style from './style.module.scss';
import Item from '../../models/Item';
import User from '../../models/User';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface MyComponentProps {
  name: String;
  item: Item;
}

const PurchaseButton: React.FC<MyComponentProps> = ({ name, item }) => {
  const navigate = useNavigate();

  const addToCart = () => {
    console.log("addToCart");
    const res = addItemToCart(item);
    
    if(res)
      navigate("/cart");
  };

  return (
    <div><button className={style.button} onClick={() => addToCart()}>{name}</button></div>
  )
}

export default PurchaseButton;


const addItemToCart = (product: Item) => {
  let hasProduct = false;
  let myCart: Item[] = [];

  let user = loadUserData();

  if(user === undefined){
    return false;
  }
  
  let oldCartData= user.items;

  if(oldCartData != undefined)
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
  return true;
}

const loadUserData = () => {
  const users:User[] = loadUsers();
  const storedProducts = localStorage.getItem('user');
  let loggedUser:User;

  if (storedProducts) {
    loggedUser = JSON.parse(storedProducts) as User;
  } else {
    Swal.fire({
      title: 'Failure!',
      text: 'Please, login before purchaing!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return
  }

  for(let u of users){
    if(loggedUser.name === u.name && u != undefined){
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





