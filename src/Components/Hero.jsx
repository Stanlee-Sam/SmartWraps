// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div
        className=" rounded-b-lg h-[calc(100svh-4rem) md:h-[calc(100vh-80px)] w-full overflow-hidden
      "
      >
        <img
          className="h-screen w-full object-cover object-center brightness-35 relative overflow-hidden bg-center bg-fixed bg-no-repeat "
          src="../../src/assets/Images/hero.jpg"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=" flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2"
      >
        <h1
          className="text-4xl md:text-[96px] font-bold text-white drop-shadow-lg  text-center "
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          SmartWraps
        </h1>
        <p
          className="text-center text-[15px] md:text-[20px] font-bold text-white drop-shadow-lg "
          style={{ fontFamily: "'Bree Serif', serif" }}
        >
          Pre-Covered School Books And Stationery Delivered to You
        </p>
        <a href="#about">
          <button
            style={{ fontFamily: "'Bree Serif'" }}
            className="cursor-pointer mt-4 px-6 py-2 md:px-8 md:py-3 bg-[#FF66C4] text-black font-bold rounded-lg hover:bg-[#59BDF1] hover:text-white transition-colors duration-300 border-2 border-black shadow-lg active:scale-95"
          >
            Get Started
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
