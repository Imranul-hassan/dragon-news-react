import { createBrowserRouter } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
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