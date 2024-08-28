import FeedbackOurTeam from "@/components/Organism/content/feedbackOurTeam";
import OurTeamCard from "@/components/Organism/content/ourTeamCard";
import { fonts } from "@/fonts";
import React from "react";

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="mt-[90.5px] flex flex-col items-center w-[880px] gap-6">
        <h1 className={`text-[72px] ${fonts.playfair.className}`}>
          Meet <span className={`text-[#00C853] italic`}>our team</span>
        </h1>
        <p className="text-center  text-[20px] tracking-[0.2px]">
          At <span className={`text-[#00C853]  `}>Impersonal</span>, we’re more
          than just a team, we’re a community of passionate professionals
          dedicated to helping you build your personal brand and achieve your
          career goals. Get to know the talented individuals who are driving
          innovation and making our platform the go-to destination for
          professional growth.
        </p>
      </div>

      <div className="w-[158px] h-[110px] bg-orange-500">izin bang </div>

      <div className="flex flex-col gap-8">
        <OurTeamCard part={"Innaka"} />
        <OurTeamCard part={"Jerry"} />
        <OurTeamCard part={"Rizqi"} />
      </div>

      <div className="w-[880px] border-[3px] border-[#1A1A1C]"> </div>

      <div className="gap-6 flex flex-col w-[880px] items-center text-center">
        <h1 className={`${fonts.playfair.className} text-[72px]`}>
          Help us <span className={`italic  text-[#00C853] `}>improve</span>
        </h1>
        <p className="text-[20px] leading-6 tracking-[0.2px]">
          At <span className="text-[#00C853]">Impersonal,</span> your experience
          is our top priority. We’re committed to continuously improving our
          platform to better serve your needs, and we believe the best way to do
          that is by listening to you.{" "}
        </p>
      </div>

      <FeedbackOurTeam />
    </div>
  );
};

export default OurTeam;
