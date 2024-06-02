import { lazy } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/login"));

const rootRouter = [
    {
        path: "/",
        element: <Navigate to="/login" />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
];

export default rootRouter;
