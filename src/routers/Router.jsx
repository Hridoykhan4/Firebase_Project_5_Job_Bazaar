import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner";
import FilteredCategories from "../components/FilteredCategories";
import AllJobs from "../pages/AllJobs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
        children: [
          {
            path: "/",
            element: <Navigate to="/category/Creative Design"></Navigate>,
          },
          {
            path: "/category/:catName",
            element: <FilteredCategories></FilteredCategories>,
            loader: () => fetch("/jobs.json"),
          },
        ],
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

export default Router;
