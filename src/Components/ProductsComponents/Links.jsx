import React from "react";
import { Link } from "react-router";

const Links = () => {
  return (
    <>
      <Link
        to="/"
        style={{ fontFamily: "'Bree Serif'" }}
        className="text-[10px] md:text-[15px] text-center  w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Excercise Books
      </Link>
      <span className="font-bold text-2xl">|</span>
      <Link
        to="/mini"
        style={{ fontFamily: "'Bree Serif'" }}
        className="text-[10px] md:text-[15px] text-center w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Mini Hamper
      </Link>
      <span className="font-bold text-2xl">|</span>

      <Link
        to="/maxi"
        style={{ fontFamily: "'Bree Serif'" }}
        className="text-[10px] md:text-[15px]  text-center w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Maxi Hamper
      </Link>
      <span className="font-bold text-2xl">|</span>

      <Link
        to="/mega"
        style={{ fontFamily: "'Bree Serif'" }}
        className="text-[10px] md:text-[15px] text-center w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Mega Hamper
      </Link>
    </>
  );
};

export default Links;
