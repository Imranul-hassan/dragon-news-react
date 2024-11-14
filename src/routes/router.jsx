import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"
import CategoryNews from "../pages/CategoryNews"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <h2>News layout</h2>
    },
    {
        path: "/auth",
        element: <h3>auth</h3>
    }
])

export default router