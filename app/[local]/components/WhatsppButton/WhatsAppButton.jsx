"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function WhatsAppButton() {
  const isBottom = useScrollPosition();
  const pathName = usePathname();
  const [inContact, setInContact] = useState(false);
  useEffect(() => {
    if (pathName) {
      pathName.includes("contact-us") 
        ? setInContact(true)
        : setInContact(false);
    }
  }, [pathName]);
  return (
    <>
      {!inContact && (
        <div
          className={` fixed z-50 bottom-3 lg:bottom-10 ${
            isBottom ? " lg:right-[180px] " : " lg:right-10"
          } 
          ${ 
            isBottom ? " right-[110px] " : "right-3"
          }
          transition-all duration-200`}
        >
          <div className="block lg:hidden hover:scale-110 transition-all duration-200">
            <Link href="/contact-us" className="">
              <Image
                src="/assets/Whatsapp logo.jpg"
                width={50}
                height={50}
                alt="Whatsapp logo"
                className=" rounded-3xl"
              />
            </Link>
          </div>
          <div className="hidden lg:block hover:scale-110 transition-all duration-200">
            <Link href="/contact-us" className="">
              <Image
                src="/assets/Whatsapp logo.jpg"
                width={60}
                height={60}
                alt="Whatsapp logo"
                className=" rounded-3xl"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppButton;

const useScrollPosition = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 5) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isBottom;
};
