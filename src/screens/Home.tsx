import React from "react";
import hero from "../assets/Home/Container.png";
import Button from "../components/atoms/button";
import StatContainer from "../components/atoms/statContainer";
import SliderCard from "../components/molecules/sliderCard";
import PropertyCard from "../components/molecules/propertyCard";
import ReviewsCard from "../components/molecules/reviewsCard";
import FAQCard from "../components/molecules/faqCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#141414]">

      {/* HERO SECTION */}
      <div className="flex text-white">
        <div className="w-[60%] flex flex-col justify-center items-start px-[100px] py-[100px]">
          <div>
            <p className="text-[40px]">
              Discover your dream property with Estatein
            </p>
            <p className="text-xs text-[#999999]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className="flex gap-[20px] mt-[20px] py-[50px]">
            <Button prop={{ name: "Learn More", color:'#703BF7' }} />
            <Button prop={{ name: "Browse Properties", color:'#703BF7' }} onClick={()=>navigate("/properties")}/>
          </div>
          <div className="flex gap-[20px]">
            <StatContainer prop={{ value: "200+" }} />
            <StatContainer prop={{ value: "10k+" }} />
            <StatContainer prop={{ value: "16+" }} />
          </div>
        </div>
        <div>
          <img src={hero} alt="" className="h-[600px]" />
        </div>
      </div>

      {/* SLIDER SECTION */}
      <div className="h-[10px] w-full bg-[#1A1A1A]"/>
      <div className="flex justify-around items-center py-[10px]">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
      <div className="h-[10px] w-full bg-[#1A1A1A]"/>

      {/* DETAILS SECTION 1*/}
      <div className="py-[50px] px-[6%]">
        <p className="text-white text-[35px]">Featured Properties</p>
        <div className="flex justify-between items-center text-[#999999] text-xs gap-[10vw]">
          <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
          <Button prop={{ name: "View All Properties" }} />
        </div>

        <div className="flex justify-between items-center mt-[50px] gap-[5vw]">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>

      {/* DETAILS SECTION 2*/}
      <div className="py-[50px] px-[6%]">
        <p className="text-white text-[35px]">What Our Clients Say</p>
        <div className="flex justify-between items-center text-[#999999] text-xs gap-[10vw]">
          <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
          <Button prop={{ name: "More Reviews" }} />
        </div>

        <div className="flex justify-between items-center mt-[50px] gap-[5vw]">
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
        </div>
      </div>

      {/* DETAILS SECTION 3 - FAQs*/}
      <div className="py-[50px] px-[6%]">
        <p className="text-white text-[35px]">Frequently Asked Questions</p>
        <div className="flex justify-between items-center text-[#999999] text-xs gap-[10vw]">
          <p>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
          <Button prop={{ name: "More Questions" }} />
        </div>

        <div className="flex justify-between items-center mt-[50px] gap-[5vw]">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
