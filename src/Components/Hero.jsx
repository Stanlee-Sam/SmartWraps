import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-[calc(100svh-4rem) md:h-[calc(100vh-80px)] w-full overflow-hidden
      ">
        <img
          className="h-full w-full object-cover object-center brightness-35 "
          src="../../src/assets/Images/hero.jpg"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
        <h1 className="text-4xl md:text-[96px] font-bold text-white drop-shadow-lg  text-center " style={{fontFamily:"'Kaushan Script', cursive"}} >SmartWraps</h1>
        <p className="text-center text-[15px] md:text-[20px] font-bold text-white drop-shadow-lg " style={{fontFamily : "'Bree Serif', serif"}}>Pre-Covered School Books And Stationery Delivered to You</p>
        <button className="cursor-pointer mt-4 px-6 py-2 md:px-8 md:py-3 bg-[#FF66C4] text-black font-bold rounded-lg hover:bg-[#59BDF1] hover:text-white transition-colors duration-300 border-2 border-black shadow-lg active:scale-95">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
