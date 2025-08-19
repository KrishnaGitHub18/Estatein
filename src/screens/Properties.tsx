import React, { useState } from "react";
import CustomButton from "../components/atoms/button";
import PropertyCard from "../components/molecules/propertyCard";
import { Button, Form, Input, message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

type LayoutType = Parameters<typeof Form>[0]["layout"];

function Properties() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = async (values) => {
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
    form.setFieldsValue({
      name: "",
      email: "",
    });
  };

  const properties = useSelector((state) => state.properties.propertiesList);
  console.log(properties);

  return (
    <div className="bg-[#141414] text-white">
      {/* HERO SECTION */}
      <div className="flex flex-col gap-[10px] h-[300px] px-[7vw] justify-center items-start bg-[#262626]">
        <p className="text-[30px]">Find your dream property.</p>
        <p className="text-xs text-[#999999]">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="w-[70vw] absolute top-[362px] left-[15vw] rounded-xl">
        <div className="flex justify-between items-center bg-[#141414] border-[5px] border-[#262626] px-[3vw] py-[20px] mt-[20px] rounded-xl">
          <input
            type="text"
            placeholder="Search for a property..."
            className="bg-transparent outline-none text-[#999999] w-full placeholder:text-[#999999]"
          />
          <CustomButton prop={{ name: "Find Property", color: "#703BF7" }} />
        </div>
      </div>

      {/* DISCOVER PROPERTY SECTION */}
      <div className="pt-[150px] pb-[70px] px-[6%]">
        <p className="text-white text-[35px]">Available Properties</p>
        <div className="flex justify-between items-center text-[#999999] text-xs gap-[10vw]">
          <p>
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center mt-10 gap-6 md:gap-[2vw]">
          {properties && properties?.length > 0 ? (
            properties.map((property, index) => (
              <PropertyCard key={index} prop={property} />
            ))
          ) : (
            <>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </>
          )}
        </div>
      </div>

      {/* LETS CONNECT SECTION */}
      <div className="px-[6%]">
        <p className="text-white text-[35px]">Lets make it happen</p>
        <div className="flex justify-between items-center text-[#999999] text-xs gap-[10vw]">
          <p>
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </p>
        </div>

        <div className="flex justify-between items-center my-[50px] gap-[5vw] text-[#ffffff]">
          <Form
            layout="horizontal"
            labelCol={{ span: 60 }}
            wrapperCol={{ span: 30 }}
            onFinish={handleSubmit}
            className="w-full text-white"
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

            <Form.Item wrapperCol={{ span: 24 }}>
              <button
                type="submit"
                className="bg-[#703BF7] px-5 py-3 rounded-md text-sm text-white hover:bg-[#5a2fca] transition"
              >
                Contact Us
              </button>
            </Form.Item>
          </Form>
          {/* <Form
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ width: "100%" }}
          >
            <Form.Item label="Field A" className="text-white">
              <Input
                placeholder="input placeholder"
                className="w-full custom-input"
              />
            </Form.Item>

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
          </Form> */}
        </div>
      </div>
    </div>
  );
}

export default Properties;
