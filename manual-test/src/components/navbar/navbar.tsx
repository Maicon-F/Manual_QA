import React, { useState } from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo.jpg";
import User from "../../models/User";
import Swal from "sweetalert2";

const Navbar: React.FC = () => {
    const user: User = tryLogin();
    const [state, setState] = useState(false);

    const handleLogout = () =>{
        logOut();
        Swal.fire({
            title: 'Logging out!',
            text: 'Thank you for buying with us',
            icon: 'success',
            timer: 2000, 
            timerProgressBar: true,
            willClose: () => {
                console.log('Alert closed');
            }
        });
        setState(!state)
    }

    return (
        <div className={style.container}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/home">
                    <img src={logo} alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ display: "flex", justifyContent: "space-between" }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="https://www.google.com">All</a>
                                <a className="dropdown-item" href="#">Men</a>
                                <a className="dropdown-item" href="#">Women</a>
                            </div>
                        </li>

                    </ul>
                    <ul className="navbar-nav" style={{ marginRight: "10px", fontWeight: "300", display: "flex", justifyContent: "center" }}>
                        <li className="nav-item mr-3 ml-3 hoover">
                            {!user.name && (
                                <a className="nav-link" href="./login">
                                    <i className="fa fa-user" aria-hidden="true"></i> Login
                                </a>
                            )}
                        </li>
                        <li className="nav-item active">
                            {user.name && <a className="user" href="./home">Welcome, {user.name}</a>}
                        </li>

                        <li className="nav-item hoover" style={{ margin: "0px 10px 0px 10px" }}>
                            {user.email?
                            <a className="nav-link" href="./cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                        :null}
                        </li>
                        <li className="nav-item active">
                            {user.email ?
                                <a style={{marginLeft:"50px"}} href="#" onClick={() => handleLogout()} className="nav-link">
                                    <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                                </a>
                                : null
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

const tryLogin = () => {
    const storedProducts = localStorage.getItem('user');
    let loggedUser: User;

    if (storedProducts) {
        loggedUser = JSON.parse(storedProducts) as User;
        return loggedUser;
    } else {
        return new User("", "", "");
    }
};

const logOut = () => {
    console.log("Logging out...")
    localStorage.removeItem('user');
}


function useSate(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}

