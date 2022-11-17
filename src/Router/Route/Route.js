import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Addreview from "../../Pages/AddReview/Addreview";
import AddService from "../../Pages/AddService/AddService";

import Allrecipe from "../../Pages/Allrecipe/Allrecipe";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import SignUp from "../../Pages/Signup/Signup";
import Blog from "../../Shared/Blog/Blog";
import RecipeDetails from "../../Shared/RecipeDetails/RecipeDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://unique-recipe-server.vercel.app/recipe')
            },
            {
                path: '/allrecipe',
                element: <Allrecipe></Allrecipe>,
                loader: () => fetch('https://unique-recipe-server.vercel.app/recipes')
            },
            {
                path: '/details/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`https://unique-recipe-server.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoute>
                    <Addreview></Addreview>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://unique-recipe-server.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
           
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`https://unique-recipe-server.vercel.app/review/${params.id}`)
            }
        ]
    }
]);

export default router;