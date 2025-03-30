import { createBrowserRouter, RouterProvider } from "react-router";

import { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material";

import MyTheme from "../config/MyTheme";

const SignIn = lazy(() => import('../pages/auth/SignIn'));



const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense><SignIn /></Suspense>,
    },
    // {
    //     path: "/",
    //     element:'',
    //     children: [
    //         { index: true, Component: Home }
    //     ]
    // }
]);



const MyRoutes = () => {

    return (
        <ThemeProvider theme={MyTheme}>
             <RouterProvider router={router} />
        </ThemeProvider>
       
    )
}


export default MyRoutes;