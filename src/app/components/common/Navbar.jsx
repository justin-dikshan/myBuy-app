import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCart3 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowDown } from 'react-icons/io';
import Modal from 'react-modal';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/navigation';

const FEATURED_PHONE = [
  {
    imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6kTaeaQ9Z2fuf98kDU0_FBM_Wv-eHN33TYhTM4m94A&s',
    name: 'Google Pixel 6 Pro - 5G Android Phone - Unlocked',
    price: 120000,
  },
  {
    imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6kTaeaQ9Z2fuf98kDU0_FBM_Wv-eHN33TYhTM4m94A&s',
    name: 'Google Pixel 6 Pro - 5G Android Phone - Unlocked',
    price: 120000,
  },
  {
    imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6kTaeaQ9Z2fuf98kDU0_FBM_Wv-eHN33TYhTM4m94A&s',
    name: 'Google Pixel 6 Pro - 5G Android Phone - Unlocked',
    price: 120000,
  },
];

const Navbar = ({ from, setIsFilterOpen, isFilterOpen, setSearchedKey }) => {
  const [categoryNav, setCategoryNav] = useState(false);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [relatedBrands, setRelatedBrands] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const {
    categories,
    brands,
    getCategories,
    getBrands,
    cartCount,
    setCartCount,
    isProductsLoading,
  } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    loadDatas();
  }, []);

  useEffect(() => {
    categories[0] && filterRelatedBrands(categories[0]);
  }, [categories]);

  useEffect(() => {
    selectedBrand && categorySelected();
  }, [selectedBrand]);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage?.getItem('cart')) || [];

    const getTotalCount = cartItem.reduce(
        (total, item) => total + item.count,
        0
    );

    setCartCount(getTotalCount);
  }, []);

  const loadDatas = async () => {
    getCategories();
    getBrands();
  };

  const filterRelatedBrands = (item) => {
    setSelectedCategory(item._id);
    setRelatedBrands(
        brands.filter((brand) => item.relatedBrands.includes(brand._id))
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleClick = () => {
    if (from === 'allProduct') {
      setIsFilterOpen(!isFilterOpen);
    } else {
      setCategoryNav(!categoryNav);
      setIsModalOpen(false);
    }
  };

  const categorySelected = () => {
    const params = [];

    selectedCategory && params.push(`category=` + selectedCategory);
    selectedBrand && params.push(`brand=` + selectedBrand);

    const paramString = params.length ? params.join('&') : '';

    router.push(`/all-products?${paramString}`);
  };

  const handleSearch = () => {
    if (from === 'allProduct') {
      searchValue ? setSearchedKey(searchValue) : setSearchedKey(null);
    } else {
      searchValue && router.push(`/all-products?search=${searchValue}`);
    }
  };

  return (
      <>
        <div className="flex justify-between px-4 md:px-16 bg-[#002967] fixed h-20 w-full shadow shadow-gray-600 z-20">
          <div className="flex">
            <div
                className="self-center pr-2 border-r border-r-[#F7941E] pointer"
                onClick={() => {
                  toggleClick();
                }}
            >
              <GiHamburgerMenu className="text-[#F7941E] text-[32px]" />
            </div>
            <Image
                src={'/logo1.png'}
                alt={'myBuy.lk'}
                width={64}
                height={28}
                className="self-center"
            />
          </div>
          <div className="w-[60%] hidden md:flex">
            <input
                type="text"
                placeholder="Search for anything"
                name=""
                id=""
                className="px-4 py-3 text-[12px] self-center w-full rounded-[16px] focus:outline-none"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
            />
            <button
                className="px-4 py-3 text-[12px] self-center font-bold text-[#002967]  border border-[#F7941E]  rounded-[16px] bg-[#F7941E] w-[120px] ml-[-28px]"
                onClick={() => {
                  handleSearch();
                }}
                disabled={isProductsLoading}
            >
              {isProductsLoading ? '...' : 'Search'}
            </button>
          </div>
          <div className="flex text-white self-center text-[22px] md:text-[18px]">
            <div
                className="relative pointer"
                onClick={() => {
                  router.push(`/cart`);
                }}
            >
              <BsCart3 className="mr-4" />
              {cartCount > 0 && (
                  <div className="bg-[#F7941E] text-[#002967] w-[15px] h-[15px] text-[11px] text-center pb-[1px] font-bold rounded-full absolute right-[10px] top-[-5px]">
                    {cartCount}
                  </div>
              )}
            </div>
            <FaRegHeart className="mr-4" />
            <CgProfile className="mr-4" />
          </div>
        </div>
        {categoryNav && (
            <div className="mt-20 bg-white px-4 md:px-16 flex justify-between fixed h-16 w-full shadow shadow-gray-200 z-20">
              <button
                  className="px-4 py-2 bg-[#F7941E] text-white text-[12px] self-center flex"
                  onClick={() => {
                    setIsModalOpen(!modalIsOpen);
                  }}
              >
                All Category <IoIosArrowDown className="self-center ml-2" />
              </button>
              <div className="w-[60%] flex md:hidden">
                <input
                    type="text"
                    placeholder="Search for anything"
                    name=""
                    id=""
                    className="px-3 py-2 text-[12px] self-center border border-[#F7941E] w-full rounded-[16px]"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                />
                <button
                    className="px-3 py-2 text-[12px] self-center border border-[#F7941E] font-bold text-[#002967] rounded-[16px] bg-[#F7941E] w-[120px] ml-[-38px]"
                    onClick={() => {
                      handleSearch();
                    }}
                    disabled={isProductsLoading}
                >
                  {isProductsLoading ? '...' : 'Search'}
                </button>
              </div>
            </div>
        )}
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className={'mt-40'}
        >
          <div className="mt-[-14px] block md:flex">
            <div className="w-[90%] md:w-[200px] bg-[#002967] min-h-[120px] ml-[5%] md:ml-16 rounded py-4 font-medium">
              {categories?.map((item) => {
                return (
                    <div
                        key={item._id}
                        className="px-3 py-1 w-full text-white text-[12px] pointer hover:bg-[#F7941E] hover:text-[#002967]"
                        onMouseEnter={() => {
                          filterRelatedBrands(item);
                        }}
                        onClick={() => {
                          filterRelatedBrands(item);
                          categorySelected();
                        }}
                    >
                      {item.name}
                    </div>
                );
              })}
            </div>
            <div className="w-[90%] md:w-[50%] mx-auto md:mx-0 bg-white border border-[#F7941E] rounded p-4 hidden md:flex">
              <div className="w-[160px] font-medium">
                {relatedBrands.map((item, i) => {
                  return (
                      <div
                          key={item._id}
                          className="px-3 py-1 w-full text-black text-[12px] pointer hover:bg-[#F7941E] hover:text-[#002967]"
                          onClick={() => {
                            setSelectedBrand(item._id);
                          }}
                      >
                        {item.name}
                      </div>
                  );
                })}
              </div>
              <div className="px-2">
                <h2 className="text-[14px] font-medium mb-2">FEATURED PHONES</h2>
                {FEATURED_PHONE.map((item, i) => {
                  return (
                      <div
                          className="flex bg-white border border-gray-200 rounded mb-4 px- py-3"
                          key={i}
                      >
                        <Image
                            src={item.imgURL}
                            alt={'product image'}
                            width={100}
                            height={100}
                            unoptimized
                            className="self-center w-[60px] h-[60px] object-contain"
                        />
                        <div className="ml-4 text-[12px] self-center font-medium">
                          <div className="pr-4 truncate line-clamp-2 text-wrap text-ellipsis">
                            {item.name}{' '}
                          </div>
                          <div className="text-[#F7941E] mt-2">
                            Rs. {item.price}{' '}
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Modal>
      </>
  );
};

export default Navbar;
