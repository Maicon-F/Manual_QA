
import Swal from "sweetalert2";
import User from "../../models/User";
import style from "./style.module.scss";
import { useState } from "react";


const Signup:React.FC = () => {

    const [username, setUsername] = useState(''); 
    const [pass, setPass] = useState(''); 

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Create an account</h1>
                <p >Create an account and start purchasing!</p>
                <form>
                    <div className="form-group">
                        <label>email</label>
                        <input  onChange={(event)=>  setUsername(event.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="insert your email" />
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
                <button onClick={()=> signup(username, pass)} >Submit</button>
            </div>
        </div>
    )
}

export default Signup;


const signup = (username: string, pass: string) => {
    console.log("started sig nup request...");
    let hasPermissionToCreate = true;
    let users: User[] = loadUsers();

    for (let u of users) {
        if (u.name === username && u.password === pass) {
            hasPermissionToCreate = false;
            break;
        }
    }

    if (hasPermissionToCreate) {
       const newUser = new User(username, pass);
       users.push(newUser);
    } else {
        console.log("got inside the alarm")
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


