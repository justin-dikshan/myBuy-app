import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import StarRatings from 'react-star-ratings';
import { useAppContext } from '../../context/AppContext';
import { PiSortAscendingLight, PiSortDescendingLight } from 'react-icons/pi';

const NO_IMAGE =
    'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp-95907_800x675.jpg';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const productClicked = () => {
    router.push(`/product/${product._id}`);
  };

  return (
      <div
          className="w-[170px] md:w-[180px] mr-4 mb-4 pointer p-4 pb-6 bg-white rounded border border-gray-200"
          onClick={() => {
            productClicked();
          }}
      >
        <Image
            src={product.images[0] ? product.images[0] : NO_IMAGE}
            alt={'item'}
            width={100}
            height={100}
            className="h-[140px] object-contain mx-auto mb-2"
        />
        <div className="flex">
          <StarRatings
              rating={product.rating.starRate}
              starRatedColor={'#F7941E'}
              isAggregateRating={true}
              numberOfStars={5}
              name="rating"
              starDimension="12px"
              starSpacing="1px"
          />
          <div className="text-[#77878F] text-[10px] self-center">
            ({product.rating.totalReview})
          </div>
        </div>
        <p className="font-medium truncate text-ellipsis text-[#454D4A] text-[10px]">
          {product.productName}
        </p>
        <div className="flex mt-1">
          {product.specialPrice ? (
              <div className="text-[12px] text-[#8B8E99] self-center line-through mr-1">
                Rs. {product.basePrice}
              </div>
          ) : (
              <div className="text-[12px] text-[#1B77E3] font-medium">
                Rs. {product.basePrice}
              </div>
          )}

          {product.specialPrice && (
              <div className="text-[12px] text-[#1B77E3] font-medium">
                Rs. {product.specialPrice}
              </div>
          )}
        </div>
      </div>
  );
};

const ProductsWrapper = ({ currentPage, setCurrentPage, searchedKey }) => {
  const { products, isProductsLoading, sortAs, sortBy, setSortAs, setSortBy } =
      useAppContext();

  const [pages, setPages] = useState([1]);

  useEffect(() => {
    const pagesArray = Array.from(
        { length: products.totalPages },
        (_, index) => index + 1
    );
    setPages(pagesArray);
  }, [products.totalPages]);

  return (
      <div className="w-full pl-1 md:pl-16">
        <div>
          <div className="flex justify-between">
            <div className="flex text-[12px]">
              {/* <div className="mr-2 text-[#5F6C72]">Active Filters</div>
            <div className="mr-2 bg-[#F7941E] px-1 flex">
              {selectedPriceRange?.startRange
                ? 'Rs. ' +
                  selectedPriceRange?.startRange +
                  ' - Rs. ' +
                  selectedPriceRange?.endRange
                : 'All Prices'}{' '}
              <RxCross2 className="self-center ml-1" />
            </div>
            {selectedBrands && (
              <div className="mr-2 bg-[#F7941E] px-1 flex">
                Brand: {selectedBrands}{' '}
                <RxCross2 className="self-center ml-1" />
              </div>
            )} */}

              {searchedKey && (
                  <div className="mr-2 text-[#5F6C72]">
                    Search Result for :{' '}
                    <span className="font-bold">{searchedKey}</span>
                  </div>
              )}
            </div>
            <div className="flex text-[12px]">
              <div className="font-bold mr-2">{products.totalProducts}</div>
              <div className="mr-2 text-[#5F6C72]">Results Found</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex mt-4 text-[12px]">
              <div className="mr-2 text-[#5F6C72] self-center">Sort By:</div>
              <select
                  name="sort"
                  id="cars"
                  className="p-2 self-center border-2 border-[#1B77E3]"
                  onChange={(e) => {
                    setSortBy(e.target.value);
                  }}
                  value={sortBy}
              >
                <option value="mostPopular">Most Popular</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
              <div
                  className="text-[32px] self-center ml-2 pointer"
                  onClick={() => {
                    sortAs === 'asc' ? setSortAs('dsc') : setSortAs('asc');
                  }}
              >
                {sortAs === 'asc' ? (
                    <PiSortAscendingLight />
                ) : (
                    <PiSortDescendingLight />
                )}
              </div>
            </div>
          </div>
        </div>

        {isProductsLoading ? (
            <div className="font-bold text-[24px] text-center mt-36">
              Loading....
            </div>
        ) : (
            <>
              {' '}
              {products?.data?.length ? (
                  <>
                    <div className="mt-8 flex flex-wrap justify-center">
                      {products?.data?.map((product, i) => {
                        return <ProductCard key={i} product={product} />;
                      })}
                    </div>
                    <div className="flex justify-between md:justify-center my-8">
                      <div
                          className="rounded-full flex justify-center border border-[#1B77E3] w-8 h-8 mr-3 pointer"
                          onClick={() => {
                            currentPage > 1 && setCurrentPage(currentPage - 1);
                          }}
                      >
                        <FaArrowLeft className="self-center text-[#1B77E3]" />
                      </div>

                      <div className="hidden md:flex justify-center">
                        {pages.map((pageNo) => {
                          return (
                              <div
                                  className={`rounded-full flex justify-center ${
                                      currentPage === pageNo
                                          ? 'text-white bg-[#1B77E3]'
                                          : 'text-black bg-white'
                                  }  w-8 h-8 mr-3 pointer mr-3 `}
                                  key={pageNo}
                                  onClick={() => {
                                    setCurrentPage(pageNo);
                                  }}
                              >
                                <div className="self-center font-medium text-[12px]">
                                  {pageNo}
                                </div>
                              </div>
                          );
                        })}
                      </div>
                      <div
                          className={`rounded-full flex md:hidden justify-center text-white bg-[#1B77E3] w-8 h-8 mr-3 pointer mr-3`}
                      >
                        <div className="self-center font-medium text-[12px]">
                          {currentPage}
                        </div>
                      </div>

                      <div
                          className="rounded-full flex justify-center border border-[#1B77E3] w-8 h-8 ml-1 pointer"
                          onClick={() => {
                            currentPage < products.totalPages &&
                            setCurrentPage(currentPage + 1);
                          }}
                      >
                        <FaArrowRight className="self-center text-[#1B77E3]" />
                      </div>
                    </div>
                  </>
              ) : (
                  <div className="font-bold text-[24px] text-center mt-36">
                    No Products Found
                  </div>
              )}
            </>
        )}
      </div>
  );
};

export default ProductsWrapper;
