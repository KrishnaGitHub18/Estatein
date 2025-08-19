import React from "react";
import buildingImg from "../../assets/Home/propertyImage.png";
import PropCardTag from "../atoms/propCardTag";
import bedIcon from "../../assets/Icons/bed.png";
import bathIcon from "../../assets/Icons/bath.png";
import buildIcon from "../../assets/Icons/build.png";
import Button from "../atoms/button";
import { useNavigate } from "react-router-dom";

function PropertyCard({ prop = {} }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center xl:max-w-[400px] items-center p-[20px] border-1 border-[#262626] rounded-lg">
      <img src={prop?.img ? prop?.img : buildingImg} alt="" />
      <div className="flex flex-col justify-start w-[100%] py-5">
        <p className="text-white justify">
          {prop?.propertyname ? prop?.propertyname : "Seaside Serenity Villa"}
        </p>
        <p className="text-[#999999] text-[10px]">
          {prop?.propertydescription
            ? prop?.propertydescription
            : "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood"}
        </p>
        <div className="flex justify-between items-center py-[15px]">
          <PropCardTag
            prop={{
              icon: bedIcon,
              title: `${
                prop?.bedroomcount ? prop?.bedroomcount : "3"
              }-Bedrooms`,
            }}
          />
          <PropCardTag
            prop={{
              icon: bathIcon,
              title: `${
                prop?.bathroomcount ? prop?.bathroomcount : "3"
              }-Bathrooms`,
            }}
          />
          <PropCardTag
            prop={{
              icon: buildIcon,
              title: `${prop?.type ? prop?.type : "Villa"}`,
            }}
          />
        </div>
        <div className="flex justify-between items-center text-white text-[20px]">
          <p>${prop?.price ? prop?.price.slice(0, -3) : "550,000"}</p>
          <Button
            prop={{ name: "View Details", color: "#703BF7" }}
            onClick={() =>
              navigate("/details", { state: { id: prop?.id ?? 0 } })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
