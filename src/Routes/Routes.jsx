import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../LayOut/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <Login></Login>
            }, 
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;