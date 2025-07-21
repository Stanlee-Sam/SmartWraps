import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-black rounded-t-lg">
      <div className="grid">
        <img
          className="w-[150px] place-self-center   "
          src="../../src/assets/Images/footerLogo.png"
          alt=""
        />
      </div>
      <div className="md:flex md:justify-evenly">
        <div className="text-white grid place-items-center items-center">
          <div>
            <p
              style={{ fontFamily: "'Kaushan Script', cursive" }}
              className="font-bold"
            >
              Making back to school easier.
            </p>
          </div>
          <div className="flex justify-evenly gap-5 md:gap-4 text-2xl p-4">
            <a href="#">
              <FiFacebook className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300" />
            </a>
            <a href="#">
              <FaXTwitter className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300" />
            </a>
            <a href="#">
              <FaGithubSquare className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300" />
            </a>
          </div>
        </div>
        <div className="text-white md:flex md:justify-evenly grid place-items-left ml-10 gap-5 md:gap-20 ">
          <div>
            <h5 style={{ fontFamily: "'Bree Serif'" }} className="font-bold uppercase">Company</h5>
            <ul className="font-light cursor-pointer ">
              <li className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300">About Us</li>
              <li className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300">Products</li>
              <li className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300">Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontFamily: "'Bree Serif'" }} className="font-bold uppercase">Products</h5>
            <ul className="font-light cursor-pointer">
              <li className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300">Mini</li>
              <li className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300">Mega</li>
              <li className="hover:text-[#FF66C4] transition-colors ease-in-out duration-300">Maxi</li>
            </ul>
          </div>
          {/* <div>
            <h5 className="font-bold uppercase">Support</h5>
            <ul className="font-light cursor-pointer">
            <li className="hover:text-[#77DD77]">Privacy Policy</li>
            <li className="hover:text-[#77DD77]">Help Center</li>
            <li className="hover:text-[#77DD77]">Terms of Service</li>
            </ul>
        </div> */}
        </div>
      </div>
      <div>
        <p style={{ fontFamily: "'Bree Serif'" }} className="text-white text-center md:pt-5 p-3">
          © 2025 SmartWraps. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
