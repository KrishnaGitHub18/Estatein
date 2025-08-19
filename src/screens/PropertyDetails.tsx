import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import house1 from "../assets/Property/one.jpg";
import house2 from "../assets/Property/two.jpg";
import house3 from "../assets/Property/three.jpg";
import thunderIcon from "../assets/Icons/thunderIcon.png";
import CustomButton from "../components/atoms/button";
import { Button, Form, Input, message } from "antd";
import { useLocation } from "react-router-dom";
import axios from "axios";

type LayoutType = Parameters<typeof Form>[0]["layout"];

function PropertyDetails() {
  const carouselRef = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    messageApi.open({
      type: "loading",
      content: "Action in progress..",
      duration: 0,
    });
    try {
      const URL = import.meta.env.VITE_URL;
      const response = await axios.post(`${URL}/api/email`, {
        name: values?.name,
        email: values?.email,
      });
      console.log(response);
      messageApi.destroy();
      messageApi.open({
        type: "success",
        content: "Request sent successfully. We will contact you soon.",
        duration: 3,
      });
    } catch (err) {
      messageApi.destroy();
      messageApi.open({
        type: "error",
        content: err?.response?.data?.details
          ? err.response.data.details
          : "An unknown error occurred while fetching the request.",
      });
    }
  };

  const location = useLocation();
  const { id } = location.state || {};
  console.log("Received ID:", id);

  const [propertyDetails, setPropertyDetails] = useState();

  const fetchPropertyDetails = async () => {
    const URL = import.meta.env.VITE_URL;
    try {
      const response = await axios.post(`${URL}/api/propertyDetails`, {
        id: id,
      });
      console.log(response);
      setPropertyDetails(response.data);
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };
  useEffect(() => {
    if (id > 0) {
      fetchPropertyDetails();
    }
  }, [id]);

  return (
    <div className="bg-[#141414] text-white py-10 px-[5vw] ">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="flex flex-wrap justify-start items-center gap-3">
          <p className="text-[20px]">
            {propertyDetails && propertyDetails?.name
              ? propertyDetails?.name
              : "Seaside serenity villa"}
          </p>
          <p className="text-[10px] border border-[#262626] px-2 py-1 rounded-lg">
            {propertyDetails && propertyDetails?.location
              ? propertyDetails?.location
              : "California, USA"}
          </p>
        </div>
        <div>
          <p className="text-xs text-[#999999]">Price</p>
          <p>
            $
            {propertyDetails && propertyDetails?.price
              ? propertyDetails?.price
              : "1250000"}
          </p>
        </div>
      </div>

      {/* CAROUSEL */}
      {/* CAROUSEL - only on lg and above */}
      <div className="relative mt-10 hidden lg:block">
        <Carousel autoplaySpeed={2000} ref={carouselRef}>
          {propertyDetails && propertyDetails?.images
            ? propertyDetails?.images.map((item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt="Slide 1"
                    className="w-full h-[70vh] object-cover"
                  />
                </div>
              ))
            : [house1, house2, house3].map((item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt="Slide 1"
                    className="w-full h-[70vh] object-cover"
                  />
                </div>
              ))}
        </Carousel>

        <button
          onClick={() => carouselRef.current?.prev()}
          className="absolute top-1/2 -translate-y-1/2 left-5 bg-[#262626] p-2 rounded-full"
        >
          <LeftOutlined />
        </button>
        <button
          onClick={() => carouselRef.current?.next()}
          className="absolute top-1/2 -translate-y-1/2 right-5 bg-[#262626] p-2 rounded-full"
        >
          <RightOutlined />
        </button>
      </div>

      {/* STATIC IMAGE - only below lg */}
      <div className="mt-10 block lg:hidden">
        <img
          src={house1}
          alt="Property preview"
          className="w-full h-[50vh] object-cover"
        />
      </div>

      {/* <div className="relative mt-10">
    <Carousel autoplaySpeed={2000} ref={carouselRef}>
      <div>
        <img
          src={house1}
          alt="Slide 1"
          className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] object-cover"
        />
      </div>
      <div>
        <img
          src={house2}
          alt="Slide 2"
          className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] object-cover"
        />
      </div>
      <div>
        <img
          src={house3}
          alt="Slide 3"
          className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] object-cover"
        />
      </div>
    </Carousel>

    <button
      onClick={() => carouselRef.current?.prev()}
      className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 bg-[#262626] p-2 rounded-full"
    >
      <LeftOutlined />
    </button>
    <button
      onClick={() => carouselRef.current?.next()}
      className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 bg-[#262626] p-2 rounded-full"
    >
      <RightOutlined />
    </button>
  </div> */}

      {/* DETAILS SECTION */}
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-start gap-10">
        <div className="w-full lg:w-1/2 border border-[#262626] p-6 md:p-10 flex flex-col gap-5">
          <p>Description</p>
          <p className="text-sm text-[#999999]">
            {propertyDetails && propertyDetails?.description ? (
              propertyDetails.description
            ) : (
              <>
                Discover your own piece of paradise with the Seaside Serenity
                Villa. T With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </>
            )}
          </p>
          <hr className="text-[#262626]" />
          <div className="flex justify-between items-center text-center">
            <div>
              <p className="text-xs text-[#999999]">Bedrooms</p>
              <p>
                {propertyDetails && propertyDetails?.bedroomcount
                  ? propertyDetails?.bedroomcount
                  : "04"}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">Bathrooms</p>
              <p>
                {propertyDetails && propertyDetails?.bathroomcount
                  ? propertyDetails?.bathroomcount
                  : "02"}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">Area</p>
              <p>
                {propertyDetails && propertyDetails?.area
                  ? propertyDetails?.area
                  : "2500"}{" "}
                sqft
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border border-[#262626] p-6 md:p-10 flex flex-col gap-5">
          <p>Key Features and Amenities</p>
          {propertyDetails && propertyDetails?.keyfeatures
            ? propertyDetails?.keyfeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 bg-[#262626] py-2 px-4 md:px-5 border-l-4 border-[#703BF7] items-center text-[#999999] text-sm"
                >
                  <img src={thunderIcon} alt="" className="h-[14px]" />
                  {item}
                </div>
              ))
            : [
                {
                  item: "Expansive oceanfront terrace for outdoor entertaining",
                },
                { item: "Gourmet kitchen with top-of-the-line appliances" },
                {
                  item: "Private beach access for morning strolls and sunset views",
                },
                {
                  item: "Master suite with a spa-inspired bathroom and ocean-facing balcony",
                },
                { item: "Private garage and ample storage space" },
              ].map(({ item }, index) => (
                <div
                  key={index}
                  className="flex gap-2 bg-[#262626] py-2 px-4 md:px-5 border-l-4 border-[#703BF7] items-center text-[#999999] text-sm"
                >
                  <img src={thunderIcon} alt="" className="h-[14px]" />
                  {item}
                </div>
              ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="mt-[50px]">
        <p className="text-white text-[24px] md:text-[35px]">
          Inquire about this{" "}
          {propertyDetails && propertyDetails?.name
            ? propertyDetails?.name
            : "Seaside Serenity Villa"}
        </p>
        <p className="text-[#999999] text-xs md:text-sm mt-2">
          {propertyDetails && propertyDetails?.description ? (
            propertyDetails.description
          ) : (
            <>
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </>
          )}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start my-[30px] md:my-[50px] gap-[5vw] text-white">
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            className="w-full"
          >
            {contextHolder}
            <Form.Item
              label={<span className="text-white">Name: </span>}
              name="name"
            >
              <Input
                placeholder="Enter your name"
                className="w-full custom-input"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Email: </span>}
              name="email"
            >
              <Input
                placeholder="Enter your email"
                className="w-full custom-input"
              />
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="bg-[#703BF7] px-5 py-3 rounded-md text-sm text-white hover:bg-[#5a2fca] transition"
              >
                Book Now
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

    // <div className="bg-[#141414] text-white py-10 px-[5vw] ">
    //   <div className="flex justify-between items-start">
    //     <div className="flex justify-start items-center gap-5">
    //       <p className="text-[20px]">Seaside serenity villa</p>
    //       <p className="text-[10px] border border-[#262626] px-2 py-1 rounded-lg">
    //         ! California, USA
    //       </p>
    //     </div>
    //     <div>
    //       <p className="text-xs text-[#999999]">Price</p>
    //       <p>$1250000</p>
    //     </div>
    //   </div>

    //   {/* CAROUSEL */}
    //   <div className="relative mt-10 ">
    //     {/* <Carousel autoplay autoplaySpeed={2000} ref={carouselRef}> */}
    //     <Carousel autoplaySpeed={2000} ref={carouselRef}>
    //       <div>
    //         <img
    //           src={house1}
    //           alt="Slide 1"
    //           className="w-full h-[70vh] object-cover"
    //         />
    //       </div>
    //       <div>
    //         <img
    //           src={house2}
    //           alt="Slide 2"
    //           className="w-full h-[70vh] object-cover"
    //         />
    //       </div>
    //       <div>
    //         <img
    //           src={house3}
    //           alt="Slide 3"
    //           className="w-full h-[70vh] object-cover"
    //         />
    //       </div>
    //     </Carousel>

    //     <button
    //       onClick={() => carouselRef.current?.prev()}
    //       className="absolute top-1/2 -translate-y-1/2 left-5 bg-[#262626] p-2 rounded-full"
    //     >
    //       <LeftOutlined />
    //     </button>
    //     <button
    //       onClick={() => carouselRef.current?.next()}
    //       className="absolute top-1/2 -translate-y-1/2 right-5 bg-[#262626] p-2 rounded-full"
    //     >
    //       <RightOutlined />
    //     </button>
    //   </div>

    //   {/* DETAILS SECTION */}
    //   <div className="mt-10 flex justify-center items-start gap-10">
    //     <div className="w-[50%] border-1 border-[#262626] p-10 flex flex-col gap-5">
    //       <p>Description</p>
    //       <p className="text-sm text-[#999999]">
    //         Discover your own piece of paradise with the Seaside Serenity Villa.
    //         T With an open floor plan, breathtaking ocean views from every room,
    //         and direct access to a pristine sandy beach, this property is the
    //         epitome of coastal living.
    //       </p>
    //       <hr className="text-[#262626]" />
    //       <div className="flex gap-2 justify-between items-center">
    //         <div>
    //           <p className="text-xs text-[#999999]">Bedrooms</p>
    //           <p>04</p>
    //         </div>
    //         <div>
    //           <p className="text-xs text-[#999999]">Bathrooms</p>
    //           <p>03</p>
    //         </div>
    //         <div>
    //           <p className="text-xs text-[#999999]">Area</p>
    //           <p>2500 sqft</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[50%] border-1 border-[#262626] p-10 flex flex-col gap-5">
    //       <p>Key Features and Amenities</p>
    //       {[
    //         { item: "Expansive oceanfront terrace for outdoor entertaining" },
    //         { item: "Gourmet kitchen with top-of-the-line appliances" },
    //         {
    //           item: "Private beach access for morning strolls and sunset views",
    //         },
    //         {
    //           item: "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    //         },
    //         { item: "Private garage and ample storage space" },
    //       ].map(({ item }, index) => (
    //         <div
    //           key={index}
    //           className="flex gap-2 bg-[#262626] py-2 px-5 border-l-4 border-[#703BF7] items-center text-[#999999] text-sm"
    //         >
    //           <img src={thunderIcon} alt="" className="h-[14px]" />
    //           {item}
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* CONTACT SECTION */}
    //   <div className="mt-[50px]">
    //     <p className="text-white text-[35px]">
    //       Inquire About Seaside Serenity Villa
    //     </p>
    //     <p className="text-[#999999] text-xs mt-2">
    //       Interested in this property? Fill out the form below, and our real
    //       estate experts will get back to you with more details, including
    //       scheduling a viewing and answering any questions you may have.
    //     </p>

    //     <div className="flex justify-between items-center my-[50px] gap-[5vw] text-white">
    //       <Form
    //         layout="horizontal"
    //         labelCol={{ span: 60 }} // width of label column
    //         wrapperCol={{ span: 30 }} // width of input column
    //         onFinish={handleSubmit}
    //         className="w-full text-white"
    //       >
    //         <Form.Item
    //           label={<span className="text-white">Name: </span>}
    //           name="name"
    //         >
    //           <Input
    //             placeholder="Enter your name"
    //             className="w-full custom-input"
    //           />
    //         </Form.Item>

    //         <Form.Item
    //           label={<span className="text-white">Email: </span>}
    //           name="email"
    //         >
    //           <Input
    //             placeholder="Enter your email"
    //             className="w-full custom-input"
    //           />
    //         </Form.Item>

    //         <Form.Item wrapperCol={{ span: 24 }}>
    //           <button
    //             type="submit"
    //             className="bg-[#703BF7] px-5 py-3 rounded-md text-sm text-white hover:bg-[#5a2fca] transition"
    //           >
    //             Book Now
    //           </button>
    //         </Form.Item>
    //       </Form>
    //     </div>

    //     {/* <div className="flex justify-between items-center my-[50px] gap-[5vw] text-white">
    //       <Form
    //         layout={formLayout}
    //         form={form}
    //         initialValues={{ layout: formLayout }}
    //         onValuesChange={onFormLayoutChange}
    //         style={{ width: "100%", color: "white" }}
    //       >
    //         <p>nameeeee</p>
    //           <Input
    //             placeholder="input placeholder"
    //             className="w-full custom-input"
    //           />

    //         <Form.Item label="Field B" labelCol={{ style: { color: "white" } }}>
    //           <Input
    //             placeholder="input placeholder"
    //             className="w-full custom-input"
    //           />
    //         </Form.Item>

    //         <Form.Item>
    //           <Button color="purple" variant="solid">
    //             Book Now
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //     </div> */}
    //   </div>
    // </div>
  );
}

export default PropertyDetails;
