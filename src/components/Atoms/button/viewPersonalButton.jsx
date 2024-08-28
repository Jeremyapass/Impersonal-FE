import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ArrowKananActive from "../../../../public/icons/ArrowKananActive.svg";

const ViewPersonalButton = () => {
  return (
    <Button
      variant="viewPersonalButton"
      className="px-[43px] py-[2px] justify-center"
    >
      View Personal 
      <Image priority src={ArrowKananActive} alt="arrowKanan" className="w-6 h-6"/>
    </Button>
  );
};

export default ViewPersonalButton;
