import PictureGrid from '@/components/Atoms/media/pictureGrid'
import React from 'react'
import PaginationHorizontal from '../../pagination/paginationHorizontal'

const Achievement = () => {
  return (
    <div className="flex flex-col p-[24px] bg-[#1A1A1C] rounded-[8px] ">
    <h1 className="font-medium text-[18px] mb-[16px]">Achievement</h1>

    <div className="flex flex-col tracking-rizqi">
      <h2 className="  font-medium mb-[12px] ">Senior Design Specialist</h2>

      <div className="flex flex-col mb-[16px] gap-[12px]">
        <h3 className="flex items-center ">
          XYZ Tech Solution{" "}
          <span className="ml-1 text-[#C3C3C3]">
            {" "}
            • Full-time • Mar 2015 - May 2019
          </span>
        </h3>
        <div className=" flex gap-2 ml-2  ">
          <p>•</p>
          <p className="mb-[8px]">
            Played a crucial role in the user experience (UX) team,
            streamlining design workflows and accelerating the design
            iterations by 40%....
          </p>{" "}
        </div>
        <div className=" self-end text-[#C3C3C3] font-medium">See more</div>
      </div>

      <PictureGrid/>
      <div className="mb-[10px]"></div>
      <PaginationHorizontal />
    </div>
  </div>
  )
}

export default Achievement