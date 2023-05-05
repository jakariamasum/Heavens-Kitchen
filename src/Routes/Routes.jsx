import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../LayOut/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'chefs/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://heaven-s-kitchen-server-jakariamasum.vercel.app/chefs/${params.id}`)

            }
        ]
    }
])

export default router;