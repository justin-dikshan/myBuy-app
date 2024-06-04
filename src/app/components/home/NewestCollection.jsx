import React from "react";
import Image from "next/image";

const NEW_COLLECTIONS = [
  {
    colName: "iPhones",
    imageURL:
        "https://appleasia.lk/wp-content/uploads/2023/03/iphone-13-Blue-Price-in-Srilanka-Apple-Asia-1.jpg",
  },
  {
    colName: "Android Phone",
    imageURL:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  },
  {
    colName: "Play Stations",
    imageURL:
        "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
  },
  {
    colName: "Headphones",
    imageURL:
        "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
  },
  {
    colName: "Smart Watches",
    imageURL:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
  },
];

const NewestCollection = () => {
  return (
      <div className="pt-2 pb-8">
        <h2 className="text-[#002967] text-[32px] font-bold text-center my-8">
          Newest Collection Available
        </h2>
        <div className="flex flex-wrap justify-center px-[8%]">
          {NEW_COLLECTIONS.map((item, id) => {
            return (
                <div key={id} className="text-center flex-none mb-8 pointer">
                  <Image
                      src={item?.imageURL}
                      alt={"itemImg"}
                      width={100}
                      height={100}
                      className="h-[60px] object-cover mx-4"
                  />
                  <p className="font-bold text-[12px] mt-4">{item.colName}</p>
                </div>
            );
          })}
        </div>
      </div>
  );
};

export default NewestCollection;
