'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductSidebar from '../components/allProduct/ProductSidebar';
import ProductsWrapper from '../components/allProduct/ProductsWrapper';
import { useAppContext } from '../context/AppContext';
import { useSearchParams } from 'next/navigation';

const AllProducts = () => {
  const { getProducts, sortAs, sortBy } = useAppContext();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchedKey, setSearchedKey] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const searchKey = searchParams.get('search');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    loadDatas();
  }, [
    currentPage,
    selectedCategory,
    selectedPriceRange,
    selectedBrands,
    selectedTags,
    searchedKey,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    selectedPriceRange,
    selectedBrands,
    selectedTags,
    searchedKey,
  ]);

  useEffect(() => {
    category && setSelectedCategory(category);
    brand && setSelectedBrands([brand]);
    searchKey && setSearchedKey(searchKey);

    window.history.replaceState(null, '', '/all-products');
  }, [category, brand, searchKey]);

  useEffect(() => {
    loadDatas();
  }, [sortAs, sortBy]);

  const loadDatas = async () => {
    getProducts(
        currentPage,
        selectedCategory,
        selectedPriceRange,
        selectedBrands,
        selectedTags,
        searchedKey
    );
  };

  return (
      <>
        <Navbar
            from={'allProduct'}
            setIsFilterOpen={setIsFilterOpen}
            isFilterOpen={isFilterOpen}
            setSearchedKey={setSearchedKey}
        />
        <div className="w-full bg-[#F5F5F7] pt-28">
          <div className="flex justify-between w-[90%] mx-auto">
            <div className="hidden md:flex">
              <ProductSidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
              />
            </div>
            <ProductsWrapper
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                searchedKey={searchedKey}
            />
          </div>
        </div>

        {isFilterOpen && (
            <div className="block md:hidden fixed top-20 right-0 left-0 bg-white h-[100vh] overflow-y-scroll px-4 pt-8">
              <ProductSidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
              />
            </div>
        )}

        <Footer />
      </>
  );
};

export default AllProducts;
