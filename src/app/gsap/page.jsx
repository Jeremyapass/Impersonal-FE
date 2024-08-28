"use client";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import React from "react";

gsap.registerPlugin(Flip);

const GSAPPage = () => {
  const click = () => {
    const parent = document.getElementById("parent"),
      div1 = document.getElementById("div1"),
      parent2 = document.getElementById("parent2");
    const state = Flip.getState(div1);

    (div1.parentNode === parent ? parent2 : parent).appendChild(div1);

    Flip.from(state, {
      duration: 1,
      ease: "power1.inOut",
      absolute: true,
    });
  };

  return (
    <div className="flex">
      <div
        id="parent"
        className="mt-[200px] w-[400px] h-[400px] bg-orange-500 flex "
      >
        <div id="div1" className="bg-red-500 h-32 ">
          Yang Pindah
        </div>
        <div id="parent2" className="bg-blue-500 absolute left-[224px] h-44 w-44 ">
          Tempat Pindah
        </div>
      </div>
      <button onClick={click}>Change</button>
    </div>
  );
};

export default GSAPPage;
