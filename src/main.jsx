import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/Header/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/blogs',
        element: <h1 className="text-6xl m-10 text-center">Blogs are coming soon...</h1>
      },
      {
        path: '/statistics',
        element: <h1 className="text-6xl m-10 text-center">Statistics are coming soon...</h1>
      },
      {
        path: '/jobs',
        element: <FeaturedJobs></FeaturedJobs>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
