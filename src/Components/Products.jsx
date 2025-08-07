import React from "react";
import Links from "./ProductsComponents/Links";
import { Route, Routes } from "react-router";
import Mini from "./ProductsComponents/Mini";
import Mega from "./ProductsComponents/Mega";
import Maxi from "./ProductsComponents/Maxi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Books from "./ProductsComponents/Books";

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="products"
      className="p-3 bg-[#59BDF1] rounded-lg flex flex-col gap-3 items-center w-full"
    >
      <div>
        <h2
          className="font-bold text-[20px] md:text-[28px]"
          style={{ fontFamily: "'Bree Serif'" }}
        >
          Featured Products
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
        className="bg-[#FF66C4] flex flex-row justify-evenly items-center rounded-md  gap-2 p-2 w-[90%]"
      >
        <Links />
      </motion.div>
      <div>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/mini" element={<Mini />}></Route>
          <Route path="/mega" element={<Mega />}></Route>
          <Route path="/maxi" element={<Maxi />}></Route>
        </Routes>
      </div>
    </motion.div>
  );
};

export default Products;
