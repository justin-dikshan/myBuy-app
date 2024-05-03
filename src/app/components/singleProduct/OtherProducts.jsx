import React from "react";
import Image from "next/image";

const RELATED_PRODUCT = [
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
];

const PRODUCT_ACCESSORIES = [
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
];

const APPLE_PRODUCTS = [
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
];

const FEATURED_PRODUCTS = [
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
  {
    imgURL:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    name: "Logi Web cam - Wireless Bluetooth",
    price: 12000,
  },
];

const OtherProducts = () => {
  return (
    <div className="block md:flex w-[90%] mx-auto pb-16">
      <div className="w-full md:w-[280px] mr-4">
        <h2 className="font-bold mb-4">RELATED PRODUCT</h2>

        {RELATED_PRODUCT.map((item) => {
          return (
            <div className="flex bg-white border border-gray-200 rounded mb-4 px- py-3">
              <Image
                src={item.imgURL}
                alt={"product image"}
                width={100}
                height={100}
                unoptimized
                className="self-center w-[60px] h-[60px] object-contain"
              />
              <div className="ml-4 text-[12px] self-center font-medium">
                <div className="pr-4 truncate line-clamp-2 text-wrap text-ellipsis">
                  {item.name}{" "}
                </div>
                <div className="text-[#2DA5F3] mt-2">Rs. {item.price} </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-[280px] mr-4">
        <h2 className="font-bold mb-4">PRODUCT ACCESSORIES</h2>

        {RELATED_PRODUCT.map((item) => {
          return (
            <div className="flex bg-white border border-gray-200 rounded mb-4 px- py-3">
              <Image
                src={item.imgURL}
                alt={"product image"}
                width={100}
                height={100}
                unoptimized
                className="self-center w-[60px] h-[60px] object-contain"
              />
              <div className="ml-4 text-[12px] self-center font-medium">
                <div className="pr-4 truncate line-clamp-2 text-wrap text-ellipsis">
                  {item.name}{" "}
                </div>
                <div className="text-[#2DA5F3] mt-2">Rs. {item.price} </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-[280px] mr-4">
        <h2 className="font-bold mb-4">APPLE PRODUCTS</h2>

        {RELATED_PRODUCT.map((item) => {
          return (
            <div className="flex bg-white border border-gray-200 rounded mb-4 px- py-3">
              <Image
                src={item.imgURL}
                alt={"product image"}
                width={100}
                height={100}
                unoptimized
                className="self-center w-[60px] h-[60px] object-contain"
              />
              <div className="ml-4 text-[12px] self-center font-medium">
                <div className="pr-4 truncate line-clamp-2 text-wrap text-ellipsis">
                  {item.name}{" "}
                </div>
                <div className="text-[#2DA5F3] mt-2">Rs. {item.price} </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-[280px] mr-4">
        <h2 className="font-bold mb-4">FEATURED PRODUCTS</h2>

        {RELATED_PRODUCT.map((item) => {
          return (
            <div className="flex bg-white border border-gray-200 rounded mb-4 px- py-3">
              <Image
                src={item.imgURL}
                alt={"product image"}
                width={100}
                height={100}
                unoptimized
                className="self-center w-[60px] h-[60px] object-contain"
              />
              <div className="ml-4 text-[12px] self-center font-medium">
                <div className="pr-4 truncate line-clamp-2 text-wrap text-ellipsis">
                  {item.name}{" "}
                </div>
                <div className="text-[#2DA5F3] mt-2">Rs. {item.price} </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProducts;
