import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Apps from "../../pages/Apps/Apps";
import AppsReview from "../../pages/AppsReview/AppsReview";
import Installation from "../../pages/Installation/Installation";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/review/:id',
                Component: AppsReview
            },
            {
                path:'/installation',
                Component: Installation
            }
        ]
    }
])