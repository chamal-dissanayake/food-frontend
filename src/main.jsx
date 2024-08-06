import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import CategoryPage from "./Components/Pages/Category/CategoryPage.jsx";
import Search from "./Components/Pages/Search.jsx";
import SingleProduct from "./Components/Pages/Product/SingleProduct.jsx";
import Recipes from "./Components/Product/Recipes.jsx";
import Resoures from "./Components/Recources/Resoures.jsx";
import About from "./Components/Pages/About/About.jsx";
import Contact from "./Components/Pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`https://food-backend-eta.vercel.app/api/items/${params.id}`),
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/resoures",
        element: <Resoures />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
