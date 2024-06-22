import React from "react";
import { useTranslation } from "../../../../i18n";
import Image from "next/image";

async function Page({ params: { local, slug } }) {
  const { t, i18n } = await useTranslation(local, "common");
  const data = [
    {
      main_title_2: t("main_title_2"),
      text_1_2: t("text_1_2"),
      text_2_2: t("text_2_2"),
      text_3_2: t("text_3_2"),
      text_4_2: t("text_4_2"),
      text_5_2: t("text_5_2"),
      text_6_2: t("text_6_2"),
      sub_title_1_2: t("sub_title_1_2"),
    },
  ];
  return (
    <div className="px-5 lg:px-10 lg:mt-28 lg:grid grid-cols-2 gap-5">
      <div className="">
        <div>
          <h1 className="  lowercase w-2/3  lg:w-full font-bold text-xl lg:text-[60px] leading-[20px] lg:leading-[55px]">
            {" "}
            {data[0].main_title_2}{" "}
          </h1>
        </div>
        <div className="">
          <p className="uppercase text-[10px] lg:text-[15px] mt-5 lg:mt-10">
            {data[0].text_1_2}
          </p>
          <p className="uppercase text-[10px] lg:text-[15px] my-5 lg:my-5">
            {data[0].text_2_2}
          </p>
          <p className="uppercase text-[10px] lg:text-[15px] hidden lg:block">{data[0].text_3_2}</p>
          <p className="uppercase text-[10px] lg:text-[15px] mt-3 hidden lg:block">{data[0].text_4_2}</p>

          <div className="hidden lg:black">
            <h2 className="text-xl font-semibold mt-10">
              {data[0].sub_title_1_2}
            </h2>
            <p className="uppercase text-[15px] !mt-3 ">{data[0].text_4_2}</p>

            <h2 className="text-xl font-semibold mt-10">
              {data[0].sub_title_2_1}
            </h2>
            <p className="uppercase text-[15px] !mt-3">{data[0].text_5_2}</p>

            <h2 className="text-xl font-semibold mt-10">
              {data[0].sub_title_3_1}
            </h2>
            <p className="uppercase text-[15px] !mt-3">{data[0].text_6_2}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] lg:block mt-6 lg:mt-0">
        <div className="hidden lg:block">
          <Image
            src="/assets/blog/large/Rectangle 59.jpg"
            width={765}
            height={220}
            alt="asd"
            className="!w-full "
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/assets/blog/large/Rectangle 59.jpg"
            width={165}
            height={220}
            alt="asd"
            className="!w-full h-[220px] rounded-xl"
          />
        </div>
        <div className="hidden lg:block">
          <p className="uppercase text-[15px] !mt-3">{data[0].text_5_2}</p>

          <p className="uppercase text-[15px] !mt-3">{data[0].text_6_2}</p>

          <h2 className="text-xl font-semibold mt-10 lowercase ">
            {data[0].sub_title_1_2}
          </h2>
        </div>

        <div className="block lg:hidden">
        <p className="uppercase text-[10px] lg:text-[15px] ">{data[0].text_3_2}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
