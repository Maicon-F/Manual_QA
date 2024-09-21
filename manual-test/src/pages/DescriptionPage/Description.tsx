
import PD from "../../components/pd/pd";
import Item from "../../models/Item";
import data from "../../assets/items.json";
import { Category } from "../../models/Category";
import { useParams } from "react-router-dom";
import style from "./style.module.scss"



const Description = () => {
    const { id } = useParams();
    const item: any = getItemById(id);

    return (
        <div className={style.container}>
            <div>
                <div>
                    <PD key={item.id} item={item} />
                </div>
            </div>
        </div>
    )
}

export default Description;

function getItemById(id: any): Item {
    var res: Item = new Item(1, "", 2, [], "", "");

    for (const item of data.items) {
        if (id == item.id) {
            const category: Category = (item.category as Category);
            var categories : Category[] = [];
            categories.push(category)
            res = new Item(item.id, item.name, item.price, categories, item.url, item.description);
            return res;
        }
    }
    return res;
}   
