"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "../../../i18n/client";
import Link from "next/link";

function Hero({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [ready, setReady] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    
    setTimeout(() => {
      setReady(true);
      if (localStorage.getItem("scroll")) {
        const scrollWidth = localStorage.getItem("scroll");
        window.scrollTo({ top: scrollWidth, behavior: "smooth" });
        console.log(scrollWidth)
      }else{
        console.log(false)
      }
    }, 100);
  }, []);

  return (
    <div className="px-5 lg:px-10">
      {ready && (
        <>
          {/* Start Hero For Large Screen */}
          <div
            style={{ direction: "rtl" }}
            className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="h-[600px] grid !grid-cols-4 gap-5">
              <div className="grid grid-rows-[40%_60%] gap-6 h-full">
                <div className=" rounded-[40px]">
                  <Image
                    src="/assets/flag.svg"
                    alt="flag"
                    width={170}
                    height={300}
                    className=""
                  />
                </div>
                <div className="bg-[#F26B67] rounded-3xl"></div>
              </div>

              <div className="grid grid-rows-[55%_45%] gap-6 h-full">
                <div className="bg-[#14BDC6] rounded-3xl flex items-end justify-center p-4">
                  <p
                    className={`text-white ${
                      local == "rus" ? "text-sm" : "text-lg "
                    } ${local == "en" && " pb-6 xl:pb-0"} `}
                  >
                    {t("our_students")} 3400+
                  </p>
                </div>
                <div className="bg-[#6D2663] rounded-3xl flex items-center justify-center">
                  <Image
                    src="/assets/arrowInHero.svg"
                    alt="arrow"
                    width={150}
                    height={180}
                    className="mt-16"
                  />
                </div>
              </div>

              <div className="grid grid-rows-[40%_60%] gap-6 h-full">
                <div className="bg-[#F26B67] rounded-3xl relative">
                  <span className="absolute w-full h-[2px] bg-[#F5F5F5] left-0 top-[75px]"></span>
                  <span className="absolute w-full h-[2px] bg-[#F5F5F5] left-0 top-[82px]"></span>
                  <span className="absolute w-full h-[2px] bg-[#F5F5F5] left-0 top-24"></span>
                  <span className="absolute w-full h-[2px] bg-[#F5F5F5] left-0 bottom-10"></span>
                </div>
                <div className="bg-white border-[2px] border-[#6D2663] rounded-[40px] flex items-end justify-center p-3">
                  <p
                    className={`text-black${
                      local == "rus" ? "text-sm" : "text-lg "
                    } `}
                  >
                    {t("our_specialties")} 200+
                  </p>
                </div>
              </div>

              <div className="grid grid-rows-[55%_45%] gap-6 h-full">
                <div className="bg-[#6D2663] rounded-3xl flex items-end justify-center p-3">
                  <p
                    className={`text-white ${
                      local == "rus" ? "text-sm" : "text-lg "
                    }  ${local == "ar" && "lg:pb-8 xl:pb-0"}`}
                  >
                    {t("our_universities")} 34+
                  </p>
                </div>
                <div className="bg-[#F26B67] rounded-3xl relative">
                  <div className="absolute -top-6 -left-6 ">
                    <Image
                      src="/assets/iconInHero.svg"
                      alt="arrow"
                      width={60}
                      height={110}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className="h-[92%] flex items-end justify-end">
                <h1 className="font-bold text-[38px] lg:text-[50px] text-end">
                  <p className="-mt-[20px]">EDUCATION</p>
                  <p className="-mt-[20px]">CREATIVITY</p>
                  <p className="-mt-[20px]">INSPIRATION</p>
                </h1>
              </div>
              <div className="mt-7">
                <Link
                  href="/contact-us"
                  className="bg-[#110F0F] text-white hover:bg-[#14BDC6] transition-all duration-200 py-[10px] rounded-2xl text-center w-full block uppercase"
                >
                  {t("contact_us")}
                </Link>
              </div>
            </div>
          </div>
          {/* ENd Hero For Large Screen */}

          {/* Start Hero For Small Screen */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-[48%_25%_25%] gap-1 h-40 ">
              <div className="bg-[#6D2663] rounded-3xl flex items-end justify-start p-4">
                <p className={`text-white  text-xs pb-3`}>
                  {t("our_universities")} <br />
                  34+
                </p>
              </div>
              <div className=" rounded-[40px]">
                <Image
                  src="/assets/flag.svg"
                  alt="flag"
                  width={170}
                  height={300}
                  className=""
                />
              </div>
              <div className="bg-[#14BDC6] rounded-3xl flex items-end justify-center p-4">
                <p className="text-white text-xs ">
                  {t("our_students")}
                  <br /> 3400+
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-[48%_25%_25%] gap-1 h-40">
              <div className="h-[92%] flex items-end justify-start">
                <h1 className="font-bold text-[25px] lg:text-[50px] text-start">
                  <p className="-mt-[13px]">EDUCATION</p>
                  <p className="-mt-[13px]">CREATIVITY</p>
                  <p className="-mt-[13px]">INSPIRATION</p>
                </h1>
              </div>
              <div className="bg-white border-[2px] border-[#6D2663] rounded-3xl flex items-end justify-center p-4">
                <p className="text-black text-xs  ">
                  {t("our_specialties")} <br />
                  200+
                </p>
              </div>
              <div className="bg-[#F26B67] rounded-3xl"></div>
            </div>
            <div className="mt-5">
              <Link
                href="/contact-us"
                className="bg-[#110F0F] text-white hover:bg-[#14BDC6] transition-all duration-200 py-[2px] lg:py-[10px] rounded-2xl text-center w-full block uppercase"
              >
                {t("contact_us")}
              </Link>
            </div>
          </div>
          {/* End Hero For Small Screen */}
        </>
      )}
    </div>
  );
}

export default Hero;
