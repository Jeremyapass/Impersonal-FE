"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ArrowButtonVertical = ({ image, onClick, bool }) => {
  const disable = bool;

  return (
    <Button
      onClick={onClick}
      variant={disable ? "arrowButtonVerticalDisable" : "arrowButtonVerticalActive"}
      className=" p-0 h-[48px] w-[48px]"
    >
      <Image width={1} height={1} src={`/icons/${image}.svg`} alt="gambar arrow" className="h-auto w-[24px] " />
    </Button>
  );
};

export default ArrowButtonVertical;
