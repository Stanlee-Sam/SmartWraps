import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import books from "../Products/Books";
import { MdCancel } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Books = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className=" flex items-center justify-center p-4">
      <Swiper
        className=" relative w-full max-w-md mx-auto p-4"
        style={{ height: "450px" }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        speed={2100}
        slidesPerGroup={1}
        modules={[Navigation]}
        onSwiper={(swiper) => setSwiperRef(swiper)}
      >
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="cursor-pointer absolute md:left-0.5 left-12 top-1/2 transform -translate-y-1/2 z-10 bg-black hover:bg-white hover:text-[#59BDF1] text-[#FF66C4] transition-colors duration-300 rounded-full p-2 shadow  hover:scale-105"
        >
          <MdArrowBack size={20} />
        </button>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="cursor-pointer absolute md:right-0.5 right-12 top-1/2 transform -translate-y-1/2 z-10 bg-black hover:bg-white hover:text-[#59BDF1] text-[#FF66C4] transition-colors duration-300 rounded-full p-2 shadow hover:scale-105"
        >
          <MdArrowForward size={20} />
        </button>
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <div className="relative p-3  rounded-sm ">
              <div className=" flex flex-col gap-2 aspect-square items-center  ">
                <div
                  onClick={() => setSelectedProduct(book)}
                  className="cursor-pointer rounded-md flex flex-col items-center gap-3 bg-white p-3"
                >
                  <img
                    className="rounded-lg w-50 h-70  bg-center"
                    src={book.img}
                    alt=""
                  />

                  <h2
                    style={{ fontFamily: "Bree Serif" }}
                    className="font-bold italic"
                  >
                    {book.name}
                  </h2>
                  <h2
                    style={{ fontFamily: "Bree Serif" }}
                    className="font-bold italic"
                  >
                    Ksh {book.price}
                  </h2>
 <button
                  onClick={() => setSelectedProduct(book)}
                    style={{ fontFamily: "'Bree Serif'" }}
                    className="cursor-pointer text-[12px] p-2 md:px-8 bg-[#FF66C4] text-black font-bold rounded-lg hover:bg-[#59BDF1] hover:text-white transition-colors duration-300 border-2 border-black shadow-lg active:scale-95"
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {selectedProduct && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-6 md:mt-9">
              <div className="flex flex-col items-center gap-2 bg-[#FF66C4] p-6 rounded-lg max-w-md w-[80%] relative">
                <button
                  className="absolute top-2 right-2 text-white text-2xl hover:text-gray-800 cursor-pointer"
                  onClick={() => setSelectedProduct(null)}
                >
                  <MdCancel />
                </button>

                <img
                  className="rounded-md w-[60%] md:w-[50%]"
                  src={selectedProduct.img}
                  alt=""
                />
                <h2
                  style={{ fontFamily: "Bree Serif" }}
                  className="font-bold text-center"
                >
                  {selectedProduct.name}
                </h2>
                <p style={{ fontFamily: "Bree Serif" }}>
                  {selectedProduct.desc}
                </p>
                <p style={{ fontFamily: "Bree Serif" }}>
                  <strong>Price :</strong> Ksh {selectedProduct.price}
                </p>
              </div>
            </div>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Books;
