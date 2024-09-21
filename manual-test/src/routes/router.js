import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Description from "../pages/DescriptionPage/Description";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";


export default class Router extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home/>}  />
                        <Route path="/login" element={<Login/>}  />
                        <Route path="/signup" element={<Signup/>}  />
                        <Route path="/product/:id" element={<Description/>}  />
                        <Route path="/" element={<Home/>}  />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}