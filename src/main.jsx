import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routers/Router";
import AuthProvider from "./Provider/AuthProvider";
import AppliedJobsProvider from "./Provider/AppliedJobsProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppliedJobsProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </AppliedJobsProvider>
  </StrictMode>
);
