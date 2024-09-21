import User from "../../models/User";
import { Exception } from "sass";
import Item from "../../models/Item";
import style from "./style.module.scss"
import ItemCard from "../../components/itemCart/itemCart";


const Cart: React.FC = () => {

    let user = loadUserData();
    if (user === undefined)
        throw Exception
    
    let oldCartData:Item[] = user.items as Item[];

    return (
        <div className={style.container}>
        <h1>My bag: </h1>
        <div className={style.container}>
            {oldCartData.map((item: Item) => (
                <div className={style.item} >
                    <ItemCard key={item.id} item={item} />
                </div>
            ))}

        </div>
        </div >
    )
}

export default Cart;


const addItemToCart = (product: Item) => {
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





