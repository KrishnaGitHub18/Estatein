import React from "react";
import img from "../assets/Navbar/backgroundImage.png";
import logo from "../assets/Navbar/Logo.png";
import { useNavigate } from "react-router-dom";
import Button from "./atoms/button";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <img src={img} alt=""/>
      <p className="absolute top-4 left-[40vw] text-xs">✨Discover Your Dream Property with Estatein</p>

      <div className="flex flex-row justify-between items-center py-5 px-[5vw] w-full">
        <img src={logo} alt="" className="h-[30px] cursor-pointer" onClick={()=>navigate("/")}/>
        <div className="flex gap-[50px]">
          <Button prop={{ name: "Home" }} onClick={() => navigate("/")} />
          <Button prop={{ name: "About Us" }} />
          <Button
            prop={{ name: "Properties" }}
            onClick={() => navigate("/properties")}
          />
          <Button
            prop={{ name: "Services" }}
            onClick={() => navigate("/services")}
          />
        </div>
        <Button prop={{ name: "Contact Us", color:'#703BF7' }} />
      </div>
    </nav>
  );
}

export default Navbar;
