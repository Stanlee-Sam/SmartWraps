import React from "react";
import Links from "./ProductsComponents/Links";
import { Route, Routes } from "react-router";
import Mini from "./ProductsComponents/Mini";
import Mega from "./ProductsComponents/Mega";
import Maxi from "./ProductsComponents/Maxi";

const Products = () => {
  return (
    <div className="p-3 bg-[#59BDF1] rounded-[30px] flex flex-col gap-3 items-center w-full">
      <div>
        <h2
          className="font-bold text-[20px] md:text-[28px]"
          style={{ fontFamily: "'Bree Serif'" }}
        >
          Featured Products
        </h2>
      </div>
      <div className="bg-[#FF66C4] flex flex-row justify-evenly items-center rounded-md  gap-2 p-2 w-[80%]">
        <Links />
      </div>
      <div>
        <Routes>
          <Route path="/mini" element={<Mini />}></Route>
          <Route path="/mega" element={<Mega />}></Route>
          <Route path="/maxi" element={<Maxi />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Products;
