"use client";
import ContactMe from "@/components/Molecules/card/contactMe";
import Experience from "@/components/Molecules/card/1/experience";
import Skills from "@/components/Molecules/card/1/skills";
import Summary from "@/components/Molecules/card/1/summary";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { fonts } from "@/fonts";
import Links from "@/components/Molecules/card/links";
import { PageContext } from "@/app/(main)/example/page";
import Education from "@/components/Molecules/card/2/education";
import Portofolio from "@/components/Molecules/card/2/portofolio";
import Certificate from "@/components/Molecules/card/3/certificate";
import Achievement from "@/components/Molecules/card/3/achievement";

const UserCard = () => {
  const {page} = useContext(PageContext)

  return (
    <div className="flex gap-[24px] w-[880px] p-[24px]  border-[#1A1A1C] border-[8px] rounded-[8px] mt-[90.5px]">
      <div className="flex flex-col gap-[24px]">
        <Image
          priority
          src={"/images/userPhotoBody.png"}
          width={248}
          height={300}
          alt="Ilham Kesuma Jayawirjaya"
          className="rounded-[8px]"
        />
        <ContactMe />
        <Links />
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[24px]">
          {page === 1 ? (
            <div className="flex flex-col gap-[24px] pt-[24px]">
              <div className="flex flex-col">
                <h1 className={`${fonts.playfair.className} text-[32px]`}>
                  Ilham Kesuma Jayawirjaya
                </h1>
                <h3 className="font-medium text-[#C3C3C3]">
                  Product Designer{" "}
                  <span className="text-[#00C853]"> at ABC Solution</span>
                </h3>
                <h3 className="text-[#C3C3C3]">
                  Central Jakarta, Indonesia
                </h3>
              </div>
              <Summary />
              <Skills />
              <Experience />
            </div>
          ) : page === 2 ? (
            <div>
            <Education />
            <Portofolio />
            </div>
          ) : (
            <div>
            <Achievement />
            <Certificate />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
