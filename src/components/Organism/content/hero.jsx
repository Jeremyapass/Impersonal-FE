import ContactMe from "@/components/Molecules/card/contactMe";
import Experience from "@/components/Molecules/card/1/experience";
import Quotes from "@/components/Molecules/card/links";
import Skills from "@/components/Molecules/card/1/skills";
import Summary from "@/components/Molecules/card/1/summary";
import React from "react";

const Hero = () => {
  return (
    <div className="flex self-center bg-blue-500 mt-[32px]">
      <div className="flex mt-[32px]">
        <div className="grid-rows-3">
          <div>Foto</div>
          <Quotes />
          <ContactMe />
        </div>

        <div className="grid-rows-4">
          <div className="flex flex-col bg-orange-500">
            <h1>Hello, {"I'm"}</h1>
            <h1>Ilham Kesuma Jayawirjaya</h1>
            <h3>Product Designer at ABC Solution</h3>
          </div>
          <Summary />
          <Skills />
          <Experience />
        </div>
      </div>

      <div>
        <div>logo share</div>
        <div>nanti untuk {'tombol"'} arrow</div>
      </div>
    </div>
  );
};

export default Hero;
