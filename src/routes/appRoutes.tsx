import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../apps/home/Home";
import LuckyWheel from "../apps/lucky-wheel/LuckyWheel";
import About from "../apps/about/About";
import Contact from "../apps/contact/Contact";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'lucky-wheel',
                element: <LuckyWheel />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: "*",
        element: <div>404 - Not Found</div>,
    }
]

export const router = createBrowserRouter(routes);