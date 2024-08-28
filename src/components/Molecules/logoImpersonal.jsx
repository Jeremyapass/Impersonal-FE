import Image from "next/image";
import React from "react";

const LogoImpersonal = () => {
  return (
    <div className=" left-9 rotate-[15deg] fixed top-[200px] items-center justify-center w-[128px] h-[128px] flex">
      <Image
        src={"/logo/partLogo/PartBesar1.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute  top-0"
      />
      <Image
        src={"/logo/partLogo/PartKecil1.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute -mt-[30px] -mr-[30px]"
      />

      <Image
        src={"/logo/partLogo/PartBesar2.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute right-0"
      />
      <Image
        src={"/logo/partLogo/PartKecil2.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute mt-[30px] -mr-[30px]"
      />

      <Image
        src={"/logo/partLogo/PartBesar3.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute bottom-0"
      />
      <Image
        src={"/logo/partLogo/PartKecil3.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute mt-[30px] mr-[30px]"
      />

      <Image
        src={"/logo/partLogo/PartBesar4.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute left-0"
      />
      <Image
        src={"/logo/partLogo/PartKecil4.svg"}
        width={1}
        height={1}
        alt="part Logo"
        className="w-auto h-auto absolute  -mt-[30px] mr-[30px]"
      />
    </div>
  );
};

export default LogoImpersonal;
