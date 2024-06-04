import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ITEM_LIST = [
  {
    prodName: "iPhone 13",
    isNew: false,
    imageURL:
        "https://appleasia.lk/wp-content/uploads/2023/03/iphone-13-Blue-Price-in-Srilanka-Apple-Asia-1.jpg",
  },
  {
    prodName: "Samsung Galaxy S22",
    isNew: false,
    imageURL:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  },
  {
    prodName: "Sony PlayStation 5",
    isNew: true,
    imageURL:
        "https://d2bschjhk4kxui.cloudfront.net/assets/images/product/656792352cac11701286453.webp",
  },
  {
    prodName: "Bose QuietComfort 45 Headphones",
    isNew: false,
    imageURL:
        "https://techsource.lk/cdn/shop/products/51JbsHSktkL_1024x1024.jpg?v=1652171286",
  },
  {
    prodName: "Dyson V11 Cordless Vacuum",
    isNew: false,
    imageURL: "https://qvc.scene7.com/is/image/QVC/v/22/v55122.003",
  },
  {
    prodName: "Apple Watch Series 7",
    isNew: false,
    imageURL:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
  },
  {
    prodName: "Canon EOS R5 Mirrorless Camera",
    isNew: true,
    imageURL:
        "https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$",
  },
  {
    prodName: "Nintendo Switch OLED Model",
    isNew: false,
    imageURL:
        "https://lifemobile.lk/wp-content/uploads/2022/10/Nintendo-Switch-%E2%80%93-OLED-Model.jpg",
  },
  {
    prodName: "KitchenAid Stand Mixer",
    isNew: false,
    imageURL:
        "https://hips.hearstapps.com/hmg-prod/images/hearth-and-hand-kitcheaid-stand-mixer-1605647262.jpg",
  },
  {
    prodName: "Fitbit Charge 5",
    isNew: false,
    imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePRq-7_qge62j_qJsnx5RbOgiEH7eLJS7evpp24dvHrV88mM2FtWkOX1EM7Gg68kOlQA&usqp=CAU",
  },
];

const SingleItem = ({ item }) => {
  return (
      <div className="w-[160px] h-[200px] flex-none text-center pointer">
        <Image
            src={item?.imageURL}
            alt={"banner"}
            width={100}
            height={100}
            className="h-[120px] object-cover mx-auto"
        />
        <div className="h-[50px] flex">
          {item.isNew && (
              <div className="self-center py-[2px] px-[8px] text-[14px] mt-4 mx-auto text-center bg-blue-100 text-blue-800 rounded-[12px] font-medium">
                New
              </div>
          )}
        </div>
        <div className="mt-2 text-[12px] font-medium truncate w-[92%] mx-auto">
          {item.prodName}
        </div>
      </div>
  );
};

const ItemSwipper = () => {
  const [itemToShow, setItemToShow] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);

  const numberToShow = ITEM_LIST.length < 7 ? ITEM_LIST.length : 7;

  useEffect(() => {
    if (numberToShow + 2 >= firstIndex) {
      const slicedArray = ITEM_LIST.slice(
          firstIndex,
          firstIndex + numberToShow
      );
      setItemToShow(slicedArray);
    } else {
      setFirstIndex(0);
    }
  }, [ITEM_LIST, firstIndex]);

  const backArrowClick = () => {
    if (firstIndex > 0) {
      setFirstIndex(firstIndex - 1);
      return;
    }
  };

  return (
      <div className="relative w-[90%] mx-auto">
        <div className="bg-white my-8 py-4 flex min-h-[240px] overflow-hidden">
          {itemToShow.map((item, i) => {
            return <SingleItem item={item} key={i} />;
          })}
        </div>
        <div className="rounded-full shadow shadow-gray-800 flex bg-white text-[32px] h-10 w-10 absolute left-[-20px] top-[94px] pointer">
          <IoIosArrowBack
              className="self-center mx-auto pointer"
              onClick={() => backArrowClick()}
          />
        </div>
        <div className="rounded-full shadow shadow-gray-800 flex bg-white text-[32px] h-10 w-10 absolute right-[-20px] top-[94px] pointer">
          <IoIosArrowForward
              className="self-center mx-auto pointer"
              onClick={() => {
                setFirstIndex(firstIndex + 1);
              }}
          />
        </div>
      </div>
  );
};

export default ItemSwipper;
