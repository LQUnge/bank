import React from "react";
import Image from "next/image";
export const Cards = () => {
  return (
    <div>
      <div className="font-black text-[40px] my-64 mx-auto text-center">
        Дебетовая карта без процентов на пол года{" "}
      </div>
      <div className="absolute top-14 -z-10 -left-[90px]  blur-[4px]">
        <Image
          src="/pngegg.png"
          width={900}
          height={64}
          alt="card"
          className=""
        />
      </div>
      <div className="absolute top-[311px] -z-10 right-[10px] blur-[4px]">
        <Image
          src="/card.png"
          width={800}
          height={64}
          alt="card"
          className=""
        />
      </div>
      <div></div>
    </div>
  );
};
