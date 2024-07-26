import React from "react";
import Topnav from "./components/Topnav";
import { Route, Routes } from "react-router-dom";
import ClickToTop from "./components/ClickToTop";
import Home from "./pages/Home";
import Service from "./components/Service";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import News from "./components/News";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <ClickToTop />
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#service" element={<Service />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#portfolio" element={<Portfolio />} />
        <Route path="/#team" element={<Team />} />
        <Route path="/#testimonial" element={<Testimonial />} />
        <Route path="/#blog" element={<News />} />
        <Route path="/#contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
