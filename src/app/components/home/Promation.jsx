import React from "react";
import Image from "next/image";

const PROMATION_DATA = {
    title: "Newest iphones Collection",
    description: "From Rs. 125,000 to Rs. 440,000. Every Model Ever Built",
    buyURL: "",
    learnMoreURL: "",
    promoImage: "/promation.png",
    bgColor: "black",
};

const Promation = () => {
    return (
        <div className={`bg-black w-full pt-16 text-center`}>
            <h4 className="font-bold text-[32px] text-[#F7941F] mb-4">
                {PROMATION_DATA.title}
            </h4>
            <p className="text-white text-[12px] font-medium">
                {PROMATION_DATA.description}
            </p>
            <div className="flex justify-center mt-6">
                <button className="bg-[#3858D6] px-6 py-2 font-medium text-white rounded text-[12px]">
                    Buy
                </button>
                <div className="text-[#3858D6] self-center ml-4 text-medium pointer">
                    Learn More
                </div>
            </div>
            <Image
                src={PROMATION_DATA.promoImage}
                alt={"promotionImg"}
                width={100}
                height={100}
                className="mx-auto mt-16 w-[60%]"
                unoptimized
            />
        </div>
    );
};

export default Promation;
