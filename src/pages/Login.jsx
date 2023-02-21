import React, {useContext} from 'react';
import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import {AuthContext} from "../context";


const Login = () => {
    const {isAuth,  setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="login">
            <div className="loginText">Необходимо войти <br/>в систему</div>
            <div className={"loginTitle"}>Логин</div>
            <form style={{'background-color': 'white'}} onSubmit={login}>
                <MyInput style={{'margin-bottom': 15}} type="text" placeholder="Введите логин"/><br/>
                <div className={"loginTitle"}>Пароль</div>
                <MyInput style={{'margin-bottom': 50}} type="password" placeholder="Введите пароль"/><br/>
                <MyButton style={{ 'margin-bottom': 20, 'margin-color': 'white'}}>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;