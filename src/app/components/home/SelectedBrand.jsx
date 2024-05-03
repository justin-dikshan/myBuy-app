import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SELECTED_BRAND = {
  brandName: 'LG OLED TV',
  image:
    'https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg',
  brandItems: [
    {
      itemName: "LG 38' OLED TV",
      price: 120000,
      imageURL:
        'https://smartappliancesuk.com/cdn/shop/products/1994823_R_Z002A_300x300.webp?v=1663406006',
    },
    {
      itemName: "LG 40' OLED TV",
      price: 140000,
      imageURL: 'https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg',
    },
    {
      itemName: "LG 42' OLED TV",
      price: 150000,
      imageURL:
        'https://cdn11.bigcommerce.com/s-9ivpkmlsfd/images/stencil/1280x1280/products/158/1144/1617735803_IMG_1512637__54766.1646083571.jpg?c=1?imbypass=on',
    },
    {
      itemName: "LG 44' OLED TV",
      price: 180000,
      imageURL:
        'https://smartappliancesuk.com/cdn/shop/products/1994823_R_Z002A_300x300.webp?v=1663406006',
    },
    {
      itemName: "LG 48' OLED TV",
      price: 220000,
      imageURL: 'https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg',
    },
    {
      itemName: "LG 52' OLED TV",
      price: 240000,
      imageURL:
        'https://cdn11.bigcommerce.com/s-9ivpkmlsfd/images/stencil/1280x1280/products/158/1144/1617735803_IMG_1512637__54766.1646083571.jpg?c=1?imbypass=on',
    },
    {
      itemName: "LG 56' OLED TV",
      price: 280000,
      imageURL:
        'https://smartappliancesuk.com/cdn/shop/products/1994823_R_Z002A_300x300.webp?v=1663406006',
    },
    {
      itemName: "LG 60' OLED TV",
      price: 320000,
      imageURL: 'https://i.ebayimg.com/images/g/6FEAAOSwN4Nl1kSp/s-l1600.jpg',
    },
    {
      itemName: "LG 68' OLED TV",
      price: 380000,
      imageURL:
        'https://cdn11.bigcommerce.com/s-9ivpkmlsfd/images/stencil/1280x1280/products/158/1144/1617735803_IMG_1512637__54766.1646083571.jpg?c=1?imbypass=on',
    },
  ],
};

const SingleProduct = ({ item }) => {
  return (
    <div className="w-[280px] h-[240px] flex-none text-center">
      <Image
        src={item?.imageURL}
        alt={'banner'}
        width={100}
        height={100}
        className="h-[160px] w-[200px] object-cover mx-auto"
      />
      <div className="mt-2 text-[14px] font-bold truncate w-[92%] mx-auto">
        {item.itemName}
      </div>
      <div className="text-[#F7941E] text-[12px] font-medium">
        Rs. {item.price}
      </div>
      <button className="bg-[#F7941E] text-[10px] text-white py-[6px] px-4 mt-1">
        Buy Now
      </button>
    </div>
  );
};

const ProductSwipper = () => {
  const [itemToShow, setItemToShow] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);

  const numberToShow =
    SELECTED_BRAND.brandItems.length < 4 ? SELECTED_BRAND.brandItems.length : 4;

  useEffect(() => {
    if (numberToShow + 2 >= firstIndex) {
      const slicedArray = SELECTED_BRAND.brandItems.slice(
        firstIndex,
        firstIndex + numberToShow
      );
      setItemToShow(slicedArray);
    } else {
      setFirstIndex(0);
    }
  }, [SELECTED_BRAND, firstIndex]);

  const backArrowClick = () => {
    if (firstIndex > 0) {
      setFirstIndex(firstIndex - 1);
      return;
    }
  };

  return (
    <div className="relative w-[90%] mx-auto mt-20">
      <div className="bg-white my-8 py-4 flex overflow-hidden pointer">
        {itemToShow.map((item, i) => {
          return <SingleProduct item={item} key={i} />;
        })}
      </div>
      <div className="rounded-full bg-white shadow shadow-gray-800 flex bg-white text-[24px] h-8 w-8 absolute left-[18px] top-[88px] pointer">
        <IoIosArrowBack
          className="self-center mx-auto"
          onClick={() => backArrowClick()}
        />
      </div>
      <div className="rounded-full shadow shadow-gray-800 flex bg-white text-[24px] h-8 w-8 absolute right-[32px] top-[88px] pointer">
        <IoIosArrowForward
          className="self-center mx-auto"
          onClick={() => {
            setFirstIndex(firstIndex + 1);
          }}
        />
      </div>
    </div>
  );
};

const SelectedBrand = () => {
  return (
    <div className="pt-8 pb-4">
      <div className="h-40 md:h-72 w-[90%] rounded-[18px] bg-black mx-auto flex justify-between">
        <div>
          <Image
            src={SELECTED_BRAND?.image}
            alt={'itemImg'}
            width={100}
            height={100}
            className="h-48 md:h-96 w-full object-contain mx-4 mt-[-18] md:mt-[-36px]"
            unoptimized
          />
        </div>

        <h1 className="font-bold text-[32px] md:text-[82px] text-white self-center mx-auto">
          {SELECTED_BRAND.brandName}
        </h1>
      </div>
      <ProductSwipper />
    </div>
  );
};

export default SelectedBrand;
