import ContactMe from "@/components/Molecules/examplePage/contactMe";
import Experience from "@/components/Molecules/examplePage/experience";
import Quotes from "@/components/Molecules/examplePage/quotes";
import Skills from "@/components/Molecules/examplePage/skills";
import Summary from "@/components/Molecules/examplePage/summary";
import React from "react";

const Hero = () => {
  return (
    <div className="flex">
      <div className="flex">
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
