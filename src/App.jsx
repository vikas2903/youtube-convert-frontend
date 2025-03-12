import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Faq from "./components/pages/Faq";
import Changelog from "./components/pages/Changelog";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
