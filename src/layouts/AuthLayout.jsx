import React from "react";
import { isLoggedInSelector } from "../store/authSlice";
// Librares
import { Navigate, Outlet } from "react-router-dom";
// Components
import Card from "../components/Card";
// Store

const AuthLayout = () => {
    // let { path } = useRouteMatch();
    const isLoggedIn = useSelector(isLoggedInSelector());

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
            <Card>
                <Outlet />
            </Card>
        </div>
    );
};

export default AuthLayout;
