import { Outlet } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export default function AuthLayout()  {
        return (
            <>
            <h1>AuthLayout</h1>
            {/* <Login/> */}
            <Outlet/>
            {/* <Register/> */}
            </>
        );
}