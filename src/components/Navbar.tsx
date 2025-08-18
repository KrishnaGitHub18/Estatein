import React, { useState } from "react";
import img from "../assets/Navbar/backgroundImage.png";
import logo from "../assets/Navbar/Logo.png";
import { useNavigate } from "react-router-dom";
import Button from "./atoms/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full relative">
      <div className="relative w-full">
        <img src={img} alt="" className="w-full h-[40px] sm:h-[60px] object-cover" />
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-[10px] sm:text-xs text-white text-center"
        >
          ✨ Discover Your Dream Property with Estatein
        </p>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center py-4 px-6 sm:px-[5vw] bg-[#141414]">
        <img
          src={logo}
          alt="logo"
          className="h-[30px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex gap-[40px]">
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
        <Button prop={{ name: "Contact Us", color: "#703BF7" }} />
      </div>
      <div className="flex md:hidden flex-row justify-between items-center py-4 px-6 bg-[#141414]">
        <img
          src={logo}
          alt="logo"
          className="h-[30px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        {menuOpen ? (
          <XMarkIcon
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <Bars3Icon
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-[#141414]">
          <Button
            prop={{ name: "Home" }}
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          />
          <Button prop={{ name: "About Us" }} />
          <Button
            prop={{ name: "Properties" }}
            onClick={() => {
              navigate("/properties");
              setMenuOpen(false);
            }}
          />
          <Button
            prop={{ name: "Services" }}
            onClick={() => {
              navigate("/services");
              setMenuOpen(false);
            }}
          />
          <Button prop={{ name: "Contact Us", color: "#703BF7" }} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
