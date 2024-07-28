import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Character from "../pages/Character";
import Home from "../pages/Home";
import Reels from "../pages/Reels";
import ReelDetail from "../pages/ReelDetail";
import Games from "../pages/Games";
import SimonSays from "../pages/SimonSays";
import FlappyBirdGame from "../pages/FlappyBirdGame";
import ColorMatch from "../pages/ColorMatch";
import Mood from "../pages/Mood";
import Input from "../components/Mood/Input";
import Task from "../pages/Task";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import FillColor from "../components/FillColor/FillColor";
import FillColor1 from "../components/FillColor/FillColor1";
import FillUps from "../components/Task/FillUps";
import Gratitude from "../components/Task/Gratitude";

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
      {
        path: "/reels/:id",
        element: <ReelDetail />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/simon",
        element: <SimonSays />,
      },
      {
        path: "/flappy",
        element: <FlappyBirdGame />,
      },
      {
        path: "/colormatch",
        element: <ColorMatch />,
      },
      {
        path:"/mood",
        element: <Mood/>,
      },
      {
        path:"/tasks",
        element: <Task/>,
      },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/signup",
        element: <SignUp/>,
      },
      {
        path:"/fillcolor",
        element: <FillColor/>,
      },
      {
        path:"/fillups",
        element: <FillUps/>,
      },
      {
        path:"/gratitude",
        element: <Gratitude/>,
      },
    ],
  },
]);

export default router;
