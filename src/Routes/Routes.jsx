import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../LayOut/Home/Home";


const router = createBrowserRouter([
    
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;