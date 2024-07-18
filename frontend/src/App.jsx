import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      {/* <Home /> */}
      <main><Outlet/></main>
    </>
  );
}

export default App;
