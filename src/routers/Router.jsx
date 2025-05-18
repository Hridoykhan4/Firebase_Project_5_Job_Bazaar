import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner";
import FilteredCategories from "../components/FilteredCategories";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/JobDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AppliedJobs from "../pages/AppliedJobs";

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
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`/jobs.json`);
          const data = await res.json();
          const matchedData = data.find(
            (job) => job.id === parseInt(params.jobId)
          );
          return matchedData;
        },
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <>Error</>,
  },
]);

export default Router;
