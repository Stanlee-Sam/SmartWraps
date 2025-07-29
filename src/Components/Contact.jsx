import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const Contact = () => {
  return (
    <motion.div 
     initial = {{opacity : 0,rotateX : "90deg"}}
    whileInView={{opacity : 1, rotateX : 0}}
    transition={{duration: 2}}
    viewport={{once : true}}
    id="contact" className="flex flex-col gap-3 items-center p-3 w-full">
      <div>
        <h2
          className="font-bold text-[20px] md:text-[28px]"
          style={{ fontFamily: "'Bree Serif'" }}
        >
          Contact Us
        </h2>
      </div>
      <div>
        <p style={{ fontFamily: "'Bree Serif'" }} className="text-[15px] ">
          Have any questions or suggestions? Connect with us and let us know how
          we can support you.
        </p>
      </div>
      <div className="md:flex md:justify-self-center justify-center place-items-center md:pl-20 md:pr-20 md:w-[80%] w-full">
        <div className="md:w-[50%] w-[70%] pb-10 grid justify-center items-center ">
          <div className="flex gap-10 items-center ">
            <div className="">
              <FaLocationDot className="text-2xl" />
            </div>
            <div className="text-left">
              <h3 style={{ fontFamily: "'Bree Serif'" }}>Address</h3>
              <p  className="font-light">Nairobi, Kenya</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div className="text-left">
              <h3 style={{ fontFamily: "'Bree Serif'" }}>Phone</h3>
              <p  className="font-light">+254-712-456-789</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div>
              <IoMail className="text-2xl" />
            </div>
            <div className="text-left">
              <h3 style={{ fontFamily: "'Bree Serif'" }}>Email</h3>
              <p  className="font-light">smartwraps@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#F5F5F5] md:w-[50%] w-[80%]">
          <form className="grid justify-self-center w-[100%] md:w-[100%]" action="">
            <h3 style={{ fontFamily: "'Bree Serif'" }} className="p-5 font-bold text-center">Send Message</h3>
            <div className="grid place-items-center gap-5 p-5 w-full">
              <input style={{ fontFamily: "'Bree Serif'" }}
                className="p-3 border-b rounded-lg text-black flex w-full"
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
              <input style={{ fontFamily: "'Bree Serif'" }}
                className="p-3 border-b rounded-lg text-black flex w-full "
                type="email"
                placeholder="Enter Email"
              />

              <textarea style={{ fontFamily: "'Bree Serif'" }}
                className="p-3 border-b-1 rounded-lg text-black flex w-full h-[150px] resize-none"
                rows="5"
                id="message"
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <div className="grid w-full">
              <button
              style={{ fontFamily: "'Bree Serif'" }}
                type="submit"
                className=" cursor-pointer place-self-center bg-[#59BDF1] text-white rounded-md p-2 m-5 hover:bg-[#FF66C4] hover:text-black transition-colors ease-in-out duration-300 w-[50%] "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
