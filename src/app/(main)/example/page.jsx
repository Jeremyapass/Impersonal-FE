"use client";
import UserCard from "@/components/Organism/content/userCard";
import Image from "next/image";
import React, { createContext, useState } from "react";
import Share from "../../../../public/icons/share.svg";
import PaginationVertical from "@/components/Molecules/pagination/paginationVertical";

const ExamplePage = () => {
  return (
    <div className=" flex justify-center ">
      <UserCard />

      <div className="text-white mt-[100px] absolute left-[85%] w-[96px] flex flex-col px-[36px] gap-[407.5px] ">
        <Image
          priority
          className="mt-[44px]"
          src={"/icons/share.svg"}
          alt="share"
          width={24}
          height={24}
        />
        <PaginationVertical />
      </div>
    </div>
  );
};

export default ExamplePage;
