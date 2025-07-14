import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FF66C4] flex flex-row justify-between items-center p-2">
      <div>
        <img
          className="w-18 h-18"
          src="../../src/assets/Images/heroLogo.png"
          alt=""
        />
      </div>
      <div className="flex flex-row gap-3">
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black ">
          Home
        </button>
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black">
          About Us
        </button>
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black">
          Products
        </button>
        <button className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
