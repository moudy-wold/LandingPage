import React, { useState, useEffect } from "react";
import { useTranslation } from "../../../i18n/client";
function BurgerMenu({ local }) {
  const { t, i18n } = useTranslation(local, "common");
  const [tab, setTab] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 100);
  }, []);
  const handleMoveToSection = (id) => {
    setTab(id);
    if (id == 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id == 2) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    } else if (id == 3) {
      window.scrollTo({ top: 1130, behavior: "smooth" });
    } else if (id == 4) {
      window.scrollTo({ top: 3250, behavior: "smooth" });
    }
  };
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
