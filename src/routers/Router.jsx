import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Banner></Banner>
        }
    ]
  },



]);

export default Router;
