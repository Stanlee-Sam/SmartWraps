import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FF66C4] flex flex-row justify-between items-center p-2 z-50 sticky top-0 shadow-md">
      <div>
        <img
          className="w-18 h-18 md:w-20 md:h-20"
          src="../../src/assets/Images/heroLogo.png"
          alt=""
        />
      </div>
      <div className="flex flex-row gap-3 sm:gap-3 md:gap-4">
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-lg font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black">
          Home
        </button>
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-lg font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black">
          About Us
        </button>
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-lg font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black">
          Products
        </button>
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-lg font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
