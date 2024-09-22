import Item from "./Item";


export default class User{
    public items?: Item[] = [];
    public name:string='';
    public email:string='';
    public password?:string='';
    public address?:string='';
    public contact?:string='';

    constructor( name: string, email:string,  password: string) {
        this.password = password;
        this.name = name;
        this.email = email;   
    }


}

