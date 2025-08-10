import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Privateroutes from "./Privateroutes";
import AddTourPackage from "../Pages/AddTourPackage";
import Allpackage from "../Pages/Allpackage";
import PackageDetail from "../Pages/PackageDetail";
import ManagePackages from "../Pages/ManagePackages";
import UpdatePackage from "../Pages/UpdatePackage";
import Mybooking from "../Pages/Mybooking";
import Aboutus from "../Pages/Aboutus";
import axios from "axios";
import UserAuthContext from "../Context/Context";

import NotFound from "../Pages/Notfound";
import Loader from "../Component/Loader";


import Dashboard from "../Layout/AdminLayout/AdminRoot/Dashboard";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import AboutUs from "../Pages/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/allpackage",
        Component: Allpackage,
      },
      {
        path: "/package/:id",
        loader: async ({ params }) => {
          const response = await axios.get(
            `https://tour-management-server-side.vercel.app/package/${params.id}`
          );
          return response.data;
        },
        element: (
          <Privateroutes>
            <Suspense fallback={<Loader></Loader>}>
              <PackageDetail></PackageDetail>
            </Suspense>
          </Privateroutes>
        ),
      },
      {
        path: "/bookings",
        element: (
          <Privateroutes>
            <Mybooking></Mybooking>
          </Privateroutes>
        ),
      },
      {
        path: "/about",
        Component:AboutUs
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Privateroutes>
        <AdminLayout />
      </Privateroutes>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-package",
        element: <AddTourPackage />,
      },
      {
        path: "manage-packages",
        element: <ManagePackages />,
      },
      {
        path: "update-package/:id",
        loader: ({ params }) =>
          axios
            .get(
              `https://tour-management-server-side.vercel.app/package/${params.id}`,
              {
                withCredentials: true,
              }
            )
            .then((res) => res.data),
        element: <UpdatePackage />,
      },
    ],
  },
]);
export default router;
