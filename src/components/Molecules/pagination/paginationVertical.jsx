"use client";
import React, { useContext, useState, useEffect } from "react";
import ArrowButtonVertical from "@/components/Atoms/button/arrowButtonVertical";
import { PageContext } from "@/app/providers/pageProvider";

const PaginationVertical = () => {
  const { page, setPage } = useContext(PageContext);
  const [disable, setDisable] = useState({
    atas: page === 3,  //Agar tidak kedip : Set the initial state based on the current page
    bawah: page === 1,  //Agar tidak kedip : Set the initial state based on the current page
  });

  useEffect(() => {
    setDisable({
      atas: page === 3,
      bawah: page === 1,
    });
  }, [page]);

  const handleClickAtas = () => {
    if (page < 3) setPage(page + 1);
  };

  const handleClickBawah = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div id="pagination" className="flex flex-col items-center gap-[16px]">
      <ArrowButtonVertical
        onClick={handleClickAtas}
        image={disable.atas ? "ArrowKananDisable" : "ArrowKananActive"}
        bool={disable.atas}
      />
      <div className="flex flex-col items-center gap-[8px]">
        <div
          className={`h-[8px] w-[8px] rounded-full ${
            page === 1 ? "bg-white" : "bg-[#29292A]"
          }`}
        ></div>
        <div
          className={`h-[8px] w-[8px] rounded-full ${
            page === 2 ? "bg-white" : "bg-[#29292A]"
          }`}
        ></div>
        <div
          className={`h-[8px] w-[8px] rounded-full ${
            page === 3 ? "bg-white" : "bg-[#29292A]"
          }`}
        ></div>
      </div>
      <ArrowButtonVertical
        onClick={handleClickBawah}
        image={disable.bawah ? "ArrowKiriDisable" : "ArrowKiriActive"}
        bool={disable.bawah}
      />
    </div>
  );
};

export default PaginationVertical;
