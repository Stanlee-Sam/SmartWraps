import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-[#FF66C4] flex flex-row justify-between items-center pl-2 pr-2 z-50 sticky top-0 shadow-md">
      <div>
          <img
            className="w-18 h-18 md:w-20 md:h-20"
            src="../../src/assets/Images/heroLogo.png"
            alt=""
          />
      </div>

      <div className="hidden md:flex flex-row gap-3 sm:gap-3 md:gap-4">
        <button
          style={{ fontFamily: "'Bree Serif'" }}
          className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-md font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black"
        >
          Home
        </button>
        <button
          style={{ fontFamily: "'Bree Serif'" }}
          className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-md font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black"
        >
          About Us
        </button>
        <button
          style={{ fontFamily: "'Bree Serif'" }}
          className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-md font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black"
        >
          Products
        </button>
        <button
          style={{ fontFamily: "'Bree Serif'" }}
          className="border-2 border-black p-2 rounded-md bg-black text-white text-[15px] sm:text-base md:text-md font-bold cursor-pointer hover:bg-[#59BDF1] hover:border-black hover:text-black transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-black"
        >
          Contact Us
        </button>
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 right-0 z-40 h-full w-[80%] bg-[#FF66C4] md:hidden flex flex-col items-center gap-2 pt-20  border-black transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <hr className="border-t-2 border-black w-4/5" />
          <button
            style={{ fontFamily: "'Bree Serif'" }}
            className="w-full  py-2  text-black text-lg font-bold cursor-pointer hover:bg-[#59BDF1]  hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </button>
          <hr className="border-t-2 border-black w-4/5" />
          <button
            style={{ fontFamily: "'Bree Serif'" }}
            className="w-full  py-2   text-black text-lg font-bold cursor-pointer hover:bg-[#59BDF1]  hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            About Us
          </button>
          <hr className="border-t-2 border-black w-4/5" />
          <button
            style={{ fontFamily: "'Bree Serif'" }}
            className="w-full  py-2   text-black text-lg font-bold cursor-pointer hover:bg-[#59BDF1]  hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            Products
          </button>
          <hr className="border-t-2 border-black w-4/5" />
          <button
            style={{ fontFamily: "'Bree Serif'" }}
            className="w-full  py-2   text-black text-lg font-bold cursor-pointer hover:bg-[#59BDF1]  hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </button>
          <hr className="border-t-2 border-black w-4/5" />
          <div className="absolute top-4 right-4 text-3xl text-black cursor-pointer hover:text-white">
            <IoMdClose onClick={toggleMenu} />
          </div>
        </div>
      )}
     {!isOpen && (
  <div
    className="md:hidden cursor-pointer text-4xl hover:text-white"
    onClick={toggleMenu}
  >
    <IoMdMenu />
  </div>
)}

    </div>
  );
};

export default Header;
