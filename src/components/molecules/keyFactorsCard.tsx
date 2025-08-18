import React from "react";
import icon from "../../assets/Home/icon.png";

function KeyFactorCard() {
  return (
    <div className="relative flex flex-col items-start gap-4 px-7 items-center text-white text-sm border-1 border-[#262626] py-[35px] rounded-xl">
      <div className="flex gap-2 items-center justify-start">
        <img src={icon} alt="" className="h-[50px] w-[50px]" />
        Valuation Mastery
      </div>
      <p className="text-[#999999] text-[10px] justify-center">Discover the true worth of your property with our expert valuation services.</p>
    </div>
  );
}

export default KeyFactorCard;
