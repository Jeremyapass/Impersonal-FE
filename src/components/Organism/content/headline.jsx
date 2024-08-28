import CreateAccountButton from "@/components/Atoms/button/createAccountButton";
import { fonts } from "@/fonts";
import React from "react";

const Headline = () => {
  return (
    <div className="text-center w-[823px]">
      <div
        className={`mt-[90px] ${fonts.playfair.className} tracking-[-1.8px] leading-[70px] text-center text-[72px]`}
      >
        <p>
          Create a powerful
          <span className="italic text-[#00C853]">personal</span>
        </p>
        <p>
          <span className="italic text-[#00C853]">branding</span> that truly
        </p>
        <p>inpires!</p>
      </div>

      <div className="text-center mt-[24px] text-[20px] mb-[24px] leading-6 tracking-[0.2px]">
        <p className="">
          Showcase your experience and portofolio, create a powerful{" "}
          <span className="italic text-[#00C853]">personal branding</span> and
          make a positive impact on your future.
        </p>
      </div>

      <CreateAccountButton href={"/registration"} />
    </div>
  );
};

export default Headline;
