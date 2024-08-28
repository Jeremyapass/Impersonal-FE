import listPart from "@/fakeDB/listPart";
import DataTeam from "@/fakeDB/ourTeam";
import { usePathname } from "next/navigation";
import React from "react";

const Summary = ({name}) => {
  const currentPath = usePathname()
  const nameVar = name;
  const text = currentPath === "/example" || "/" ? listPart.summary : DataTeam[nameVar]?.summary

  return (
    <div
      className={`flex flex-col p-[24px]  bg-[#1A1A1C] rounded-[8px] ${
        currentPath === "/ourteam" ? " w-[560px]" : ""
      }`}
    >
      <h2 className="text-[18px] mb-[16px] font-medium">Summary</h2>
      <p className="leading-[24px]  -tracking-[0.16px]">
        {text}
      </p>
    </div>
  );
};

export default Summary;
