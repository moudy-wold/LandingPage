import React from "react";
import { useTranslation } from "../../../../i18n";
import Image from "next/image";

async function Page({ params: { local, slug } }) {
  const { t, i18n } = await useTranslation(local, "common");
  const data = [
    {
      main_title_3: t("main_title_3"),
      text_1_3: t("text_1_3"),
      sub_title_1_3: t("sub_title_1_3"),
      text_2_3: t("text_2_3"),
      sub_title_2_3: t("sub_title_2_3"),
      text_3_3: t("text_3_3"),
      sub_title_3_3: t("sub_title_3_3"),
      text_4_3: t("text_4_3"),
    },
  ];
  return (
    <div className="px-5 lg:px-10 lg:mt-28 lg:grid grid-cols-2 gap-5">
      <div className="">
        <div>
          <h1 className=" lowercase w-2/3  lg:w-full font-bold text-xl lg:text-[60px] leading-[20px] lg:leading-[55px]">
            {" "}
            {data[0].main_title_3}{" "}
          </h1>
        </div>
          <p className="uppercase text-[10px] lg:text-[15px] mt-5 lg:mt-10">
            {data[0].text_1_3}
          </p>
        <div className="hidden lg:block">
          <h2 className="lowercase text-xl font-semibold mt-5">
            {data[0].sub_title_1_3}
          </h2>
          <p className="uppercase text-[10px] lg:text-[15px] my-5 lg:my-5">
            {data[0].text_2_3}
          </p>
          <h2 className="lowercase text-xl font-semibold mt-5">
            {data[0].sub_title_2_3}
          </h2>
          <p className="uppercase text-[10px] lg:text-[15px] hidden lg:block">
            {data[0].text_3_3}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] lg:block mt-6 lg:mt-0">
        <div className="hidden lg:block">
          <Image
            src="/assets/blog/large/Rectangle 60.jpg"
            width={765}
            height={220}
            alt="asd"
            className="!w-full "
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/assets/blog/large/Rectangle 60.jpg"
            width={165}
            height={220}
            alt="asd"
            className="!w-full h-[220px] rounded-xl"
          />
        </div>
        <div className="hidden lg:block">
          <h2 className="lowercase text-xl font-semibold mt-5">
            {data[0].sub_title_3_3}
          </h2>

          <p className="uppercase text-[15px] !mt-3">{data[0].text_4_3}</p>
        </div>

        <div className="block lg:hidden">
          <h2 className="lowercase text-sm font-semibold ">
            {data[0].sub_title_1_3}
          </h2>
          <p className="uppercase text-[10px]  mt-[10px]">
            {data[0].text_2_3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
