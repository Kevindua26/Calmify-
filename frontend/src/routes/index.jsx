import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Character from "../pages/Character";
import Home from "../pages/Home";
import Reels from "../pages/Reels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/character",
        element: <Character />,
      },
      {
        path: "/reels",
        element: <Reels />,
      },
    ],
  },
]);

export default router;
