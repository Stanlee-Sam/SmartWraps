import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
  

const App = () => {
  return (
    <div className="h-screen overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar:{display:none}] scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
