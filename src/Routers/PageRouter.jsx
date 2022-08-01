import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
// Components
import NavBar from "../Components/NavBar";
// Pages
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
function PagesRouter() {
  const App = () =>
    useRoutes([
      { path: "/", element: <Home /> },
      { path: "/ecommerce-product-page", element: <Home /> },
      { path: "/collections", element: <Collections /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ]);
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <App />
    </BrowserRouter>
  );
}

export default PagesRouter;