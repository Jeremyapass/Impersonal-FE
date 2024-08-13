import Image from "next/image";
import React from "react";
import Copy from "../../../../public/icons/copy.svg";

const Links = () => {
  return (
    <div className="flex flex-col p-[24px] bg-[#1A1A1C] w-[248px]  rounded-[8px]">
      <h1 className="mb-[16px] text-[18px] font-medium">Links</h1>
      <div className="flex flex-col gap-[8px] mb-[12px]">
        <h2>My website </h2>
        <div className="flex gap-[12px] justify-center -tracking-[0.16px] leading-[20px] py-[8px] border-[#39393B] border-2 rounded-[6px]">
          www.mywebsite....
          <Image src={Copy} width={24} height={24} alt="external link" />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h2>My website </h2>
        <div className="flex gap-[12px] justify-center leading-[20px] py-[8px] border-[#39393B] border-2 -tracking-[0.16px] rounded-[6px]">
          www.mywebsite....
          <Image src={Copy} width={24} height={24} alt="external link" />
        </div>
      </div>
    </div>
  );
};

export default Links;
