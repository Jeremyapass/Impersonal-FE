"use client";
import React from "react";
import { Button } from "../../ui/button";
import { usePathname, useRouter } from "next/navigation";

const HeaderButton = ({ text, href }) => {
  const currentPath = usePathname();
  const route = useRouter();

  return (
    <Button
      className={`${currentPath === href ? "text-[#00C853]" : ""}`}
      onClick={() => route.push(href)}
      variant="signIn"
    >
      {text}
    </Button>
  );
};

export default HeaderButton;
