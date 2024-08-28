"use client";
import ViewPersonalButton from "@/components/Atoms/button/viewPersonalButton";
import Summary from "@/components/Molecules/card/summary";
import DataTeam from "@/fakeDB/ourTeam";
import { fonts } from "@/fonts";
import Image from "next/image";
import React from "react";

const OurTeamCard = ({ part }) => {
  const partVar = part;
  const { name, profession, professionAt, domicile, summary, image } =
    DataTeam[partVar];
  return (
    <div className="border-[8px] rounded-[16px] border-[#1A1A1C] flex gap-6 w-[880px] p-6">
      <div className="flex flex-col gap-6">
        <Image src={image} className="h-auto w-[248px]" alt="foto developer" />
        <ViewPersonalButton />
      </div>

      <div className="flex flex-col gap-6 ">
        <h2 className={`text-[32px] ${fonts.playfair.className}`}>{name} </h2>

        <div className="flex flex-col gap-[12.5px] text-[#C3C3C3] leading-[16px] tracking-rizqi">
          <p>
            {profession}{" "}
            <span className="text-[#00C853]">at {professionAt}</span>
          </p>
          <p>{domicile}</p>
        </div>

        <Summary name={part}/>
      </div>
    </div>
  );
};

export default OurTeamCard;
