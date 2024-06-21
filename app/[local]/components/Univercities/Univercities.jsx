"use client";
import React,{useState} from "react";
import Image from "next/image";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
function Univercities({ local }) {
  const heroSliderSettings = {
    dots: false,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
        },
      },
    ],
  };
  const [play, setPlay] = useState(true);
  const data = [
    {
      img: "/assets/univercities/alt.png",
      title: "alt",
    },
    {
      img: "/assets/univercities/Bahçeşehir_Üniversitesi_logo.png",
      title: "Bahçeşehir",
    },
    {
      img: "/assets/univercities/Atlas_University_logo.svg.png",
      title: "Atlas",
    },
    {
      img: "/assets/univercities/Nişantaşı_Üniversitesi_logo.png",
      title: "Nişantaşı",
    },
    {
      img: "/assets/univercities/Fenerbahçe_Üniversitesi_FBÜ.png",
      title: "Fenerbahçe",
    },
    {
      img: "/assets/univercities/Istanbul_Aydın_University_logo.svg.png",
      title: "Istanbul_Aydın",
    },
    {
      img: "/assets/univercities/okan.png",
      title: "okan",
    },
    {
      img: "/assets/univercities/yazisiz-logo.png",
      title: "yazisiz",
    },
    {
      img: "/assets/univercities/bilgi-logotype-en@2x.png",
      title: "bilgi",
    },
    {
      img: "/assets/univercities/biruni.svg",
      title: "biruni",
    },

    {
      img: "/assets/univercities/gelisim-universitesi-logo-3-11_7cd30541ed44493fbd5a5e1ad397644f.png",
      title: "gelisim",
    },
    {
      img: "/assets/univercities/iki_renkli.png",
      title: "iki_renkli",
    },

    {
      img: "/assets/univercities/istiniye.png",
      title: "istinye",
    },
  ];
  let sliderItems = data.map((item, index) => {
    return (
      <div key={index} className="!relative items-center !h-[120px] !flex p-1">
        <Image
          src={item.img}
          width={100}
          height={100}
          alt={item.title}
          className=" "
        />
      </div>
    );
  });
  return (
    <div className="p-5 mt-10 border-y-[1px] border-[#110F0F]  ">
      <div className="h-fit my-auto">
        {/* <Slider {...heroSliderSettings}>{sliderItems}</Slider> */}
        <Marquee className="w-full !h-[150px]" pauseOnHover={true} play={play}>
            {data.map((item,index) => (
              <div key={index} className="!relative items-center !h-[120px] !flex p-1">
              <Image
                src={item.img}
                width={100}
                height={100}
                alt={item.title}
                className="mx-10 "
              />
            </div>
            ))}
          </Marquee>
      </div>
    </div>
  );
}

export default Univercities;
