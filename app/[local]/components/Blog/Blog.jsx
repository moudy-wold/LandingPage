"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "../../../i18n/client";
import Slider from "react-slick";
import Link from "next/link";

function Blog({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  const heroSliderSettings = {
    dots: false,
    infinite: false,
    autopaly: false,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const data = [
    {
      img: "/assets/blog/read-All-blog.png",
      title: "",
      date: t("date_in_blog"),
      url: "",
    },
    {
      img: "/assets/blog/blog-1.png",
      title: t("advantages_of_university"),
      date: t("date_in_blog"),
      url: "advantages_of_university",
    },
    {
      img: "/assets/blog/blog02.png",
      title: t("lIFE_AS_A_UNIVERSITY"),
      date: t("date_in_blog"),
      url: "life_as_a_university",
    },
    {
      img: "/assets/blog/blog-3.png",
      title: t("STUDENT_HOUSING"),
      date: t("date_in_blog"),
      url: "student_hosting",
    },
  ];
  let sliderItems = data.map((item, index) => {
    return (
      <div key={index} className="!relative !overflow-hidden !flex p-1 !w-full">
        <div className="w-[99%]">
          <Image
            src={item.img}
            alt={"asd"}
            width={365}
            height={420}
            className="rounded-3xl lg:rounded-[40px] lg:!w-full h-[220px] lg:!h-[420px]"
          />
        </div>
        <div className=" bg-[#110f0f4d] absolute top-1 left-1 z-50 w-[95%] lg:w-[97%] h-[97%] lg:h-[98%] rounded-[30px] lg:rounded-[40px] p-1">
          <div className=" p-3 ">
            {index == 0 ? (
              ""
            ) : (
              <div className="flex items-center justify-between gap-1 lg:gap-0">
                <div className="">
                  <p className="text-white text-xs"> {item.date}</p>
                </div>
                <Link href={`/blog/${item.url}`} className="">
                  <div className="bg-white rounded-full p-2 lg:p-3 flex items-center justify-center hover:scale-110 transition-all duration-200 ">
                    <Image
                      src="/assets/blog/Arrow1.svg"
                      alt="arrow"
                      width={45}
                      height={45}
                      className="!w-5 !h-5 lg:!w-[45px] lg:!h-[45px]"
                    />{" "}
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="absolute bottom-4 left-4 lg:bottom-7 lg:left-7  text-white lg:text-xl"
          >
            {item.title}
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="px-5 lg:px-10 lg:py-10 mt-12 lg:mt-10">
      {ready && (
        <>
          <div className="">
            <h1 className=" text-xl lg:text-3xl font-bold uppercase">
              {t("news_and_articles")}
            </h1>
          </div>

          <div className="mt-5 md:mt-7 lg:mt-10">
            <Slider {...heroSliderSettings}>{sliderItems}</Slider>
          </div>
        </>
      )}
    </div>
  );
}

export default Blog;
