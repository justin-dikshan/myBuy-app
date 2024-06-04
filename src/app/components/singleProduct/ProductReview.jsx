import React from "react";
import StarRatings from "react-star-ratings";
import Progress from "../common/Progress";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const USER_REVIEW = [
  {
    profile:
        "https://s3-alpha-sig.figma.com/img/37d5/a254/242411bed5dae5af39e5c7cfbc39b402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYbhLrpfB47DnNVhguwQzhYUe6M8uQXCeCPiWfarTzeHugzba3FiEwhjt06npIhq5tHGZT6MESqzIA27LXIC8L1kzwWBHNQmC8Fhiu3t78gXAC2U0WJTM-LrOnKhaY~R~CR5bipWoccCkxnjszsgCY1IqatDJZc-3R-uUHxFEMn188nCTaXK3H9vNMZiYCx47I8qu9yPsvBmzk8WDUmb4gLTNijHuwcphdk~0boxjwXvyEsAyGofywja1-GQ65haEEydNc8e54DOWPMmxYoObTQQuMaqRTFdBuew9ofqJw9JiYX-MHUmQKy0R3peTOdxorkYhHQ2iR4~tBtr~oVVXw__",
    name: "Van Dijik",
    rate: 5,
    time: "Just Now",
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.",
  },
  {
    profile:
        "https://s3-alpha-sig.figma.com/img/37d5/a254/242411bed5dae5af39e5c7cfbc39b402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYbhLrpfB47DnNVhguwQzhYUe6M8uQXCeCPiWfarTzeHugzba3FiEwhjt06npIhq5tHGZT6MESqzIA27LXIC8L1kzwWBHNQmC8Fhiu3t78gXAC2U0WJTM-LrOnKhaY~R~CR5bipWoccCkxnjszsgCY1IqatDJZc-3R-uUHxFEMn188nCTaXK3H9vNMZiYCx47I8qu9yPsvBmzk8WDUmb4gLTNijHuwcphdk~0boxjwXvyEsAyGofywja1-GQ65haEEydNc8e54DOWPMmxYoObTQQuMaqRTFdBuew9ofqJw9JiYX-MHUmQKy0R3peTOdxorkYhHQ2iR4~tBtr~oVVXw__",
    name: "Van Dijik",
    rate: 5,
    time: "Just Now",
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.",
  },
  {
    profile:
        "https://s3-alpha-sig.figma.com/img/37d5/a254/242411bed5dae5af39e5c7cfbc39b402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYbhLrpfB47DnNVhguwQzhYUe6M8uQXCeCPiWfarTzeHugzba3FiEwhjt06npIhq5tHGZT6MESqzIA27LXIC8L1kzwWBHNQmC8Fhiu3t78gXAC2U0WJTM-LrOnKhaY~R~CR5bipWoccCkxnjszsgCY1IqatDJZc-3R-uUHxFEMn188nCTaXK3H9vNMZiYCx47I8qu9yPsvBmzk8WDUmb4gLTNijHuwcphdk~0boxjwXvyEsAyGofywja1-GQ65haEEydNc8e54DOWPMmxYoObTQQuMaqRTFdBuew9ofqJw9JiYX-MHUmQKy0R3peTOdxorkYhHQ2iR4~tBtr~oVVXw__",
    name: "Van Dijik",
    rate: 5,
    time: "Just Now",
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.",
  },
  {
    profile:
        "https://s3-alpha-sig.figma.com/img/37d5/a254/242411bed5dae5af39e5c7cfbc39b402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYbhLrpfB47DnNVhguwQzhYUe6M8uQXCeCPiWfarTzeHugzba3FiEwhjt06npIhq5tHGZT6MESqzIA27LXIC8L1kzwWBHNQmC8Fhiu3t78gXAC2U0WJTM-LrOnKhaY~R~CR5bipWoccCkxnjszsgCY1IqatDJZc-3R-uUHxFEMn188nCTaXK3H9vNMZiYCx47I8qu9yPsvBmzk8WDUmb4gLTNijHuwcphdk~0boxjwXvyEsAyGofywja1-GQ65haEEydNc8e54DOWPMmxYoObTQQuMaqRTFdBuew9ofqJw9JiYX-MHUmQKy0R3peTOdxorkYhHQ2iR4~tBtr~oVVXw__",
    name: "Van Dijik",
    rate: 5,
    time: "Just Now",
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.",
  },
  {
    profile:
        "https://s3-alpha-sig.figma.com/img/37d5/a254/242411bed5dae5af39e5c7cfbc39b402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYbhLrpfB47DnNVhguwQzhYUe6M8uQXCeCPiWfarTzeHugzba3FiEwhjt06npIhq5tHGZT6MESqzIA27LXIC8L1kzwWBHNQmC8Fhiu3t78gXAC2U0WJTM-LrOnKhaY~R~CR5bipWoccCkxnjszsgCY1IqatDJZc-3R-uUHxFEMn188nCTaXK3H9vNMZiYCx47I8qu9yPsvBmzk8WDUmb4gLTNijHuwcphdk~0boxjwXvyEsAyGofywja1-GQ65haEEydNc8e54DOWPMmxYoObTQQuMaqRTFdBuew9ofqJw9JiYX-MHUmQKy0R3peTOdxorkYhHQ2iR4~tBtr~oVVXw__",
    name: "Van Dijik",
    rate: 5,
    time: "Just Now",
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.",
  },
  {
    profile:
        "https://s3-alpha-sig.figma.com/img/37d5/a254/242411bed5dae5af39e5c7cfbc39b402?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YYbhLrpfB47DnNVhguwQzhYUe6M8uQXCeCPiWfarTzeHugzba3FiEwhjt06npIhq5tHGZT6MESqzIA27LXIC8L1kzwWBHNQmC8Fhiu3t78gXAC2U0WJTM-LrOnKhaY~R~CR5bipWoccCkxnjszsgCY1IqatDJZc-3R-uUHxFEMn188nCTaXK3H9vNMZiYCx47I8qu9yPsvBmzk8WDUmb4gLTNijHuwcphdk~0boxjwXvyEsAyGofywja1-GQ65haEEydNc8e54DOWPMmxYoObTQQuMaqRTFdBuew9ofqJw9JiYX-MHUmQKy0R3peTOdxorkYhHQ2iR4~tBtr~oVVXw__",
    name: "Van Dijik",
    rate: 5,
    time: "Just Now",
    comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis dignissim arcu, sit amet consequat sem auctor a.",
  },
];

const UserReview = ({ review }) => {
  return (
      <div className="w-[96%] md:w-[650px] pb-6 mt-6 border-b border-gray-200">
        <div className="flex">
          <Image
              src={review.profile}
              alt={"item"}
              width={100}
              height={100}
              className="h-[40px] w-[40px] rounded-full object-contain"
          />
          <div className="ml-4">
            <div className="text-[12px]">
              <span className="font-bold">{review.name}</span>
              <span className="mx-2 font-bold">·</span>
              <span className="text-[#5F6C72]">{review.time}</span>
            </div>
            <StarRatings
                rating={4.7}
                starRatedColor={"#F7941E"}
                isAggregateRating={true}
                numberOfStars={5}
                name="rating"
                starDimension="16px"
                starSpacing="1px"
            />
          </div>
        </div>
        <div className="text-[#475156] text-[12px] mt-2">{review.comment}</div>
      </div>
  );
};

const ProductReview = () => {
  return (
      <div className="w-[96%] mx-auto">
        <div className="block md:flex">
          <div className="w-full md:w-[240px] bg-[#FBF4CE] text-center py-6 rounded mb-5 md:mb-0">
            <div className="text-[36px] font-bold">4.7</div>
            <StarRatings
                rating={4.7}
                starRatedColor={"#F7941E"}
                isAggregateRating={true}
                numberOfStars={5}
                name="rating"
                starDimension="16px"
                starSpacing="1px"
            />
            <div className="text-gray-600 text-[12px] mt-2">
              <span className="font-medium text-black">Customer Rating </span>{" "}
              (798)
            </div>
          </div>
          <div>
            <div className="flex w-full ml-0 md:ml-8 mb-2">
              <div className="w-[220px] md:w-[100px] self-center">
                <StarRatings
                    rating={5}
                    starRatedColor={"#F7941E"}
                    isAggregateRating={true}
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                />
              </div>
              <div className="w-[440px] self-center mr-5">
                <Progress color={"#F7941E"} perentage={65} />
              </div>
              <div className="text-[12px] self-center">
                <span className="font-bold">65%</span>{" "}
                <span className="text-[#77878F]">(320)</span>
              </div>
            </div>
            <div className="flex w-full ml-0 md:ml-8 mb-2">
              <div className="w-[220px] md:w-[100px] self-center">
                <StarRatings
                    rating={4}
                    starRatedColor={"#F7941E"}
                    isAggregateRating={true}
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                />
              </div>
              <div className="w-[440px] self-center mr-5">
                <Progress color={"#F7941E"} perentage={65} />
              </div>
              <div className="text-[12px] self-center">
                <span className="font-bold">65%</span>{" "}
                <span className="text-[#77878F]">(320)</span>
              </div>
            </div>
            <div className="flex w-full ml-0 md:ml-8 mb-2">
              <div className="w-[220px] md:w-[100px] self-center">
                <StarRatings
                    rating={3}
                    starRatedColor={"#F7941E"}
                    isAggregateRating={true}
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                />
              </div>
              <div className="w-[440px] self-center mr-5">
                <Progress color={"#F7941E"} perentage={65} />
              </div>
              <div className="text-[12px] self-center">
                <span className="font-bold">65%</span>{" "}
                <span className="text-[#77878F]">(320)</span>
              </div>
            </div>
            <div className="flex w-full ml-0 md:ml-8 mb-2">
              <div className="w-[220px] md:w-[100px] self-center">
                <StarRatings
                    rating={2}
                    starRatedColor={"#F7941E"}
                    isAggregateRating={true}
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                />
              </div>
              <div className="w-[440px] self-center mr-5">
                <Progress color={"#F7941E"} perentage={65} />
              </div>
              <div className="text-[12px] self-center">
                <span className="font-bold">65%</span>{" "}
                <span className="text-[#77878F]">(320)</span>
              </div>
            </div>
            <div className="flex w-full ml-0 md:ml-8 mb-2">
              <div className="w-[220px] md:w-[100px] self-center">
                <StarRatings
                    rating={1}
                    starRatedColor={"#F7941E"}
                    isAggregateRating={true}
                    numberOfStars={5}
                    name="rating"
                    starDimension="16px"
                    starSpacing="1px"
                />
              </div>
              <div className="w-[440px] self-center mr-5">
                <Progress color={"#F7941E"} perentage={65} />
              </div>
              <div className="text-[12px] self-center">
                <span className="font-bold">65%</span>{" "}
                <span className="text-[#77878F]">(320)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <div className="flex justify-between">
            <div className="text-[14px] font-bold">Customer Feedback</div>
            <div className="flex mt-4 text-[12px]">
              <div className="mr-2 text-[#5F6C72] self-center">Sort By:</div>
              <select
                  name="sort"
                  id="cars"
                  className="p-2 self-center border border-gray-200"
              >
                <option value="mostPopular">Most Popular</option>
              </select>
            </div>
          </div>

          <div>
            {USER_REVIEW.map((review) => {
              return <UserReview review={review} />;
            })}
          </div>

          <div className="flex justify-center my-8">
            <div className="rounded-full flex justify-center border border-[#F7941E] w-8 h-8 mr-3 pointer">
              <FaArrowLeft className="self-center text-[#F7941E]" />
            </div>
            <div className="rounded-full flex justify-center text-white bg-[#F7941E] w-8 h-8 mr-3 pointer mr-3">
              <div className="self-center font-medium text-[12px]"> 01 </div>
            </div>
            <div className="rounded-full flex justify-center border border-gray-200 text-black bg-white w-8 h-8 mr-3 pointer">
              <div className="self-center font-medium text-[12px]"> 02 </div>
            </div>
            <div className="rounded-full flex justify-center border border-gray-200 text-black bg-white w-8 h-8 mr-3 pointer">
              <div className="self-center font-medium text-[12px]"> 03 </div>
            </div>
            <div className="rounded-full flex justify-center border border-gray-200 text-black bg-white w-8 h-8 mr-3 pointer">
              <div className="self-center font-medium text-[12px]"> 04 </div>
            </div>
            <div className="rounded-full flex justify-center border border-gray-200 text-black bg-white w-8 h-8 mr-3 pointer">
              <div className="self-center font-medium text-[12px]"> 05 </div>
            </div>
            <div className="rounded-full flex justify-center border border-gray-200 text-black bg-white w-8 h-8 mr-3 pointer">
              <div className="self-center font-medium text-[12px]"> 06 </div>
            </div>

            <div className="rounded-full flex justify-center border border-[#F7941E] w-8 h-8 ml-1">
              <FaArrowRight className="self-center text-[#F7941E]" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductReview;
