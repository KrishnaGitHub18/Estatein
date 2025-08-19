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
      <div className="flex flex-col lg:flex-row text-white">
        {/* Image first on mobile */}
        <div className="order-1 lg:order-2">
          <img
            src={hero}
            alt=""
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>

        {/* Text content */}
        <div className="order-2 lg:order-1 lg:w-[60%] flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-[100px] py-10 sm:py-16 lg:py-[100px]">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-snug">
              Discover your dream property with Estatein
            </p>
            <p className="mt-3 text-xs sm:text-sm text-[#999999]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 sm:mt-8 lg:mt-[20px] py-6 sm:py-8 lg:py-[50px]">
            <Button prop={{ name: "Learn More", color: "#703BF7" }} />
            <Button
              prop={{ name: "Browse Properties", color: "#703BF7" }}
              onClick={() => navigate("/properties")}
            />
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-10">
            <StatContainer prop={{ value: "200+" }} />
            <StatContainer prop={{ value: "10k+" }} />
            <StatContainer prop={{ value: "16+" }} />
          </div>
        </div>
      </div>

      {/* SLIDER SECTION */}
      <div className="h-[10px] w-full bg-[#1A1A1A]" />
      <div className="flex flex-wrap justify-center gap-6 py-6 sm:py-10">
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </div>
      <div className="h-[10px] w-full bg-[#1A1A1A]" />

      {/* DETAILS SECTION 1*/}
      <div className="py-10 sm:py-[50px] px-4 sm:px-[6%]">
        <p className="text-white text-2xl sm:text-3xl md:text-[35px] mb-4">
          Featured Properties
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[#999999] text-xs gap-6 md:gap-[10vw]">
          <p className="flex-1">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
          <Button prop={{ name: "View All Properties" }} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center mt-10 gap-6 md:gap-[2vw]">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>

      {/* DETAILS SECTION 2*/}
      <div className="py-10 sm:py-[50px] px-4 sm:px-[6%]">
        <p className="text-white text-2xl sm:text-3xl md:text-[35px] mb-4">
          What Our Clients Say
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[#999999] text-xs gap-6 md:gap-[10vw]">
          <p className="flex-1">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <Button prop={{ name: "More Reviews" }} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center mt-10 gap-6 md:gap-3">
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
        </div>
      </div>

      {/* DETAILS SECTION 3 - FAQs*/}
      <div className="py-10 sm:py-[50px] px-4 sm:px-[6%]">
        <p className="text-white text-2xl sm:text-3xl md:text-[35px] mb-4">
          Frequently Asked Questions
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[#999999] text-xs gap-6 md:gap-[10vw]">
          <p className="flex-1">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
          <Button prop={{ name: "More Questions" }} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center mt-10 gap-6 md:gap-3">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
