import React from "react";
import Image from "next/image";

const TODAYS_DEALS = [
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    basePrice: 320000,
    specialPrice: 280000,
    images: [
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
    ],
  },
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    basePrice: 320000,
    specialPrice: 280000,
    images: [
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
    ],
  },
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    basePrice: 320000,
    specialPrice: 280000,
    images: [
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
    ],
  },
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    basePrice: 320000,
    specialPrice: 280000,
    images: [
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
      "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
      "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
    ],
  },
];

const SingleDeal = ({ item }) => {
  return (
      <div className="bg-white h-[250px] w-[250px] rounded mr-4 mb-8 p-4 px-8 pointer">
        <Image
            src={item.images[0]}
            alt={"item"}
            width={100}
            height={100}
            className="h-[100px] object-cover mx-auto"
        />
        <p className="truncate line-clamp-2 text-wrap text-ellipsis text-[#454D4A] text-[10px]">
          {item.dealName}
        </p>
        <div className="flex justify-center mt-2">
          <p className="text-[#F86535] text-[14px] font-bold mr-2">
            Rs. {item.specialPrice}
          </p>
          <p className="text-[12px] self-center line-through">
            Rs. {item.basePrice}
          </p>
        </div>
        {item.images[1] && (
            <div className="flex justify-between mt-2">
              <div className="h-[48px] w-[48px] bg-[#E8E8E8] rounded shadow-md shadow-gray-600">
                <Image
                    src={item.images[1]}
                    alt={"item"}
                    width={100}
                    height={100}
                    className="h-[42px] object-cover mx-auto"
                />
              </div>
              <div className="h-[48px] w-[48px] bg-[#E8E8E8] rounded shadow-md shadow-gray-600">
                <Image
                    src={item.images[2]}
                    alt={"item"}
                    width={100}
                    height={100}
                    className="h-[42px] object-cover mx-auto"
                />
              </div>
              <div className="h-[48px] w-[48px] bg-[#E8E8E8] rounded shadow-md shadow-gray-600">
                <Image
                    src={item.images[3]}
                    alt={"item"}
                    width={100}
                    height={100}
                    className="h-[42px] object-cover mx-auto"
                />
              </div>
            </div>
        )}
      </div>
  );
};

const TodaysDeal = () => {
  return (
      <div className="bg-[#F7941E] w-[95%] mx-auto mb-12 rounded-[18px] pt-4 pb-8 px-8">
        <h2 className="text-center text-white text-[32px] font-bold">
          Today&apos;s Deal
        </h2>
        <div className="mt-4 flex flex-wrap justify-center">
          {TODAYS_DEALS.map((item, i) => {
            return <SingleDeal item={item} key={i} />;
          })}
        </div>
      </div>
  );
};

export default TodaysDeal;
