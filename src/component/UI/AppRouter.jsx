import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthContext} from "../../context";
import {privateRoutes, publicRoutes} from "../../router";
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";


const AppRouter = () => {

    const PrivateRedirect = <Navigate to="/posts" replace={true}  />
    const PublicRedirect = <Navigate to="/login" replace={true}  />

    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? (
                <Routes>
                {privateRoutes.map( (route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={PrivateRedirect}/>
            </Routes>)
            : <Routes>
                {publicRoutes.map( (route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={PublicRedirect}/>
            </Routes>
    );
};

export default AppRouter;