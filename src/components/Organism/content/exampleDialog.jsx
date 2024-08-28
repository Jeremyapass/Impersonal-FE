"use client";
import { PageContext } from "@/app/providers/pageProvider";
import PictureGrid from "@/components/Atoms/media/pictureGrid";
import Header from "@/components/Molecules/dialog/header";
import PaginationHorizontal from "@/components/Molecules/pagination/paginationHorizontal";
import listPart from "@/fakeDB/listPart";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";

const ListPart = ({ text }) => (
  <div className="flex gap-2 ml-2 tracking-rizqi leading-5">
    <p>•</p>
    <p>{text}</p>
  </div>
);

const ExampleDialog = () => {
  const currentPath = usePathname();
  const { page, setPage, contentPart, setContentPart } =
    useContext(PageContext);

  const headerText =
    currentPath
      .split("/")
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()) || "Default Text";

  const {
    tulisan,
    header1,
    header2,
    duration,
    tulisanAtas,
    tulisanBawah,
    tulisanTengah,
  } =
    listPart[headerText.toLowerCase()][contentPart[headerText.toLowerCase()]] ||
    {};

  useEffect(() => {
    currentPath.includes("experience") && setPage(1);
    currentPath.includes("portofolio", "education") && setPage(2);
    currentPath.includes("achievement", "certificate") && setPage(3);
  }, []);

  return (
    <div className="mt-[90.5px] text-white p-6 bg-[#1A1A1C] w-[558px] rounded-[8px] ">
      <Header text={headerText} href={"/example"} />
      <div className="flex flex-col gap-3">
        <h1> {header1} </h1>
        <h3 className="flex items-center">
          {header2}
          <span className="ml-1 text-[#C3C3C3]">{duration}</span>
        </h3>
        <div className="mb-2">
          {tulisanAtas && <p>{tulisanAtas}</p>}
          {tulisan &&
            tulisan.map((text, index) => <ListPart key={index} text={text} />)}
          {tulisanTengah &&
            tulisanTengah.map((text, index) => (
              <ListPart key={index} text={text} />
            ))}
          {tulisanBawah && <p>{tulisanBawah}</p>}
        </div>
        <PictureGrid />
        <PaginationHorizontal part={headerText.toLowerCase()} />
      </div>
    </div>
  );
};

export default ExampleDialog;
