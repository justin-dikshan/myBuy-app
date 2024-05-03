import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CAROUSEL_IMAGES = [
  // {
  //   imgURL:
  //     "https://s3-alpha-sig.figma.com/img/04ac/2215/704d4ee162c016b95c8d3da250ff742a?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewldLIxD7qmq-KKb0SorOaf8caeymt3Vi~yGr942Yj9phXdHUChyM1gbN6GY58zUMydFKTfuBlklPAyiBxl-Vo-63QfgJppJLjRa-avkoNZ0OKh6FCsW1TDxQVc171In5Z6mr2Tc4UurXQJQ5AeqK90Dc9DXq08Mvbx1xFv2gFpLK4B~RFTbJGK0qtiSF9NbdBIF-pX8UullaopD93RdoJ0EJVlvHxCOax2TbSqSpv~~PQDJffVTktMHiVeJe0O38bAZEsQIQRw71tqi7vsGaQio2jvz6f8dlRwvnIkZXsnONMfiYl4K2EVtMjAVtdHTjsvBHgfULkG8BsYu96h60A__",
  //   linkURL: "",
  // },
  {
    imgURL:
      "https://elements-cover-images-0.imgix.net/91f15aaf-569e-412c-98e8-00757e8aebe2?auto=compress%2Cformat&w=1370&fit=max&s=616022e8ecb5da24e9500d6592ea85b1",
    linkURL: "",
  },
];

const Banner = () => {
  return (
    <div className="pt-28 w-[90%] mx-auto">
      <Carousel showStatus={false} infiniteLoop={true} showArrows={false}>
        {CAROUSEL_IMAGES.map((data, i) => {
          return (
            <div key={i}>
              <Image
                src={data?.imgURL}
                alt={"banner"}
                width={100}
                height={100}
                className="w-[90%] mx-auto h-[30vh] md:h-[80vh] object-cover rounded-[26px]"
                unoptimized
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
