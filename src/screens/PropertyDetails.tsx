import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import house1 from "../assets/Property/one.jpg";
import house2 from "../assets/Property/two.jpg";
import house3 from "../assets/Property/three.jpg";
import thunderIcon from "../assets/Icons/thunderIcon.png";
import CustomButton from "../components/atoms/button";
import { Button, Form, Input } from "antd";

type LayoutType = Parameters<typeof Form>[0]["layout"];

function PropertyDetails() {
  const carouselRef = useRef(null);

  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };
  return (
    <div className="bg-[#141414] text-white py-10 px-[5vw] ">
      <div className="flex justify-between items-start">
        <div className="flex justify-start items-center gap-5">
          <p className="text-[20px]">Seaside serenity villa</p>
          <p className="text-[10px] border border-[#262626] px-2 py-1 rounded-lg">
            ! California, USA
          </p>
        </div>
        <div>
          <p className="text-xs text-[#999999]">Price</p>
          <p>$1250000</p>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="relative mt-10 ">
        {/* <Carousel autoplay autoplaySpeed={2000} ref={carouselRef}> */}
        <Carousel autoplaySpeed={2000} ref={carouselRef}>
          <div>
            <img
              src={house1}
              alt="Slide 1"
              className="w-full h-[70vh] object-cover"
            />
          </div>
          <div>
            <img
              src={house2}
              alt="Slide 2"
              className="w-full h-[70vh] object-cover"
            />
          </div>
          <div>
            <img
              src={house3}
              alt="Slide 3"
              className="w-full h-[70vh] object-cover"
            />
          </div>
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

      {/* DETAILS SECTION */}
      <div className="mt-10 flex justify-center items-start gap-10">
        <div className="w-[50%] border-1 border-[#262626] p-10 flex flex-col gap-5">
          <p>Description</p>
          <p className="text-sm text-[#999999]">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            T With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
          <hr className="text-[#262626]" />
          <div className="flex gap-2 justify-between items-center">
            <div>
              <p className="text-xs text-[#999999]">Bedrooms</p>
              <p>04</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">Bathrooms</p>
              <p>03</p>
            </div>
            <div>
              <p className="text-xs text-[#999999]">Area</p>
              <p>2500 sqft</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] border-1 border-[#262626] p-10 flex flex-col gap-5">
          <p>Key Features and Amenities</p>
          {[
            { item: "Expansive oceanfront terrace for outdoor entertaining" },
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
              className="flex gap-2 bg-[#262626] py-2 px-5 border-l-4 border-[#703BF7] items-center text-[#999999] text-sm"
            >
              <img src={thunderIcon} alt="" className="h-[14px]" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="mt-[50px]">
        <p className="text-white text-[35px]">
          Inquire About Seaside Serenity Villa
        </p>
        <p className="text-[#999999] text-xs mt-2">
          Interested in this property? Fill out the form below, and our real
          estate experts will get back to you with more details, including
          scheduling a viewing and answering any questions you may have.
        </p>

        <div className="flex justify-between items-center my-[50px] gap-[5vw] text-white">
          <Form
            layout="horizontal"
            labelCol={{ span: 60 }} // width of label column
            wrapperCol={{ span: 30 }} // width of input column
            onFinish={handleSubmit}
            className="w-full text-white"
          >
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

            <Form.Item wrapperCol={{ span: 24 }}>
              <button
                type="submit"
                className="bg-[#703BF7] px-5 py-3 rounded-md text-sm text-white hover:bg-[#5a2fca] transition"
              >
                Book Now
              </button>
            </Form.Item>
          </Form>
        </div>

        {/* <div className="flex justify-between items-center my-[50px] gap-[5vw] text-white">
          <Form
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ width: "100%", color: "white" }}
          >
            <p>nameeeee</p>
              <Input
                placeholder="input placeholder"
                className="w-full custom-input"
              />
            

            <Form.Item label="Field B" labelCol={{ style: { color: "white" } }}>
              <Input
                placeholder="input placeholder"
                className="w-full custom-input"
              />
            </Form.Item>

            <Form.Item>
              <Button color="purple" variant="solid">
                Book Now
              </Button>
            </Form.Item>
          </Form>
        </div> */}
      </div>
    </div>
  );
}

export default PropertyDetails;
