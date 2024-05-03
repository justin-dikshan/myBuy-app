import React, { useEffect, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import Image from 'next/image';
import { BsCart3 } from 'react-icons/bs';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useAppContext } from '../../context/AppContext';

const PRICE_CATEGORIES = [
  { label: 'All Prices', value: { minValue: 0, maxValue: null } },
  { label: 'Under Rs. 10000', value: { minValue: 100, maxValue: 10000 } },
  {
    label: 'Rs. 10000 to Rs. 50000',
    value: { minValue: 10000, maxValue: 50000 },
  },
  {
    label: 'Rs. 50000 to Rs. 100000',
    value: { minValue: 50000, maxValue: 100000 },
  },
  {
    label: 'Rs. 100000 to Rs. 200000',
    value: { minValue: 100000, maxValue: 200000 },
  },
  {
    label: 'Rs. 200000 to Rs. 300000',
    value: { minValue: 200000, maxValue: 300000 },
  },
  {
    label: 'Rs. 300000 to Rs. 500000',
    value: { minValue: 300000, maxValue: 500000 },
  },
];

const POPULOR_TAG = [
  'Game',
  'Iphone',
  'TV',
  'Asus',
  'Power Bank',
  'Smart TV',
  'Speaker',
  'Tablet',
  'Microwave',
  'Samsung',
];

const PROMATION = {
  imageURL:
    'https://s3-alpha-sig.figma.com/img/49aa/cdc0/8c7492cde9bab553d53c76ee04dce990?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAPZa~k2W2B57AbRIcq53LzZfimnaUinT4u1vYQGY9kRD72b9b1TvGwi6U-rRxZNccf5IOsT-bBO19ryJsrUtN8bM~e18FsTqNVSfBm-svzwq9wfAP7Qp0Mf4dSXS49czWu-bcTOc0pNJAEJqneqTAd08mkCtTy2y-4QhO~XGcfsLCoEZBjl8Jmrd8B0OuCFif3ZJw40hX1tD3CNf3pcaW7HeDh4OjSrBL1gUxJWqJbm6V6KqyyDfnKU7YlPQuLjipUerImhTpA2qiTJrliUWaPAva2NpgJvxtXRJQXIUN5fnvIt5Ypc~FVQYfN4GMsfVUJLaBjtiBK88dWBXhrMSA__',
  productName: 'Heavy on Features Light on Price.',
  price: 188000,
};

const ProductSidebar = ({
  selectedCategory,
  setSelectedCategory,
  setSelectedPriceRange,
  selectedBrands,
  setSelectedBrands,
  selectedTags,
  setSelectedTags,
}) => {
  const { categories, brands } = useAppContext();

  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      maxValue
        ? setSelectedPriceRange({ startRange: minValue, endRange: maxValue })
        : setSelectedPriceRange(null);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [minValue, maxValue]);

  const handleInput = (e) => {
    if (e.maxValue > 100) {
      setMinValue(e.minValue);
      setMaxValue(e.maxValue);
    }
  };

  return (
    <div className="w-[100%] md:w-60 pb-12">
      <div className="border-b-2 border-[#E4E7E9]">
        <h4 className="text-[16px] font-medium mb-4">CATEGORY</h4>
        <div className="flex mb-2">
          <input
            type="radio"
            id="html"
            name={'catgory'}
            value={''}
            className="mr-2"
            onChange={() => {
              setSelectedCategory(null);
            }}
          />
          <label htmlFor="html">All</label>
        </div>
        {categories.map((cat, i) => {
          return (
            <div key={i} className="flex mb-2">
              <input
                type="radio"
                id="html"
                name={'catgory'}
                value={cat?._id}
                checked={cat?._id === selectedCategory}
                className="mr-2"
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
              />
              <label htmlFor="html" className="text-[14px]">
                {cat?.name}
              </label>
            </div>
          );
        })}

        <br></br>
      </div>
      <div className="border-b-2 border-[#E4E7E9] mt-6 pb-8">
        <h4 className="text-[16px] font-medium mb-4">PRICE RANGE</h4>
        <MultiRangeSlider
          min={0}
          max={500000}
          minValue={minValue}
          maxValue={maxValue}
          step={1}
          ruler={false}
          label={false}
          onInput={(e) => {
            handleInput(e);
          }}
        />

        <div className="flex justify-between mt-4 mb-4 text-[12px]">
          <input
            type="number"
            placeholder="Min Price"
            className="w-28 py-2 px-2 mr-2 rounded border border-gray-200"
            value={minValue ? minValue : ''}
            readOnly
          />
          <input
            type="number"
            placeholder="Max Price"
            className="w-28 py-2 px-2 rounded border border-gray-200"
            value={maxValue ? maxValue : ''}
            readOnly
          />
        </div>

        {PRICE_CATEGORIES.map((cat, i) => {
          return (
            <div key={i} className="flex mb-2">
              <input
                type="radio"
                id="html"
                name={'price'}
                className="mr-2"
                checked={
                  cat?.value?.minValue === minValue &&
                  cat?.value?.maxValue === maxValue
                }
                onChange={() => {
                  setMinValue(cat.value.minValue);
                  setMaxValue(cat.value.maxValue);
                }}
              />
              <label htmlFor="html" className="text-[14px]">
                {cat.label}
              </label>
            </div>
          );
        })}
      </div>

      <div className="border-b-2 border-[#E4E7E9] mt-6 pb-8">
        <h4 className="text-[16px] font-medium mb-4">BRANDS</h4>

        <div className="flex flex-wrap justify-between w-[100%] md:w-60">
          {brands.map((item, i) => {
            return (
              <div
                key={i}
                className="w-24 mb-1 flex pointer"
                onClick={() => {
                  let checkBrands = [...selectedBrands];

                  if (checkBrands.includes(item?._id)) {
                    checkBrands = checkBrands.filter((id) => id !== item?._id);
                  } else {
                    checkBrands.push(item?._id);
                  }

                  setSelectedBrands(checkBrands);
                }}
              >
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="brands"
                  checked={selectedBrands.includes(item?._id)}
                  className="self-center mr-1 pointer"
                  onChange={() => {}}
                />
                <label
                  htmlFor={item?.name}
                  className="text-[14px] self-center truncate line-clamp-1 text-wrap text-ellipsis pointer"
                >
                  {item?.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-b-2 border-[#E4E7E9] mt-6 pb-8">
        <h4 className="text-[16px] font-medium mb-4">POPULAR TAGS</h4>
        <div className="w-[100%] md:w-60 flex flex-wrap">
          {POPULOR_TAG.map((tag, i) => {
            return (
              <div
                key={i}
                className={` ${
                  tag === selectedTags &&
                  'bg-[#1B77E3] text-white border border-gray-[#1B77E3]'
                } border border-gray-200 py-1 px-2 text-[14px] mr-1 mb-1 pointer rounded`}
                onClick={() => {
                  tag === selectedTags
                    ? setSelectedTags(null)
                    : setSelectedTags(tag);
                }}
              >
                {' '}
                {tag}{' '}
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block w-full bg-white p-4 text-center border-4 border-[#FFE7D6] mt-6 min-h-96">
        <Image
          src={PROMATION.imageURL}
          alt={'item'}
          width={100}
          height={100}
          className="h-[180px] w-[180px] mt-4 object-contain mx-auto"
        />
        <h2 className="w-[90%] mx-auto font-medium text-[18px]">
          {PROMATION.productName}
        </h2>
        <div className="flex justify-center mt-2">
          <div className="text-[#475156] self-center text-[14px]">
            Only For:
          </div>
          <div className="bg-[#F7941E] py-1 px-3 self-center ml-2 rounded text-black font-medium text-[14px]">
            Rs. {PROMATION.price}
          </div>
        </div>
        <button className="h-[42px] my-4 w-full bg-[#1B77E3] text-white flex justify-center">
          <BsCart3 className="mr-2 self-center" />
          <div className="self-center text-[12px] font-bold">ADD TO CART</div>
        </button>
        <button className="h-[42px] my-4 w-full bg-white border-2 border-[#1B77E3] text-[#1B77E3] flex justify-center">
          <div className="self-center  text-[12px] font-bold">VIEW DETAILS</div>
          <IoIosArrowRoundForward className="text-[28px] self-center" />
        </button>
      </div>
    </div>
  );
};

export default ProductSidebar;
