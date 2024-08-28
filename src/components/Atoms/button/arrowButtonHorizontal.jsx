import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ArrowButtonHorizontal = ({ image, onClick }) => {
  return (
    <Button onClick={onClick} variant="arrowButtonHorizontal" className="">
      <Image priority src={`/icons/${image}.svg`} alt="gambar arrow" className="h-auto w-[24px]" width={1} height={1} />
    </Button>
  );
};

export default ArrowButtonHorizontal;
