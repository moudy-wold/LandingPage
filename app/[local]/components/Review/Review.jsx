"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../../../i18n/client";
import Slider from "react-slick";
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`!hidden md:!block customNextArrow  absolute top-1/2 right-10 rotate-180  cursor-pointer bg-[#6D2663] rounded-full p-4 px-6  `}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        width="17"
        height="31"
        viewBox="0 0 17 31"
        fill="#FFF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3785 30.2247C16.9052 29.698 16.953 28.8738 16.5221 28.2931L16.3785 28.1267L3.58202 15.3295L16.3785 2.53241C16.9052 2.00573 16.953 1.18156 16.5221 0.60079L16.3785 0.434402C15.8518 -0.0922775 15.0276 -0.140158 14.4469 0.290762L14.2805 0.434402L0.434343 14.2805C-0.0923367 14.8072 -0.140217 15.6314 0.290703 16.2122L0.434343 16.3785L14.2805 30.2247C14.8598 30.804 15.7991 30.804 16.3785 30.2247Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`hidden md:block customPrevArrow absolute left-10 top-1/2 cursor-pointer z-50 bg-[#6D2663] rounded-full p-4 px-6 `}
      style={{}}
      onClick={onClick}
    >
      <svg
        width="17"
        height="31"
        viewBox="0 0 17 31"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3785 30.2247C16.9052 29.698 16.953 28.8738 16.5221 28.2931L16.3785 28.1267L3.58202 15.3295L16.3785 2.53241C16.9052 2.00573 16.953 1.18156 16.5221 0.60079L16.3785 0.434402C15.8518 -0.0922775 15.0276 -0.140158 14.4469 0.290762L14.2805 0.434402L0.434343 14.2805C-0.0923367 14.8072 -0.140217 15.6314 0.290703 16.2122L0.434343 16.3785L14.2805 30.2247C14.8598 30.804 15.7991 30.804 16.3785 30.2247Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function CustomNextArrowForSmallScreen(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute -bottom-10 left-1/2 rotate-180  cursor-pointer bg-[#6D2663] rounded-full p-3 px-4 mx-2 `}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <svg
        width="10"
        height="20"
        viewBox="0 0 17 31"
        fill="#FFF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3785 30.2247C16.9052 29.698 16.953 28.8738 16.5221 28.2931L16.3785 28.1267L3.58202 15.3295L16.3785 2.53241C16.9052 2.00573 16.953 1.18156 16.5221 0.60079L16.3785 0.434402C15.8518 -0.0922775 15.0276 -0.140158 14.4469 0.290762L14.2805 0.434402L0.434343 14.2805C-0.0923367 14.8072 -0.140217 15.6314 0.290703 16.2122L0.434343 16.3785L14.2805 30.2247C14.8598 30.804 15.7991 30.804 16.3785 30.2247Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function CustomPrevArrowForSmallScreen(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` absolute right-1/2 -bottom-10 cursor-pointer z-50 bg-[#6D2663] rounded-full p-3 px-4 mx-2 `}
      style={{}}
      onClick={onClick}
    >
      <svg
        width="10"
        height="20"
        viewBox="0 0 17 31"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3785 30.2247C16.9052 29.698 16.953 28.8738 16.5221 28.2931L16.3785 28.1267L3.58202 15.3295L16.3785 2.53241C16.9052 2.00573 16.953 1.18156 16.5221 0.60079L16.3785 0.434402C15.8518 -0.0922775 15.0276 -0.140158 14.4469 0.290762L14.2805 0.434402L0.434343 14.2805C-0.0923367 14.8072 -0.140217 15.6314 0.290703 16.2122L0.434343 16.3785L14.2805 30.2247C14.8598 30.804 15.7991 30.804 16.3785 30.2247Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

function Review({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [activeSlide, setActiveSlide] = useState(local == "en" ? 0 : 3);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  const settingsForLargeScreen = {
    dots: false,
    infinite: true,
    centerMode: true,
    rtl: local == "ar" ? true : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  const settingsForSmallScreen = {
    dots: false,
    infinite: true,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      img: "/assets/reviews/studen-1.png",
      title: t("title_in_review"),
      text: t("text_in_review"),
    },
    {
      img: "/assets/reviews/studen.png",
      title: t("title_in_review"),
      text: t("text_in_review"),
    },
    {
      img: "/assets/reviews/1.png",
      title: t("title_in_review"),
      text: t("text_in_review"),
    },
    {
      img: "/assets/reviews/studen-1.png",
      title: t("title_in_review"),
      text: t("text_in_review"),
    },
  ];
  useEffect(() => {
    setActiveSlide(activeSlide);
  }, [activeSlide]);

  let sliderItemsForLargeScreen = data.map((item, index) => {
    return (
      <div
        key={index}
        className="!overflow-hidden !flex items-center justify-center gap-2 h-[260px]  "
      >
        <div
          className={` border-[2px] overflow-hidden border-[#6D2663] rounded-full p-8 flex items justify-center   `}
        >
          <Image
            src={item.img}
            alt={"student"}
            width={110}
            height={110}
            className={`${
              index == activeSlide
                ? "!w-[160px] !h-[160px]"
                : "!w-[110px] !h-[110px]"
            }`}
          />
        </div>

        <div
          className={`${index == activeSlide ? "block" : " hidden "} w-1/2 `}
        >
          <p className="text-sm font-normal text-center">{t(item.title)}</p>
          <p className="text-sm mt-2 text-center">{t(item.text)}</p>
          <div className="flex items-center justify-center gap-2 mt-2 mb-6">
            <Image
              src="/assets/reviews/star.svg"
              alt="star"
              width={15}
              height={15}
              className=""
            />
            <Image
              src="/assets/reviews/star.svg"
              alt="star"
              width={15}
              height={15}
              className=""
            />
            <Image
              src="/assets/reviews/star.svg"
              alt="star"
              width={15}
              height={15}
              className=""
            />
            <Image
              src="/assets/reviews/star.svg"
              alt="star"
              width={15}
              height={15}
              className=""
            />
            <Image
              src="/assets/reviews/star.svg"
              alt="star"
              width={15}
              height={15}
              className=""
            />
          </div>
        </div>
      </div>
    );
  });

  let sliderItemsForSmallScreen = data.map((item, index) => {
    return (
      <div className="w-fll" key={index}>
        <div className="flex items-center justify-between">
          <div
            className={` border-[2px] overflow-hidden border-[#6D2663] rounded-full p-3 flex items justify-center   `}
          >
            <Image
              src={item.img}
              alt={"student"}
              width={110}
              height={110}
              className={`!w-[160px] !h-[160px] object-contain`}
            />
          </div>
          <div className={`w-1/2 `}>
            <p className="text-sm font-bold text-center">{t(item.title)}</p>
            <p className="text-sm mt-2 text-center">{t(item.text)}</p>
            <div className="flex items-center justify-center gap-2 mt-2 mb-6">
              <Image
                src="/assets/reviews/star.svg"
                alt="star"
                width={15}
                height={15}
                className=""
              />
              <Image
                src="/assets/reviews/star.svg"
                alt="star"
                width={15}
                height={15}
                className=""
              />
              <Image
                src="/assets/reviews/star.svg"
                alt="star"
                width={15}
                height={15}
                className=""
              />
              <Image
                src="/assets/reviews/star.svg"
                alt="star"
                width={15}
                height={15}
                className=""
              />
              <Image
                src="/assets/reviews/star.svg"
                alt="star"
                width={15}
                height={15}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 mt-12">
      {ready && (
        <>
          <div className="">
            <h1 className="text-xl lg:text-3xl font-bold uppercase">
              {t("reviews")}
            </h1>
          </div>

          {/* Start  Large Screen */}
          <div className="hidden lg:block reviews mt-5 lg:mt-10">
            <Slider
              {...settingsForLargeScreen}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
            >
              {sliderItemsForLargeScreen}
            </Slider>
          </div>
          {/* End Large Screen */}

          {/* Start Small Screen */}
          <div className="block lg:hidden reviews mt-5 lg:mt-10">
            <Slider
              {...settingsForSmallScreen}
              prevArrow={<CustomPrevArrowForSmallScreen />}
              nextArrow={<CustomNextArrowForSmallScreen />}
            >
              {sliderItemsForSmallScreen}
            </Slider>
          </div>
          {/* end Small Screen */}
        </>
      )}
    </div>
  );
}

export default Review;
