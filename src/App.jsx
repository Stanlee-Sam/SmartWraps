import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
    </div>
  );
};

export default App;
