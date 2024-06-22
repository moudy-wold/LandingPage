import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../i18n/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function BurgerMenu({ local, setOpenBurgerMenu }) {
  const { t, i18n } = useTranslation(local, "common");
  const [tab, setTab] = useState(0);
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const [inHome, setInHome] = useState(false);

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
        window.scrollTo({ top: 490, behavior: "smooth" });
      } else if (id == 3) {
        window.scrollTo({ top: 1130, behavior: "smooth" });
      } else if (id == 4) {
        window.scrollTo({ top: 2850, behavior: "smooth" });
      }
    } else {
      if (id == 1) {
        router.back();
      } else if (id == 2) {
        localStorage.removeItem("scroll");
        localStorage.setItem("scroll", 480);
        router.back();
      } else if (id == 3) {
        localStorage.removeItem("scroll");
        localStorage.setItem("scroll", 1020);
        router.back();
      } else if (id == 4) {
        localStorage.removeItem("scroll");
         localStorage.setItem("scroll", 2800)
        router.back();
      }
    }
    setTab(0);
  };

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  return (
    <div className=" mt-5">
      {ready && (
        <>
          {/* Start Large Screen Links  */}
          <div className=" ">
            <div className="flex items-center justify-between bg-[#110F0F] rounded-3xl overflow-hidden">
              <p
                onClick={() => handleMoveToSection(1)}
                className={`p-1 px-3 text-xs hover:bg-[#14BDC6] rounded-3xl text-white ${
                  tab == 1 ? "bg-[#14BDC6]" : ""
                } transition-all duration-200 cursor-pointer`}
              >
                {t("home_Title")}
              </p>
              <p
                onClick={() => handleMoveToSection(2)}
                className={`p-1 px-3 text-xs hover:bg-[#14BDC6] rounded-3xl text-white ${
                  tab == 2 ? "bg-[#14BDC6]" : ""
                } transition-all duration-200 cursor-pointer`}
              >
                {t("aboutUs_Title")}
              </p>
              <p
                onClick={() => handleMoveToSection(3)}
                className={`p-1 px-3 text-xs hover:bg-[#14BDC6] rounded-3xl text-white ${
                  tab == 3 ? "bg-[#14BDC6]" : ""
                } transition-all duration-200 cursor-pointer`}
              >
                {t("services_Title")}
              </p>
              <p
                onClick={() => handleMoveToSection(4)}
                className={`p-1 px-3 text-xs hover:bg-[#14BDC6] rounded-3xl text-white ${
                  tab == 4 ? "bg-[#14BDC6]" : ""
                } transition-all duration-200 cursor-pointer`}
              >
                {t("blog_Title")}
              </p>
            </div>
          </div>
          {/* End  Large Screen Links */}
        </>
      )}
    </div>
  );
}

export default BurgerMenu;
