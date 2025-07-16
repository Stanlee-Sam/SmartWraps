import React from "react";

const About = () => {
  return (
    <div className="p-3 flex flex-col items-center">
      <div>
        <h2
          className="font-bold text-[20px] md:text-[28px]"
          style={{ fontFamily: "'Bree Serif'" }}
        >
          About Us
        </h2>
      </div>
      <div className="flex md:flex-row md:justify-between flex-col gap-3 p-3 w-full ">
        <div className="md:w-1/2 flex flex-col items-center" >
          <img 
          className="rounded-xl w-100 h-100 md:w-[237px] md:h-[237px]"
          src="../../src/assets/Images/about.jpeg" alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <p className="text-center text-[15px] font-semibold w-100 h-100" style={{fontFamily : 'Bree Serif'}}>
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
    </div>
  );
};

export default About;
