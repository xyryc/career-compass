import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword";
import ServicesPage from "../pages/ServicesPage";
import Appointments from "../pages/Appointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../services.json"),
      },
      {
        path: "/services",
        element: <ServicesPage />,
        loader: () => fetch("../services.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("../services.json"),
      },
      {
        path: "/appointments",
        element: (
          <PrivateRoutes>
            <Appointments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
