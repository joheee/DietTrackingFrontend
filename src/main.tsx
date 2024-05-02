import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./page/login/LoginPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./page/register/RegisterPage.tsx";
import LandingPage from "./page/landing/LandingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
