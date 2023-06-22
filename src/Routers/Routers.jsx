import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error Page/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import ViewDetails from "../pages/AllToys/ViewDetails";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../pages/Blogs/Blogs";
import EditToys from "../pages/MyToys/EditToys";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://play-tune-kids-server-pbrudro.vercel.app/toysdetails"),
      },
      {
        path: "/alltoys/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://play-tune-kids-server-pbrudro.vercel.app/toysdetails/${params.id}`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/edittoys/:id",
        element: (
          <PrivateRoute>
            <EditToys></EditToys>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://play-tune-kids-server-pbrudro.vercel.app/addtoys/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
