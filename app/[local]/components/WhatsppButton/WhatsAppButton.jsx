"use client"
import React,{useEffect,useState} from "react";
import Image from "next/image";
import Link from "next/link";

function WhatsAppButton() {
  const isBottom = useScrollPosition();

  useEffect(() => {
    if (isBottom) {
      console.log('You have reached the bottom of the page');
    }
  }, [isBottom]);
  return (
    <div className= {` fixed z-50 bottom-3 right-3 lg:bottom-10 ${isBottom ?" lg:right-[180px] " : " lg:right-10"} transition-all duration-200`}>
      <div className="block lg:hidden hover:scale-110 transition-all duration-200">
        <Link href="contact-us" className="">
          <Image
            src="/assets/Whatsapp logo.jpg"
            width={60}
            height={60}
            alt="Whatsapp logo"
            className=" rounded-3xl"
          />
        </Link>
      </div>
      <div className="hidden lg:block hover:scale-110 transition-all duration-200">
        <Link href="contact-us" className="">
          <Image
            src="/assets/Whatsapp logo.jpg"
            width={100}
            height={100}
            alt="Whatsapp logo"
            className=" rounded-3xl"
          />
        </Link>
      </div>
    </div>
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isBottom;
};
