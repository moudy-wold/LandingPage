"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../i18n/client";
import Link from "next/link";
import Image from "next/image";
function Services({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [register, setRegister] = useState(false);
  const [equivalency, setEquivalency] = useState(false);
  const [reception, setReception] = useState(false);
  const [residence, setResidence] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  return (
    <div className="mt-10 lg:mt-20 lg:py-10 px-5 lg:px-10">
      {ready && (
        <>
          <div className="lg:flex items-center justify-between">
            <h1 className="font-bold text-xl lg:text-[55px] uppercase">
              {t("our_services")}
            </h1>
            <p className="text-base lg:w-1/2">{t("desc_in_services")}</p>
          </div>
          <div className="mt-3 lg:mt-10">
            {/* Start Register */}
            <div className="">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-xl lg:text-2xl font-normal  py-2 border-b-[2px] border-black "
                  onClick={() => setRegister(!register)}
                  aria-expanded={register}
                  aria-controls="faqs-text-01"
                >
                  <span>{t(`registration_in_universities`)}</span>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    className={`${
                      register ? "-rotate-180" : "rotate-90"
                    } transition-all duration-200 mx-3`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 19L6.75 1H5.25L5.25 19H6.75Z"
                      fill="#110F0F"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id="faqs-text-01"
                role="region"
                aria-labelledby="faqs-title-01"
                className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
                  register
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="w-full  my-6 pb-2">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      <p className="lg:text-xl px-4 lg:px-0 lg:w-1/2 ">
                        {t("desc_for_registration_in_universities")}
                      </p>
                      <div>
                        <Image
                          src="/assets/registerImage.svg"
                          alt="img"
                          height={280}
                          width={350}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Register */}

            {/* Start equivalency */}
            <div className="mt-4">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-base lg:text-2xl font-normal  py-2 border-b-[2px] border-black "
                  onClick={() => setEquivalency(!equivalency)}
                  aria-expanded={equivalency}
                  aria-controls="faqs-text-01"
                >
                  <span>{t(`equivalency_and_translation`)}</span>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    className={`${
                      equivalency ? "-rotate-180" : "rotate-90"
                    } transition-all duration-200 mx-3`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 19L6.75 1H5.25L5.25 19H6.75Z"
                      fill="#110F0F"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id="faqs-text-01"
                role="region"
                aria-labelledby="faqs-title-01"
                className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
                  equivalency
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="w-full  my-4 pb-2">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      <p className=" lg:text-xl px:4 lg:px-0 lg:w-1/2">
                        {t("desc_for_equivalency_and_translation")}
                      </p>
                      <div>
                        <Image
                          src="/assets/equivalency.png"
                          alt="img"
                          height={280}
                          width={350}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End equivalency */}

            {/* Start reception */}
            <div className="mt-4">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-base lg:text-2xl font-normal  py-2 border-b-[2px] border-black "
                  onClick={() => setReception(!reception)}
                  aria-expanded={reception}
                  aria-controls="faqs-text-01"
                >
                  <span>{t(`reception_from_the_airport`)}</span>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    className={`${
                      reception ? "-rotate-180" : "rotate-90"
                    } transition-all duration-200 mx-3`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 19L6.75 1H5.25L5.25 19H6.75Z"
                      fill="#110F0F"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id="faqs-text-01"
                role="region"
                aria-labelledby="faqs-title-01"
                className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
                  reception
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="w-full  my-4 pb-2">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      <p className="lg:text-xl px:4 lg:px-0 lg:w-1/2">
                        {t("desc_for_reception_from_the_airport")}
                      </p>
                      <div>
                        <Image
                          src="/assets/reception.png"
                          alt="img"
                          height={280}
                          width={350}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End reception */}

            {/* Start residence  */}
            <div className="mt-4">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-base lg:text-2xl font-normal  py-2 border-b-[2px] border-black "
                  onClick={() => setResidence(!residence)}
                  aria-expanded={residence}
                  aria-controls="faqs-text-01"
                >
                  <span>{t(`student_residence_permit`)}</span>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    className={`${
                      residence ? "-rotate-180" : "rotate-90"
                    } transition-all duration-200 mx-3`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 19L6.75 1H5.25L5.25 19H6.75Z"
                      fill="#110F0F"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id="faqs-text-01"
                role="region"
                aria-labelledby="faqs-title-01"
                className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
                  residence
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="w-full  my-4 pb-2">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      <p className="lg:text-xl px:4 lg:px-0 lg:w-1/2">
                        {t("desc_for_student_residence_permit")}
                      </p>
                      <div>
                        <Image
                          src="/assets/residence.png"
                          alt="img"
                          height={280}
                          width={350}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End residence  */}
          </div>
        </>
      )}
    </div>
  );
}

export default Services;
