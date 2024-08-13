import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactMeButton = ({ text, logo }) => {
  return (
    <Button variant="contactMe">
      <Image className="w-[24px] h-auto" src={logo}  alt="gambar button"/>
      {text}
    </Button>
  );
};

export default ContactMeButton;
