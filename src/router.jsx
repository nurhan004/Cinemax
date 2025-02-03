import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Block1Info from "./components/Info/Block1Info/Block1Info"
import Drama from "./components/Sections/Block3/Drama/Drama.jsx"; 
import Horror from "./components/Sections/Block3/Horror/Horror.jsx";
import Komediya from "./components/Sections/Block3/Komediya/Komediya.jsx";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/look/:id",
                element:<Block1Info/>
            },
            {
                path:"/drama",
                element:<Drama/>
            },
            {
                path:"/horror",
                element:<Horror/>
            },
            {
                path:"/komediya",
                element:<Komediya/>
            }

        ]
    }
])