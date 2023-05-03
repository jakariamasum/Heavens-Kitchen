import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../LayOut/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";


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
            },
            {
                path: 'chefs/:id', 
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)

            }
        ]
    }
])

export default router;