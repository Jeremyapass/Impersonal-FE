import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MarqueeAtoms from "../Atoms/marqueeAtoms";

const Marquee = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#marquee",
      {
        x: 0,
      },
      {
        x: "-100%", // Increase the translateX value for a smoother effect
        duration: 6, // Adjust duration for a smoother scroll
        repeat: -1,
        ease: "linear", // Ensure the animation is smooth
      }
    );
  });


  return (
    /* Ditimpa background hijau lagi biar ga keliatan gap antar div nya */
    <div className={` bg-[#00C853]  flex w-full overflow-hidden`}>
    <MarqueeAtoms />
    <MarqueeAtoms />
    </div>
  );
};

export default Marquee;
