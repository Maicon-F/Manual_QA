import { Category } from "./Category";


export default class Item{
    public id: number;
    category?: Category[] = [Category.all];
    public name:string='';
    public url?:string='';
    public description?:string='';
    public price:number;
    public colors: string[] = ["blue", "red", "black", "yellow", "brown", "white"];
    public color:string = this.colors[0];

    constructor(id: number, name: string,price:number, category?: Category[], url?: string, description?:string ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.url = url;
        this.description=description;
        this.price = price;
      }


}


