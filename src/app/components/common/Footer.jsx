import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const TOP_CATEGORIES = [
  {
    value: "Computer & Laptop",
    url: "",
  },
  {
    value: "Smart Phone",
    url: "",
  },
  {
    value: "Head Phone",
    url: "",
  },
  {
    value: "Accessories",
    url: "",
  },
  {
    value: "Camera & Photo",
    url: "",
  },
  {
    value: "TV & Homes",
    url: "",
  },
];

const QUICK_LINKS = [
  {
    value: "Shop Product",
    url: "",
  },
  {
    value: "Shpping Cart",
    url: "",
  },
  {
    value: "Wishlist",
    url: "",
  },
  {
    value: "Compare",
    url: "",
  },
  {
    value: "Track Order",
    url: "",
  },
  {
    value: "Customer Help",
    url: "",
  },
  {
    value: "About us",
    url: "",
  },
];

const Footer = () => {
  return (
      <div className="w-full mx-auto bg-[#002967] text-white">
        <div className="flex flex-wrap justify-between w-[96%] mx-auto  pb-4">
          <div className="mt-20">
            <Image
                src={"/logo1.png"}
                alt={"myBuy.lk"}
                width={100}
                height={100}
                className="self-center"
                unoptimized
            />
            <p className="mt-6 text-[14px]">Customer Supports:</p>
            <p className="text-[18px] font-medium">+94 11 222 3456</p>
            <p className="mt-2">
              451 Kandy Road, Colombo, <br /> Sri Lanka 00001
            </p>
            <p className="mt-4">info@mybuy.lk</p>
          </div>
          <div className="flex mt-20">
            <div className="mr-16">
              <h5 className="text-[16px] mb-4">TOP CATEGORIES</h5>
              {TOP_CATEGORIES.map((cat, i) => {
                return (
                    <p className="text-[14px] mb-2 pointer" key={i}>
                      {cat.value}
                    </p>
                );
              })}
              <p className="text-[14px] mb-2 flex pointer">
                Browse All Product <IoIosArrowRoundForward className="self-center text-[22px] ml-"/>
              </p>
            </div>
            <div>
              <h5 className="text-[16px] mb-4">QUICK LINKS</h5>
              {QUICK_LINKS.map((quick, i) => {
                return (
                    <p className="text-[14px] mb-2 pointer" key={i}>
                      {quick.value}
                    </p>
                );
              })}
            </div>
          </div>
          <div className="mt-20">
            <h5 className="text-[16px]">DOWNLOAD APP</h5>
            <div className="mt-[-18px] ml-[-14px]">
              <Image
                  src={"/appStore.png"}
                  alt={"appStore"}
                  width={100}
                  height={100}
                  className="w-[120px] pointer"
                  unoptimized
              />
              <Image
                  src={"/playStore.png"}
                  alt={"playStore"}
                  width={100}
                  height={100}
                  className="mt-[-58px] ml-[-8px] w-[136px] pointer"
                  unoptimized
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-[#FFFFFF66] text-[28px] font-bold w-[220px]">
              Sign up for our newsletter
            </h2>
            <div className="mt-4">
              <label htmlFor="" className="text-[#8B8E99] text-[14px]">
                Email
              </label>
              <br />
              <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example@email.com"
                  className="border border-[#8B8E99] bg-[#002967] p-2 rounded-[6px] mt-1"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="" className="text-[#8B8E99] text-[14px]">
                Name
              </label>
              <br />
              <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  className="border border-[#8B8E99] bg-[#002967] p-2 rounded-[6px] mt-1"
              />
            </div>
            <button className="rounded-[6px] bg-[#F7941E] text-[#002967] text-[12px] font-bold py-2 px-12 mt-4">
              Sign up
            </button>
          </div>
        </div>
        <div className="h-12 w-full bg-[#191C1F] text-center pt-[12px] text-[12px]">
          Copyright &copy; 2024. All rights reserved
        </div>
      </div>
  );
};

export default Footer;
