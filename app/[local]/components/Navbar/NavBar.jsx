"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../../../i18n/client";
import { useRouter, usePathname } from "next/navigation";
import BurgerMenu from "../BurderMenu/BurgerMenu";


function NavBar({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [tab, setTab] = useState(1);
  const router = useRouter();
  const currentPathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(local);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [ready, setReady] = useState(false);
  
  const pathName = usePathname();
  const [inHome, setInHome] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);

  const languages = [
    { id: 1, title: "AR", value: "ar" },
    { id: 2, title: "EN", value: "en" },
    { id: 3, title: "RUS", value: "rus" },
  ];

 useEffect(() => {
    if (pathName) {
      pathName.includes("contact-us") || pathName.includes("blog") 
        ? setInHome(false)
        : setInHome(true);
    }
  }, [pathName]);
  const handleMoveToSection = (id) => {    
    setOpenBurgerMenu(false);
    setTab(id);
    if (inHome) {
      console.log("as")
      if (id == 1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (id == 2) {
        window.scrollTo({ top: 790, behavior: "smooth" });
      } else if (id == 3) {
        window.scrollTo({ top: 1360, behavior: "smooth" });
      } else if (id == 4) {
        window.scrollTo({ top: 3250, behavior: "smooth" });
      }
    } else {
      if (id == 1) {
        router.back();
      } else if (id == 2) {
        localStorage.removeItem("scroll");
        localStorage.setItem("scroll", 790);
        router.back();
      } else if (id == 3) {
        localStorage.removeItem("scroll");
        localStorage.setItem("scroll", 1350);
        router.back();
      } else if (id == 4) {
        localStorage.removeItem("scroll");
         localStorage.setItem("scroll", 3200)
        router.back();
      }
    }
    setTab(0);
  };
  const handleLocaleChange = (newLocale) => {
    if (!currentPathname) return;
    const pathWithoutLocale = currentPathname.replace(/^\/[^\/]+/, "");
    localStorage.setItem("direction", newLocale === "ar" ? "rtl" : "ltr");
    document.dir = newLocale === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(newLocale);
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setCurrentLocale(newLocale); // Update the local state
  };

  return (
    <div
      className={`py-3 lg:py-8 px-5 lg:px-10 !relative ${
        openBurgerMenu ? "mb-10" : "mb-0"
      } transition-all duration-200`}
    >
      {ready && (
        <>
          <div className="!relative  grid grid-cols-2 lg:grid-cols-[25%_48%_25%] lg:gap-5 items-center">
            {/* Start Logo */}
            <div className="hidden lg:block">
            <Link href="/" className="">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={240}
                height={90}
                className=""
              />
              </Link>
            </div>
            
            <div className="block lg:hidden">
            <Link href="/" className="">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={32}
                className="!w-[85%] md:!w-[60%]"
              />
              </Link>
            </div>
            {/* End Logo */}

            {/* Start Large Screen Links  */}
            <div className="hidden lg:block w-fit mx-auto">
              <div className="flex items-center justify-between bg-[#110F0F] rounded-3xl overflow-hidden">
                <p
                  onClick={() => handleMoveToSection(1)}
                  className={`p-1 px-5 text-base hover:bg-[#14BDC6] rounded-3xl text-white ${
                    tab == 1 ? "bg-[#14BDC6]" : ""
                  } transition-all duration-200 cursor-pointer`}
                >
                  {t("home_Title")}
                </p>
                <p
                  onClick={() => handleMoveToSection(2)}
                  className={`p-1 px-5 text-base hover:bg-[#14BDC6] rounded-3xl text-white ${
                    tab == 2 ? "bg-[#14BDC6]" : ""
                  } transition-all duration-200 cursor-pointer`}
                >
                  {t("aboutUs_Title")}
                </p>
                <p
                  onClick={() => handleMoveToSection(3)}
                  className={`p-1 px-5 text-base hover:bg-[#14BDC6] rounded-3xl text-white ${
                    tab == 3 ? "bg-[#14BDC6]" : ""
                  } transition-all duration-200 cursor-pointer`}
                >
                  {t("services_Title")}
                </p>
                <p
                  onClick={() => handleMoveToSection(4)}
                  className={`p-1 px-5 text-base hover:bg-[#14BDC6] rounded-3xl text-white ${
                    tab == 4 ? "bg-[#14BDC6]" : ""
                  } transition-all duration-200 cursor-pointer`}
                >
                  {t("blog_Title")}
                </p>
              </div>
              {/* End  Large Screen Links */}
            </div>
            {/*End  Large Screen Links  */}

    
            {/* Start Language Icon And Contact Us */}
            <div className=" flex items-center lg:gap-5 justify-end ">
              {/* Start BurgerMenu Icon */}
              <div className="block lg:hidden h-3 w-7 mr-[10px] " onClick={()=>{setOpenBurgerMenu(!openBurgerMenu)}}>
                <span className="bg-[#110F0F] h-[1px] w-full my-[2px] block"></span>
                <span className="bg-[#110F0F] h-[1px] w-full my-[2px] block"></span>
                <span className="bg-[#110F0F] h-[1px] w-full my-[2px] block"></span>
              </div>
              {/* End BurgerMenu Icon */}

              {/* Start Select */}
              <div>
                <select
                  onChange={(e) => {
                    handleLocaleChange(e.target.value);
                  }}
                  className=""
                >
                  {languages.map((item, index) => (
                    <>
                      {item.value == local ? (
                        <option value={item.value} key={index} selected>
                          {item.title}
                        </option>
                      ) : (
                        <option value={item.value} key={index}>
                          {item.title}
                        </option>
                      )}
                    </>
                  ))}
                </select>
              </div>
              {/* End Select */}

              {/* Start Contact Us */}
              <div className="w-[103px] lg:w-[110px] flex items-center justify-end ">
                <Link
                  href="/contact-us"
                  className="w-fit text-white text-xs lg:text-base uppercase px-1 lg:px-2 py-1 rounded-xl bg-[#110F0F] hover:bg-[#14BDC6] transition-all duration-200"
                >
                  {t("contact_us")}
                </Link>
              </div>
              {/* End Contact Us */}
            </div>
            {/*End Language Icon And Contact Us */}

            {/* Start Burger MEnu For Small Screen */}
            <div
              className={` absolute -bottom-8  ${
                openBurgerMenu ? " left-0 block " : "hidden -left-full"
              } transition-all duration-200 w-full h-10 `}
            >
              <BurgerMenu local={local} setOpenBurgerMenu={setOpenBurgerMenu} />
            </div>
            {/* End Burger MEnu For Small Screen */}
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
