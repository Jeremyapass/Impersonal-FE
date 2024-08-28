"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = ({ href }) => {
  const route = useRouter();

  return (
    <Button
      onClick={() => route.push(href)}
      className=" p-0 h-auto"
      variant="backButton"
    >
      <Image
        priority
        src={"/icons/ArrowKiriActive.svg"}
        alt="logo"
        width={24}
        height={20}
      />
    </Button>
  );
};

export default BackButton;
