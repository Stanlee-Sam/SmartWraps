import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
