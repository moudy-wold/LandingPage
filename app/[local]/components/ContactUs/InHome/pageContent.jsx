"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../../../../i18n/client";

function ContactusInHome({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  return (
    <div className="pt-10 px-5 lg:px-10 ">
      {ready && (
        <>
          {/* Start LArge Screen */}
          <div className="relative hidden md:block w-[900px] h-[450px] mx-auto ">
            <Link
              href="https://www.facebook.com/ecigrouptr/"
              className="absolute top-[4%] right-[12%] bg-[#3B579D] p-6 px-9 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            >
              <Image
                src="/assets/contact-us/facebook.svg"
                alt="facebook"
                height={40}
                width={40}
                className=""
              />
            </Link>

            <div className="bg-[#eee] absolute top-[15%] right-[36%] rounded-full border-[2px] border-[#14BDC6] w-16 h-16"></div>
            <div className="absolute top-[4%] left-[8%] ">
              <Image
                src="/assets/contact-us/arrow.svg"
                alt="arrow"
                height={280}
                width={280}
                className=""
              />
            </div>

            <div className="absolute top-[34%] left-[20%]  bg-black w-8 h-8 rounded-full "></div>
            <div className="absolute top-[38%] left-[24%] z-50 bg-[#6D2663] py-2 pb-3 px-16 font-semibold uppercase text-white text-center text-2xl rounded-2xl -rotate-[20deg]">
              {t("start_your_journey")}
            </div>

            <div className="absolute top-[34%] right-[30%] bg-black w-5 h-5 rounded-full "></div>
            <div className="absolute top-[44%] right-[12%]  bg-black w-3 h-3 rounded-full "></div>
            <div className="absolute top-[42%] right-[34%] z-50">
              <Image
                src="/assets/contact-us/hat.svg"
                alt="hat"
                width={80}
                height={80}
                className=""
              />
            </div>

            <Link
              href="/contact-us"
              className="absolute top-[52%] right-[38%] bg-[#14BDC6] text-white text-3xl font-semibold p-7 px-10 rounded-xl  hover:text-[#25D366] hover:bg-white border-2 border-[#25D366] transition-all duration-200"
            >
              {t("contact_us")}
            </Link>

            <div className="absolute bottom-[27%] left-[1%] ">
              <Image
                src="/assets/contact-us/zakhrafeh.svg"
                alt="hat"
                width={130}
                height={130}
                className=""
              />
            </div>

            <div className="absolute bottom-[29%] left-[30%]  bg-black w-3 h-3 rounded-full "></div>

            <div className="absolute bottom-[19%]  right-[6%] border-2 border-black rounded-t-full  w-24 h-32 -rotate-[30deg] font-semibold text-base flex items-center justify-center text-center px-4 uppercase">
              {t("all_sevices_are_free")}
            </div>

            <Link
              href={
                local == "res"
                  ? "https://www.instagram.com/ecigroupint?igsh=d2hjbW05amdleTNi&utm_source=qr"
                  : "https://www.instagram.com/ecigrouptr?igsh=MWswaTBhazl2a3o1Yw%3D%3D&utm_source=qr"
              }
              className="absolute bottom-[10%] right-[25%] bg-[#6D2663] rounded-full px-10 py-2 transition-all duration-200 hover:scale-110"
            >
              <Image
                src="/assets/contact-us/instegram.svg"
                alt="hat"
                width={50}
                height={50}
                className=""
              />
            </Link>

            <div className="absolute bottom-[8%] left-[15%] py-5 px-16 rotate-[20deg] bg-[#F26B67] rounded-2xl  font-semibold tracking-wider text-2xl text-white text-center uppercase">
              eci group
            </div>

            <div className="absolute bottom-[6%] left-[45%] w-6 h-6 bg-black rounded-full"></div>
            <div className="absolute bottom-[10%] left-[55%] w-3 h-3 bg-black rounded-full"></div>
          </div>
          {/* End Large Screen */}

          {/* Start Small Screen */}
          <div className="relative w-full h-[450px] mx-auto block md:hidden">
            <Link
              href="https://www.facebook.com/ecigrouptr/"
              className="absolute top-[4%] right-[0%] bg-[#3B579D] p-4 px-5 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            >
              <Image
                src="/assets/contact-us/facebook.svg"
                alt="facebook"
                height={20}
                width={20}
                className=""
              />
            </Link>

            <div className="bg-[#eee] absolute top-[10%] right-[36%] rounded-full border-[2px] border-[#14BDC6] w-7 h-7 z-50"></div>

            <div className="absolute top-[8%] left-[40%]  bg-black w-2 h-2 rounded-full "></div>

            <div className="absolute top-[4%] left-[0%] ">
              <Image
                src="/assets/contact-us/arrow.svg"
                alt="arrow"
                height={100}
                width={100}
                className=""
              />
            </div>

            <div className="absolute top-[20%] left-[%]   z-40 bg-[#6D2663] py-2 px-8 font-semibold uppercase text-white text-center text-sm rounded-lg -rotate-[20deg]">
              {t("start_your_journey")}
            </div>

            <div className="absolute top-[20%] right-[10%]  bg-black w-4 h-4 rounded-full "></div>

            <div className="absolute top-[38%] right-[12%]  bg-black w-4 h-4 rounded-full "></div>

            <div className="absolute top-[26%] right-[22%] z-50">
              <Image
                src="/assets/contact-us/hat.svg"
                alt="hat"
                width={40}
                height={40}
                className=""
              />
            </div>

            <Link
              href="/contact-us"
              className="absolute top-[30%] right-[26%] bg-[#14BDC6] text-white text-3xl font-semibold p-7 px-4 rounded-xl  hover:text-[#25D366] hover:bg-white border-2 border-[#25D366] transition-all duration-200"
            >
              {t("contact_us")}
            </Link>

            <div className="absolute top-[35%] left-[10%]  bg-black w-3 h-3 rounded-full "></div>
            <div className="absolute bottom-[18%] right-0 flex items-start justify-between gap-4 ">
              <div className=" ">
                <Image
                  src="/assets/contact-us/zakhrafeh.svg"
                  alt="hat"
                  width={110}
                  height={110}
                  className=""
                />
              </div>
              <div className="mt-5 py-3 px-2 !w-[100px] rotate-[20deg] bg-[#000] rounded-xl font-semibold tracking-wider text-sm text-white text-center uppercase">
                eci group
              </div>
              <div className=" border-2 border-black break-words rounded-t-full  w-24 h-32 font-semibold text-sm flex items-center justify-center text-center px-4 uppercase">
                {t("all_sevices_are_free")}
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px]">
              <Link
                href={
                  local == "res"
                    ? "https://www.instagram.com/ecigroupint?igsh=d2hjbW05amdleTNi&utm_source=qr"
                    : "https://www.instagram.com/ecigrouptr?igsh=MWswaTBhazl2a3o1Yw%3D%3D&utm_source=qr"
                }
                className="w-fit block mx-auto bg-[#6D2663] rounded-full px-10 py-2 transition-all duration-200 hover:scale-110"
              >
                <Image
                  src="/assets/contact-us/instegram.svg"
                  alt="hat"
                  width={35}
                  height={35}
                  className=""
                />
              </Link>
              <p className="text-center text-sm font-semibold">
                {t("follow_us")}
              </p>
            </div>
          </div>
          {/* End Small Screen */}
        </>
      )}
    </div>
  );
}

export default ContactusInHome;
