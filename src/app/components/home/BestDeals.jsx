import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

const TODAYS_DEALS = [
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    imageURL: "https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg",
    rate: 4.5,
    basePrice: 320000,
    specialPrice: 280000,
  },
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    imageURL: "https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg",
    rate: 3.5,
    basePrice: 320000,
    specialPrice: 280000,
  },
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    imageURL: "https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg",
    rate: 5,
    basePrice: 320000,
    specialPrice: 280000,
  },
  {
    dealName: `Sony Alpha ILCE 6600M 24.2 MP Mirrorless
    Digital SLR Camera with 18-135 mm Zoom Lens`,
    imageURL: "https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg",
    rate: 2.3,
    basePrice: 320000,
    specialPrice: 280000,
  },
];

const BestDeals = () => {
  return (
    <div className="w-[96%] md:w-[80%] mx-auto mb-8">
      <h2 className="text-black text-[32px] font-bold mb-4">Gadgets Best Deals</h2>
      <div className="flex flex-wrap justify-center md:justify-between">
        {TODAYS_DEALS.map((deal, i) => {
          return (
            <div key={i} className="w-[180px] mr-4 mb-8 pointer">
              <Image
                src={deal.imageURL}
                alt={"item"}
                width={100}
                height={100}
                className="h-[100px] object-cover mx-auto mb-2"
              />
              <p className="font-medium mt-2 truncate line-clamp-2 text-wrap text-ellipsis text-[#454D4A] text-[10px]">
                {deal.dealName}
              </p>
              <StarRatings
                rating={deal.rate}
                starRatedColor={"#F7941E"}
                isAggregateRating={true}
                numberOfStars={5}
                name="rating"
                starDimension="12px"
                starSpacing="1px"
              />
              <div className="flex">
                <div className="text-[12px] text-[#F7941E] font-medium mr-1">
                  Rs. {deal.specialPrice}
                </div>
                <div className="text-[8px] text-[#BDBDBD] self-center line-through">
                  Rs. {deal.basePrice}
                </div>
              </div>
              <button className="bg-[#F7941E] text-[10px] text-white py-[6px] px-4 mt-1">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestDeals;
