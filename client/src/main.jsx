import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";
import Parents from "./components/Parents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>, // temporary placeholder until have error decided (404)
    children: [
      // array of children to this path
      {
        index: true, // saying we are still at the BASE route, which is '/'
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/parents",
        element: <Parents />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Router>
      <Routes>
        {/*Define nested routes here?*/}
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
