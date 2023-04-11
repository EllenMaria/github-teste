import { createBrowserRouter } from "react-router-dom";
import { Home, Perfil } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "perfil/:username",
    element: <Perfil />,
  },
]);
