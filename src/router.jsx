import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Block1Info from "./components/Info/Block1Info/Block1Info"
import Drama from "./components/Sections/Block3/Drama/Drama.jsx"; 
import Horror from "./components/Sections/Block3/Horror/Horror.jsx";
import Komediya from "./components/Sections/Block3/Komediya/Komediya.jsx";
import Appa from "./components/User/Appa"
import Profile from "./components/User/Profile"
import DramaInfo from "./components/Sections/Block3/Drama/DramaInfo/DramaInfo.jsx";
import HorrorInfo from "./components/Sections/Block3/Horror/HorrorInfo/HorrorInfo.jsx";
import KomediyaInfo from "./components/Sections/Block3/Komediya/KomediyaInfo/KomediyaInfo.jsx";
// import Drama from "./components/Sections/Block3/Drama/Drama"





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
            },
            {
                path:"/dramaFilm/:id",
                element:<DramaInfo/>
            },
            {
                path:"/horrorFilm/:id",
                element:<HorrorInfo/>
            },
            {
                path:"/komediyaFilm/:id",
                element:<KomediyaInfo/>
            },


         {
            path:"/appa",
            element:<Appa/>
         },
         {
            path:"/profile",
            element:<Profile/>
         }
        ]
    }
])