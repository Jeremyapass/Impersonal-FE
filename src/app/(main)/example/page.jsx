"use client";
import UserCard from "@/components/Organism/content/userCard";
import Image from "next/image";
import React, { createContext, useState } from "react";
import Share from "../../../../public/icons/share.svg";
import PaginationVertical from "@/components/Molecules/pagination/paginationVertical";

const Example = () => {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <div className=" flex justify-center ">
        <UserCard />
        <div className="text-white mt-[100px] absolute left-[85%] w-[96px] flex flex-col px-[36px] gap-[407.5px] ">
          <Image
            className="mt-[44px]"
            src={Share}
            alt="share"
            width={24}
            height={24}
          />
          <PaginationVertical />
        </div>
      </div>
    </PageContext.Provider>
  );
};

export const PageContext = createContext();
export default Example;
