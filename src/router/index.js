import { createBrowserRouter } from "react-router-dom";
// 组件
import Login from "../pages/Login";
import Article from '../pages/Article/index';
import App from "../App";
import Layout from '../pages/Layout/index';
import About from "../pages/About";
import NotFound from '../pages/NotFound/index';

// 引入呀
const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                index:true,
                element:<Layout />
            },
            {
                path:'/about',
                element: <About />
            }
        ]
    },              

    {
        path:'/login',
        element: <Login />
    },

    {
        path:'/article/:id/:name',
        element: <Article />
    },
    {
        path:"*",
        element: <NotFound />
    }
])

export default router