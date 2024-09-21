
import Swal from "sweetalert2";
import User from "../../models/User";
import style from "./style.module.scss";
import { useState } from "react";


const Login: React.FC = () => {

    const [username, setUsername] = useState(''); 
    const [pass, setPass] = useState(''); 

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1 className="text-center text-dark mt-5">Already our costumer?</h1>
                <p className="text-center text-dark">Login and enjoy our offers or create a new account  <a href="/signup">here</a>!</p>
                <form>
                    <div className="form-group">
                        <label>email</label>
                        <input onChange={(event)=> setUsername(event.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Your email" />
                    </div>
                    <div className="form-group">
                        <label >password</label>
                        <input onChange={(event)=> setPass(event.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your password" />
                    </div>
                </form>
                <button onClick={()=>{login(username, pass)}} >Submit</button>
            </div>
        </div>
    )
}

export default Login;


const login = (username: string, pass: string) => {
    console.log("starting login request ....")
    let permissionToLogin = false;
    let users: User[] = loadUsers();

    for (let u of users) {
        if (u.name === username && u.password === pass) {
            permissionToLogin = true;
            saveUser(u);
            break;
        }
    }

    if(!permissionToLogin){
        Swal.fire({
            title: 'Login fail!',
            text: 'Wrong username or password. Please try again!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
    }
}

const loadUsers = () => {
    const storedProducts = localStorage.getItem('users');
    if (storedProducts) {
        return JSON.parse(storedProducts) as User[];
    } else {
        return [];
    }
};


const saveUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
};