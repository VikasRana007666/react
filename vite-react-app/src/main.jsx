import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Root from "../src/routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import SinglePost from "./routes/single-post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:postId",
    element: <SinglePost />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
