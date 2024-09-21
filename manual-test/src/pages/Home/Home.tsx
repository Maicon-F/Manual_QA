import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import data from "../../assets/items.json";
import Item from "../../models/Item";
import style from "./style.module.scss"

export default class Home extends React.Component<any, any> {
items = getItems();

render() {
    return (
        <div >
            <div className={style.container}>
                    {this.items.map((item: Item) => (
                        <div className={style.item} >
                        <Card  key={item.id} item={item} />
                        </div>
                    ))}
                
            </div>
        </div>
    )
}
}

function getItems():Item[]{
    var arr: Item [] = [];
       data.items.forEach((i: any) => {
        const item =  new Item(i.id, i.name, i.price, i.category, i.url, i.description);
        arr.push(item);
       }
);

return arr;
}
