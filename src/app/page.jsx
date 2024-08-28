"use client";
import Marquee from "@/components/Molecules/marquee";
import PaginationVertical from "@/components/Molecules/pagination/paginationVertical";
import Share from "../../public/icons/share.svg";
import Headline from "@/components/Organism/content/headline";
import UserCard from "@/components/Organism/content/userCard";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import LogoImpersonal from "@/components/Molecules/logoImpersonal";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [visible, setVisible] = useState(false);
  const route = useRouter();

  // Function to calculate the offset
  const getOffset = (elementId, offsetPx) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Calculate the element's top position relative to the viewport
      const rect = element.getBoundingClientRect();
      return rect.top + window.pageYOffset - offsetPx;
    }
    return 0;
  };

  const handleClick = () => {
    setVisible(true);

    // Calculate the offset with a desired offset value of 90 pixels
    const offset = getOffset("kotak", 90);

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: offset,
        autoKill: false,
      },
    });

    gsap.to("#kotak", {
      duration: 1,
      height: "auto",
      onComplete: () => {
        route.push("/example");
      },
    });
  };

  return (
    <main className="flex flex-col items-center gap-12">
      <Headline />

      <LogoImpersonal />
      
      <div
        onClick={handleClick}
        id="kotak"
        className=" h-[448px] overflow-hidden rounded-[16px] flex cursor-pointer"
      >
        <UserCard />
        {visible === true && (
          <div className="text-white mt-[10px]  absolute left-[85%] w-[96px] flex flex-col px-[36px] gap-[407.5px] ">
            <Image
              className="mt-[44px]"
              src={Share}
              alt="share"
              width={24}
              height={24}
            />
            <PaginationVertical />
          </div>
        )}
      </div>

      <Marquee />
    </main>
  );
}
