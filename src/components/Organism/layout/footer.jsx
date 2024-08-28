import { fonts } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkedInFooter from "../../../../public/icons/linkedInFooter.svg";
import InstagramFooter from "../../../../public/icons/instagramFooter.svg";

const Footer = () => {
  return (
    <div className="flex mt-[34px] w-full text-[#0E0E10] bg-[#00C853] justify-between p-6">
      <div className="flex flex-col gap-6">
        <div className="flex  gap-[80px] ">
        
          <div className={`${fonts.playfair.className} flex gap-1`}>
            <Image
              src="/logo/ImpersonalLogoHitam.svg"
              className="mt-[2px] w-[20px] h-[20px] "
              width={20}
              height={20}
              alt="logo"
            />
            <Link href={"/"} className="  ">
              Impersonal
            </Link>
          </div>
          <div className="flex gap-6 font-medium">
            <p>Example</p>
            <p>Out Team</p>
            <p>Contact</p>
            <p>Feedback</p>
          </div>
        </div>

        <div className="flex flex-col leading-none  text-[20px] -tracking-[0.5px]">
          <p>Build a <span className="italic">professional online </span></p>
          <p><span className="italic">identity</span> that inspires</p>
          <p>people!</p>
        </div>

        <p>©2024 Impersonal. All rights reserved</p>
      </div>

      <div className="flex gap-3 items-end">
       <Image className="w-6 h-auto" src={LinkedInFooter}  alt="LinkedIn"/>
       <Image   className="w-6 h-auto"   src={InstagramFooter} alt="LinkedIn"/>
      
      </div>
    </div>
  );
};

export default Footer;
