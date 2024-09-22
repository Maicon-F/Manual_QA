
import Swal from "sweetalert2";
import User from "../../models/User";
import style from "./style.module.scss";
import { useState } from "react";


const Signup:React.FC = () => {

    const [email, setEmail] = useState(''); 
    const [pass, setPass] = useState(''); 
    const [name, setName] = useState(''); 

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Create an account</h1>
                <p >Create an account and start purchasing!</p>
                <form>
                <div className="form-group">
                        <label>Name</label>
                        <input  onChange={(event)=>  setName(event.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="How do you wanna us to call you?" />
                    </div>
                    <div className="form-group">
                        <label>email</label>
                        <input  onChange={(event)=>  setEmail(event.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="insert your email" />
                    </div>
                    <div className="form-group">
                        <label >password</label>
                        <input onChange={(event)=>  setPass(event.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="insert your password" />
                    </div>
                    <div className="form-group">
                        <label >Confirm your password</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="confirm your password" />
                    </div>
                </form>
                <button onClick={()=> signup(name, email, pass)} ><a href="/home">Submit</a></button>
            </div>
        </div>
    )
}

export default Signup;


const signup = (name: string, email:string, pass: string) => {
    console.log("starting sign up request...");
    let hasPermissionToCreate = true;
    let users: User[] = loadUsers();

    for (let u of users) {
        if (u.name === email) {
            hasPermissionToCreate = false;
            break;
        }
    }

    if (hasPermissionToCreate) {
       const newUser = new User(name, email, pass);
       users.push(newUser);
       Swal.fire({
        title: 'Welcome to Arbro!',
        text: 'Start purchaing and enjoy our offers!',
        icon: 'success',
        confirmButtonText: 'OK'
    });
    } else {
        Swal.fire({
            title: 'Sign up failure!',
            text: 'User already exits. Please try again with another account or contact our support team!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    saveUsers(users);
}


const loadUsers = () => {
    const storedProducts = localStorage.getItem('users');
    if (storedProducts) {
        return JSON.parse(storedProducts) as User[];
    } else {
        return [];
    }
};

const saveUsers = (users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
};


