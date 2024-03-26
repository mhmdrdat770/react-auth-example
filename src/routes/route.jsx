import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashbord from '../components/dashbord/Dashbord'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashbord />
            },
            {
                path: "auth/login",
                element: <Login />
            },
            {
                path: "auth/register",
                element: <Register />
            },
        ]
    }
])