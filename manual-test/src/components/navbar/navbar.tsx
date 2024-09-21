
import React from "react";

import style from "./style.module.scss";

import logo from "../../assets/logo.jpg"


const Navbar:React.FC= () => {
        return (
            <div className={style.container} >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/home"><img src={logo}></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="https://www.google.com">All</a>
                                    <a className="dropdown-item" href="#">men</a>
                                    <a className="dropdown-item" href="#">women</a>
                                </div>
                            </li>

                            <li className="nav-item mr-3 ml-3 hoover">
                                <a className="nav-link">
                                    <a className="m-1 fs-14"  href={"/login"} >
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                </a>
                            </li>
                            <li className="nav-item hoover">
                                <a className="nav-link">
                                    <a className="fs-14" href="/cart">
                                        <i className="fa fa-shopping-cart" aria-hidden="true">
                                        </i>
                                    </a>
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav >

            </div >
        )
    
}


export default Navbar;
