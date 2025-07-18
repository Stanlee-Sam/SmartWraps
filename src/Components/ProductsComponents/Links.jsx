import React from "react";
import { Link } from "react-router";

const Links = () => {
  return (
    <>
      <Link
        to="/mini"
        className="text-center w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Mini
      </Link>
      <span className="font-bold text-2xl">|</span>
      <Link
        to="/mega"
        className="text-center w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Mega
      </Link>
      <span className="font-bold text-2xl">|</span>
      <Link
        to="/maxi"
        className=" text-center w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  hover:text-white  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Maxi
      </Link>
    </>
  );
};

export default Links;
