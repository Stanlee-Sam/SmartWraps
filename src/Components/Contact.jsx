import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-3 items-center p-3">
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
    </div>
  );
};

export default Contact;
