import React from "react";
import SignInButton from "../../Atoms/button/signInButton";
import CreateAccountButton from "../../Atoms/button/createAccountButton";
import { fonts } from "@/fonts"; //ini bisa langsung dipanggil ke classname tanpa inisiasi ke const dulu
import Image from "next/image";
import HeaderButton from "../../Atoms/button/headerButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className="z-50 fixed w-full flex justify-center h-[58px]  gap-[106px] bg-[#0E0E10]">
      <div
        className={`${fonts.playfair.className} py-[19px] flex items-center text-[20px] gap-[4px]`}
      >
        <Image
          src={"/logo/ImpersonalLogoHijau.svg"}
          className="mt-[2px] w-[20px] h-[20px] "
          width={20}
          height={20}
          alt="logo"
          priority
        />
        <Link href={"/"} className="  ">Impersonal</Link>
      </div>

      <ul className="flex items-center gap-[24px] ">
        <HeaderButton text={"Examples"} href={"/example"} />
        <HeaderButton text={"Our Team"} href={"/ourteam"}/>
        <HeaderButton text={"Contact"} href={"/contact"}/>
      </ul>

      <div className="flex gap-[12px] items-center ">
        <SignInButton href={"/login"}/>
        <CreateAccountButton href={"/registration"} />
      </div>
    </div>
  );
};

export default Header;
