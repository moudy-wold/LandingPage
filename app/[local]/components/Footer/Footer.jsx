"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../i18n/client";
import Image from "next/image";
import Link from "next/link";

function Footer({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState(1);

  const handleMoveToSection = (id) => {
    setTab(id);
    if (id == 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id == 2) {
      window.scrollTo({ top: 800, behavior: "smooth" });
    } else if (id == 3) {
      window.scrollTo({ top: 1400, behavior: "smooth" });
    } else if (id == 4) {
      window.scrollTo({ top: 3250, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  return (
    <div className="mt-10 bg-[#110F0F] p-[10px] lg:pt-16 lg:pb-8  lg:px-5">
      {ready && (
        <>
          {/* Start Large Screen  */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start ">
              <h1 className="w-1/3 leading-[80px] text-white text-[60px] font-bold uppercase ">
                {t("start")}
              
                {t("your_journey")}
                <br />
                {t("with_eci_group")}
              </h1>

              {/* Start Addrees */}
              <div className="text-white mt-3">
                <p className="text-[#F5F5F5] text-sm">
                  İZZET PAŞA MAH. YENİ YOL CAD. NUROL TOWER{" "}
                </p>
                <p className="text-[#F5F5F5] text-sm">
                  NO: 3 İÇ KAPI NO: 336 ŞİŞLİ/ İSTANBUL
                </p>
              </div>
              {/* End Addrees */}
            </div>

            <div className="flex items-center justify-between mt-7">
              {/* Start Links */}
              <div className="">
                <div className="">
                  <p
                    onClick={() => handleMoveToSection(1)}
                    className={`p-1 px-5 hover:bg-[#14BDC6] rounded-3xl text-white transition-all duration-200 cursor-pointer`}
                  >
                    {t("home_Title")}
                  </p>
                  <p
                    onClick={() => handleMoveToSection(2)}
                    className={`p-1 px-5 hover:bg-[#14BDC6] rounded-3xl text-white   transition-all duration-200 cursor-pointer`}
                  >
                    {t("aboutUs_Title")}
                  </p>
                  <p
                    onClick={() => handleMoveToSection(3)}
                    className={`p-1 px-5 hover:bg-[#14BDC6] rounded-3xl text-white  transition-all duration-200 cursor-pointer`}
                  >
                    {t("services_Title")}
                  </p>
                  <p
                    onClick={() => handleMoveToSection(4)}
                    className={`p-1 px-5 hover:bg-[#14BDC6] rounded-3xl text-white  transition-all duration-200 cursor-pointer`}
                  >
                    {t("blog_Title")}
                  </p>
                </div>
              </div>
              {/* End Links */}

              {/* Start Copy Right */}
              <div className="mt-24">
                <p className="text-white text-sm">
                  ECI Group © 2024 All Right Reserved
                </p>
              </div>
              {/* end Copy Right */}

              {/* Start contact us */}
              <div className="">
                <p className="text-white">WhatsApp: 00905539100031</p>
                <p className="text-white">E-mail: eci.group.tr@gmail.com</p>
                <Link
                  href="/contact-us"
                  className="mt-4 uppercase block py-[10px] px-10 text-xl text-center text-black bg-white rounded-3xl cursor-pointer hover:bg-[#14BDC6] hover:text-white transition-all duration-200"
                >
                  {t("contact_us")}
                </Link>
              </div>
              {/* End contact us */}

              {/* Start Social Medya */}
              <div className="">
                <p className="text-lg text-white w-full text-center mb-8">
                  {t("follow_us")}
                </p>
                <div className="flex items-center justify-end gap-5 mt-5">
                  <Link
                    href="https://www.facebook.com/ecigrouptr/"
                    className=""
                  >
                    <Image
                      src="/assets/social medya/facebook.svg"
                      alt="facebook"
                      width={40}
                      height={40}
                      className=""
                    />
                  </Link>
                  <Link
                    href={
                      local == "res"
                        ? "https://www.instagram.com/ecigroupint?igsh=d2hjbW05amdleTNi&utm_source=qr"
                        : "https://www.instagram.com/ecigrouptr?igsh=MWswaTBhazl2a3o1Yw%3D%3D&utm_source=qr"
                    }
                    className=""
                  >
                    <Image
                      src="/assets/social medya/instegram.svg"
                      alt="instegram"
                      width={55}
                      height={55}
                      className=""
                    />
                  </Link>
                </div>
              </div>
              {/* End Social Medya */}
            </div>
          </div>
          {/* End Large Screen  */}

          {/* Start Small Screen  */}
          <div className="block lg:hidden">
            <div className="flex justify-between">
              <h1 className="  text-white text-[35px] font-bold uppercase ">
                {t("start")}
                <br />
                {t("your_journey")}
                <br />
                {t("with_eci_group")}
              </h1>
            </div>

            {/* Start Links */}
            <div className=" overflow-hiiden">
              <div className="grid grid-cols-4  mt-3">
                <p
                  onClick={() => handleMoveToSection(1)}
                  className={`p-1 ${
                    local == "ar" ? "pl-5" : "pr-10"
                  }  rounded-3xl text-start text-white text-sm transition-all duration-200 cursor-pointer`}
                >
                  {t("home_Title")}
                </p>
                <p
                  onClick={() => handleMoveToSection(2)}
                  className={`p-1 px-1 rounded-3xl text-white text-sm   transition-all duration-200 cursor-pointer`}
                >
                  {t("aboutUs_Title")}
                </p>
                <p
                  onClick={() => handleMoveToSection(3)}
                  className={`p-1 px-5 rounded-3xl text-white text-sm  transition-all duration-200 cursor-pointer`}
                >
                  {t("services_Title")}
                </p>
                <p
                  onClick={() => handleMoveToSection(4)}
                  className={`p-1 ${
                    local == "ar" ? "pr-8" : "pl-11"
                  } rounded-3xl text-white text-sm  transition-all duration-200 cursor-pointer`}
                >
                  {t("blog_Title")}
                </p>
              </div>
            </div>
            {/* End Links */}

            {/* Start Addrees */}
            <div className="text-white border-y-[2px] border-white py-6">
              <p className="text-[#F5F5F5] text-sm">
                İZZET PAŞA MAH. YENİ YOL CAD. NUROL TOWER{" "}
              </p>
              <p className="text-[#F5F5F5] text-sm">
                NO: 3 İÇ KAPI NO: 336 ŞİŞLİ/ İSTANBUL
              </p>
            </div>
            {/* End Addrees */}

            {/* Start contact us */}
            <div className="mt-5">
              <p className="text-white">WhatsApp: 00905539100031</p>
              <p className=" my-0 text-white">E-mail: eci.group.tr@gmail.com</p>
              <Link
                href="/contact-us"
                className="w-full uppercase mt-4 block  text-lg lg:text-xl text-center text-black bg-white rounded-3xl cursor-pointer hover:bg-[#14BDC6] hover:text-white transition-all duration-200"
              >
                {t("contact_us")}
              </Link>
            </div>
            {/* End contact us */}

            <div className="flex items-end justify-between mt-2">
              {/* Start Copy Right */}
              <div className="">
                <p className="text-xs text-white">
                  ECI Group © 2024 All Right Reserved
                </p>
              </div>
              {/* end Copy Right */}

              {/* Start Social Medya */}
              <div className="mr-3">
                <p className="text-xl text-white w-full text-center">
                  {t("follow_us")}
                </p>
                <div className="flex items-center justify-between gap-5 mt-2">
                  <Link
                    href={
                      local == "res"
                        ? "https://www.instagram.com/ecigroupint?igsh=d2hjbW05amdleTNi&utm_source=qr"
                        : "https://www.instagram.com/ecigrouptr?igsh=MWswaTBhazl2a3o1Yw%3D%3D&utm_source=qr"
                    }
                    className=""
                  >
                    <Image
                      src="/assets/social medya/instegram.svg"
                      alt="instegram"
                      width={35}
                      height={35}
                      className=""
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/ecigrouptr/"
                    className=""
                  >
                    <Image
                      src="/assets/social medya/facebook.svg"
                      alt="facebook"
                      width={30}
                      height={30}
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* End Social Medya */}
          </div>

          {/* End Small Screen  */}
        </>
      )}
    </div>
  );
}

export default Footer;
