import { lazy } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/login"));
const ResumePage = lazy(() => import("../pages/resume"));

const rootRouter = [
    {
        path: "/",
        element: <Navigate to="/login" />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "resume",
        element: <ResumePage />,
    },
];

export default rootRouter;
