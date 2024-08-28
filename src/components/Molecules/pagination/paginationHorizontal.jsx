"use client";
import React, { useContext, useEffect, useState } from "react";
import ArrowButtonHorizontal from "@/components/Atoms/button/arrowButtonHorizontal";
import { PageContext } from "@/app/providers/pageProvider";

const PaginationHorizontal = ({ part }) => {
  const { contentPart, setContentPart } = useContext(PageContext);
  const [disable, setDisable] = useState({
    kiri: false,
    kanan: false,
  });

  useEffect(() => {
    setDisable({
      kiri: contentPart[part] === 1,
      kanan: contentPart[part] === 3,
    });
  }, [contentPart, part]);

  const handleClickKanan = () => {
    if (contentPart[part] < 3) {
      setContentPart((prev) => ({ ...prev, [part]: prev[part] + 1 }));
    }
  };

  const handleClickKiri = () => {
    if (contentPart[part] > 1) {
      setContentPart((prev) => ({ ...prev, [part]: prev[part] - 1 }));
    }
  };

  return (
    <div className="w-full flex justify-between">
      <ArrowButtonHorizontal
        onClick={handleClickKiri}
        image={disable.kiri ? "ArrowKiriDisable" : "ArrowKiriActive"}
      />
      <div className="flex items-center gap-[8px]">
        <div
          className={`h-[8px] w-[8px] rounded-full ${
            contentPart[part] === 1 ? "bg-white" : "bg-[#29292A]"
          } `}
        ></div>
        <div
          className={`h-[8px] w-[8px] rounded-full ${
            contentPart[part] === 2 ? "bg-white" : "bg-[#29292A]"
          }`}
        ></div>
        <div
          className={`h-[8px] w-[8px] rounded-full ${
            contentPart[part] === 3 ? "bg-white" : "bg-[#29292A]"
          }`}
        ></div>
      </div>
      <ArrowButtonHorizontal
        onClick={handleClickKanan}
        image={disable.kanan ? "ArrowKananDisable" : "ArrowKananActive"}
      />
    </div>
  );
};

export default PaginationHorizontal;
