import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PagesRouter;