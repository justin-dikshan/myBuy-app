'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ProductView from '../../components/singleProduct/ProductView';
import ProductDetailsToggler from '../../components/singleProduct/ProductDetailsToggler';
import OtherProducts from '../../components/singleProduct/OtherProducts';
import { useAppContext } from '../../context/AppContext';
import { useParams } from 'next/navigation';

const ProductPage = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const { getProduct } = useAppContext();
  const { productId } = useParams();

  useEffect(() => {
    loadDatas();
  }, []);

  const loadDatas = async () => {
    getProduct(productId);
  };

  return (
      <>
        <Navbar />
        <div className="w-full bg-[#F5F5F7] pt-28">
          <div className="w-[90%] mx-auto pb-16">
            <ProductView />
            <ProductDetailsToggler
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
          </div>
          {selectedTab === 1 && <OtherProducts />}
        </div>
        <Footer />
      </>
  );
};

export default ProductPage;
