'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
const BASE_URL = 'http://localhost:8080/api/v1';

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

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
    tags
  ) => {
    try {
      const page = currentPage || 1;

      const prams = [];

      category && prams.push(`category=${category}`);
      priceRange &&
        prams.push(
          `startPrice=${priceRange.startRange}&endPrice=${priceRange.endRange}`
        );
      brands && brands.length > 0 && prams.push(`brands=${brands.toString()}`);
      tags && prams.push(`tags=${tags.toString()}`);

      const stringParams = prams.join('&');

      const res = await fetch(
        `${BASE_URL}/products?page=${page}${stringParams && '&'}${stringParams}`
      );
      setProducts(await res.json());
    } catch (error) {
      console.log(error);
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
        categories,
        brands,
        products,
        product,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
