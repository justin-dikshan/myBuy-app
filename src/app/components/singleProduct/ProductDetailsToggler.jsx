import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

const ProductDetailsToggler = ({ setSelectedTab, selectedTab }) => {
  const [toggleMenu, setToggleMenu] = useState([
    {
      id: 1,
      text: "DESCRIPTION",
    },
    {
      id: 2,
      text: "ADDITIONAL INFORMATION",
    },
    {
      id: 3,
      text: "SPECIFICATION",
    },
    {
      id: 4,
      text: "REVIEWS",
    },
  ]);

  return (
      <div className="bg-white p-2 rounded border border-gray-200 my-8">
        <div className="border-b border-gray-200 flex justify-start md:justify-center text-[12px] font-medium overflow-x-auto">
          {toggleMenu.map((item) => {
            return (
                <div
                    key={item.id}
                    className={`mr-8 pointer py-4 ${
                        item.id === selectedTab
                            ? "text-black border-b-2 border-[#FA8232]"
                            : "text-[#5F6C72]"
                    }`}
                    onClick={() => {
                      setSelectedTab(item.id);
                    }}
                >
                  {item.text}
                </div>
            );
          })}
        </div>
        <div className="mt-8">
          {selectedTab === 1 && <ProductDescription />}
          {selectedTab === 2 && <ProductDescription />}
          {selectedTab === 3 && <ProductDescription />}
          {selectedTab === 4 && <ProductReview />}
        </div>
      </div>
  );
};

export default ProductDetailsToggler;
