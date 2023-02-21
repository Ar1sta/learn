import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import  "./Navbar.module.css"

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div  className="navbar__links">
                <Link to="/about"><h2 className="title">О сайте</h2></Link>
                <Link to="/posts">Посты</Link>
            </div>
            
        </div>
    );
};

export default Navbar;