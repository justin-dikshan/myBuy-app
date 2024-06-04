import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
import { IoBookmarkOutline } from 'react-icons/io5';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/navigation';

const ProductView = () => {
  const router = useRouter();

  const { product, setCartCount } = useAppContext();

  const [selectedImage, setSelectedImage] = useState('');
  const [discount, setDiscount] = useState(0);
  const [count, setCount] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product?.images[0]);
      calculateDiscountPrice();
    }
  }, [product]);

  const calculateDiscountPrice = () => {
    if (product?.specialPrice) {
      const discountPercentage = Math.floor(
          ((product?.basePrice - product?.specialPrice) / product?.basePrice) *
          100
      );
      setDiscount(discountPercentage);
    }
  };

  const handleVariantChange = (key, value) => {
    console.log(key);
    console.log(value);
  };

  const addToCart = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(
        (item) => item?.product?._id === product?._id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].count += count;
    } else {
      cart.push({ product, count });
    }

    const getTotalCount = cart?.reduce((total, item) => total + item.count, 0);

    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(getTotalCount);
    setCount(1);
  };

  const buyNowClicked = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(
        (item) => item?.product?._id === product?._id
    );


    if (existingProductIndex) {
      cart.push({ product, count });

      const getTotalCount = cart?.reduce(
          (total, item) => total + item.count,
          0
      );

      localStorage.setItem('cart', JSON.stringify(cart));
      setCartCount(getTotalCount);
      setCount(1);
    }
    router.push(`/cart`);
  };

  return (
      <div className="w-[95%] md:w-[80%] mx-auto block md:flex">
        <div className="w-full md:w-[55%] mb-8">
          <div className="bg-white rounded border border-gray-200 w-full h-[360px] flex">
            <Image
                src={selectedImage}
                alt={'product image'}
                width={100}
                height={100}
                unoptimized
                className="self-center object-contain h-[340px] w-full p-8"
            />
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            {product?.images.map((img, i) => {
              return (
                  <div
                      className={`rounded w-[55px] h-[55px] ${
                          img === selectedImage
                              ? 'border-2 border-[#1B77E3]'
                              : 'border border-gray-200'
                      }  mr-1 pointer`}
                      key={i}
                      onClick={() => {
                        setSelectedImage(img);
                      }}
                  >
                    <Image
                        src={img}
                        alt={'product image'}
                        width={100}
                        height={100}
                        unoptimized
                        className="self-center h-[52px] w-full object-contain"
                    />
                  </div>
              );
            })}
          </div>
        </div>
        <div className="ml-0 md:ml-8">
          <div className="flex">
            <StarRatings
                rating={product?.rating.starRate}
                starRatedColor={'#F7941E'}
                isAggregateRating={true}
                numberOfStars={5}
                name="rating"
                starDimension="16px"
                starSpacing="0.5px"
            />
            <div className="text-[12px] font-bold self-center ml-2">
              {product?.rating.starRate} Star Rating
            </div>
            <div className="text-[#77878F] text-[12px] self-center ml-1">
              ({product?.rating.totalReview} Reviews)
            </div>
          </div>
          <div className="max-w-[360px]">{product?.productName}</div>
          <div className="w-[360px] flex justify-between text-[12px]">
            <div>
              ID : <span className="font-bold">{product?.prodId}</span>
            </div>
            <div>
              Availability :{' '}
              <span className="font-bold text-[#2DB224]">
              {product?.isAvailable}
            </span>
            </div>
          </div>
          <div className="w-[360px] flex justify-between text-[12px]">
            <div>
              Brand : <span className="font-bold">{product?.brand}</span>
            </div>
            <div>
              Category : <span className="font-bold">{product?.category}</span>
            </div>
          </div>
          <div className="flex mt-2 mb-4">
            {product?.specialPrice && (
                <div className="font-medium text-[#1B77E3] self-center">
                  Rs. {product?.specialPrice}
                </div>
            )}

            {product?.specialPrice ? (
                <div className="self-center text-[#8B8E99] text-[16px] ml-1 line-through">
                  Rs. {product?.basePrice}
                </div>
            ) : (
                <div className="font-medium text-[#1B77E3] self-center">
                  Rs. {product?.basePrice}
                </div>
            )}

            {product?.specialPrice && (
                <div className="py-[3px] px-2 font-bold text-[12px] ml-2 bg-[#FA8232]">
                  {discount}% OFF
                </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-200">
            {product?.variants &&
            Object.keys(product.variants).map((variantKey, index) => (
                <div key={index}>
                  <label
                      htmlFor=""
                      className="text-[12px] mb-[2px] text-[#8B8E99]"
                  >
                    {variantKey.charAt(0).toUpperCase() + variantKey.slice(1)}
                  </label>
                  <select
                      name={variantKey}
                      className="w-full py-2 px-1 border border-gray-200 rounded text-[12px]"
                      onChange={(e) =>
                          handleVariantChange(variantKey, e.target.value)
                      }
                  >
                    {product.variants[variantKey].map((item, itemIndex) => (
                        <option value={item} key={itemIndex}>
                          {item}
                        </option>
                    ))}
                  </select>
                </div>
            ))}
          </div>

          <div className="flex text-[14px] font-bold mt-4">
            <div className="rounded-[6px] border border-gray-800 justify-between flex w-[40%] mr-2 text-center">
              <div
                  className="w-4 flex-none self-center px-6 pointer"
                  onClick={() => {
                    count > 1 && setCount(count - 1);
                  }}
              >
                -
              </div>
              <div className="self-center">{count}</div>
              <div
                  className="w-4 flex-none self-center px-6 pointer"
                  onClick={() => {
                    setCount(count + 1);
                  }}
              >
                +
              </div>
            </div>
            <button
                className={`rounded-[6px] border border-[#1B77E3] text-[#1B77E3] py-2 px-3 w-[60%] ${
                    isClicked ? 'bg-[#1B77E3] text-white shadow-md' : ''
                }`}
                onClick={() => {
                  addToCart();
                }}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex text-[14px] font-bold mt-4 mb-4">
            <button
                className="rounded-[6px] bg-[#1B77E3] text-white py-2 px-3 w-[86%] mr-2"
                onClick={() => {
                  buyNowClicked();
                }}
            >
              Buy Now
            </button>
            <button className="rounded-[6px] border border-gray-800 text-center text-black py-2 px-3 w-[11%]">
              <IoBookmarkOutline />
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductView;
