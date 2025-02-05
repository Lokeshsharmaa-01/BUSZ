import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/about/About";
import Home from "./components/pages/Home/Home";
const App = () => {
  return (
    <>
      <Router>
        <main className="w-full bg-neutral-50 min-h-screen flex flex-col">
          {/* navbar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          Footer
        </main>
      </Router>
    </>
  );
};

export default App;


