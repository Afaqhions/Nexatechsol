// Importing React
import { react } from "react";

// Importing Tailwind CSS
import "./App.css";

// Importing React Router
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// Importing Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// Importing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Highlights from "./pages/Highlights";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Navbar component */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        {/* Footer Component */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
