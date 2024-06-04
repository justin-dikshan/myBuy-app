'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
const BASE_URL = process.env.BASE_URL;

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [cartItems, setCartItems] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [sortAs, setSortAs] = useState('asc');
  const [sortBy, setSortBy] = useState('mostPopular');

  const getCategories = async () => {
    try {
      const res = await fetch(`${BASE_URL}/categories`);
      setCategories(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  const getBrands = async () => {
    try {
      const res = await fetch(`${BASE_URL}/brands`);
      setBrands(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async (
      currentPage,
      category,
      priceRange,
      brands,
      tags,
      searchKey
  ) => {
    try {
      const page = currentPage || 1;

      const params = [];

      setIsProductsLoading(true);

      category && params.push(`category=${category}`);
      priceRange &&
      params.push(
          `startPrice=${priceRange.startRange}&endPrice=${priceRange.endRange}`
      );
      brands && brands.length > 0 && params.push(`brands=${brands.toString()}`);
      tags && params.push(`tags=${tags.toString()}`);
      searchKey && params.push(`searchKey=${searchKey}`);

      const stringParams = params.join('&');

      const sortParams = `&sortBy=${sortBy}&sortAs=${sortAs}`

      const res = await fetch(
          `${BASE_URL}/products?page=${page}${stringParams && '&'}${stringParams}${sortParams}`
      );
      setProducts(await res.json());
      setIsProductsLoading(false);
    } catch (error) {
      console.log(error);
      setIsProductsLoading(false);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/product/${id}`);
      setProduct(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <AppContext.Provider
          value={{
            getCategories,
            getBrands,
            getProducts,
            getProduct,
            setCartCount,
            setCartItems,
            setSortAs,
            setSortBy,
            categories,
            brands,
            products,
            product,
            isProductsLoading,
            cartCount,
            cartItems,
            sortAs,
            sortBy,
          }}
      >
        {children}
      </AppContext.Provider>
  );
};
