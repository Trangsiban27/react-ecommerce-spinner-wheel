import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../apps/home/Home";
import LuckyWheel from "../apps/lucky-wheel/LuckyWheel";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'lucky-wheel',
                element: <LuckyWheel />
            }
        ]
    },
    {
        path: "*",
        element: <div>404 - Not Found</div>,
    }
]

export const router = createBrowserRouter(routes);