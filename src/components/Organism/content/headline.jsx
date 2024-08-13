import CreateAccountButton from "@/components/Atoms/button/createAccountButton";
import { fonts } from "@/fonts";
import React from "react";

const Headline = () => {
  return (
    <div className="text-center">
      <div
        className={`mt-[90px] ${fonts.playfair.className} tracking-[-1.8px] leading-[70px] text-center text-[72px]`}
      >
        <p>
          Build a <span className="italic">professional online</span>
        </p>
        <p>
          <span className="italic">identity</span> that inspires
        </p>
        <p>people!</p>
      </div>

      <div className="text-center mt-[24px] text-[20px] mb-[24px]">
        <p className="">
          Build your <span className="italic text-[#00C853]">professional</span>{" "}
          online identity, integrate your{" "}
          <span className="italic text-[#00C853]">skills</span> and
          <span className="italic text-[#00C853]">experience</span> in one{" "}
        </p>
        <p>platform. Start your journey towards your dream career!</p>
      </div>

      <CreateAccountButton />
    </div>
  );
};

export default Headline;
