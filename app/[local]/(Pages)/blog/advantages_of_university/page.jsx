import React from "react";

import { useTranslation } from "../../../../i18n";
import Image from "next/image";

async function Page({ params: { local, slug } }) {
  const { t, i18n } = await useTranslation(local, "common");
  const data = [
    {
      main_title_1: t("main_title_1"),
      text_1_1: t("text_1_1"),
      text_2_1: t("text_2_1"),
      text_3_1: t("text_3_1"),
      sub_title_1_1: t("sub_title_1_1"),
      text_4_1: t("text_4_1"),
      sub_title_2_1: t("sub_title_2_1"),
      text_5_1: t("text_5_1"),
      sub_title_3_1: t("sub_title_3_1"),
      text_6_1: t("text_6_1"),
      sub_title_4_1: t("sub_title_4_1"),
      text_7_1: t("text_7_1"),
      sub_title_5_1: t("sub_title_5_1"),
      text_8_1: t("text_8_1"),
      sub_title_6_1: t("sub_title_6_1"),
      text_9_1: t("text_9_1"),
      sub_title_7_1: t("sub_title_7_1"),
    },
  ];
  return (
    <div className="px-5 lg:px-10 lg:mt-28 lg:grid grid-cols-2 gap-5">
      <div className="">
        <div>
          <h1 className="uppercase w-2/3 lg:w-3/4 font-bold text-xl lg:text-[60px] leading-[50px] lg:leading-[50px]">
            {" "}
            {data[0].main_title_1}{" "}
          </h1>
        </div>
        <div className="">
          <p className="uppercase text-[10px] lg:text-[15px] mt-5 lg:mt-10">
            {data[0].text_1_1}
          </p>
          <p className="uppercase text-[10px] lg:text-[15px] my-5 lg:my-8">
            {data[0].text_2_1}
          </p>
          <p className="uppercase text-[10px] lg:text-[15px] ">{data[0].text_3_1}</p>

          <div className="hidden lg:block">
            <h2 className="text-xl font-semibold mt-10">
              {data[0].sub_title_1_1}
            </h2>
            <p className="uppercase text-[15px] !mt-3 ">{data[0].text_4_1}</p>

            <h2 className="text-xl font-semibold mt-10">
              {data[0].sub_title_2_1}
            </h2>
            <p className="uppercase text-[15px] !mt-3">{data[0].text_5_1}</p>

            <h2 className="text-xl font-semibold mt-10">
              {data[0].sub_title_3_1}
            </h2>
            <p className="uppercase text-[15px] !mt-3">{data[0].text_6_1}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] lg:block mt-6 lg:mt-0">
        <div className="hidden lg:block">
          <Image
            src="/assets/blog/large/Rectangle 58.jpg"
            width={765}
            height={220}
            alt="asd"
            className="!w-full "
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/assets/blog/large/Rectangle 58.jpg"
            width={165}
            height={220}
            alt="asd"
            className="!w-full h-[220px] rounded-xl "
          />
        </div>
        <div className="hidden lg:block">
          <h2 className="uppercase text-xl font-semibold mt-5">
            {data[0].sub_title_4_1}
          </h2>
          <p className="uppercase text-[15px] !mt-3">{data[0].text_7_1}</p>

          <h2 className="text-xl font-semibold mt-10">
            {data[0].sub_title_5_1}
          </h2>
          <p className="uppercase text-[15px] !mt-3">{data[0].text_8_1}</p>

          <h2 className="text-xl font-semibold mt-10">
            {data[0].sub_title_6_1}
          </h2>
          <p className="uppercase text-[15px] !mt-3">{data[0].text_9_1}</p>

          <h2 className="text-xl font-semibold mt-10">
            {data[0].sub_title_7_1}
          </h2>
        </div>

        <div className="block lg:hidden">
          <p className="uppercase text-xl font-semibold leading-[20px]">
            {data[0].sub_title_1_1}
          </p>
          <p className="uppercase text-[10px] !mt-[10px] ">{data[0].text_4_1}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
