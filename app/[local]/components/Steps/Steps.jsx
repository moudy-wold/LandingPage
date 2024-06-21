"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../i18n/client";
function Steps({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  return (
    <div className="mt-8 lg:mt-20 p-5 lg:px-10">
      {ready && (
        <>
          <div className="lg:flex items-center justify-between">
            <h1 className="font-bold text-xl lg:text-[55px] uppercase">
              {t("steps")}
            </h1>
            <p className="text-base lg:w-1/2 uppercase">{t("desc_in_steps")}</p>
          </div>
          <div className="lg:grid grid-cols-2 gap-5 mt-5 lg:mt-10">
            <div className="mt-[10px] rounded-2xl border-[1px] border-black p-5 cursor-pointer relative flex items-end justify-between h-48 overflow-hidden transition-all duration-200 [&>div]:hover:right-0">
              <p className="text-base uppercase">{t("contact_our_advisors")}</p>
              <p className="text-[110px]  font-semibold leading-[80px] uppercase">
                01
              </p>
              <div className="absolute w-full h-full top-0 -right-[100%] bg-[#110F0F] transition-all duration-200 p-5 flex items-end justify-end">
                <p className="text-white w-1/2 uppercase">
                  {t("desc_contact_us")}
                </p>
              </div>
            </div>
            <div className="mt-[10px] rounded-2xl border-[1px] border-black p-5 cursor-pointer relative flex items-end justify-between h-48 overflow-hidden transition-all duration-200 [&>div]:hover:left-0">
              <p className="text-base uppercase">{t("select_univercity")}</p>
              <p className="text-[110px]  font-semibold leading-[80px] uppercase">
                02
              </p>
              <div className="absolute w-full h-full top-0 -left-[100%] bg-[#110F0F] transition-all duration-200 p-5 flex items-end justify-end">
                <p className="text-white w-1/2 uppercase">
                  {t("desc_select_univercity")}
                </p>
              </div>
            </div>
            <div className="mt-[10px] rounded-2xl border-[1px] border-black p-5 cursor-pointer relative flex items-end justify-between h-48 overflow-hidden transition-all duration-200 [&>div]:hover:bottom-0">
              <p className="text-[110px]  font-semibold leading-[80px] uppercase">
                03
              </p>
              <p className="text-base uppercase">
                {t("prepare_and_submit_documents")}
              </p>
              <div className="absolute w-full h-full left-0 -bottom-[100%] bg-[#110F0F] transition-all duration-200 p-5 flex items-end justify-end">
                <p className="text-white w-1/2 uppercase">
                  {t("desc_prepare_and_submit_documents")}
                </p>
              </div>
            </div>
            <div className="mt-[10px] rounded-2xl border-[1px] border-black p-5 cursor-pointer relative flex items-end justify-between h-48 overflow-hidden transition-all duration-200 [&>div]:hover:bottom-0">
              <p className="text-[110px]  font-semibold leading-[80px] uppercase">
                04
              </p>
              <p className="text-base uppercase">
                {t("receive_acceptance_and_finalize")}
              </p>
              <div className="absolute w-full h-full left-0 -bottom-[100%] bg-[#110F0F] transition-all duration-200 p-5 flex items-end justify-end">
                <p className="text-white w-1/2 uppercase">
                  {t("desc_receive_acceptance_and_finalize")}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Steps;
