import React from "react";
import SliderCard from "../components/molecules/sliderCard";
import Button from "../components/atoms/button";
import KeyFactorCard from "../components/molecules/keyFactorsCard";

function Services() {
  return (
    <div className="bg-[#141414] text-white">
      {/* HERO SECTION */}
      <div className="flex flex-col gap-[10px] h-[300px] px-[7vw] justify-center items-start bg-[#262626]">
        <p className="text-[30px]">Elevate Your Real Estate Experience.</p>
        <p className="text-xs text-[#999999]">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </p>
      </div>

      {/* SLIDER SECTION */}
      <div className="h-[10px] w-full bg-[#1A1A1A]" />
      <div className="flex flex-wrap lg:flex-nowrap justify-center sm:justify-around items-center py-[10px] gap-4 px-3">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>

      <div className="h-[10px] w-full bg-[#1A1A1A]" />

      {/* KEY FACTORS */}
      {/* DETAILS SECTION 1*/}
      {[
        {
          head: "Unlock Property Value",
          description:
            "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
        },
        {
          head: "Effortless Property Management",
          description:
            "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
        },
      ].map((item, index) => (
        <div className="py-[50px] px-[6%] mt-10" key={index}>
          <p className="text-white text-[35px]">{item.head}</p>

          <p className="text-[#999999] text-xs mt-7 max-w-[90%] leading-relaxed">
            {item.description}
          </p>

          {/* Responsive wrapper for KeyFactorCards */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-[50px] gap-[5vw]">
            <KeyFactorCard />
            <KeyFactorCard />
            <KeyFactorCard />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
