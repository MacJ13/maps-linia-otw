import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Map from "../pages/map";
import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "map",
          element: <Map />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
