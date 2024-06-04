import Image from 'next/image';
import { RxCrossCircled } from 'react-icons/rx';
import { TbMoodEmptyFilled } from 'react-icons/tb';
import { useAppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const CartWrapper = () => {
  const router = useRouter();

  const { setCartItems, setCartCount, cartItems } = useAppContext();

  const [subTotalPrice, setSubTotalPrice] = useState(0);

  useEffect(() => {
    cartItems && calculateTotalPrice(cartItems);
  }, [JSON.stringify(cartItems)]);

  const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const { product, count } = item;
      const price = product.specialPrice
        ? product.specialPrice
        : product.basePrice;
      totalPrice += price * count;
    });

    setSubTotalPrice(totalPrice);
  };

  const handleCartCount = (prodId, newCount) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.product._id === prodId
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].count = newCount;
      localStorage.setItem('cart', JSON.stringify(cart));
      const getTotalCount = cart?.reduce(
        (total, item) => total + item.count,
        0
      );

      setCartCount(getTotalCount);
      setCartItems(cart);
    }
  };

  const removeItem = (prodId) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      const updatedCartItems = cartItems.filter(
        (item) => item.product._id !== prodId
      );
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));

      const getTotalCount = updatedCartItems?.reduce(
        (total, item) => total + item.count,
        0
      );

      setCartCount(getTotalCount);
      setCartItems(updatedCartItems);
    }
  };

  const handleBackButton = () => {
    router.back();
  };

  return (
    <div className="w-[90%] mx-auto block md:flex ">
      <div className="bg-white rounded border border-gray-200 w-full mr-4 mb-2 max-h-[440px] overflow-y-auto">
        <div className="p-3 flex">
          <IoIosArrowBack
            className="self-center mr-2 text-[24px] pointer"
            onClick={() => {
              handleBackButton();
            }}
          />
          <div className="self-center">Shopping Cart</div>
        </div>
        <div className="py-2 px-3 w-full bg-[#F5F5F7] text-gray-500 hidden md:flex justify-between text-[12px] mb-2 font-medium">
          <div className="w-[320px]">Products</div>
          <div>Prices</div>
          <div>Quantity</div>
          <div>Sub-total</div>
        </div>

        {cartItems.length ? (
          <>
            {cartItems.map((item) => {
              return (
                <div id={item?.product?._id}>
                  <div className="md:border-b border-gray-200 py-7 px-3 flex justify-between">
                    <div className="w-[360px] flex justify-between">
                      <div className="flex ">
                        <RxCrossCircled
                          className="text-gray-500 self-center pointer"
                          onClick={() => {
                            removeItem(item?.product?._id);
                          }}
                        />
                      </div>
                      <div className="flex self-center px-3">
                        <Image
                          src={item?.product?.images[0]}
                          alt={'myBuy.lk'}
                          width={100}
                          height={100}
                          className="self-center object-contain h-[40px] w-[60px]"
                          unoptimized
                        />
                        <div className="text-[12px] mr-2 w-[120px] md:w-[320px] font-medium truncate line-clamp-1 text-ellipsis self-center ml-2">
                          {item?.product?.productName}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block text-[12px] self-center font-medium">
                      {item?.product?.specialPrice ? (
                        <span className="mr-1 text-gray-400 line-through">
                          {item?.product?.basePrice}
                        </span>
                      ) : (
                        <div />
                      )}
                      <span>
                        {item?.product?.specialPrice
                          ? item?.product?.specialPrice
                          : item?.product?.basePrice}
                      </span>
                    </div>
                    <div className="rounded-[6px] border border-gray-800 justify-between flex mr-2 text-center">
                      <div
                        className="w-10 md:w-12 flex-none self-center pointer text-left pl-4 font-bold"
                        onClick={() => {
                          item.count > 1 &&
                            handleCartCount(item?.product?._id, item.count - 1);
                        }}
                      >
                        -
                      </div>
                      <div className="self-center font-bold px-1">
                        {item.count < 10 && 0}
                        {item.count}
                      </div>
                      <div
                        className="w-10 md:w-12 text-[] flex-none self-center pointer text-right pr-4 font-bold"
                        onClick={() => {
                          handleCartCount(item?.product?._id, item.count + 1);
                        }}
                      >
                        +
                      </div>
                    </div>
                    <div className="text-[12px] self-center font-medium hidden md:block ">
                      {item?.product?.specialPrice
                        ? item?.product?.specialPrice * item.count
                        : item?.product?.basePrice * item.count}
                    </div>
                  </div>
                  <div className="px-4 border-b border-gray-200">
                    <div className="flex justify-between text-[12px] mb-2">
                      <div className="text-gray-500">Price</div>
                      <div className="font-medium flex">
                        <span>Rs. </span>
                        {item?.product?.specialPrice ? (
                          <span className="mr-1 text-gray-400 line-through">
                            {item?.product?.basePrice}
                          </span>
                        ) : (
                          <div />
                        )}
                        <span>
                          {item?.product?.specialPrice
                            ? item?.product?.specialPrice
                            : item?.product?.basePrice}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-[12px] mb-2">
                      <div className="text-gray-500">Sub-total</div>
                      <div className="font-medium">
                        Rs{' '}
                        {item?.product?.specialPrice
                          ? item?.product?.specialPrice * item.count
                          : item?.product?.basePrice * item.count}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-center pt-6">
            <TbMoodEmptyFilled className="text-[100px] mx-auto" />
            <h2 className="font-bold text"> You Cart is Empty</h2>
          </div>
        )}
      </div>
      <div className="w-full md:w-[420px]">
        <div className="bg-white rounded border border-gray-200 w-full min-h-[280px] mb-2 p-4">
          <h2 className="font-medium text-[14px] mb-4">Cart Totals</h2>
          <div className="flex justify-between text-[12px] mb-2">
            <div className="text-gray-500">Sub-total</div>
            <div className="font-medium">Rs {subTotalPrice}</div>
          </div>
          <div className="flex justify-between text-[12px] mb-2">
            <div className="text-gray-500">Shipping</div>
            <div className="font-medium">-</div>
          </div>
          <div className="flex justify-between text-[12px] mb-2">
            <div className="text-gray-500">Discount</div>
            <div className="font-medium">-</div>
          </div>
          <div className="flex justify-between text-[12px] mb-2">
            <div className="text-gray-500">Tax</div>
            <div className="font-medium">-</div>
          </div>
          <div className="w-full border-b border-gray-200 my-4" />
          <div className="flex justify-between text-[14px] mb-2">
            <div className="text-gray-800 font-medium">Total</div>
            <div className="font-medium">Rs {subTotalPrice}</div>
          </div>
          <button className="w-full py-2 mt-2 text-[10px] bg-[#1B77E3] text-white text-center rounded-[6px]">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="bg-white rounded border border-gray-200 w-full min-h-[160px]">
          <div className="p-4 font-medium text-[14px]">Coupon Code</div>
          <div className="w-full border-b border-gray-200 mb-2" />
          <div className="p-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-200 focus:outline-none p-2 w-full text-[12px] rounded-[6px]"
              name=""
              id=""
            />
            <button className="w-[50%] py-2 mt-2 text-[10px] bg-white border font-bold border-[#1B77E3] text-[#1B77E3] text-center rounded-[6px]">
              APPLY COUPON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
