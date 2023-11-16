import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const currentPage = useLocation().pathname;
  console.log(currentPage);

  return (
    <>
      <div>
        <Navbar page={currentPage} />
        <Outlet />
      </div>
    </>
  );
}

export default App;
