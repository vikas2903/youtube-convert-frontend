import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Home2 from "./components/pages/Home2.jsx";
import Faq from "./components/pages/Faq";
import Changelog from "./components/pages/Changelog";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home2/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/home2" element={< Home />}/> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
