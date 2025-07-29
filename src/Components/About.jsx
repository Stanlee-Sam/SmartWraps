// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      id="about"
      className="p-3  flex flex-col items-center"
    >
      <div>
        <h2
          className="font-bold text-[20px] md:text-[28px]"
          style={{ fontFamily: "'Bree Serif'" }}
        >
          About Us
        </h2>
      </div>
      <div className="flex md:flex-row md:justify-evenly flex-col gap-3 p-3 w-full ">
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            className="rounded-xl w-100 h-100 md:w-[300px] md:h-[270px]"
            src="../../src/assets/Images/about.jpeg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <p
            className="text-center md:text-start text-[15px] font-light w-[80%]"
            style={{ fontFamily: "Bree Serif" }}
          >
            SmartWraps makes back-to-school easy for parents. We deliver
            stationery and beautifully covered exercise books that are ready to
            use, with no mess or hassle. We partner with trusted suppliers like
            Economic Industries Ltd for high-quality exercise books and
            stationery, and Teepee Brush Manufacturers for our durable,
            water-resistant covers in fun, kid-friendly designs. Our mission is
            simple: save parents time, help kids feel proud of their books, and
            make school prep stress-free.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
