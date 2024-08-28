import BackButton from "@/components/Atoms/button/backButton";
import React from "react";

const Header = ({text, href}) => {
  return (
    <div className="mb-3 text-[18px] flex items-center gap-3 font-medium">
      <BackButton href={href}/>
      {text}
    </div>
  );
};

export default Header;
