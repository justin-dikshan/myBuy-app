'use client';

import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Banner from './components/home/Banner';
import ItemSwipper from './components/home/ItemSwipper';
import Promation from './components/home/Promation';
import NewestCollection from './components/home/NewestCollection';
import TodaysDeal from './components/home/TodaysDeal';
import SelectedBrand from './components/home/SelectedBrand';
import BestDeals from './components/home/BestDeals';
import ShopByBrand from './components/home/ShopByBrand';

const Home = () => {
  return (
    <>
      <Navbar from={'home'} />
      <div className="bg-[#F3FAF4] pb-4">
        <Banner />
        <ItemSwipper />
      </div>
      <Promation />
      <NewestCollection />
      <TodaysDeal />
      <SelectedBrand />
      <BestDeals />
      {/*<ShopByBrand />*/}
      <Footer />
    </>
  );
};

export default Home;
