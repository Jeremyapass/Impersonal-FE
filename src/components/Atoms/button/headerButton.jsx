"use client";
import React from "react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

const HeaderButton = ({ text, href }) => {
  const route = useRouter();
  return (
    <Button onClick={() => route.push(href)} variant="signIn">
      {text}
    </Button>
  );
};

export default HeaderButton;
