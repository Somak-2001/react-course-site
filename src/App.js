import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
