import Image from "next/image";
import React from "react";
import image1 from "../../../../public/images/image 1.png";
import image2 from "../../../../public/images/image 2.png";
import image3 from "../../../../public/images/image 3.png";
import imageMore from "../../../../public/images/mediaMore.png";

const PictureGrid = () => {
  return (
    <div className="flex flex-col">
      <div className=" grid grid-cols-4 gap-[6px]">
        <Image src={image2} className="h-auto w-[120px]" alt="image 2" />
        <Image src={image1} className="h-auto w-[120px]" alt="image 1" />
        <Image src={image3} className="h-auto w-[120px]" alt="image 3" />
        <Image src={imageMore} className="h-auto w-[120px]" alt="image 4" />
      </div>
    </div>
  );
};

export default PictureGrid;
