"use client";
import PictureGrid from "@/components/Atoms/media/pictureGrid";
import React, { createContext, useContext, useState } from "react";
import SeeMoreButton from "@/components/Atoms/button/seeMoreButton";
import listPart from "@/fakeDB/listPart";
import PaginationHorizontal from "../pagination/paginationHorizontal";
import { PageContext } from "@/app/providers/pageProvider";

const CardPart = ({ part }) => {
  const partVar = part;
  const { contentPart, setContentPart } = useContext(PageContext);
  const {
    tulisan,
    header1,
    header2,
    duration,
    tulisanAtas,
    tulisanBawah,
    tulisanTengah,
  } = listPart[partVar][contentPart[partVar]] || {};

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div className="flex flex-col p-[24px] bg-[#1A1A1C] rounded-[8px] ">
      <h1 className="font-medium text-[18px] mb-[16px]">
        {partVar.charAt(0).toUpperCase() + partVar.slice(1)}
      </h1>

      <div className="flex flex-col tracking-rizqi">
        {/* Pikirin nanti yang bagusnya gimana */}
        <h2 className="  font-medium mb-[12px] ">{header1}</h2>

        <div className="flex flex-col mb-[16px] gap-[12px]">
          <h3 className="flex items-center ">
            {header2}
            <span className="ml-1 text-[#C3C3C3]"> {duration}</span>
          </h3>
          <div className=" flex gap-2 ml-2  ">
            <p>•</p>
            <p className="mb-[8px]">
              {tulisan && truncateText(tulisan[0], 20)}
              {tulisanTengah && truncateText(tulisanTengah[0], 20)}
            </p>
          </div>
          <SeeMoreButton href={`/example/${partVar}`} text={"See More"} />
        </div>

        <PictureGrid />
        <div className="mb-[10px]"></div>
        <PaginationHorizontal part={partVar} />
      </div>
    </div>
  );
};

export default CardPart;
