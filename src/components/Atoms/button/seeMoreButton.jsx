import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMoreButton = ({ text, href }) => {
  const route = useRouter();

  return (
    <Button
      onClick={() => route.push(href)}
      className=" self-end text-[#C3C3C3] p-0 h-auto font-medium"
    >
      {text}
    </Button>
  );
};

export default SeeMoreButton;
