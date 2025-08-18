import React from "react";
import icon from '../../assets/Home/icon.png';
import arrow from '../../assets/Home/arrow.png';
import { useNavigate } from "react-router-dom";

function SliderCard() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[20%] flex flex-col gap-2 justify-center items-center text-white text-sm bg-[#1A1A1A] py-[35px] rounded-xl">
      <img src={icon} alt="" className="h-[50px] w-[50px]" />
      <img src={arrow} alt="" className="absolute top-2 right-2 cursor-pointer" onClick={()=>navigate("/properties")}/>
      Find your dream home
    </div>
  );
}

export default SliderCard;

