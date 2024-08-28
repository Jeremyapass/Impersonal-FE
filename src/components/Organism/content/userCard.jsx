"use client";
import ContactMe from "@/components/Molecules/card/contactMe";
import Skills from "@/components/Molecules/card/skills";
import Summary from "@/components/Molecules/card/summary";
import React, { useContext } from "react";
import Image from "next/image";
import { fonts } from "@/fonts";
import Links from "@/components/Molecules/card/links";
import CardPart from "@/components/Molecules/card/cardPart";
import { usePathname } from "next/navigation";
import { PageContext } from "@/app/providers/pageProvider";

const UserCard = () => {
  const { page } = useContext(PageContext);
  const currentPath = usePathname();

  return (
    <div
      className={`flex gap-[24px] w-[880px] p-[24px] border-[#1A1A1C] border-[8px] rounded-[16px] ${
        currentPath.includes("example") ? " mt-[90.5px]" : ""
      }`}
    >
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
              <h3 className="text-[#C3C3C3]">Central Jakarta, Indonesia</h3>
            </div>
            <Summary name={"none"} />
            <Skills />
            <CardPart part={"experience"} />
          </div>
        ) : page === 2 ? (
          <div className="flex flex-col gap-6">
            <CardPart part={"portofolio"} />
            <CardPart part={"education"} />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <CardPart part={"achievement"} />
            <CardPart part={"certificate"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
