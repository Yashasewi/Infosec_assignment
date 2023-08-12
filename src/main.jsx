import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error.jsx";
import Login_Screen from "./Pages/Login/Login_Screen.jsx";
import Profile_Screen from "./Pages/Profile/Profile_Screen.jsx";
import SignIn_Screen from "./Pages/SignIn/SignIn_Screen.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Login",
        element: <Login_Screen />,
    },

    {
        path: "/Profile",
        element: <Profile_Screen />,
    },
    {
        path: "/SignIn",
        element: <SignIn_Screen />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
