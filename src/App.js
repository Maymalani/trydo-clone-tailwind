import React from "react";
import Topnav from "./components/Topnav";
import { Route, Routes } from "react-router-dom";
import ClickToTop from "./components/ClickToTop";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ClickToTop />
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
