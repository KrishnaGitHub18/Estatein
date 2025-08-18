import React from 'react'
import buildingImg from '../../assets/Home/propertyImage.png';
import PropCardTag from "../atoms/propCardTag";
import bedIcon from '../../assets/Icons/bed.png'
import bathIcon from '../../assets/Icons/bath.png'
import buildIcon from '../../assets/Icons/build.png'
import Button from '../atoms/button';
import { useNavigate } from 'react-router-dom';

function PropertyCard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-[20px] border-1 border-[#262626] rounded-lg">
        <img src={buildingImg} alt="" />
        <div className="flex flex-col justify-start w-[100%] py-5">
        <p className="text-white justify">Seaside Serenity Villa</p>
        <p className="text-[#999999] text-[10px]">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood</p>
        <div className="flex justify-between items-center py-[15px]">
            <PropCardTag prop={{icon:bedIcon, title: "4-Bedrooms"}}/>
            <PropCardTag prop={{icon:bathIcon, title: "3-Bathrooms"}}/>
            <PropCardTag prop={{icon:buildIcon, title: "Villa"}}/>
        </div>
        <div className="flex justify-between items-center text-white text-[20px]">
            <p>$550,000</p>
            <Button prop={{ name: "View Details", color:'#703BF7' }} onClick={()=>navigate("/details")}/>
        </div>
        </div>
    </div>
  )
}

export default PropertyCard
