import React from "react";

const Hero = () => {
  return (
    <div className="h-lvh relative">
      <div className="bg-cover bg-center md:bg-fill">
        <img
          className="h-svh w-full"
          src="../../src/assets/Images/hero.jpg"
          alt=""
        />
      </div>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
        <h1>SmartWraps</h1>
        <p>Pre-Covered School Books And Stationery Delivered to You</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
