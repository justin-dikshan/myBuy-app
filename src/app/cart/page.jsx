'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import CartWrapper from '../components/cart/CartWrapper';
import { useAppContext } from '../context/AppContext';

const CartPage = () => {
  const { setCartItems } = useAppContext();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart)
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#F5F5F7] pt-28 h-[100vh]">
        <CartWrapper />
      </div>
    </>
  );
};

export default CartPage;
