"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../i18n/client";
import Image from "next/image";

function About_Us({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  return (
    <div className="mt-10 lg:mt-40 px-5 lg:px-10 grid md:grid-cols-2 gap-5">
      {ready && (
        <>
          <div className="">
            <div className="lg:w-1/2">
              <h1 className="font-bold text-xl lg:text-[55px] uppercase">
                {t("who_us")}
              </h1>
              <p className="mt-2 lg:mt-10 text-xs lg:text-[15px] leading-[22px] uppercase ">
                {t("First_text_in_about_us")}
              </p>
            </div>

            <div className="flex items-center justify-between gap-2 lg:gap-5 mt-5">
              <div className="hidden lg:block !min-w-[365px] min-h-[220px] ">
                <Image
                  src="/assets/about-us/in about.jpg"
                  width={365}
                  height={220}
                  alt="about-us"
                  className="!w-[365px] !h-[220px]  "
                />
              </div>
              <div className="block lg:hidden !min-w-[165px] !h-[120px] lg:!min-h-[220px] ">
                <Image
                  src="/assets/about-us/in about.jpg"
                  width={150}
                  height={220}
                  alt="about-us"
                  className="!w-full !h-[120px] !lg:w-full lg:!h-[220px]  "
                />
              </div>

              <div className="lg:min-h-[220px]">
                <p className=" text-[10px] lg:text-[15px] uppercase">
                  {" "}
                  {t("Secound_text_in_about_us")}
                </p>
                <p className="hidden lg:block text-[15px] mt-9 uppercase ">
                  {t("Third_text_in_about_us")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#14BDC6] rounded-2xl py-6 lg:py-12 px-5 lg:px-6  ">
            <div className="lg:pr-20">
              <span className="text-white font-semibold text-base lg:text-2xl">
                {t("work_group")}
              </span>
              <span className="text-black font-semibold text-base lg:text-2xl">
                {" "}
                {t("in_Turkye")}
              </span>
              <span className="text-white font-semibold text-base lg:text-2xl">
                .{t("by_services")}
              </span>
            </div>
            <div className="capitalize text-base lg:text-2xl font-bold mt-10 md:mt-20 lg:mt-40">
              {t("all_sevices_free")}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default About_Us;
