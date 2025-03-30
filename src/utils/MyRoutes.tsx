import { createBrowserRouter, RouterProvider } from "react-router";

import { Suspense, lazy } from "react";

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
        <RouterProvider router={router} />
    )
}


export default MyRoutes;