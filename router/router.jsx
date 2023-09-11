import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import {
    Main,
    ProductDetail,
    Register,
    Login,
    Tv,
    Phones,
    Speakers,
    Air,
    Fridge,
    Headphones,
    Notebooks,
    Microphones,
    Cameras,
} from "./index.js";
import Tabs from "../src/pages/Tabs";
import Desktops from "../src/pages/Desktops";
import Chairs from "../src/pages/Chairs";
import Pc from "../src/pages/Pc";
import Mouses from "../src/pages/Mouses";
import Index from "../src/pages/Index.jsx";
import Kitchens from "../src/pages/Kitchens.jsx";
import Blenders from "../src/pages/Blenders.jsx";
import Laundrys from "../src/pages/Laundrys.jsx";
import HomeAppliances from "../src/pages/HomeAppliances";
import ControlPanel from "../src/pages/ControlPanel.jsx";
import AddProduct from "../src/pages/AddProduct.jsx";
import ModifyProduct from "../src/pages/ModifyProduct.jsx";
import DeleteProduct from "../src/pages/DeleteProduct.jsx";
import RemoveAdmin from "../src/pages/RemoveAdmin.jsx";
import CreateAdmin from "../src/pages/CreateAdmin.jsx";
import GrantPermissions from "../src/pages/GrantPermissions.jsx";
import RemovePermissions from "../src/pages/RemovePermissions.jsx";
import GoodReviews from "../src/pages/GoodReviews.jsx";
import BadReviews from "../src/pages/BadReviews.jsx";
import AllReviews from "../src/pages/AllReviews.jsx";
import GamersPage from "../src/pages/gamersPage";
import ResultProducts from "../src/pages/ResultProducts";
import TechsPage from "../src/pages/techsPage";
import CarritoPage from "../src/pages/carritoPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/TV",
                element: <Tv />,
            },
            {
                path: "/Phones",
                element: <Phones />,
            },
            {
                path: "/SPEAKERS",
                element: <Speakers />,
            },
            {
                path: "/Air",
                element: <Air />,
            },
            {
                path: "/Fridge",
                element: <Fridge />,
            },
            {
                path: "/Headphones",
                element: <Headphones />,
            },
            {
                path: "/Notebooks",
                element: <Notebooks />,
            },
            {
                path: "/Microphones",
                element: <Microphones />,
            },
            {
                path: "/Cameras",
                element: <Cameras />,
            },
            {
                path: "/Tabs",
                element: <Tabs />,
            },
            {
                path: "/Desktops",
                element: <Desktops />,
            },
            {
                path: "/Chairs",
                element: <Chairs />,
            },
            {
                path: "/Pc",
                element: <Pc />,
            },
            {
                path: "/Mouses",
                element: <Mouses />,
            },
            {
                path: "/Laundrys",
                element: <Laundrys />,
            },
            {
                path: "/Kitchens",
                element: <Kitchens />,
            },
            {
                path: "/Blenders",
                element: <Blenders />,
            },
            {
                path: "/ResultProducts",
                element: <ResultProducts />,
            },
            {
                path: "/homeAppliances",
                element: <HomeAppliances />,
            },
            {
                path: "/gamersPage",
                element: <GamersPage />,
            },
            {
                path: "/techsPage",
                element: <TechsPage />,
            },
            {
                path: "/carritoPage",
                element: (
                    <ProtectedRouter>
                        <CarritoPage />
                    </ProtectedRouter>
                ),
            },
            {
                path: "/products/:id",
                element: (

                    <ProductDetail />

                ),
            },
            {
                path: "/Register",
                element: (

                    <Register />

                ),
            },
            {
                path: "/Login",
                element: (

                    <Login />

                ),
            },
            {
                path: "/ControlPanel",
                element: <ControlPanel />,
            },
            {
                path: "/AddProduct",
                element: <AddProduct />,
            },
            {
                path: "/ModifyProduct",
                element: <ModifyProduct />,
            },
            {
                path: "/DeleteProduct",
                element: <DeleteProduct />,
            },
            {
                path: "/RemoveAdmin",
                element: <RemoveAdmin />,
            },
            {
                path: "/CreateAdmin",
                element: <CreateAdmin />,
            },
            {
                path: "/GrantPermissions",
                element: <GrantPermissions />,
            },
            {
                path: "/RemovePermissions",
                element: <RemovePermissions />,
            },
            {
                path: "/GoodReviews",
                element: <GoodReviews />,
            },
            {
                path: "/BadReviews",
                element: <BadReviews />,
            },
            {
                path: "/AllReviews",
                element: <AllReviews />,
            },
        ],
    },
]);
export default router;
