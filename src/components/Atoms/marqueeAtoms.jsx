import { fonts } from "@/fonts";
import Image from "next/image";
import React from "react";

const logos = Array(9).fill("Impersonal");

const MarqueeAtoms = () => {
  return (
    <div
      id="marquee"
      className={`h-[76px] bg-[#00C853] w-full justify-center flex items-center py-[26px] pr-[42px]  text-black ${fonts.playfair.className} gap-[42px]`}
    >
      {logos.map((text, index) => (
        <div key={index} className=" relative flex gap-1 text-[20px] w-[130px]">
          <Image
            priority
            src={"/logo/ImpersonalLogoHitam.svg"}
            width={1}
            height={1}
            alt={`Logo ${text}`}
            className="w-[24px] h-auto"
          />
          {text}
        </div>
      ))}
    </div>
  );
};

export default MarqueeAtoms;

/*
ID dari component ini bisa dibaca di Marquee.jsx
*/
