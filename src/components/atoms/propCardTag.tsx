import React from "react";
import bedIcon from '../../assets/Icons/bed.png';

function PropCardTag({prop}) {
  return (
    <div className="flex items-center text-white text-[10px] bg-[#262626] gap-2 px-2 py-1 rounded-lg">
      <img src={prop.icon} alt="" className="h-[10px] w-[10px]" />
      {prop.title}
    </div>
  );
}

export default PropCardTag;
