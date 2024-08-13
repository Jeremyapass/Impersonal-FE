import ArrowButton from "@/components/Atoms/button/arrowButtonHorizontal";
import React from "react";
import ArrowKiriActive from "../../../../public/icons/ArrowKiriActive.svg";
import arrowKiriDisable from "../../../../public/icons/ArrowKiriDisable.svg";
import arrowKananActive from "../../../../public/icons/ArrowKananActive.svg";
import arrowKananDisable from "../../../../public/icons/ArrowKananDisable.svg";

const PaginationHorizontal = () => {
  return (
    <div className="w-full flex justify-between">
      <ArrowButton image={arrowKiriDisable} />
      <div className="flex items-center gap-[8px]">
        <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-[#29292A]"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-[#29292A]"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-[#29292A]"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-[#29292A]"></div>
      </div>
      <ArrowButton image={arrowKananActive} />
    </div>
  );
};

export default PaginationHorizontal;
