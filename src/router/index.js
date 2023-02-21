import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/error', element: <Error/>},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
]

