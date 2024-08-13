import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ArrowButton = ({ image }) => {
  return (
    <Button variant="arrowButtonHorizontal" className="">
      <Image src={image} alt="gambar arrow " className="h-auto w-[24px] " />
    </Button>
  );
};

export default ArrowButton;
