import React, { useState } from "react";
import { Card, CardContent } from "../../Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/carousel";
import minis from "../Products/Mini";
import { MdCancel } from "react-icons/md";

const Mini = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {minis.map((mini, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  onClick={() => setSelectedProduct(mini)}
                  className="cursor-pointer"
                >
                  <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center">
                    <img
                      className="rounded-lg w-[200px] h-[300px]"
                      src={mini.img}
                      alt=""
                    />
                    <h2
                      style={{ fontFamily: "Bree Serif" }}
                      className="font-bold italic"
                    >
                      {mini.name}
                    </h2>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        {selectedProduct && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="flex flex-col items-center gap-1.5 bg-[#FF66C4] p-6 rounded-lg max-w-md w-[80%] relative">
                <button
                  className="absolute top-2 right-2 text-white text-2xl hover:text-gray-800 cursor-pointer"
                  onClick={() => setSelectedProduct(null)}
                >
                  <MdCancel />
                </button>

                <img
                  className="rounded-md w-[60%]"
                  src={selectedProduct.img}
                  alt=""
                />
                <h2
                  style={{ fontFamily: "Bree Serif" }}
                  className="font-bold text-center"
                >
                  {selectedProduct.name}
                </h2>
                <p>{selectedProduct.desc}</p>

                <ul className="list-disc pl-5 ">
                  {selectedProduct.specs.map((spec, SpecIndex) => (
                    <li
                      style={{ fontFamily: "Bree Serif" }}
                      className="text-[12px] italic"
                      key={SpecIndex}
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: "Bree Serif" }}>
                  <strong>Price :</strong> Ksh {selectedProduct.price}
                </p>
              </div>
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
};

export default Mini;
