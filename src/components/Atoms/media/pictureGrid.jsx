import Image from "next/image";
import React from "react";
import image1 from "../../../../public/images/image 1.png";
import image2 from "../../../../public/images/image 2.png";
import image3 from "../../../../public/images/image 3.png";
import imageMore from "../../../../public/images/mediaMore.png";
import { usePathname } from "next/navigation";

const PictureGrid = () => {
  const currentPath = usePathname();

  const listGambar = [
    { image: image1, alt: "image 1" },
    { image: image2, alt: "image 2" },
    { image: image3, alt: "image 3" },
    { image: imageMore, alt: "image 4" },
    { image: image1, alt: "image 1" },
    { image: image2, alt: "image 2" },
    { image: image3, alt: "image 3" },
    { image: imageMore, alt: "image 4" },
  ];

  const imagesToShow =
    currentPath === "/example"
      ? listGambar.slice(0, 4)
      : currentPath.startsWith("/example/")
      ? listGambar
      : listGambar.slice(0, 4);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 gap-[6px]">
        {imagesToShow.map((data, index) => (
          <Image
            key={index}
            src={data.image}
            className="h-auto w-[120px]"
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default PictureGrid;
