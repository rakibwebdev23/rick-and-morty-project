import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home/Home";
import ViewAllCharacter from "../pages/ViewAllCharacter/ViewAllCharacter";
import ViewCharacterDetails from "../pages/ViewAllCharacter/ViewCharacterDetails/ViewCharacterDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/viewAllCharacter",
                element: <ViewAllCharacter></ViewAllCharacter>
            },
            {
                path: "/characterDetails/:id",
                element: <ViewCharacterDetails ></ViewCharacterDetails>,
                loader: ({ params }) => fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            }
        ]
    },
]);