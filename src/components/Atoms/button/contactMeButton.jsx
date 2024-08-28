import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactMeButton = ({ text, logo }) => {
  return (
    <Button variant="contactMe">
      <Image priority className="h-auto w-auto" src={`/icons/${logo}.svg`} width={1} height={1} alt="gambar button"/>
      {text}
    </Button>
  );
};

export default ContactMeButton;

//ganti src jadi "/icons/{logo}.png"
