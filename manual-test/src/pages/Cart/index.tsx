import User from "../../models/User";
import { Exception } from "sass";
import Item from "../../models/Item";
import style from "./style.module.scss"
import ItemCard from "../../components/itemCart/itemCart";
import Swal from "sweetalert2";
import { useState } from "react";


const Cart: React.FC = () => {

    let [state, setState] = useState(false);
    let user = loadUserData();
    if (user === undefined)
        throw Exception

    let oldCartData: Item[] = user.items as Item[];
    let sum = 0;
    oldCartData.forEach((i) => {
        sum = i.quantity * i.price + sum;
    });

    const completePurchase = () => {
        purchase();
        setState(!state);
    }

    return (
        <div className={style.container}>
            {
                (user.items && user.items[0]) ?
                    <h1>My bag: </h1>
                    :
                    null
            }

            <div >
                {oldCartData.map((item: Item) => (
                    <div className={style.item} >
                        <ItemCard key={item.id} item={item} />
                    </div>
                ))}
            </div>
            <div>{(user.items && user.items[0]) ?
                <div>
                    <p style={{fontSize:"32px"}}>Total: <i style={{fontWeight:"bold"}}>{sum}</i> <i className="fas fa-euro-sign" style={{fontSize:"26px"}}></i></p>
                    <button onClick={() => completePurchase()}>PURCHASE</button>
                </div> :
                <div><h2>It seems your bag is empty. Find out our offers and start purchasing!</h2></div>
            }
            </div>
        </div >
    )
}

export default Cart;


const purchase = () => {
    console.log("completing purchase...")
    let user = loadUserData();

    if (user === undefined)
        throw Exception

    user.items = [];
    Swal.fire({
        title: 'Purchase completed!',
        text: 'In few days your products will be ready!',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
            console.log('Alert closed');
        }
    });

    save(user);

}

const loadUserData = () => {
    const users: User[] = loadUsers();
    const storedProducts = localStorage.getItem('user');
    let loggedUser: User;

    if (storedProducts) {
        loggedUser = JSON.parse(storedProducts) as User;
    } else {
        throw Exception;
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





