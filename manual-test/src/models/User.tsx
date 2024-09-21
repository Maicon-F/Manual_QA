import Item from "./Item";


export default class User{
    public id: number=0;
    public items?: Item[] = [];
    public name:string='';
    public password?:string='';
    public address?:string='';
    public contact?:string='';

    constructor( name: string, password: string) {
        this.password = password;
        this.name = name;
   
    }


}

